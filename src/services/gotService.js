export default class GotService {
  
  constructor() {
    this._apiBase = 'https://www.anapioficeandfire.com/api';
  }

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if(!res.ok) {
      throw new Error(`Could not fetch ${url}` + 
      `, received ${res.status}`)
    }    
    return await res.json();
  }
  
  getAllCharacters = async () => {
    const res = await this.getResource('/characters?page=2&pageSize=100');
    // const res = await this.getResource('/characters/');

    return res.map(this._transformCharacter)
  }
  getCharacter = async (id) => {
    const char = await this.getResource(`/characters/${id}/`);
    return this._transformCharacter(char);
  }

  getAllHouses = async () => {
    const res = await this.getResource('/houses?page=2&pageSize=100');
    return res.map(this._transformHouse);
  }
  getHouse = async (id) => {
    const house = await this.getResource(`/houses/${id}/`);
    return this._transformHouse(house);
  }

  getAllBooks = async () => {
    const res = await this.getResource('/books?page=2&pageSize=100');
    return res.map(this._transformBook);
  }
  getBook = async (id) => {
    const book = await this.getResource(`/books/${id}/`);
    return this._transformBook(book);
  }

  // isData(data) {
  //   if (data) {
  //     return data
  //   } else {
  //     return 'There is no data'
  //   }
  // }

  // _extractId = (item) => {
  //   const idRegExp = /\/([0-100]*)$/;
  //   return item.url.match(idRegExp)[1];
  // }

  _transformCharacter = (char) => {
    return {
      // id: this._extractId(char),
      name: char.name,
      gender: char.gender,
      born: char.born,
      died: char.died,
      culture: char.culture,
      url: char.url
    }
  }

  _transformHouse = (house) => {
    return {
      name: house.name,
      region: house.region,
      words: house.words,
      titles: house.titles,
      overlord: house.overlord,
      ancestralWeapons: house.ancestralWeapons
    }
  }

  _transformBook = (book) => {
    return {
      name: book.name,
      numberOfPage: book.numberOfPage,
      publiser: book.publiser,
      released: book.released
    }
  }
}