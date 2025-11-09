const button = document.getElementById("proceed");
    const alert = document.getElementById("alert");
    

    button.addEventListener("click", (event) => {
        event.preventDefault();

        const answer = document.getElementById("answer").value;

        if (!answer) {
            alert.textContent = "answeri oy hahahahaha";
            alert.style.color = "blue";
            alert.classList.add("show");
            setTimeout(() => {
                alert.classList.remove("show");
            }, 3000);
            return;
        }

        if (answer === "Gilliane") {
            window.location.href = "home.html";
        } else {
            alert.textContent = "MALIIIIIIIIIIII!"
            alert.style.color = "red";
            alert.classList.add("show");
            setTimeout(() => {
                alert.classList.remove("show");
            }, 3000);
        }
    });
