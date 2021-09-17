import {IonActionSheet,useIonAlert , IonAlert,  IonText,  IonModal, IonList, IonButton, IonLabel, IonCard, IonIcon, IonItem } from '@ionic/react';
import React, { useState, useEffect, useContext } from 'react';
import { caretForwardCircle,heart,share,trash,calendar,checkmark, checkbox,alert,close,lockClosed,closeCircle, balloon, pin, browsers, bulbOutline, balloonOutline, sparkles, walk, atCircleSharp, helpCircleSharp } from 'ionicons/icons';
import { IonGrid, IonRow, IonCol, } from '@ionic/react';
import ImagenRoma from "../images/coliseo.jpg"
import ImagenLondres from "../images/london.jpg"
import ImagenNY from "../images/ny.jpg"
import ImagenLisboa from "../images/lisboa.jpg"
import ImagenPCana from "../images/puntacana.jpg"

import ImgDetalles from "../images/departures.svg"
import ImgDetalles1 from "../images/arrival.svg"
import ImgDetalles2 from "../images/boarding.svg"
import ImgDetalles3 from "../images/location.svg"
import ImgDetalles4 from "../images/capacidad.svg"
import ImgDetalles5 from "../images/flight-time.svg"
import ImgDetalles6 from "../images/airplane.svg"
import ImgConfirmar from "../images/ok.svg"
import ImgRechazar from "../images/no.svg"
import ImgSeparador from "../images/separacion.svg"


import './DetalleDelDetalle.css';
import { descarga } from '../firebaseConfig';

import UsuarioContext from '../context/UsuarioContext';
import Tripulantes  from './tripulantes';


const DetalleDelDetalle: React.FC<{ vuelo: any }> = props => {

//cambiar el valor a true para que salga el aviso//
  const [showAlert2, setShowAlert2] = useState(false); 

  //cambiar el valor a true para que salga el aviso activo//
  const [showActionSheet, setShowActionSheet] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [confirmar, guardarConfirmar] = useState(false);
  const [confirmar2, guardarConfirmar2] = useState(false);
  const [elModal, guardarElModal] = useState(true);
  const [present] = useIonAlert();

 
  return (

    <>
      <IonCard

      >

        <IonModal isOpen={showModal} cssClass='my-custom-class'>
           
          <IonCard>             

            
            
            


          </IonCard>
          {props.vuelo.destino == 'FCO (RMA)' ? <img src={ImagenRoma} /> : null}
          {props.vuelo.destino == 'LHR (UK)' ? <img src={ImagenLondres} /> : null}
          {props.vuelo.destino == 'JFK (NY)' ? <img src={ImagenNY} /> : null}
          {props.vuelo.destino == 'LIS (PT)' ? <img src={ImagenLisboa} /> : null}
          {props.vuelo.destino == 'PUJ (PU)' ? <img src={ImagenPCana} /> : null}
          <IonList>
          
          <IonGrid text-align="center">
            
          
              <IonRow>
              
                <IonCol>              
                  
                  <IonLabel><b>Origen </b> {props.vuelo.origen}</IonLabel>                 
                  
                </IonCol>  

                <IonCol className="centrada">
                
                  <IonList>
                        
                        <IonIcon  icon={ImgDetalles3} slot="start" />                   
                  </IonList>  
                  <IonLabel>{props.vuelo.escala}</IonLabel>            
                </IonCol>

                <IonCol>
                        <IonLabel><b>Destino</b> {props.vuelo.destino} </IonLabel>     
                </IonCol>
              </IonRow>         
              </IonGrid>
          
            <IonItem >
              <IonLabel> {props.vuelo.numeroVuelo}</IonLabel>
              <IonIcon icon={ImgDetalles2} slot="start" />
            </IonItem>

            <IonItem  >
              <IonLabel className="vuelos"> {props.vuelo.partida} </IonLabel>
              <IonIcon icon={ImgDetalles} slot="start" />
            </IonItem>
            
            
            <IonItem  >
              <IonLabel className="vuelos">{props.vuelo.llegada} </IonLabel>
              <IonIcon icon={ImgDetalles1} slot="start" />
            </IonItem>   

            <IonItem  >
              <IonLabel className="vuelos">{props.vuelo.capacidad} </IonLabel>
              <IonIcon icon={ImgDetalles4} slot="start" />
            </IonItem> 

            <IonItem >
              <IonLabel className="vuelos">{props.vuelo.tiempo} </IonLabel>
              <IonIcon icon={ImgDetalles5} slot="start" />
            </IonItem>    

            <IonItem >
              <IonLabel> {props.vuelo.avion}</IonLabel>
              <IonIcon icon={ImgDetalles6} slot="start" />
            </IonItem>
            <IonItem >             
              <Tripulantes/>           
            </IonItem>      
               

            
          </IonList>
          <IonButton onClick={() => setShowModal(false)}>Cerrar</IonButton>
        </IonModal>
        
        
        <div><IonButton disabled={false} onClick={() => setShowModal(elModal)} color="tertiary" slot="end" expand="full">
        {props.vuelo.guardia?<IonIcon icon={calendar} slot="start" />:<IonIcon icon={calendar} slot="start" />}
          
          <IonLabel><b>{props.vuelo.dia} de {props.vuelo.mes}</b></IonLabel>{confirmar2?<div ><IonIcon icon={closeCircle} size="large" color="danger" /></div>:null}{confirmar?<div ><IonText color="success"><IonIcon icon={checkbox} size="large" color="success" /> </IonText> </div>:null}
          
      
        </IonButton></div>
        
        
      {showActionSheet?
          <div  text-align="center"onClick={() =>
            present({              
              cssClass: 'my-css',
              header: '¡Importante!',
              message: 'Confirma la guardia?',
              
              
              buttons: [
                { text: 'Confirmar', handler: (d) => {setShowActionSheet(false);guardarConfirmar(true)} },
                { text: 'Rechazar', handler: (d) => {setShowActionSheet(false);guardarConfirmar2(true);guardarElModal(false)} },
              ],
              onDidDismiss: (e) => {setShowActionSheet(false)},
            })
          } > <IonItem className="centrada2"><IonIcon icon={ImgConfirmar} size="medium" color="success" />  
          
              <IonText >Confirmar <IonIcon icon={ImgSeparador} size="medium"  /> Rechazar</IonText> <IonIcon icon={ImgRechazar} size="medium" color="danger" />
              
             </IonItem>
              
              </div> 
               
            :null}
      
        
 
      </IonCard>
      
      <IonAlert 
        isOpen={showAlert2}
        
        cssClass='my-custom-class'
        header={'¡Alerta!'}
        
        
        message=  {'Hay un nuevo vuelo de guardia'}
        buttons={['Aceptar']}
        
      />
      
      <IonActionSheet 
        
        isOpen={showActionSheet}
        
        cssClass='my-custom-class'
        header={"¡Nuevo vuelo de guardia!"}
        animated={true}
        backdropDismiss={false}
        
        buttons={[{
          //icon: atCircleSharp,          
          text: 'Aceptar',                   
          role: 'destructive',       

          handler: () => {
            console.log('Delete clicked');
          }
        }
         
        ]}
      >
      </IonActionSheet>
      
      

    </>

  );
}
export default DetalleDelDetalle;
