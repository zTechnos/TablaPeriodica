/* script.js */
function showElementDetails(symbol, protons, neutrons, electrons) {
    const elementDetails = document.getElementById('element-details');
    const elementContent = document.getElementById('element-content');
    
    elementContent.innerHTML = `
        <h2>${symbol}</h2>
        <p>Protones: ${protons}</p>
        <p>Neutrones: ${neutrons}</p>
        <p>Electrones: ${electrons}</p>
        <img src="images/${symbol}.png" alt="Estructura atómica de ${symbol}">
    `;
    
    elementDetails.style.display = 'block';
}

function closeElementDetails() {
    const elementDetails = document.getElementById('element-details');
    elementDetails.style.display = 'none';
}
