const inputElement = document.querySelector(".new-task-input")/* O querySelector, retorna o primeiro elemento dentro do documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que corresponde ao grupo especificado de seletores.*/
const addTaskButton = document.querySelector(".new-task-button")

/* Função para remover os espaço em branco do input */
const validateInput = () => inputElement.value.trim().lenght > 0; /* Returna se é true, o trim é o método que remove os espaço e verifica com o lenght se é maior que 0 */

const handleAddTask = () =>{

         const InputIsValid = validateInput() // Verificando se o input é true

        if(!InputIsValid){ // Se o input não for válido
           return inputElement.classList.add("error") // A gente adicionar uma classe nele, para deixa ele vermelho. Precisa informa a tag que precisa coloca a nova classe e depois escrever classList, para acessa o método add, que vai adicionar uma nova classe e depois no css vai mudar os valores que desejar.
        }         
 }
      
 const handleInputChange = () => {
      const InputIsValid = validateInput()

      if(InputIsValid){
            return inputElement.classList.remove("error")
      }
 }

 addTaskButton.addEventListener("click", () => handleAddTask())

 inputElement.addEventListener("change", () => handleInputChange())

