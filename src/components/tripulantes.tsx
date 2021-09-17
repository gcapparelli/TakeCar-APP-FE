/* Using with useIonModal Hook */

import React, { useState } from 'react';
import { IonButton, IonItem, IonList, IonIcon, IonAvatar, IonLabel, IonContent, useIonModal, IonHeader, IonToolbar, IonTitle, IonButtons } from '@ionic/react';
import ImgPiloto from "../images/piloto.svg"
import ImgComandante from "../images/comandante.svg"
import ImgTripulante from "../images/tripulantes.svg"
import './Tab5.css';

const Body: React.FC<{

 

  count: number;
  onDismiss: () => void;
  onIncrement: () => void;
}> = ({ count, onDismiss, onIncrement }) => (
  
  <div>
    <IonHeader translucent>
      <IonToolbar>
        <br></br>
        <IonButtons slot="end">
          <IonButton color="tertiary" strong  onClick={() => onDismiss()}>Cerrar</IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen scroll-y="false">
      <IonList>
        <IonItem>
           <IonAvatar slot="start">
                <img src={ImgPiloto} />
            </IonAvatar>
          <IonLabel>
            <h2><b>Eneko Jerez</b></h2>
            <p>Piloto</p>
          </IonLabel>
        </IonItem>
      </IonList>

      <IonList>
        <IonItem>
            <IonAvatar slot="start">
              <img src={ImgPiloto} />
            </IonAvatar>
          <IonLabel>
            <h2><b>Fabio Sole</b></h2>
            <p>Copiloto</p>
          </IonLabel>
        </IonItem>
      </IonList>

      <IonList>
        <IonItem>
            <IonAvatar slot="start">          
               <img src={ImgComandante} />
            </IonAvatar>
          <IonLabel>
            <h2><b>Estrella Costas</b></h2>
            <p>Comandate</p>
          </IonLabel>
        </IonItem>
      </IonList>

      <IonList>
        <IonItem>
              <IonAvatar slot="start">
              <img src={ImgTripulante} />
              </IonAvatar>
          <IonLabel>
            <h2><b>Ane Hidalgo</b></h2>
            <p>Tripulante</p>
          </IonLabel>
        </IonItem>
      </IonList>

      <IonList>
        <IonItem>
            <IonAvatar slot="start">
              <img src={ImgTripulante} />
              </IonAvatar>
          <IonLabel>
            <h2><b>Avelina Villa</b></h2>
            <p>Tripulante</p>
          </IonLabel>
        </IonItem>
      </IonList>

      <IonList>
        <IonItem>
        <IonAvatar slot="start">
              <img src={ImgTripulante} />
              </IonAvatar>
          <IonLabel>
            <h2><b>David Palomares</b></h2>
            <p>Tripulante</p>
          </IonLabel>
        </IonItem>
      </IonList>

    </IonContent>

  </div>
);

const ModalExample: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDismiss = () => {
    dismiss();
  };
 
  /**
   * First parameter is the component to show, second is the props to pass
   */
  const [present, dismiss] = useIonModal(Body, {
    count,
    onDismiss: handleDismiss,
    onIncrement: handleIncrement,
  });

  return (
    
      <IonContent>
      
        <IonButton className="centrada" color="medium" 
          
          shape="round" fill="outline"
          onClick={() => {
            present({
              cssClass: 'my-class',
            });
          }}
        >          
        Ver más tripulantes
        </IonButton>       
      </IonContent>
    
  );
};

export default ModalExample;