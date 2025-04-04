document.getElementById('imitateButton').addEventListener('click', function() {
    var sound = document.getElementById('sound');
    sound.currentTime = 0; // Garante que o som sempre reinicie do começo

    setTimeout(() => {
        sound.play().catch(error => console.error("Erro ao reproduzir áudio:", error));
    }, 500); // Pequeno delay para efeito cômico
});
