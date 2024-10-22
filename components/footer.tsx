import Image from "next/image";
import { ThemeSwitcher } from "./theme-switcher";
import logo from "@/public/fab-logo.svg";
function Footer() {
  return (
    <footer className="col-full-bleed flex justify-between items-center p-2">
      <p className="text-xs text-muted">
        &copy; {new Date().getFullYear()} Fox & Bear
      </p>
      <Image src={logo} alt="Fox & Bear logo" height={40} />
      <ThemeSwitcher />
    </footer>
  );
}

export default Footer;
