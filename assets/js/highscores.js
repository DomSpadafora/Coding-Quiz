const displayScores = () => {
    let store = localStorage.highscores ? JSON.parse(localStorage.highscores) : [];

    if (store.length) {
        store.sort((a, b) => b.score - a.score); // sort from highest to lowest

        for (let i = 0; i < store.length; i++) {
            let { initials, score } = store[i];

            document.querySelector('tbody').innerHTML += `
                <tr>
                    <td>${initials}</td>
                    <td>${score}</td>
                </tr>
            `;
        }
    }
};

const clearScores = () => {
    window.localStorage.clear();
    document.querySelector('tbody').innerHTML = ''; // clear the table body
    displayScores(); // call the function to render an empty table
}

displayScores()

clearHighScores.addEventListener('click', clearScores);