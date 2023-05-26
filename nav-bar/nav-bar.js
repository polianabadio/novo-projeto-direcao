fetch('./nav-bar/nav-bar.html')
     .then(response => response.text())
     .then(data => {
        const navbar = document.createElement('nav');
        navbar.innerHTML = data;
        document.body.insertBefore(navbar, document.body.firstChild);
  });

  /*JAVA SCRIPT DO MODAL LOGIN*/
  function logar (){

      var Login = document.getElementById('Login').value;
      var senha = document.getElementById('senha').value;
  
      if(Login == "matheussalessales@gmail.com" && senha =="260920"){
          alert ('Usuário Logado');
          location.href ="index.html";
      }else{
          alert ('usuário ou senha incorretos')
      }}
  
      function mostrar() {
          const modal = document.getElementById('modal-login');
          modal.style.display = "block";
        }
  
      function ocultar () {
          const modal = document.getElementById('modal-login');
          modal.style.display = "none";
        }

      function mostrarCadastro() {
            const modal = document.getElementById('modal-cadastro');
            modal.style.display = "block";
        }
    
      function ocultarCadastro () {
            const modal = document.getElementById('modal-cadastro');
            modal.style.display = "none";
         }
      
      