
export default function validation(userData) {

    const errors = {};

    const regexPass = new RegExp("[0-9]");

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.username)){

        
            errors.username = "No es un email"
       

    }

    if (userData.username.length > 35){
       
            errors.username = "Máximo 35 caracteres"
       
    }

    if(userData.username === ""){
       
            errors.username = "Complete el nombre de usuario"
     
    }

    if(userData.password.length < 6 || userData.password.length > 10){
 
            errors.password = "Debe tener entre 6 y 10 caracteres"
    
    }

    if (!regexPass.test(userData.password)){

    
            errors.password = "Debe tener al menos un numero"
       

    }

        return errors; 
    

    


}