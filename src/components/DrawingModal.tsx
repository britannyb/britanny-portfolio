import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import Glass from "./Glass";
import RotateImage from "./RotateImage";

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
      className="px-2 fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
      onClick={() => setIsOpen(false)}
    >
      <RotateImage
        imageUrl={imageUrl}
        altContent={altContent}
        setIsOpen={setIsOpen}
        isPolaroid={false}
      />
    </div>
  );

  return (
    <div className="p-4">
      <div className="drawing relative">
        <div className="drawing-folder"></div>
        <div className="drawing-paper shadow-2xl"></div>
        <img
          src={imageUrl}
          alt={altContent}
          className="bg-white border border-white border-2 shadow-2xl rounded-sm overflow-hidden cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
        <div
          id="zoom"
          className="fixed bottom-2 left-2 md:bottom-1 md:left-1 bg-trans-black rounded-lg cursor-pointer p-2 hover:p-2.5 md:p-3 md:hover:p-3.5"
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
