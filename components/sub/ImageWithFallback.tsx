import Image from "next/image";
import { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  className,
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc("/projects/project-1.png"); // Fallback image
    }
  };

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={1000}
      height={1000}
      className={className}
      onError={handleError}
      unoptimized
    />
  );
}


