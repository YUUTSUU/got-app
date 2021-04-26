export default class GotService {
  
  constructor() {
    this._apiBase = 'https://www.anapioficeandfire.com/api';
  }

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if(!res.ok) {
      throw new Error(`Could not fetch ${url}` + 
      `, received ${res.status}`)
    }    
    return await res.json();
  }
  
  async getAllCharacters() {
    const res = await this.getResource('/characters?page=117&pageSize=5');
    return res.map(this._transformCharacter)
  }
  async getCharacter(id) {
    const char = await this.getResource(`/characters/${id}`);
    return this._transformCharacter(char);
  }

  async getAllHouses() {
    const res = await this.getResource('/houses');
    return res.map(this._transformHouse);
  }
  async getHouse(id) {
    const house = await this.getResource(`/houses/${id}`);
    return this._transformHouse(house);
  }

  async getAllBooks() {
    const res = await this.getResource('/books');
    return res.map(this._transformBook);
  }
  async getBook(id) {
    const book = await this.getResource(`/books/${id}`);
    return this._transformBook(book);
  }

  _transformCharacter(char) {
    return {
      name: char.name,
      gender: char.gender,
      born: char.born,
      died: char.died,
      culture: char.culture
    }
  }

  _transformHouse(house) {
    return {
      name: house.name,
      region: house.region,
      words: house.words,
      titles: house.titles,
      overlord: house.overlord,
      ancestralWeapons: house.ancestralWeapons
    }
  }

  _transformBook(book) {
    return {
      name: book.name,
      numberOfPage: book.numberOfPage,
      publiser: book.publiser,
      released: book.released
    }
  }
}

// export default GotService;
