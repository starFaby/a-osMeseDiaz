function fechaNacimiento(){
    let fechaActual = new Date();
    mm = fechaActual.getMonth() + 1;
    dd = fechaActual.getDate();
    yyyy = fechaActual.getFullYear();
    fechaA = `${mm}/${dd}/${yyyy}`;
    console.log('fecha Actual');
    console.log(fechaA);
    
    let fechaPasada = new Date('01/02/2000');
    mmPast = fechaPasada.getMonth();
    ddPast = fechaPasada.getDate();
    yyyyPast = fechaPasada.getFullYear();
    fechaPast = `${mm1}/${dd1}/${yyyy1}`;
    console.log('fecha recuperada');
    console.log(fechaA1);
    diaRespuesta = Math.abs(ddPast - dd);
    mesRespuesta = Math.abs(mmPast - mm);
    anyoRespuesta = Math.abs(yyyyPast - yyyy);

    console.log(`tienes ${anyoRespuesta} años, ${mesRespuesta} meses y ${diaRespuesta} diaz`);
    


}