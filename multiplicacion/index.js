//NOMBRE:Daniel felipe sanchez guevara
//ultima modificacion 22/06/2022

//es una estructura de control de la mayoría de los lenguajes de programación estructurados cuyo propósito es ejecutar un bloque de código y repetir la ejecución mientras se cumpla cierta condición expresada en la cláusula while.
//write() Escribe una cadena de texto dentro del hilo de un document abierto por document
var tabla, valid, i;
    do{
    do{
    tabla = prompt ("que tabla de multiplicar")
    if (tabla==""){
        tabla = 1;
    }

    }while(isNaN(tabla)|| tabla < 1)
    for (i = 1;  i <= 11; i++){
            console.log(tabla+" x " + i + " = " + tabla* i);
        }   
    valid= confirm("desea otra tabla")
}while (valid ===true)
  