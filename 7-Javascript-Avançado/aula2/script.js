/*


HOISTING (IÇAR, ERGUER)

- Hoisting é o comportamento padrão do Javascript de mover as declarações para o topo de um escopo.


*/


function teste() {
    function outraFuncao() {
        console.log('ok, sou outra função')
    }

    
    outraFuncao()
}

teste()