import React, { useRef } from "react";

interface RotateImageProps {
  imageUrl: string;
  altContent: string;
  alt?: string;
  isPolaroid: boolean;
  setIsOpen: (open: boolean) => void;
}

const RotateImage: React.FC<RotateImageProps> = ({
  imageUrl,
  altContent,
  isPolaroid,
  setIsOpen,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const el = containerRef.current;
    if (el) {
      el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-300 ease-out inline-block m-2"
    >
      <div className="relative m-2 md:m-0">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-white bg-trans-black p-2 m-2 hover:p-2.5 rounded-md"
          aria-label="Close image"
        >
          ✕
        </button>

        <img
          src={imageUrl}
          alt={altContent}
          className="bg-white p-1 object-contain"
          onClick={(e) => e.stopPropagation()}
        />
        {isPolaroid && (
          <p className="-mt-1 bg-white text-black py-3 text-center text-xsm md:text-lg handwritten">
            {altContent}
          </p>
        )}
      </div>
    </div>
  );
};

export default RotateImage;
