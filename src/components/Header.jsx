import React from "react";
import { PerfilButton } from "./PerfilButton";
import { MenuButton } from "./MenuButton";
import Perfil_boton from "../images/Perfil_boton.png";
import Menu_boton from "../images/Menu_boton.png";

export const Header = () => {
    return(
        <div>
            <nav>
               <PerfilButton img={ Perfil_boton } />
               <MenuButton img={ Menu_boton } />
            </nav>
        </div>
    )
}