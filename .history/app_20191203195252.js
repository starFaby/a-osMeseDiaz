function fechaNacimiento(){
    let fechaActual = new Date();
    mm = fechaActual.getMonth() + 1;
    dd = fechaActual.getDate();
    yyyy = fechaActual.getFullYear();
    fechaA = `${mm}/${dd}/${yyyy}`;
    console.log(fechaA);
    
    let fechaPasada = new Date(fechaA);
    mm = fechaActual.getMonth() + 1;
    dd = fechaActual.getDate();
    yyyy = fechaActual.getFullYear();
    fechaA = `${mm}/${dd}/${yyyy}`;
    console.log(fechaA);

}