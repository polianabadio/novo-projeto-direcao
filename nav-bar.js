function carregarNavBar() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Insere o conteúdo recebido no elemento com id 'nav-bar-container'
      document.getElementById("nav-bar-container").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "/nav-bar.html", true);
  xhttp.send();
}

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
      
      