const fs = require('fs').promises;

async function readFileAsync() {
  try {
    const data = await fs.readFile('example.txt', 'utf8');
    console.log('Async/Await result:', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

readFileAsync();
