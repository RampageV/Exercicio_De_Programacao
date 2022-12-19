var email = document.getElementById('email')
var senha = document.getElementById('senha')

email.addEventListener('focus',()=>{
    email.style.borderColor = "#5F7C8A"
});

email.addEventListener('blur',()=>{ // O evento blur é acionado quando um elemento perde foco
    email.style.borderColor = "#ccc" // #ccc é cor padrão das bordas
})

senha.addEventListener('focus',()=>{
    senha.style.borderColor = "#5F7C8A"
})

senha.addEventListener('blur',()=>{
    senha.style.borderColor = "#ccc"
})

