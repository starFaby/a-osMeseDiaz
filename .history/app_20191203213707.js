function fechaNacimiento(){
    let fechaActual = new Date();
    mm = fechaActual.getMonth() + 1;
    dd = fechaActual.getDate();
    yyyy = fechaActual.getFullYear();
    fechaA = `${mm}/${dd}/${yyyy}`;
    console.log('fecha Actual');
    console.log(fechaA);
    
    let fechaPasada = new Date('01/04/2003');
    mmPast = fechaPasada.getMonth() + 2;
    ddPast = fechaPasada.getDate() + 4;
    yyyyPast = fechaPasada.getFullYear();
    fechaPast = `${mmPast}/${ddPast}/${yyyyPast}`;
    console.log('fecha recuperada');
    console.log(fechaPast);
    diaRespuesta = Math.abs(ddPast - dd);
    mesRespuesta = Math.abs(mmPast - mm);
    anyoRespuesta = Math.abs(yyyyPast - yyyy);

    console.log(`tienes ${anyoRespuesta} años, ${mesRespuesta} meses y ${diaRespuesta} diaz`);
    


}