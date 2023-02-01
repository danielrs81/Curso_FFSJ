document.querySelector('#titulo').innerHTML = '<i>EXEMPLO</i>   ' // selecionando um 'id' do html pelo java - SELETOR PARA ID


document.querySelector('a').innerHTML = 'teste ancora'  // SELETOR DE TAG, SOMENTE UM ELEMENTO

//document.querySelectorAll('a').innerHTML = '123456'

//SELECIONANDO MAIS DE 1 ITEM POR TAG
//O forEach serve somente para Array
let ancoras = document.querySelectorAll('a')

ancoras.forEach(function(elemento){ // função anonima / callback
    elemento.innerHTML = 'teste'
})

// ----------------------------------
// SELECIONANDO MAIS DE UM ITEM POR CLASS
/*

let boxes = document.querySelectorAll('.box')

let count = 0
boxes.forEach(function(box){  
    count++

    box.innerHTML = 'box ' + count

})

*/

// OUTRA FORMA

let boxes = document.querySelectorAll('.box')

boxes.forEach(function(box, index){


    box.innerHTML = 'box ' + (index +1)

})



