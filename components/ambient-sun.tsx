import { cn } from "@/lib/utils";

type AmbientSunProps = {
  className?: string;
};

export function AmbientSun({ className }: AmbientSunProps) {
  return (
    <div className={cn("ambient-sun", className)}>
      <div className="ambient-sun-ring" />
      <div className="ambient-sun-ring ambient-sun-ring-delayed" />
      <div className="ambient-sun-core" />
    </div>
  );
}
