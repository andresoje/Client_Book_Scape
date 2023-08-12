import React from "react";
import Link from "next/link";
import logo from "../../public/images/BookScapeLogo.png"
import styles from "../Navbar/NavBar.module.css"
import  SearchBar  from "../SearchBar/SearchBar";
import { IoIosCart } from "react-icons/io";
import { IoMdPerson, IoLogoWhatsapp } from "react-icons/io";

const Navbar = () => {
  return (
    
    <nav>
      <div className={styles.liner}>
      
      <div className={styles.logo}>
       <Link href="/">
          <img
            src={logo.src}
            alt="Logo" 
          />
      </Link>
      </div>
      <div className={styles.contanier}>
      <div className={styles.SearchBar} >Que quieres leer Hoy?<SearchBar /> </div>
      <div className={styles.Text}><IoLogoWhatsapp/>  Registro o Inicio </div>
      <div className={styles.Iconos}><IoIosCart /><IoMdPerson /></div>
  
    </div>
    </div>
    </nav>
  );
};

export default Navbar;
