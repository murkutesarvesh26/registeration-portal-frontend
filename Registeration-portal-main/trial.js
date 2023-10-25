function showCompetition(moduleCard) {
    const moduleCards = document.querySelectorAll('.module-card');
    moduleCards.forEach(card => {
        card.classList.remove('active');
        card.querySelector('img').style.filter = 'grayscale(100%)';
    });

    moduleCard.classList.add('active');
    moduleCard.querySelector('img').style.filter = 'grayscale(0%)';

    // Replace with the content of competitions for this module
    const competitionContainer = document.getElementById('competitions');
    competitionContainer.innerHTML = `
        <h3>Competitions for ${moduleCard.querySelector('h2').innerText}</h3>
        <p>Competition 1 description...</p>
        <p>Competition 2 description...</p>
        <!-- Add more competitions here -->
    `;
    competitionContainer.classList.add('active');
}
