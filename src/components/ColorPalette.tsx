interface ColorProps {
  colors: string[];
}

export default function ColorPalette({ colors }: ColorProps) {
  const colorsArray = colors.map((color, i) => {
    return (
      <div
        key={i}
        style={{ backgroundColor: `#${color}` }}
        className="w-10 h-10 rounded-full inline-block -ml-4"
      ></div>
    );
  });
  return <div className="ml-4">{colorsArray}</div>;
}
