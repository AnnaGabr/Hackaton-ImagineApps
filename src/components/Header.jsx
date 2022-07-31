import React from 'react';
import { PerfilButton } from './PerfilButton';
import { MenuButton } from './MenuButton';
import Perfil_boton from '../images/Perfil_boton.png';
import Menu_boton from '../images/Menu_boton.png';

import firebaseAppData from '../firebase/firebase-config';
import { getAuth, signOut } from 'firebase/auth';

import 'firebase/auth';

const auth = getAuth(firebaseAppData);

export const Header = () => {
  const onClickPerfil = (id) => {
    console.log('Aquí se iría al perfil', id);
  };

  const onClickMenu = () => {
    console.log('Aquí se iría al menú');
  };

  return (
    <div>
      <nav>
        <PerfilButton img={Perfil_boton} onClick={onClickPerfil} />

        {/* <MenuButton img={ Menu_boton } onClick={ onClickMenu } /> */}
        <button onClick={() => signOut(auth)}>Cerrar sesíon</button>
      </nav>
    </div>
  );
};
