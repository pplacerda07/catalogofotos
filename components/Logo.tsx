import Image from "next/image";

type LogoProps = {
  /** tamanho da marca (águia) em px */
  size?: number;
  /** mostra o wordmark "FIORA" ao lado */
  withWordmark?: boolean;
  className?: string;
};

export default function Logo({
  size = 40,
  withWordmark = true,
  className = "",
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/brand/fiora-logo.svg"
        alt="Fiora"
        width={size}
        height={size}
        priority
        className="h-auto w-auto select-none"
        style={{ width: size, height: "auto" }}
      />
      {withWordmark && (
        <span className="font-display text-xl font-medium tracking-brand text-bone pl-1">
          FIORA
        </span>
      )}
    </span>
  );
}
