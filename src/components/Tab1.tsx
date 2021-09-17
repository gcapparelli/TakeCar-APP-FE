import React from 'react';
import ImagenNews from "../images/covid.png"
import ImagenNews1 from "../images/azafata.jpg"
import ImagenNews2 from "../images/avion.jpeg"
import { IonSlides, IonSlide, IonContent,IonHeader,IonToolbar,IonTitle, IonPage, IonButton, IonMenuButton} from '@ionic/react';
import { swapVertical } from 'ionicons/icons';


const slideOpts = {
  initialSlide: 1,
  autoplay:true,
  speed: 400  
  

};

export const Tab1: React.FC = () => {
  return (
  <IonPage>
  <IonContent fullscreen class="ion-padding" scroll-y="false">
    <IonHeader>
        <IonToolbar>
          <br></br>
      
          <IonMenuButton color="primary"slot="start"/>
    
          <IonTitle><b>Novedades</b></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        


    <IonSlides pager={false} options= {slideOpts} >

      <IonSlide> 
         <div className="slide" >
            <img src={ImagenNews}/>
            <h3 ><b>Covid-19 Nuevas Medidas</b></h3>
           <p>La Resolución 221/2020 MTR deroga el artículo 3° de la Resolución N° 64 del 18 de marzo de 2020 y levanta la suspensión total dispuesta para de los servicios de transporte .</p>
        </div>     
             
        
      </IonSlide>

      <IonSlide >
         <div className="slide">
            <img src={ImagenNews1}/>
            <h3><b>Protocolos Sanitarios en vuelos</b></h3>
             <p>Es obligatorio en todo momento el uso de barbijos o tapabocas por parte de los pasajeros y nuestra tripulación. Si transitás una situación médica o una discapacidad que te impida colocarte, por favor avisanos.</p>
         </div>       
          
      </IonSlide>

      <IonSlide>
        <div className="slide">
            <img src={ImagenNews2}/>
            <h3><b>Llegó de Moscú un nuevo vuelo</b></h3>
            <p>Con 670.000 vacunas Sputnik V, se trata del decimocuarto carguero hacia y desde la Federación Rusa, que partió a la madrugada bajo el número de vuelo AR1080 desde Ezeiza y aterrizó Rusia.</p>
        </div>  
      </IonSlide>

    </IonSlides>
  </IonContent>
  </IonContent>
  </IonPage>
);
};


export default Tab1;