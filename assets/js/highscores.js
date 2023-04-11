let store = localStorage.highscores ? JSON.parse(localStorage.highscores) : [];

if(store.length) {
    for (let i = 0; i < store.length; i++) {
        let {index, initials,score} = store[i];
        store.sort((a, b) => b.score - a.score);

        document.querySelector('tbody').innerHTML += `
            <tr>
                <td>${index}</td>
                <td>${initials}</td>
                <td>${score}</td>
            </tr>
        
        `;
    }
}