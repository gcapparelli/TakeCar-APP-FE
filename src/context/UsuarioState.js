import React,{useReducer,useEffect} from 'react';
import {v4 as uuid} from 'uuid';

import UsuarioContext from './UsuarioContext';
import UsuarioReducer from './UsuarioReducer';
import {
    AGREGAR_USER

} from '../types';


const UsuarioState = props =>{

    const initialState = {

         user:['1234567']
      
        
    }
    
    const [state, dispatch] = useReducer(UsuarioReducer, initialState);
 
    const agregarUser =userActual=>{
        dispatch({
            type:AGREGAR_USER,
            payload:userActual
            
        })
      

    }
    

    
    return (
        
        <UsuarioContext.Provider
            value ={{
                user:state.user,
                agregarUser,
            }}
        >
            {props.children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioState;