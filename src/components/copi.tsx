import { IonAlert, IonBadge, IonChip, IonModal, IonList, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonLabel, IonCard, IonPage, IonCardContent, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonItem } from '@ionic/react';
import React, { useState } from 'react';
import ImagenPerfil from "../images/coliseo.jpg"
import ImgDetalles from "../images/departures.svg"
import ImgDetalles1 from "../images/arrival.svg"
import ImgDetalles2 from "../images/boarding.svg"
import ImgDetalles3 from "../images/location.svg"


import { pin, time, calendar, warning, walk } from 'ionicons/icons';

import './VuelosDet.css';




const VuelosDet: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  //esta es una lista de vuelos hardcodeada podemos agregar mas cosas para ir probando, supuestamente despues esta lista se consumira desde el backend
  const vuelos = [
    {
      "id": "1",
      "dia": "31",
      "mes": "Marzo",
      "ciudad": "Roma",
      "guardia": true
    },
    {
      "id": "2",
      "dia": "02",
      "mes": "Julio",
      "ciudad": "Londres",
      "guardia": false
    },
    {
      "id": "3",
      "dia": "24",
      "mes": "Enero",
      "ciudad": "Lima",
      "guardia": false
    }
   
    
    


  ]

  const [showAlert2, setShowAlert2] = useState(false);

  return (
    <IonPage>
      <IonContent>




        {/*aca vamos a ir recorriendo la lista de vuelos con el map, por cada objeto dentro de vuelos se crea un card*/}
        {vuelos.map(vuelo => (

          <IonCard>
            <IonModal isOpen={showModal} cssClass='my-custom-class'>
              <IonCard>
                <IonCardHeader >

                  <img src={ImagenPerfil} />

                </IonCardHeader>

              </IonCard>

              <IonCardSubtitle><b>Detalle del vuelo</b></IonCardSubtitle>

              <IonList>
                <IonItem >
                  <IonLabel>AA123</IonLabel>
                  <IonIcon icon={ImgDetalles2} slot="start" />
                </IonItem>          
                

                <IonItem  >
                  <IonLabel className="vuelos">02:30am </IonLabel>
                  <IonIcon icon={ImgDetalles} slot="start" />
                </IonItem>
                <IonItem  >
                  <IonLabel className="vuelos">18:30pm </IonLabel>
                  <IonIcon icon={ImgDetalles1} slot="start" />
                </IonItem>

                <IonItem  >

                  <IonLabel>Origen: Eze (ARG) </IonLabel>
                  <IonIcon icon={ImgDetalles3} slot="start" />
                </IonItem>

                <IonItem  >

                  <IonLabel>Destino: RMA (IT) </IonLabel>
                  <IonIcon icon={ImgDetalles3} slot="start" />
                </IonItem>
              </IonList>
              <IonButton onClick={() => setShowModal(false)}>Cerrar</IonButton>
            </IonModal>



            <div>
             

                {/* <IonBadge slot="start">{vuelo.dia}</IonBadge>
  <IonLabel><h6 className="vuelosLetra"><strong>{vuelo.mes}</strong></h6></IonLabel> */}

                {/* <IonItem>
                
                {vuelo.guardia ? <IonButton onClick={() => setShowModal(true)} color="secondary" slot="end">
                  
                <IonIcon icon={calendar} slot="start" />
                <IonLabel>8 de Mayo</IonLabel>

                </IonButton> : 
                  <IonButton onClick={() => setShowAlert2(true)} color="secondary" slot="end">
                    <IonIcon icon={calendar} slot="start" />
                <IonLabel>8 de Mayo</IonLabel> 
                <IonLabel> Dar ok</IonLabel>

                  </IonButton>}
                  

              </IonItem> */}


                {/* "Esto pregunta si vuelo.guardia es verdadero muestra el Ver detalle, si vuelo.guardia es falso muestra el Dar ok, cada uno dispara un envento diferente" */}



                <IonButton onClick={() => setShowModal(true)} color="tertiary" slot="end" expand="full">

                  <IonIcon icon={calendar} slot="start" />
                  <IonLabel><b>8 de Mayo</b></IonLabel>

                </IonButton>



            </div>

          </IonCard>))}


            {/* "aca viene el alert, ver cual nos gusta o ir modificando este" */}
            <IonAlert
              isOpen={showAlert2}
              onDidDismiss={() => setShowAlert2(false)}
              cssClass='my-custom-class'
              header={'Alert'}
              subHeader={'Subtitle'}
              message={'This is an alert message.'}
              buttons={['Confirmar', 'Rechazar']}
            />


      </IonContent>
    </IonPage>


  );
}
export default VuelosDet;
