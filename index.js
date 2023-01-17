

function isEqualSymbols(str1, str2) { 
  /*
  if (str1.length !== str2.length){
    return false
    ;  }return true
*/
const arrStr1 = str1.split('')
const arrStr2 = str2.split('')
if (arrStr1.length != arrStr2.length) {return false}

/*for (let i=0; i<arrStr1.length; i++)
    if(arrStr1[i] !== arrStr2[i]) 
        {return false} 
*/ 
//данная проверка не работает 
arrStr1.sort((a, b) => {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
  return 0;
})
const arrStr1Join = arrStr1.join()
const arrStr2Join = arrStr2.join()
if(arrStr1Join != arrStr2Join) return false

  return true
} 

console.log(isEqualSymbols('адрес', 'среда')) // true 
console.log(isEqualSymbols('ноутбук', 'программист')) // false 
