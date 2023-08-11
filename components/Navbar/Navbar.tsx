import React from "react";
import Link from "next/link";
import logo from "../../public/images/BookScapeLogo.png"

const Navbar = () => {
  return (
    <nav>
       <Link href="/">
          <img
            src={logo.src}
            alt="Logo" 
          />
      </Link>
    </nav>
  );
};

export default Navbar;
