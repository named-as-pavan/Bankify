import React from "react";
import { type } from "os";
import Image from "next/image";
import { logout } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
    const router = useRouter()
    const handleLogout = async () => {
        const loggedOut = await logout()

        if(loggedOut) router.push('/sign-in')
    }
  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
        <p className="text-xl font-bold text-gray-700">{user?.name[0]}</p>
      </div>

      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
      >
        <h1 className="text-16 font-semibold truncate text-gray-600">
          {user?.name}
        </h1>
        <p className="text-14 font-normal truncate text-gray-600">
          {user?.email}
        </p>
      </div>

      <div className="footer_image" onClick={handleLogout}>
        <Image src={"/icons/logout.svg"} width={20} height={20} alt="logout"/>
      </div>
    </footer>
  );
};

export default Footer;
