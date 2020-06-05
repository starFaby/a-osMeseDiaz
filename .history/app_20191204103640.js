function probarFecha() {
    fecha = '11/18/2019';
    fechaN(fecha);
}
function fechaNacimiento(){
    let fechaActual = new Date();
    mm = fechaActual.getMonth() + 1;
    dd = fechaActual.getDate();
    yyyy = fechaActual.getFullYear();
    fechaA = `${mm}/${dd}/${yyyy}`;
    console.log('fecha Actual');
    console.log(fechaA);
    
    let fechaPasada = new Date('03/15/2000');
    mmPast = fechaPasada.getMonth() +  1;
    ddPast = fechaPasada.getDate();
    yyyyPast = fechaPasada.getFullYear();
    fechaPast = `mes ${mmPast}dia /${ddPast}añob/${yyyyPast}`;
    console.log('fecha recuperada');
    console.log(fechaPast);
    diaRespuesta = Math.abs(ddPast - dd);
    mesRespuesta = Math.abs(mmPast - mm);
    anyoRespuesta = Math.abs(yyyyPast - yyyy);

    console.log(`tienes ${anyoRespuesta} años, ${mesRespuesta} meses y ${diaRespuesta} diaz`);
    
    console.log('=====> ******************** ');
    console.log(fechaN(fechaPasada));
    
    

}
 function fechaN(birthdate) {
    let fechaNacimiento = new Date(birthdate);
    mmNacimiento = fechaNacimiento.getMonth() +  1;
    ddNacimiento = fechaNacimiento.getDate();
    yyyyNacimiento = fechaNacimiento.getFullYear();
    let fechaActual = new Date();
    mm = fechaActual.getMonth() + 1;
    dd = fechaActual.getDate();
    yyyy = fechaActual.getFullYear();
    fechaA = `${mm}/${dd}/${yyyy}`;
    console.log('fecha Actual');
    console.log(fechaA);
}  