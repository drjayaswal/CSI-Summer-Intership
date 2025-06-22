const fs = require('fs').promises;

fs.readFile('example.txt', 'utf8')
  .then(data => {
    console.log('Promise result:', data);
  })
  .catch(err => {
    console.error('Error reading file:', err);
  });
