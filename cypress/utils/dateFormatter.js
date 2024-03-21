class dateFormatter{

    datetime(){
    const now = new Date();
    // Obtener los componentes de la fecha
    const dia = String(now.getDate()).padStart(2, '0');
    const mes = String(now.getMonth() + 1).padStart(2, '0'); // Los meses comienzan desde 0
    const anio = now.getFullYear();
    const horas = String(now.getHours()).padStart(2, '0');
    const minutos = String(now.getMinutes()).padStart(2, '0');
    const segundos = String(now.getSeconds()).padStart(2, '0');

    // Construir la cadena de fecha en el formato deseado
    const fechaFormateada = `${dia}/${mes}/${anio} ${horas}:${minutos}:${segundos}`;

    // Imprimir la fecha formateada
    console.log("Fecha formateada:", fechaFormateada);
    return fechaFormateada
    }
}

module.exports = new dateFormatter();