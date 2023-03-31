const validation = (userData, errors, setErrors) => {
    //username

    if (!userData.username) setErrors((prevState)=>({ ...prevState, username: "Por favor completa este campo" }));

    else if(userData.username.length > 35) setErrors((prevState)=>({ ...prevState, username: "No puede superar los 35 caracteres" }));

    else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userData.username)){
        setErrors((prevState)=>({...prevState,username:"Email invalido"}));

    }
    else{
        setErrors((prevState)=>({...prevState,username:""}))
    }
    //password

    if (!userData.password) setErrors((prevState)=>({ ...prevState, password: "Por favor completa este campo" }));

    else if(userData.password.length > 10 || userData.password.length < 6) setErrors((prevState)=>({ ...prevState, password: "Tiene que tener entre 6-10 caracteres" }));

    else if( !/^(?=.*[0-9])(?=.{6,10})/.test(userData.password)){
        setErrors((prevState)=>({...prevState,password:"Contraseña invalida"}));
    }
    else{
        setErrors((prevState)=>({...prevState,password:""}))
    }
};
export default validation;