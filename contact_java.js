document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const ussername = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(username);
    fetch("users.json")
      .then(response => response.json())
      .then(users => {
        const userExists = users.some(
          user => user.username === ussername && user.password === password
        );
        if (userExists){
          sessionStorage.setItem("username", ussername);
          alert("Autentificare reușita");
          setTimeout(function() {
            window.location.href = "/forum.html";
          }, 100);
        } else {
          window.location.href = "/404.html";
        }
  })
      .catch(error => {console.error("Eroare la preluarea listei de utilziatori: ", error)});
  });