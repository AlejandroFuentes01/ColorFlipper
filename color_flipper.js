document.addEventListener('DOMContentLoaded', function () {
    const colorBox = document.getElementById('colorBox');
    const flipButton = document.getElementById('flipButton');

    // Array de colores para el Color Flipper
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#9b59b6', '#f39c12', '#1abc9c', '#34495e', '#e67e22'];

    // Función para cambiar el color del color-box
    function changeColor() {
        const randomIndex = Math.floor(Math.random() * colors.length);
        const newColor = colors[randomIndex];
        colorBox.style.backgroundColor = newColor;
    }

    // Event listener para cambiar el color al hacer clic en el color-box
    colorBox.addEventListener('click', changeColor);

    // Event listener para cambiar el color al hacer clic en el botón
    flipButton.addEventListener('click', changeColor);
});
