import { sum, parse } from './index.js'
 
console.log('From native', sum(40, 2))

console.log('Parse output', parse('class B { final String fieldName; const B(this.fieldName); int get length => fieldName.length; } '))