import { Link } from "react-router-dom";

interface LogoProps {
  imagePath: string;
  height: string;
  width: string;
  linkClassName?: string;
  imageClassName?: string;
}

const Logo: React.FC<LogoProps> = ({
  imagePath,
  height,
  width,
  linkClassName,
  imageClassName,
}) => {
  return (
    <Link to="/" className={linkClassName}>
      <img
        src={imagePath}
        alt="Logo"
        height={height}
        width={width}
        className={imageClassName}
      />
    </Link>
  );
};

export default Logo;
