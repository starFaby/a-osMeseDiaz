function fechaNacimiento(){
    let fechaActual = new Date();
    mm = fechaActual.getMonth() + 1;
    dd = fechaActual.getDate();
    yyyy = fechaActual.getFullYear();
    fechaA = `${mm}/${dd}/${yyyy}`;
    console.log('fecha Actual');
    console.log(fechaA);
    
    let fechaPasada = new Date('01/10/2000');
    mmPast = fechaPasada.getMonth() +  1;
    ddPast = fechaPasada.getDate();
    yyyyPast = fechaPasada.getFullYear();
    fechaPast = `${mmPast}/${ddPast}/${yyyyPast}`;
    console.log('fecha recuperada');
    console.log(fechaPast);
    diaRespuesta = Math.abs(ddPast - dd);
    mesRespuesta = Math.abs(mmPast - mm);
    anyoRespuesta = Math.abs(yyyyPast - yyyy);

    console.log(`tienes ${anyoRespuesta} años, ${mesRespuesta} meses y ${diaRespuesta} diaz`);
    
    console.log('=====> ******************** ');
    console.log(fechaN(fechaPasada));
    
    

}
 function fechaN(FechaNacimiento) {
        var fechaNace = new Date(FechaNacimiento);
        var fechaActual = new Date()
        var mes = fechaActual.getMonth();
        var dia = fechaActual.getDate();
        var año = fechaActual.getFullYear();
        fechaActual.setDate(dia);
        fechaActual.setMonth(mes);
        fechaActual.setFullYear(año);
        edad = Math.floor(((fechaActual - fechaNace) / (1000 * 60 * 60 * 24) / 3600));// 365 diaz 12 meses 3600 52 semanas
        return edad;
}  