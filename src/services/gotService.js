export default class GotService {
  _apiBase = 'https://www.anapioficeandfire.com/api';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {throw new Error(`Could not fetch ${url}, received ${res.status}`)}    
    return await res.json();
  }
  

  getAllCharacters = async () => {
    const res = await this.getResource('/characters?page=5&pageSize=100/');
    return res.map(this._transformCharacter)
  }
  getCharacter = async (key) => {
    const character = await this.getResource(`/characters/${key}/`);
    return this._transformCharacter(character);
  }


  getAllHouses = async () => {
    const res = await this.getResource('/houses/');
    return res.map(this._transformHouse);
  }
  getHouse = async (key) => {
    const house = await this.getResource(`/houses/${key}/`);
    return this._transformHouse(house);
  }


  getAllBooks = async () => {
    const res = await this.getResource('/books/');
    return res.map(this._transformBook);
  }
  getBook = async (key) => {
    const book = await this.getResource(`/books/${key}/`);
    return this._transformBook(book);
  }


  isData = (data) => {
    return data ? data : 'There is no data';
  }

  _extractKey = (item) => {
    const regExp = /\/([0-9]*)$/;
    return item.url.match(regExp)[1];
  }

  _transformCharacter = (item) => {
    return {
      key: this._extractKey(item),
      name: this.isData(item.name),
      gender: this.isData(item.gender),
      born: this.isData(item.born),
      died: this.isData(item.died),
      culture: this.isData(item.culture)
    }
  }

  _transformHouse = (item) => {
    return {
      key: this._extractKey(item),
      name: this.isData(item.name),
      region: this.isData(item.region),
      words: this.isData(item.words),
      titles: this.isData(item.titles),
      overlord: this.isData(item.overlord),
      ancestralWeapons: this.isData(item.ancestralWeapons)
    }
  }

  _transformBook = (item) => {
    return {
      key: this._extractKey(item),
      name: this.isData(item.name),
      numberOfPage: this.isData(item.numberOfPage),
      publiser: this.isData(item.publiser),
      released: this.isData(item.released)
    }
  }
}