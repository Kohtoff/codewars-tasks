// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function(size) {
    let result = [];
    for(let x = 1; x <= size; x++){
      let tempArr = [];
      for(let y = 1; y <= size; y++){
        tempArr.push(x*y)
      }
      result.push(tempArr)
    }
    return result
  }