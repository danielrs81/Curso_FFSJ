/*


Síncrono VS Assíncrono


*/



function primeira() {
    console.log('primeira')
}

function segunda() {
    console.log('segunda')
}


setTimeout(primeira, 2000)   // assincrono

segunda()

