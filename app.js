const fs = require('fs');

fs.writeFileSync('test.txt', 'add library changed to PR template\n');
fs.appendFileSync('test.txt', 'update Docker files to copy after npm install');