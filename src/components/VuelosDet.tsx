import { IonBadge,IonChip,IonModal,IonList,IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonLabel, IonCard, IonPage, IonCardContent, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonItem } from '@ionic/react';
import React, { useState,useEffect,useContext } from 'react';
import DetalleDelDetalle from './DetalleDelDetalle'
import './VuelosDet.css';
import {descarga} from '../firebaseConfig';

import UsuarioContext from '../context/UsuarioContext';

const VuelosDet: React.FC =() => {


  const userIngresado = useContext(UsuarioContext);
  const {user}= userIngresado;

  const [showModal, setShowModal] = useState(false);

  const [vuelos, guardarVuelos]:Array<any> = useState(['']);

  useEffect(()=>{
    
    obtener();
    

  },[user,vuelos])
  

  const obtener=()=>{
    const averga =JSON.parse(localStorage.getItem('vuel') || '{}');

    descarga.collection(averga).onSnapshot(manejarSnapshot)
  }

function manejarSnapshot(snapshot:any){
  const vuelosTotales =snapshot.docs.map((doc: { id: any; data: () => any; })=>{
  return {
      id:doc.id,
      ...doc.data()
  }
});

guardarVuelos(vuelosTotales.filter((vu:any)=>vu.id!=='infoPerfil'))

}


  return (
    <IonPage>
    <IonContent>

    <IonContent>   

{vuelos.map((vuelo:any)=>(
  

  <DetalleDelDetalle
  
    vuelo={vuelo}

  />

))}
</IonContent>
  </IonContent>
    </IonPage>


  );
}
export default VuelosDet;
