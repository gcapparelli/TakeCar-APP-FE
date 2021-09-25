import { IonLabel, IonPage, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonMenuButton, IonButton } from '@ionic/react';
import React, { useState, useEffect, useContext } from 'react';
import './Tab3.css';
import ImagenPerfil from "../images/perfil.jpg"
import { descarga } from '../firebaseConfig';
import UsuarioContext from '../context/UsuarioContext';
import Imagenlogout from "../images/logout.svg"



const Tab3: React.FC = () => {



  const userIngresado = useContext(UsuarioContext);
  const { user } = userIngresado;



  const [vuelos, guardarVuelos]: Array<any> = useState(['']);

  useEffect(() => {

    obtener();


  }, [user])


  const obtener = () => {
    const averga = JSON.parse(localStorage.getItem('vuel') || '{}');

    descarga.collection(averga).onSnapshot(manejarSnapshot)
  }

  function manejarSnapshot(snapshot: any) {
    const vuelosTotales = snapshot.docs.map((doc: { id: any; data: () => any; }) => {
      return {
        id: doc.id,
        ...doc.data()
      }
    });

    guardarVuelos(vuelosTotales.filter((vu: any) => vu.id == 'infoPerfil'))


  }
  async function login() {

    window.location.href = '/'
    localStorage.clear();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <br></br>

          <IonMenuButton color="primary" slot="start" />




          <IonTitle><b>Mis datos</b></IonTitle>

        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>


        <IonContent scrollEvents={true} scroll-y={true} >
          <br></br>

          <img className="centrada" src={ImagenPerfil} alt="centered image" width="100" height="100" />



          <IonList>


            {/* <IonItem  >

              <IonLabel>Legajo: <b>{vuelos[0].legajo} </b></IonLabel>
            </IonItem>


            <IonItem  >

              <IonLabel>Nombre: <b>{vuelos[0].nombre}</b> </IonLabel>
            </IonItem>

            <IonItem  >

              <IonLabel>Apellido: <b>{vuelos[0].apellido} </b></IonLabel>
            </IonItem>

            <IonItem  >

              <IonLabel>DNI: <b>{vuelos[0].dni}</b> </IonLabel>
            </IonItem>

            <IonItem >

              <IonLabel>Pasaporte: <b>{vuelos[0].pasaporte}</b></IonLabel>
            </IonItem>

            <IonItem  >

              <IonLabel>Domicilio: <b>{vuelos[0].domicilio}</b> </IonLabel>
            </IonItem>

            <IonItem  >

              <IonLabel>Celular: <b>{vuelos[0].celular}</b> </IonLabel>
            </IonItem>

            <IonItem  >

              <IonLabel>Email: <b>{vuelos[0].email}</b> </IonLabel>
            </IonItem> */}

            
            <IonItem  >

              <IonLabel><b>Nombre: Pablo Roberto</b> </IonLabel>
            </IonItem>

            <IonItem  >

              <IonLabel><b>Apellido: Vanegas </b></IonLabel>
            </IonItem>

            <IonItem  >

              <IonLabel><b>DNI: 7777777 </b></IonLabel>
            </IonItem>

            
            <IonItem  >

              <IonLabel><b>Domicilio: Lima 717</b> </IonLabel>
            </IonItem>

            <IonItem  >

              <IonLabel><b>Celular: 11-2345-2345</b> </IonLabel>
            </IonItem>

            <IonItem  >

              <IonLabel><b>Email: prvanega@gmail.com</b> </IonLabel>
            </IonItem>



          </IonList>


        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
