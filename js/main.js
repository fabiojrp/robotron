    // const subtrair = document.querySelector("#subtrair");
    // const somar = document.querySelector("#somar");    
    const controles = document.querySelectorAll("[data-controle]");

    controles.forEach(function(controle) {
        controle.addEventListener("click", function(evento) {
            manipularDados(evento.target.textContent,
                evento.target.parentNode.querySelector("[data-contador]"));

        });
    });

    function manipularDados(operacao, contPeca) {
        if (operacao == "-") {
            contPeca.value--;
            //console.log("subtrair");
        } else
        if (operacao == "+") {
            contPeca.value++;
            //console.log("somar");
        }
    }



    // somar.addEventListener("click", function() {
    //     //braco.value = parseInt(braco.value) + 1;
    //     braco.value++;
    // });

    // subtrair.addEventListener("click", function() {
    //     if (braco.value > 0)
    //         braco.value--;
    // });