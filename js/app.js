/*

*/

const DICCIONARIO = {"a":".-",
"b":"-...",
"c":"-.-.",
"d":"-..",
"e":".",
"f":"..-.",
"g":"--.",
"h":"....",
"i":"..",
"j":".---",
"k":".-.",
"l":".-..",
"m":"--",
"n":"-.",
"o":"---",
"p":".--.",
"q":"--.-",
"r":".-.",
"s":"...",
"t":"-",
"u":"..-",
"v":"...-",
"w":".--",
"x":"-..-",
"y":"-.--",
"z":"--..",
"1":".----",
"2":"..---",
"3":"...--",
"4":"....-",
"5":".....",
"6":"-....",
"7":"--...",
"8":"---..",
"9":"----.",
"0":"-----",
"?":"..--..",
"!":"-.-.--",
".":".-.-.",
",":"--..--",
";":".-.-.",
":":"---..",
"+":".-.-.",
"-":"-...-",
"/":"-..-.",
"=":"-...-",
" ":"/"}


const selectentrada = document.getElementById('entrada1');
const selectsalida = document.getElementById('salida1');


function traducir(texto){
    return texto
    .toLowerCase()
    .split("")
    .map(letra => DICCIONARIO[letra])
    .join(" ")
}



selectentrada.addEventListener("input",()=> {
    const texto = selectentrada.value;
        selectsalida.textContent =traducir(texto);
    } 
    )

    const selectentrada2 = document.getElementById('entrada2');
const selectsalida2 = document.getElementById('salida2');


function traducir(texto){
    return texto
    .toLowerCase()
    .split("")
    .map(letra => DICCIONARIO[letra])
    .join(" ")
}



selectentrada.addEventListener("input",()=> {
    const texto = selectentrada2.value;
        selectsalida2.textContent =traducir(texto);
    } 
    )

