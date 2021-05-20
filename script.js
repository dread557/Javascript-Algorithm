// Task 1

function  getCelsius(value) {
    let fToCel = (value - 32) * 5/9;
    let n = fToCel.toFixed(4);
    console.log(n);
}


function convertFahrToCelsius(value) {
   if(typeof(value) === 'string') {
      if(isNaN(value)) {
         console.log(`${JSON.stringify(value)} is not a valid number but a/an ${typeof(value)}`);
         return `${JSON.stringify(value)} is not a valid number but a/an ${typeof(value)}`;
      } else if (value === "") {
        console.log(`"" is not a valid parameter but a string`);
      } else {
         return getCelsius(JSON.stringify(value));
      } 
   } else if (typeof(value) === 'boolean') {
      console.log(`${JSON.stringify(value)} is not a valid parameter but a boolean`);
      return `${JSON.stringify(value)} is not a valid parameter but a boolean`;
   } else if (typeof(value) === 'number') {
      return getCelsius(JSON.stringify(value));
   } else if(!Array.isArray(value)) {
      console.log(`${JSON.stringify(value)} is not a valid number but a/an object`);
      return `${value} is not a valid number but a/an object`;
   } else if (Array.isArray(value)) {
    console.log(`${JSON.stringify(value)} is not a valid number but a/an array`);
    return `${JSON.stringify(value)} is not a valid number but a/an array`;
   } 
}

// Task 2


function checkYuGiOh(n) {
   const arr = [];
    let yu = 0;
    let gi = 0;
    let oh = 0;
for (let i = 1; i <= n; i++) {
        var result = "";
        yu = i%2;
        gi = i%3;
        oh = i%5;
        if (yu ===0 && gi === 0 && oh === 0 ) {
           result += "yu-gi-oh";
           arr.push("yu-gi-oh");
        } else if (yu ===0 && gi === 0 ){ 
           result += "yu-gi";
           arr.push("yu-gi");
        }else if (yu ===0 && oh === 0 ) {
           result += "yu-oh";
           arr.push("yu-oh");
        } else if(yu === 0) {
           result += "yu";
           arr.push("yu");
        } else if(gi === 0) {
           result += "gi";
           arr.push("gi");
        } else if(oh === 0) {
           result += "oh";
           arr.push("oh");
        } else {
           result += i;
           arr.push(i);
        }
        
    }
    
    if(isNaN(n) || typeof(n) === 'boolean') {
       console.log(`invalid parameter: ${JSON.stringify(n)}`);
       return `invalid parameter: ${JSON.stringify(n)}`;
    } else {
       console.log(arr || i);
       return (arr || i);
    }
}

