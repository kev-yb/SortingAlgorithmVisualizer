export function quicksort(array){
  const animations = [];
  quicksortHandler(array, 0, array.length-1, animations);
  return animations;
}

function quicksortHandler(array, left, right, animations){
  if(left >= right) return;
  const middle = Math.floor((left + right) / 2);
  const pivot = array[middle];

  // colors the pivot element
  animations.push([middle]);   

  const index = partition(array, left, right, pivot, animations);

  if(left < index - 1) quicksortHandler(array, left, index-1, animations);
  if (index < right) quicksortHandler(array, index, right, animations);
}

function partition(array, left, right, pivot, animations){
  while(left <= right){
    while(array[left] < pivot){
      left++;
    }
    while(array[right] > pivot){
      right--;
    }
    if(left <= right){
      // colors the elements to be swapped
      animations.push([left, right]);
      
      // de-colors the elements to be swapped
      animations.push([left, right]);

      // swap method
      const temp = array[left];
      array[left] = array[right];
      array[right] = temp;

      //visualizes the swap
      animations.push([left, array[left], 0]);
      animations.push([right, array[right], 0]);

      left++;
      right--;
    }
  }
  return left;
}