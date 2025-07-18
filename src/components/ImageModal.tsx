import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import Glass from "./Glass";

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
          className="absolute top-2 right-2 text-white bg-trans-black p-2 m-1 hover:p-2.5 rounded-md"
          aria-label="Close image"
        >
          ✕
        </button>

        <img
          src={imageUrl}
          alt={altContent}
          className="object-contain p-2"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );

  return (
    <div className="p-4">
      <div>
        <img
          src={imageUrl}
          alt={altContent}
          className="bg-white p-2 shadow-xl rounded-sm overflow-hidden cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
        <p className="w-full center bg-white -mt-1 text-black text-center md:text-xsm lg:text-sm py-4">
          {altContent}
        </p>
        <div
          id="zoom"
          className="fixed top-6 right-2 bg-trans-black rounded-lg cursor-pointer p-2 hover:p-2.5 md:p-3 md:hover:p-3.5"
          onClick={() => setIsOpen(true)}
        >
          <Glass />
        </div>
      </div>

      {isOpen && (
        <div className="p-4">
          {isOpen && ReactDOM.createPortal(modal, document.body)}
        </div>
      )}
    </div>
  );
};

export default ImageModal;
