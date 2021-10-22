import React from 'react';
import {
    IonSlides,
    IonSlide,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonPage,
    IonButton,
    IonMenuButton,
    IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonItem, IonLabel, IonGrid, IonRow, IonCol
} from '@ionic/react';
import { swapVertical } from 'ionicons/icons';
import './Home.css';

const slideOpts = {
  initialSlide: 1,
  autoplay:true,
  speed: 400
};
export const Home: React.FC = () => {
  return (
  <IonPage>
  <IonContent fullscreen class="ion-padding" scroll-y="false">
    <IonHeader>
        <IonToolbar>
          <IonMenuButton color="primary"slot="start"/>
          <IonTitle>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

              <IonSlides pager={true} options={slideOpts}>
                  <IonSlide>
                  <IonCard className={'card'}>
                      <IonCardHeader>
                          <IonCardTitle className={"title"}>Datos del vehículo</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                          Modelo: Etios
                      </IonCardContent>
                      <IonCardContent>
                          Año: 2000
                      </IonCardContent><IonCardContent>
                      Patente: AE754LP
                  </IonCardContent>
                  </IonCard>
                  </IonSlide>
                  <IonSlide>
                      <IonCard className={'card'}>
                          <IonCardHeader>
                              <IonCardTitle className={"title"}>Datos del vehículo</IonCardTitle>
                          </IonCardHeader>
                          <IonCardContent>
                              Modelo: Etios
                          </IonCardContent>
                          <IonCardContent>
                              Año: 2000
                          </IonCardContent><IonCardContent>
                          Patente: AE754LP
                      </IonCardContent>
                      </IonCard>
                  </IonSlide>
              </IonSlides>


          <IonCard className={'card'}>
              <IonCardHeader>
                  <IonCardHeader>
                      <IonCardTitle className={"title"}>Turnos próximos</IonCardTitle>
                  </IonCardHeader>
              </IonCardHeader>
              <IonCardContent className={'card'}>
                  <IonItem button onClick={() => { }}>
                      <IonLabel >
                          Button Item
                      </IonLabel>
                  </IonItem>
                  <IonItem button onClick={() => { }}>
                      <IonLabel>
                          Button Item
                      </IonLabel>
                  </IonItem>
                  <IonItem button onClick={() => { }}>
                      <IonLabel>
                          Button Item
                      </IonLabel>
                  </IonItem>

              </IonCardContent>
          </IonCard>
          <IonGrid>
              <IonRow>
                  <IonCol><IonButton style={{width:'100%'}}>Seguro</IonButton></IonCol>
                  <IonCol><IonButton style={{width:'100%'}}>Otros</IonButton></IonCol>
              </IonRow>
              </IonGrid>
  </IonContent>
  </IonContent>
  </IonPage>
);
};


export default Home;
