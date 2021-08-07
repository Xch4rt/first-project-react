import app from 'firebase/app';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    /* 
        AQUI TUS CREDENCIALES    
    */
  };

class Firebase{
    constructor() {
        app.initializeApp(config); //como parametro la configuracion del proyecto
        this.db = app.firestore();
    }
}

export default Firebase;