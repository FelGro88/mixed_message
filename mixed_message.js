// return a number between 0 and val
const randNumber = (val) => {
  return Math.floor(Math.random() * val)
}

const mixed = {
  _greeting: {
    morning: [
      'Guten Morgen', 'Moin', 
    ],
    evening: [
      'Guten Abend', 'Nabend'
    ],
    allgemein: [
      'Hallo', 'Servus', 'Moin', 'Guten Tag'
    ]
  },
  _botName: ['Jana', 'Stefan', 'Mario', 'Sabine'],
  _zitat: [
    'Unzufriedenheit ist der erste Schritt zum Erfolg. - Oscar Wilde',
    'Denke nicht so oft an das, was dir fehlt, sondern an das was du hast. - Marc Aurel',
    'An sich ist nichts weder Gut noch Böse - Das Denken macht es erst dazu. - Shakespeare'
  ],
  get greeting() {
    let dat = new Date();

    if (dat.getHours() > 6 && dat.getHours() < 12) {
      greet =  (this._greeting.morning[randNumber(this._greeting.morning.length)]);
    } else if (dat.getHours() > 16 && dat.getHours() < 24) {
      greet =  (this._greeting.evening[randNumber(this._greeting.evening.length)]);
    } else {
      greet = (this._greeting.allgemein[randNumber(this._greeting.allgemein.length)]);
    }
    return greet
  },
  get botName() {
    return this._botName[randNumber(this._botName.length)]
  },
  get zitat() {
    return this._zitat[randNumber(this._zitat.length)]
  },
  get mixedMessage() {
    return `${this.greeting}. Ich bin ${this.botName}. Hier ist das Zitat des Tages: ${this.zitat}.`
  }
}

console.log(mixed.mixedMessage)