import { IonBadge, IonChip, IonModal, IonList, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonLabel, IonCard, IonPage, IonCardContent, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonItem } from '@ionic/react';
import React, { useState } from 'react';
import { pin, time, wifi, wine, warning, walk } from 'ionicons/icons';
import ImagenPerfil from "../images/logo2.jpg"

import VuelosDet from "./VuelosDet"




import './Tab2.css';

const Tab2: React.FC = () => {


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
        {/* aca vemos el componente vuelosDet que en realidad es una CARD que puede mostrar DETALLES DE VUELO o DAR OK */}
        <VuelosDet
        />
      </IonContent>
    </IonPage>
  );

}
export default Tab2;
