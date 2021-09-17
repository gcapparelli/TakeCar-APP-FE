import { Redirect, Route } from 'react-router-dom';
import IconoHome from "../images/home3.png"
import React, { useState, useEffect, useContext } from 'react';

import {
  IonAlert,
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonButton,IonMenu,IonHeader,IonToolbar,IonTitle,IonContent,IonList,IonItem, IonMenuToggle
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, square, triangle, moon,star,flame,globe,man,person } from 'ionicons/icons';
import Tab1 from '../components/Tab1';
import Tab2 from '../components/Tab2';
import Tab3 from '../components/Tab3';
import Tab4 from '../components/Tab4';
import Tab5 from '../components/Tab5';
import Imagennoti from "../images/notifications.svg"
import Login from './Login'
import './Menu.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import '../theme/variables.css';
import {descarga} from '../firebaseConfig';



const Menu: React.FC = () => {
  
  

 return(
    
  <IonApp className="todo">
  <IonReactRouter>
  
   
    <IonTabs>
      <IonRouterOutlet id="scheduleAppM1">
        <Route exact path="/tab1">
          <Tab1 />
        </Route>
        <Route exact path="/tab2">
          <Tab2 />
        </Route>
  
        
        <Route exact path="/tab5">         
          <Tab5 />          
        </Route>
        
        
               
        <Route exact path="/menu">
          {/* <Redirect to="/tab1" /> */}
          <Redirect to="/tab5" />       
          
        </Route>
        
        
      </IonRouterOutlet>
      <IonTabBar slot="bottom">

        <IonTabButton tab="tab1" href="/tab1">         
        <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>          
        </IonTabButton>

        <IonTabButton tab="tab2" href="/tab2">
          <IonIcon icon={globe} />
          <IonLabel>Vuelos</IonLabel>
        </IonTabButton>

       

        
        <IonTabButton tab="tab5" href="/tab5">
          <IonIcon icon={Imagennoti} />
          <IonLabel>Alertas</IonLabel>
        </IonTabButton>

       
      </IonTabBar>
    </IonTabs>
    
  </IonReactRouter>
  
 
  
</IonApp>

  
)};

export default Menu;
