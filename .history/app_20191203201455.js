function fechaNacimiento(){
    let fechaActual = new Date();
    mm = fechaActual.getMonth() + 1;
    dd = fechaActual.getDate();
    yyyy = fechaActual.getFullYear();
    fechaA = `${mm}/${dd}/${yyyy}`;
    console.log('fecha Actual');
    console.log(fechaA);
    
    let fechaPasada = new Date('01/02/2000');
    mm1 = fechaPasada.getMonth() + 1;
    dd1 = fechaPasada.getDate();
    yyyy1 = fechaPasada.getFullYear();
    fechaA1 = `${mm1}/${dd1}/${yyyy1}`;
    console.log('fecha recuperada');
    console.log(fechaA1);
    mesA = mm +1;
    diaA = dd + 1;

    diaRespuesta = Math.abs(dd1 - diaA);
    mesRespuesta = Math.abs(mm1 - mesA);
    anyoRespuesta = Math.abs(yyyy1 - yyyy);

    console.log(`${mesRespuesta}/${diaRespuesta}/${anyoRespuesta}`);
    


}