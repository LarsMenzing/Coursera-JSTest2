// Hämtar referenser till knappen och informationsblocket.
const submitButton = document.getElementById('submitBtn');
const userInfo = document.getElementById('userInfo');

/**
 * Funktion för att samla in formulärdata och presentera den.
 * Notera: Variabelvärdena hämtas INUTI funktionen
 * för att säkerställa att vi får de aktuella värdena från fälten
 * vid tidpunkten för klicket.
 */
function submitFeedback() {
    // Hämta de aktuella värdena från inputfälten när funktionen körs
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    // Enkel validering för att se till att alla fält är ifyllda
    if (!username || !age || !email || !job || !designation || !productType || !feedback) {
        // I en riktig app skulle man visa ett snyggare felmeddelande
        console.error("Vänligen fyll i alla obligatoriska fält.");
        userInfo.style.display = 'none';
        return; // Stoppa exekvering om fält saknas
    }

    // Presentera informationen
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    // Visa informationsblocket
    userInfo.style.display = 'block';
}

// Koppla submitFeedback till klickhändelsen på knappen
if (submitButton) {
    submitButton.onclick = submitFeedback;
}

// Lyssna efter "Enter"-tryck på hela dokumentet för att skicka in formuläret
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});