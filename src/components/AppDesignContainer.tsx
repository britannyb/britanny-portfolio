import { ReactNode } from "react";
import ColorPalette from "./ColorPalette";
import StyledPointer from "./StyledPointer";

interface AppDesignContainerProps {
  logoLink: string;
  url?: string;
  urlText?: string;
  paletteColors: string[];
  description: string;
  children?: ReactNode;
}

export default function AppDesignContainer({
  logoLink,
  urlText,
  url,
  paletteColors,
  description,
  children,
}: AppDesignContainerProps) {
  return (
    <div className="text-center">
      <div className="lg:min-w-[400px] lg:w-full rounded-lg p-6 bg-black bg-opacity-40 backdrop-blur-xl card-caption">
        <img
          className="w-32 md:w-64 py-4 centered-image"
          src={logoLink}
          alt="Project Logo"
          height="200"
          width="200"
        />
        <div className="items-center centered-image">
          <ColorPalette colors={paletteColors} />
        </div>
        {urlText !== undefined && (
          <a
            href={url}
            target="_blank"
            className="md:text-base text-white underline break-all hover:text-pink"
          >
            {urlText}
            <StyledPointer />
          </a>
        )}
        <p className="my-4">{description}</p>
      </div>
    </div>
  );
}
