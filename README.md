Advent of Code 2023
https://adventofcode.com/

Installation
npm install

Execution
Just run npm start to receive on the console all the days results npm start

Adding more solutions
For adding a new solution, You need to add 2 files:

Solution File - index.js
This file will return the solution of the challenge. For that, there is a function called returnResult(result1, result2) which you can use to export as default.

import { returnResult } from '../helper.js'

export default returnResult(123, 1234)
Also, the helper file has another function called getInput(day, splitBy) that allows you to get the input values of the challenge.

The day value is a number / string of the current day. It must match with the day directory.
The splitBy value is the value used to split the file. By default is the line break (\n)
Input file - input.txt
Just create a .txt file with the input information that the challenge gives to you.
