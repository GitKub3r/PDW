document.addEventListener('DOMContentLoaded', function() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const textToCopy = this.getAttribute('data-text');
            
            // Crear un elemento de texto temporal
            const tempInput = document.createElement('textarea');
            tempInput.value = textToCopy;
            document.body.appendChild(tempInput);
            
            // Seleccionar y copiar el texto
            tempInput.select();
            document.execCommand('copy');
            
            // Eliminar el elemento temporal
            document.body.removeChild(tempInput);
            
            // Mostrar alguna indicación visual de que se ha copiado
            // Por ejemplo, podrías cambiar el color del botón o mostrar un mensaje
            this.classList.add('copied');
            setTimeout(() => {
                this.classList.remove('copied');
            }, 1000); // Después de 1 segundo, eliminar la clase "copied"
        });
    });
});
