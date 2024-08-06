function toggleDetails(element, symbol, period, group) {
    // Obtén el contenedor de detalles
    const details = element.querySelector('.element-details');

    // Alterna la visibilidad del contenedor de detalles
    if (details.style.display === 'block') {
        details.style.display = 'none';
    } else {
        // Oculta otros detalles abiertos
        const allDetails = document.querySelectorAll('.element-details');
        allDetails.forEach(detail => {
            detail.style.display = 'none';
        });

        // Muestra el detalle del elemento clicado
        details.style.display = 'block';
    }
}
