import React from 'react';

export function mergesort(array){
  const animations = [];
  if(array.length <= 1) return array;
  const temp = array.slice();
  mergesortHandler(array, 0, array.length-1, temp, animations);
  return animations;
}

function mergesortHandler(array, leftStart, rightEnd, temp, animations){
  if(leftStart >= rightEnd) return;
  const mid = Math.floor((leftStart+rightEnd)/2);
  mergesortHandler(temp, leftStart, mid, array, animations);
  mergesortHandler(temp, mid+1, rightEnd, array, animations); 
  merge(array, leftStart, mid, rightEnd, temp, animations);
}

function merge(array, leftStart, mid, rightEnd, temp, animations){
  let a = leftStart;
  let b = leftStart;
  let c = mid + 1;

  while(b <= mid && c <= rightEnd){

    // colors the two elements being compared
    animations.push([b,c]);

    // de-colors the two elements being compared
    animations.push([b,c]);

    if(temp[b] <= temp[c]){
      // add animation
      animations.push([a, temp[b]]);
      array[a++] = temp[b++];
    }
    else{
      animations.push([a, temp[c]]);
      array[a++] = temp[c++];
    }
  }

  while(b <= mid){
    // colors the two elements being compared
    animations.push([b,b]);

    // de-colors the two elements being compared
    animations.push([b,b]);

    // add animation
    animations.push([a, temp[b]]);
    array[a++] = temp[b++];
  }

  while(c <= rightEnd){
    animations.push([c,c]);
    animations.push([c,c]);
    animations.push([a, temp[c]]);
    array[a++] = temp[c++];
  }
}
