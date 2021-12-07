//write your code here
// 1
const pluralize = arr => {
    const plurArr = arr.map(word => {
        if(word[word.length - 1] !== 's') {
            return word + 's';
        }
    })
    return plurArr;
}

// 2 
const uppercase = arr => {
    const upperC = arr.map(word => {
      if(word[0] !== word[0].toUpperCase()) {
  
        return word[0].toUpperCase() + word.substring(1);
      }
    })
    return upperC;
  
  }

// 3
const longwords = arr => {
    const result = arr.filter(word => word.length > 3);
    return result; 
  }

// 4
const shortwords = arr => {
    const result = arr.filter(word => word.length < 5);
    return result; 
  }

// 5 
const oddLength = arr => {
    const result = arr.filter(word => {
      console.log(word.length)
      return word.length % 2 !== 0;
    })
    return result;
 }

 // 6 
 const longToShort = arr => {
    const sortArr = arr.sort((a, b) => {
      return b.length - a.length;
    } )
    return sortArr;
  }

// 7
const sum = arr => {
    function add(accumulator, a) {
    return accumulator + a;
  }
    return arr.reduce(add, 0)
  }
  
  