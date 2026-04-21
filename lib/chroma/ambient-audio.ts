export type ChromaAudioPreset = "station-rain" | "window-air" | "ember-trace";

type ChromaAmbientController = {
  supported: boolean;
  setPreset: (preset: ChromaAudioPreset) => void;
  setActive: (active: boolean) => Promise<void>;
  dispose: () => Promise<void>;
};

type AudioRig = {
  context: AudioContext;
  master: GainNode;
  noiseGain: GainNode;
  noiseHighpass: BiquadFilterNode;
  noiseLowpass: BiquadFilterNode;
  noiseSource: AudioBufferSourceNode;
  padLeft: OscillatorNode;
  padRight: OscillatorNode;
  shimmer: OscillatorNode;
  padGain: GainNode;
  shimmerGain: GainNode;
};

type PresetConfig = {
  master: number;
  noise: number;
  lowpass: number;
  highpass: number;
  pad: number;
  shimmer: number;
  leftFreq: number;
  rightFreq: number;
  shimmerFreq: number;
};

const presets: Record<ChromaAudioPreset, PresetConfig> = {
  "station-rain": {
    master: 0.12,
    noise: 0.028,
    lowpass: 1700,
    highpass: 180,
    pad: 0.012,
    shimmer: 0.002,
    leftFreq: 174.61,
    rightFreq: 220,
    shimmerFreq: 349.23,
  },
  "window-air": {
    master: 0.11,
    noise: 0.018,
    lowpass: 2100,
    highpass: 220,
    pad: 0.018,
    shimmer: 0.004,
    leftFreq: 196,
    rightFreq: 246.94,
    shimmerFreq: 392,
  },
  "ember-trace": {
    master: 0.11,
    noise: 0.011,
    lowpass: 2600,
    highpass: 240,
    pad: 0.024,
    shimmer: 0.006,
    leftFreq: 220,
    rightFreq: 277.18,
    shimmerFreq: 440,
  },
};

function ramp(param: AudioParam, value: number, context: AudioContext, duration = 0.7) {
  const now = context.currentTime;
  param.cancelScheduledValues(now);
  param.linearRampToValueAtTime(value, now + duration);
}

function createNoiseBuffer(context: AudioContext) {
  const buffer = context.createBuffer(1, context.sampleRate * 2, context.sampleRate);
  const channel = buffer.getChannelData(0);

  let last = 0;
  for (let index = 0; index < channel.length; index += 1) {
    const white = Math.random() * 2 - 1;
    last = (last + 0.035 * white) / 1.035;
    channel[index] = last * 3.2;
  }

  return buffer;
}

function createRig(AudioCtor: typeof AudioContext): AudioRig {
  const context = new AudioCtor();

  const master = context.createGain();
  master.gain.value = 0.0001;
  master.connect(context.destination);

  const noiseSource = context.createBufferSource();
  noiseSource.buffer = createNoiseBuffer(context);
  noiseSource.loop = true;

  const noiseHighpass = context.createBiquadFilter();
  noiseHighpass.type = "highpass";
  const noiseLowpass = context.createBiquadFilter();
  noiseLowpass.type = "lowpass";
  const noiseGain = context.createGain();
  noiseGain.gain.value = 0.0001;

  noiseSource.connect(noiseHighpass);
  noiseHighpass.connect(noiseLowpass);
  noiseLowpass.connect(noiseGain);
  noiseGain.connect(master);

  const padGain = context.createGain();
  padGain.gain.value = 0.0001;
  padGain.connect(master);

  const shimmerGain = context.createGain();
  shimmerGain.gain.value = 0.0001;
  shimmerGain.connect(master);

  const padLeft = context.createOscillator();
  padLeft.type = "triangle";
  padLeft.connect(padGain);

  const padRight = context.createOscillator();
  padRight.type = "sine";
  padRight.connect(padGain);

  const shimmer = context.createOscillator();
  shimmer.type = "sine";
  shimmer.connect(shimmerGain);

  noiseSource.start();
  padLeft.start();
  padRight.start();
  shimmer.start();

  return {
    context,
    master,
    noiseGain,
    noiseHighpass,
    noiseLowpass,
    noiseSource,
    padLeft,
    padRight,
    shimmer,
    padGain,
    shimmerGain,
  };
}

export function createChromaAmbientController(): ChromaAmbientController {
  if (typeof window === "undefined") {
    return {
      supported: false,
      setPreset() {},
      async setActive() {},
      async dispose() {},
    };
  }

  const AudioCtor =
    window.AudioContext ??
    (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;

  if (!AudioCtor) {
    return {
      supported: false,
      setPreset() {},
      async setActive() {},
      async dispose() {},
    };
  }

  const rig = createRig(AudioCtor);
  let activePreset: ChromaAudioPreset = "station-rain";
  let disposed = false;

  function applyPreset(preset: ChromaAudioPreset) {
    if (disposed) {
      return;
    }

    activePreset = preset;
    const config = presets[preset];

    ramp(rig.noiseHighpass.frequency, config.highpass, rig.context, 0.9);
    ramp(rig.noiseLowpass.frequency, config.lowpass, rig.context, 0.9);
    ramp(rig.noiseGain.gain, config.noise, rig.context, 0.9);
    ramp(rig.padGain.gain, config.pad, rig.context, 0.9);
    ramp(rig.shimmerGain.gain, config.shimmer, rig.context, 0.9);
    ramp(rig.padLeft.frequency, config.leftFreq, rig.context, 0.9);
    ramp(rig.padRight.frequency, config.rightFreq, rig.context, 0.9);
    ramp(rig.shimmer.frequency, config.shimmerFreq, rig.context, 0.9);
  }

  applyPreset(activePreset);

  return {
    supported: true,
    setPreset(preset) {
      applyPreset(preset);
    },
    async setActive(active) {
      if (disposed) {
        return;
      }

      if (active) {
        if (rig.context.state !== "running") {
          await rig.context.resume();
        }

        ramp(rig.master.gain, presets[activePreset].master, rig.context, 0.8);
        return;
      }

      ramp(rig.master.gain, 0.0001, rig.context, 0.5);
    },
    async dispose() {
      if (disposed) {
        return;
      }

      disposed = true;
      rig.noiseSource.stop();
      rig.padLeft.stop();
      rig.padRight.stop();
      rig.shimmer.stop();
      await rig.context.close();
    },
  };
}
