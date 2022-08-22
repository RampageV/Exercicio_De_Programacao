const inputElement = document.querySelector(".new-task-input")/* O querySelector, retorna o primeiro elemento dentro do documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que corresponde ao grupo especificado de seletores.*/
const addTaskButton = document.querySelector(".new-task-button")
const tasksContainer = document.querySelector(".task_container")

/* Função para remover os espaço em branco do input */
const validateInput = () => inputElement.value.trim().length > 0; /* Returna se é true, o trim é o método que remove os espaço e verifica com o lenght se é maior que 0 */


/* Nessa função, caso validateInput não tiver nada, e se clica em adicionar, ele vai colocar uma classe chamado error e depois o input vai ficar vermelho, indicado que está algo errado */
const handleAddTask = () =>{

         const InputIsValid = validateInput(); // Verificando se o input é true

        if(!InputIsValid){ // Se o input não for válido
           return inputElement.classList.add("error"); // A gente adicionar uma classe nele, para deixa ele vermelho. Precisa informa a tag que precisa coloca a nova classe e depois escrever classList, para acessa o método add, que vai adicionar uma nova classe e depois no css vai mudar os valores que desejar.
        }

        const taskItemContainer = document.createElement("div"); // Criado uma classe, quando clicar no botão adicionar
        taskItemContainer.classList.add("task-item") // Nome da classe vai ser task-item
       
        const taskContainer = document.createElement("p");
        taskContainer.innerText = inputElement.value;

        const deleteItem = document.createElement("i")
        deleteItem.classList.add("fa-solid")
        deleteItem.classList.add("fa-trash-can")

        tasksContainer.appendChild(taskItemContainer)
        taskItemContainer.appendChild(taskContainer)
        taskItemContainer.appendChild(deleteItem)
 };
      

 /* Se caso aparecer aquele erro vermelho quando for adicionar uma tarefa, ao digita algo dentro do input, ela vai ser removida com essa função, utilizando o classList.remove("error") */
 const handleInputChange = () => {

      const InputIsValid = validateInput(); // Verificando se o input é true

      if(InputIsValid){ // Se for valido, vai remover a classe error e tira aquele vermelho da borda 
            return inputElement.classList.remove("error"); // ele vai tira a classe usando o classlist.remove
      }
 };


 addTaskButton.addEventListener("click", () => handleAddTask());

 inputElement.addEventListener("change", () => handleInputChange());

