function fechaNacimiento(){
    let fechaActual = new Date();
    mm = fechaActual.getMonth() + 1;
    dd = fechaActual.getDate();
    yyyy = fechaActual.getFullYear();
    fechaA = `${mm}/${dd}/${yyyy}`;
    console.log('fecha Actual');
    console.log(fechaA);
    
    let fechaPasada = new Date(fechaA);
    mm1 = fechaPasada.getMonth() + 1;
    dd1 = fechaPasada.getDate();
    yyyy1 = fechaPasada.getFullYear();
    fechaA1 = `${mm1}/${dd1}/${yyyy1}`;
    console.log('fecha recuperada');
    console.log(fechaA1);

}