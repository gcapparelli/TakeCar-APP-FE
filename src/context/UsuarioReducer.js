import { AGREGAR_USER} from '../types';

export default (state,action) =>{
    switch (action.type){
       
        case AGREGAR_USER:
            
            return{
                
                user:[action.payload]
            }
        
        default:
            return state;
    }
}