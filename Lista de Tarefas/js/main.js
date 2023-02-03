/* Objeto {} principal da aplicação */
const Main = {

    task: [],

    init: function () {
        this.cacheSelectors()
        this.bindEvents()
        this.getStoraged()
        this.buildTasks()

    },

    cacheSelectors: function() {
        this.$checkButtons = document.querySelectorAll('.check')
        this.$inputTask = document.querySelector('#inputTask')
        this.$list = document.querySelector('#list')
        this.$removeButtons = document.querySelectorAll('.remove')
    },

    bindEvents: function() {
            const self = this

            this.$checkButtons.forEach(function(button){
            button.onclick = self.Events.checkButton_click
            
        })

        this.$inputTask.onkeypress = self.Events.inputTask_keypress.bind(this)

        this.$removeButtons.forEach(function(button) {
            button.onclick = self.Events.removeButton_click
        })
    },

     
    getStoraged: function() {
        const tasks = localStorage.getItem('tasks')

        this.tasks = JSON.parse(tasks)
    },

    buildTasks: function() {

    },


    /* Funções relacionadas a eventos */
    Events: {
        checkButton_click: function(e) {
            const li = e.target.parentElement
            const isDone = li.classList.contains('done')
            
            if (isDone) {
                li.classList.remove('done')
            } else {
                li.classList.add('done')
            }
            
        },

        inputTask_keypress: function(e) {
            const key = e.key
            const value = e.target.value   /*Vamos digitado na caixa task */

            if (key === 'Enter') {
                this.$list.innerHTML += `
                    <li>
                        <div class="check"></div>
                        <label class="task">
                            ${value}
                        </label>
                        <button class="remove"></button>
                    </li>
                `

                e.target.value = ''

                this.cacheSelectors()
                this.bindEvents()

                const obj = [{
                    task: value
                }]

                localStorage.setItem('tasks', JSON.stringify(obj))
            }
        },

        removeButton_click: function(e) {
            let li = e.target.parentElement

            li.classList.add('removed')

            setTimeout(function(){
                li.classList.add('hidden')
            },300)
        }
    }


}

Main.init()




/* Colocar sempre um $ no começo da variavel que armazena algum elemento HTML*/

/* Importante fazer: console.log(this) para descobrir que é o this*/

/* função 'cacheSelectors' - Será responsavel por selecionar e armazenar os elementos HTML em uma variável */


/* função 'bindEvents' - Responsável em adicionar eventos, evetos de clique por exemplo, evento da tecla precionada "ENTER" */