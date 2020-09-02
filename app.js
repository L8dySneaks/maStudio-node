const fs = require('fs');

fs.writeFileSync('test.txt', 'add library changed to PR template\n');
fs.appendFileSync('test.txt', 'update Docker files to copy after npm install\n');
fs.appendFileSync('test.txt', 'write steps needing to be done for new image manager update\n');
fs.writeFileSync('test.txt', 'does this work?\n');
