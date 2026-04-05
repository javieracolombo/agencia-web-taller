document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    // Obtener valores
    const nombre = document.querySelector('input[name="nombre"]').value;

    // Mostrar mensaje
    document.getElementById("mensaje").textContent = "Gracias " + nombre + ", te contactaremos pronto 🌸";

    // Limpiar formulario
    this.reset();
});