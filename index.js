// Your code here
function mapToNegativize(array){
  let negs = []
  array.forEach(elem => {
   negs.push( elem - (elem * 2) )
  });
  return negs
}

function mapToNoChange(array){
  return array
}

function mapToDouble(array){
  let doubled = []
  array.forEach( elem => {
    doubled.push( elem * 2 )
  })
  return doubled
}

function mapToSquare(array){
  let square = []
  array.forEach( elem => {
    square.push( elem ** 2 )
  })
  return square
}

function reduceToTotal(array, start = 0){
  let total = start 
  array.forEach( elem => {
    total += elem
  })
  return total 
}

function reduceToAllTrue(array){
  let result = true 
  array.forEach( elem => {
    if ( elem == false ) { return result = false }
  }) 
  return result 
}

function reduceToAnyTrue(array){
  let result = false 
  array.forEach( elem => {
    if( elem == true ) { return result = true }
  })
  return result 
}