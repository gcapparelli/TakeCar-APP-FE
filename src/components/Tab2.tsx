import { IonAlert, IonToggle,IonCardHeader,  IonLabel, IonCard, IonPage,  IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonItem } from '@ionic/react';
import React, { useState,useEffect,useContext } from 'react';
import { pin, time, wifi, wine, warning, walk } from 'ionicons/icons';
import {descarga} from '../firebaseConfig';

import UsuarioContext from '../context/UsuarioContext';
import VuelosDet from "./VuelosDet"
import ImagenPerfil from "../images/logo2.jpg"




import './Tab2.css';

const Tab2: React.FC = () => {
  const [showAlert2, setShowAlert2] = useState(false);

  return (

    <IonPage>
    <IonHeader>
      <IonToolbar>
        <br></br>
        <IonTitle><b>Tus vuelos</b></IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent>  

      <IonCardHeader ><img src={ImagenPerfil} /> </IonCardHeader> 

    </IonContent>
    
    
          
    <IonContent>     
      
        <VuelosDet
        
         />
    
    </IonContent>
    
    <IonAlert
        isOpen={showAlert2}
        onDidDismiss={() => setShowAlert2(false)}
        cssClass='my-custom-class'
        header={'Nueva alerta'}
        //subHeader={'prueba'}
        message={'Hay un nuevo vuelo de guardia'}
        buttons={['Aceptar']}
      />

          {/* <IonItem >
            <IonLabel color="primary"><b>Notificar Ausencia</b></IonLabel>
            <IonToggle color="primary" value="sausage" />
          </IonItem> */}
        


  </IonPage>
  

  
);

}
export default Tab2;
