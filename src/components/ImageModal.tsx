import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

interface ImageModal {
  imageUrl: string;
  altContent: string;
}

const ImageModal = ({ imageUrl, altContent }: ImageModal) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const modal = (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
      onClick={() => setIsOpen(false)}
    >
      <div className="relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-white bg-trans-black p-2 rounded-md"
          aria-label="Close image"
        >
          ✕
        </button>

        <img
          src={imageUrl}
          alt={altContent}
          className="object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );

  return (
    <div className="p-4">
      <img
        src={imageUrl}
        alt="{altContent} thumbnail"
        className="bg-white p-2 pb-9 md:pb-12 lg:pb-14 shadow-xl rounded-sm overflow-hidden cursor-pointer"
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <div className="p-4">
          {isOpen && ReactDOM.createPortal(modal, document.body)}
        </div>
      )}
    </div>
  );
};

export default ImageModal;
