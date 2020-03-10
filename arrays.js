var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(chocolateBars, element){
  return [(element), ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, element){
  chocolateBars.unshift(element);
    return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, element){
  return [...chocolateBars, (element)];
}

function destructivelyAddElementToEndOfArray(chocolateBars, element){
  chocolateBars.push(element);
  return chocolateBars;
}

function accessElementInArray(chocolateBars, index){
  return chocolateBars[(index)];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
    return array;
}

function removeElementFromBeginningOfArray(array){
  array = array.slice(1);
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {

}

function removeElementFromEndOfArray(array){

}
