fetch('./nav-bar/nav-bar.html')
     .then(response => response.text())
     .then(data => {
        const navbar = document.createElement('nav');
        navbar.innerHTML = data;
        document.body.insertBefore(navbar, document.body.firstChild);
  });
