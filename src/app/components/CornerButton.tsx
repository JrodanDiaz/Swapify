import Image from "next/image";

interface CornerButtonProps {
  icon: string;
  onClick: () => void;
  size: number;
  alt: string;
  topRight?: boolean;
  topLeft?: boolean;
}

const CornerButton = ({
  icon,
  onClick,
  size,
  alt,
  topRight = false,
  topLeft = false,
}: CornerButtonProps) => {
  const cornerPosition = topRight ? "top-2 right-2" : "top-2 left-2";
  return (
    <>
      <button
        onClick={onClick}
        className={`absolute ${cornerPosition} text-gray-600 hover:text-gray-800`}
      >
        <Image src={icon} alt={alt} width={size} height={size} />
      </button>
    </>
  );
};

export default CornerButton;
