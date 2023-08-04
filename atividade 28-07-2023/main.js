function validateForm() {
    var emailInput = document.getElementById('email').value;
    var usuarioInput = document.getElementById('usuario').value;
    var senhaInput = document.getElementById('senha').value;

    
    if (emailInput === 'tavaresluanace207@gmail.com' && usuarioInput === 'Luana Tavares' && senhaInput === '9999') {
        alert('Login feito com sucesso.');
    } else {
        alert('Erro de login. Cheque suas informações.');
    }
}