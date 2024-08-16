let formulario = document.getElementById('form');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    let alarma = document.getElementById('hora').value;
    let audioArlarma = document.getElementById('audio-Alarma');

    let intervale = setInterval(() => {
        let hora = new Date();
        let hours = hora.getHours().toString().padStart(2, '0') + ':'+'hs' + hora.getMinutes().toString().padStart(2, '0')+'hs';
        console.log('Hora actual:', hours);
        console.log('Hora de la alarma:', alarma);

        if (hours === alarma) {
            console.log('Hora coincide con la alarma');
           

            // Reproduce el audio directamente
            audioArlarma.play(); // Cambiado de `onplay` a `play()`

            clearInterval(intervale); // Detiene el intervalo
        }
    }, 1000); // Ejecuta cada segundo
});

