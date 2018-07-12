/*const world = require('./world');
console.log('hello ' + world);*/

//zmieniamy na ES6:
import world from './world';
console.log('hello ' + world);

/*Webpack zaczyna od app.js, widzi require('./world);
więc wchodzi do tego pliku (szukając ewentualnych importów w nim),
aby na końcu wrócić do app.js i wypisać wynik do konsoli.*/