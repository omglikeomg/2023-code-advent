import fs from 'fs';

const input = fs.readFileSync('./01/input.txt', 'utf8');

const inputArray = input.split('\n').filter(Boolean);

const result = inputArray.map((input) => {
  const firstNumber = input.match(/\d/);
  const lastNumber = input.replace(/.*(\d).*/, '$1');
  const output = firstNumber + lastNumber;
  return output;
});

export default result
