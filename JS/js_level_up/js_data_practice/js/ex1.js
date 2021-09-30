import _ from 'lodash' // From `node_modules`
import checkType from './getType' // getType.js
// import { random, user as chan } from './getRandom'
import * as R from './getRandom'

console.log(_.camelCase('the hello world')) // theHelloWorld
console.log(checkType([1, 2, 3,]))  // Array
// console.log(random(), random()) // 무작위 정수 두개
console.log(R)