export function insertionsort(array){
  const animations = [];

  for(let firstUnsortedIndex = 1; firstUnsortedIndex < array.length; firstUnsortedIndex++){
    var newElement = array[firstUnsortedIndex];
    
    var i;
    for(i = firstUnsortedIndex; i > 0 && array[i-1] > newElement; i--){
      
      // colors the elements being compared
      animations.push([i-1, firstUnsortedIndex]);

      // de-colors the elements being compared
      animations.push([i-1, firstUnsortedIndex]);
      var temp = array[i-1];
      array[i-1] = array[i];
      array[i] = temp;

      // swaps elements;
      animations.push([i-1, array[i-1]]);
      animations.push([i, array[i]]);
    }
    array[i] = newElement;
  }
  return animations;
}