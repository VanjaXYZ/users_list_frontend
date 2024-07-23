import { logout } from "@/app/actions/logout";
import { Power } from "lucide-react";

const LogoutButton = () => {
  return (
    <form action={logout}>
      <button type="submit">
        <Power color="#FF0000" />
      </button>
    </form>
  );
};

export default LogoutButton;
