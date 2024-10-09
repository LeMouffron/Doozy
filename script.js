document.addEventListener('DOMContentLoaded', () => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.querySelector('.container');
    const darkModeToggle = document.getElementById('darkModeToggle');
    let darkMode = false;

    signUpButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
    });

    darkModeToggle.addEventListener('click', () => {
        darkMode = !darkMode;
        document.body.classList.toggle('dark-mode', darkMode);
        darkModeToggle.textContent = darkMode ? '🌞' : '🌙'; // Alterna ícone
    });

    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // Função para registrar usuário
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Verifica se o usuário já existe
        const userExists = users.some(user => user.email === email);
        if (userExists) {
            alert('Usuário já cadastrado!');
        } else {
            users.push({ name, email, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Cadastro realizado com sucesso!');

            // Redirecionar o usuário para a tela de login após o cadastro
            document.querySelector('.container').classList.remove('right-panel-active');
        }
    });

    // Função para login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            alert(`Bem-vindo, ${user.name}!`);
            localStorage.setItem('currentUser', JSON.stringify(user));
            window.location.href = '/Doozy/ToDo/todo.html'; // Redirecionar para a página principal
        } else {
            alert('E-mail ou senha incorretos!');
        }
    });
});
