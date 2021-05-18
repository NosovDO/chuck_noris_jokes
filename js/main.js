const fieldCategory = document.querySelector('.categories');
const btn = document.querySelector('.btn');
const jokes = document.querySelector('.jokes');

class FetchServices {
    static shared = new FetchServices();
    constructor() {
        this._url = 'https://api.chucknorris.io/jokes/';
    }
    getCatigories() {
        return fetch(`${this._url}categories`)
        .then(data => data.json())
    }
    getCatigoriesJokes(catigorie) {
        return fetch(`${this._url}random?category=${catigorie}`)
        .then(data => data.json())
    }
}

function addSelect() {
    FetchServices.shared.getCatigories()
    .then(item => {
        btn.disabled = false;
        item.forEach(element => fieldCategory.innerHTML += `<option>${element}</option>`
        )})
}

addSelect();

btn.addEventListener('click', () => {
    FetchServices.shared.getCatigoriesJokes(fieldCategory.value)
    .then(item => jokes.innerHTML = `<h1>${item.value}</h1>`)
});