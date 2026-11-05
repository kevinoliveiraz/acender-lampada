
const interruptor = document.getElementById("interruptor"); // Busca o botão pelo ID no HTML

const lampada = document.getElementById("imagem-lampada"); // Busca a imagem da lâmpada pelo ID

let ligada = false; // Guarda o estado da lâmpada: false significa apagada


interruptor.addEventListener("click", function() { // Executa a função quando o botão recebe um clique

    if (ligada === false) { // Verifica se a lâmpada está apagada

        lampada.src = "img/lâmpada/acesa.png"; // Troca para a imagem acesa

        lampada.alt = "Lâmpada acesa"; // Atualiza a descrição da imagem

        interruptor.setAttribute("aria-pressed", "true"); // Informa que o botão foi ativado

        ligada = true; // Atualiza o estado da lâmpada para ligada

    } else { // Executa caso a lâmpada já esteja ligada

        lampada.src = "img/lâmpada/apagada.png"; // Troca para a imagem apagada

        lampada.alt = "Lâmpada apagada"; // Atualiza a descrição da imagem

        interruptor.setAttribute("aria-pressed", "false"); // Informa que o botão foi desativado

        ligada = false; // Atualiza o estado da lâmpada para apagada

    }

}); // Finaliza o evento de clique
