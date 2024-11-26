// icon render from svg
export type IconProps = {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
};

export const Icon = ({
  src,
  width,
  height,
  alt = "icon",
  className,
}: IconProps) => {
  return (
    <img
      src={src}
      width={width || 24}
      height={height || 24}
      alt={alt}
      className={className}
    />
  );
};
