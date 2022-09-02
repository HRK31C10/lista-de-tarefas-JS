const novaTarefa = document.querySelector('[data-form-button]')

//criando o evento de clique
novaTarefa.addEventListener('click',(evento)=>{
    evento.preventDefault()

    //pegando o input do HTML
    const input = document.querySelector('[data-form-input]')
    const lista = document.querySelector('[data-list]')

    //pegando o valor de input (oq o usuario vai digitar)
    const valor = input.value

    //apagando a mensagem de input
    console.log(valor)
  

    const tarefa = document.createElement('li')
   
    //colocando um efeito CSS no meu texto
    tarefa.classList.add('task')

    //colocando a variavel valor dentro de conteudo
    const conteudo = `<p class="content">${valor}</p>`
    tarefa.innerHTML = conteudo
    lista.appendChild(tarefa)
    input.value = ""
    


})