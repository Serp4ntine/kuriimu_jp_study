document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.getElementById('grid-container');
    
    // Example data for Hiragana
    const hiraganaChars = [
        { name: 'あ', code: 'a' },
        { name: 'い', code: 'i' },
        // Add more characters as needed
    ];

    // Function to create and append card elements
    function createCharCard(char) {
        const card = document.createElement('div');
        card.className = 'char-card';
        card.innerHTML = `
            <p>${char.name} (${char.code})</p>
        `;
        return card;
    }

    // Append cards to the grid container
    hiraganaChars.forEach(char => {
        const card = createCharCard(char);
        gridContainer.appendChild(card);
    });
});