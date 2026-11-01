const fs = require('fs'), path = require('path');
console.log('Files here:', fs.readdirSync(__dirname));
const f = fs.readdirSync(__dirname)
  .filter(n => n.endsWith('.js') && n !== 'index.js')
  .sort((a, b) => fs.statSync(path.join(__dirname, b)).size - fs.statSync(path.join(__dirname, a)).size)[0];
console.log('Loading', f);
require('./' + f);
