  function confirmLogin() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            
            if (username === "" || password === "") {
                alert("Username dan Password harus diisi!");
            } else {
                var confirmation = confirm("Apakah anda ingin login?");

                if (confirmation) {
                    window.location.href = "Kelompok_Jeje.html";
                } else {
                    alert("Anda tidak jadi login");

                }
            } 
        }
