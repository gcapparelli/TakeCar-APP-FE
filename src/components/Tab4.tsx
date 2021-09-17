import { IonCardHeader, IonText, IonCard, IonIcon, IonLabel, IonPage, IonCheckbox, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonItemDivider, IonList, IonInput, IonItem } from '@ionic/react';
import React, { useState,useEffect,useContext } from 'react';

import ImagenPerfil from "../images/perfil.jpg"
import {descarga} from '../firebaseConfig';
import UsuarioContext from '../context/UsuarioContext';
import { calendar, pin, time, warning, walk, shieldHalf,  checkmarkDone, checkmarkDoneCircleOutline, checkbox, checkboxOutline} from 'ionicons/icons';



const Tab4: React.FC = () => {



  const userIngresado = useContext(UsuarioContext);
  const {user}= userIngresado;



  const [vuelos, guardarVuelos]:Array<any> = useState(['']);

  useEffect(()=>{
    
    obtener();
    

  },[user])
 

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

guardarVuelos(vuelosTotales.filter((vu:any)=>vu.id=='infoPerfil'))


}
async function login(){
  console.log("hola")
  window.location.href='/'
  localStorage.clear();}

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <br></br>        
          <IonTitle><b>Alertas</b></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 4</IonTitle>
          </IonToolbar>
        </IonHeader>


    <IonContent 
    scrollEvents={true}
    scroll-y={true}
        
    >


          <IonCard>
            

          </IonCard>
           
          <IonList>
          
          
            <IonItem  >  
            <IonIcon icon={checkboxOutline}  /><IonLabel color="dark" ><b>Tienes una nueva guardia</b></IonLabel>
            </IonItem>  

            <IonItem  >

            <IonIcon icon={checkboxOutline}  /><IonLabel color="dark"><b>Nuevas novedades</b> </IonLabel>
            </IonItem>

            <IonItem  >

            <IonIcon icon={checkboxOutline}  /><IonLabel color="dark" ><b>Revisá tus vuelos</b> </IonLabel>
            </IonItem>

            <IonItem  >

            <IonIcon icon={checkboxOutline}  /><IonLabel color="dark" ><b>Revisá el estado del tránsito</b></IonLabel>
            </IonItem>

           


          </IonList>


        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
