import Logo from "../Logo";
import logo from "../../assets/images/logo-img.png";

const Drawer = () => {
  return (
    <div className="dx-drawer max-w-80 shadow-custom-light bg-white min-h-screen py-5">
      <Logo
        linkClassName="flex justify-center"
        imagePath={logo}
        width="182px"
        height="70px"
      />
    </div>
  );
};

export default Drawer;
