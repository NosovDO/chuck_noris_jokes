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

