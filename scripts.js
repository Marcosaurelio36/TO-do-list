const button= document.querySelector('.button-task')
const input= document.querySelector('.input-task')
const taskCompleted = document.querySelector('.list-tasks')


let myListOfItens = []


function addNewTask () {
    myListOfItens.push({
        tarefa:input.value,
        concluida:false,
    })

    input.value=''

    mostrarTarefas()
}

    function mostrarTarefas() {
        let newTask =''

        myListOfItens.forEach((item,posicao)=>{

            newTask =
            newTask + 
            `

            <li class="task ${item.concluida && 'done'}">
            <img src="./assets/checked.png" alt="imagem de checked" onclick ="concluirTarefa(${posicao})">
            <p>${item.tarefa}</p>
            <img src="./assets/trash.png" alt="tarefa-para-o-lixo" onclick="deletOfItem (${posicao})">
        </li>
            `
        })


        taskCompleted.innerHTML= newTask

        localStorage.setItem('lista',JSON.stringify(myListOfItens))  //json stringfy trasnforma o texto em string//
    }

    function concluirTarefa(posicao){
        myListOfItens[posicao].concluida = !myListOfItens[posicao].concluida

        mostrarTarefas()
    }

     function deletOfItem (posição){
        myListOfItens.splice (posição, 1)

        mostrarTarefas ()
     }

     function recarregarTarefas(){
        const tarefasDoLocalStorage = localStorage.getItem('lista')

        if (tarefasDoLocalStorage){
            myListOfItens = JSON.parse(tarefasDoLocalStorage)//json.parse transforma em objeto//
        }
        mostrarTarefas()
     }
      recarregarTarefas()

button.addEventListener('click',addNewTask)