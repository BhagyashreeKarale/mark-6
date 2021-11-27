var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');

console.log(txtInput);
function clickHandler() {
    //we don't need return function clickEventHandler() so cut it off
    // return function clickEventHandler() { 
        console.log('clicked'); 
    // };
    console.log("input", txtInput.value);
}

btnTranslate.addEventListener('click',clickHandler)

//note we don't need parenthesis along with funciton when we are passing a funciton as an callback function

//we have to define the callback funciton before using it, so move the callback funciton declaration above btnTranslate.addEventListener('click',clickHandler)
 

// function clickHandler() {
//     //we don't need return function clickEventHandler() so cut it off
//     // return function clickEventHandler() { 
//         console.log('clicked'); 
//     // };
// }
