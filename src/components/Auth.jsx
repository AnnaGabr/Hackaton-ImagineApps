/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import firebaseAppData from '../firebase/firebase-config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import 'firebase/auth';
import logo from '../images/ShareTheMeallogoLogin.png';
const auth = getAuth(firebaseAppData);

export function Auth() {
  const firestore = getFirestore(firebaseAppData);
  const [registro, setRegistro] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('admin');

  const registrarUsuario = async (email, password, rol) => {
    const infoUsuario = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((userFirebase) => {
      return userFirebase;
    });
    console.log(infoUsuario);
    const docRef = doc(firestore, `usuarios/${infoUsuario.user.uid}`);
    setDoc(docRef, { correo: email, rol: rol });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (registro) {
      registrarUsuario(email, password, rol);
    } else {
      signInWithEmailAndPassword(auth, email, password);
    }
  };
  let formulario;
  if (registro) {
    formulario = (
      <form onSubmit={submitHandler}>
        <input
          type='email'
          id='email'
          onChange={(ev) => setEmail(ev.target.value)}
          placeholder='Correo Electronico'
        />
        <input
          type='password'
          id='password'
          onChange={(ev) => setPassword(ev.target.value)}
          placeholder='Contraseña'
        />
        {/* <input
          type='password'
          id='password'
          onChange={(ev) => setPassword(ev.target.value)}
          placeholder='Repite la contraseña'
        /> */}

        <select name='' id='' onChange={(ev) => setRol(ev.target.value)}>
          <option value=''>¿Cúal es tu rol?</option>
          <option value='admin'>Fundacion</option>
          <option value='user'>Establecimiento</option>
        </select>
        <input
          type='submit'
          value={registro ? 'REGISTRARSE' : 'Iniciar sesión'}
        />
      </form>
    );
  } else {
    formulario = (
      <form onSubmit={submitHandler}>
        <input
          type='email'
          id='email'
          onChange={(ev) => setEmail(ev.target.value)}
          placeholder='Correo Electronico'
        />
        <input
          type='password'
          id='password'
          onChange={(ev) => setPassword(ev.target.value)}
          placeholder='Contraseña'
        />

        <input
          type='submit'
          value={registro ? 'REGISTRARSE' : 'Iniciar sesión'}
        />
      </form>
    );
  }
  return (
    <div>
      <div className='contenedorAuth'>
        <img className='logo' src={logo} alt='' />
        <div className='formContainer'>
          <div className='titulosForm'>
            <h5
              onClick={() => setRegistro(false)}
              className={registro ? '' : 'navActiva'}
            >
              INGRESO
            </h5>
            <h5
              onClick={() => setRegistro(true)}
              className={registro ? 'navActiva' : ''}
            >
              REGISTRO
            </h5>
          </div>
          {formulario}
        </div>
      </div>
    </div>
  );
}
