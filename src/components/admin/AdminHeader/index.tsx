import Button from "../../Button";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const AdminHeader = () => {
  return (
    <header>
      <Button icon={faUser} />
    </header>
  );
};

export default AdminHeader;
