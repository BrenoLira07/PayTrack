
const users = [
    { username: 'PayTrack', password: 'pay2024track' },
];

function login(event) {

    event.preventDefault(); 

    const userInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    // Verificar se as credenciais estão corretas
    const user = users.find(u => u.username === userInput && u.password === passwordInput);

    /* ----------------------------------------------------------------
    -Teste de quandtidade de números por senhA

    if (passwordInput < 8) {
        alert('A senha precisa ter pelo menos 8 caracteres');
        return;
    }----------------------------------------------------------------*/

    if (user) {
        alert('Login bem-sucedido!');
        localStorage.setItem('loggedIn', true);
        window.location.href = "paytrack_cto.html"; 
    } else {
        alert('Usuário ou senha incorretos');
    }
}

const iconpassword = document.getElementById('eye');  
const password = document.getElementById('password');  

iconpassword.addEventListener('click', () => {
    
    if (password.type === 'password') {
        password.type = 'text';  
        iconpassword.classList.remove("fa-eye");  
        iconpassword.classList.add("fa-eye-slash");  
    } else {
        password.type = 'password';  
        iconpassword.classList.remove("fa-eye-slash");  
        iconpassword.classList.add("fa-eye");  
    }
});
