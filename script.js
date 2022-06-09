function logar() {
    var login = document.getElementById('usuário').value
    var senha = document.getElementById('senha').value
    
      if (login == 'Voluntario01' && senha == '12345'){
        alert("Boa, login foi um sucesso!")
        location.href = "login.html"
      }else {
        alert("Erro, esse usuário ou senha não existe, tente novamente.")
      }
    }