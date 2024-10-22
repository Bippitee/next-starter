import Link from "next/link";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";

async function Header() {
  return (
    <header className="flex items-center justify-between p-2 sm:p-4 col-full-bleed">
      <Link href="/">
        <Logo />
      </Link>

      <Link href="/login" className="hidden lg:block">
        <Button variant={"outline"}>Sign In</Button>
      </Link>
    </header>
  );
}

export default Header;
