export function bubblesort(array){
  const animations = [];

  for(let lastUnsortedIndex = array.length - 1; lastUnsortedIndex > 0; lastUnsortedIndex--){
    for(let i = 0; i < lastUnsortedIndex; i++){

      // colors the elements being compared
      animations.push([i, i+1]);

      // de-colors the elements being compared
      animations.push([i, i+1]);

      if(array[i]>array[i+1]){
        var temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;

        // swap elements
        animations.push([i, array[i], 0]);
        animations.push([i+1, array[i+1], 0]);
      }
    }
  }
  return animations;
}