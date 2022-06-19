import React from "react";
import {useState, useEffect} from 'react';
import Header from "./Header.js";
import {mergesort} from "../Algorithms/Mergesort.js";
import {quicksort} from "../Algorithms/Quicksort.js";
import {bubblesort} from "../Algorithms/Bubblesort.js";
import {insertionsort} from "../Algorithms/Insertionsort.js";
import "./style.css";

export default function Visualizer(props) {

  const [currentArrays, setArrays] = useState([]);
  const sortingMethod = props.method;
  const defaultColor = '#31d658';
  const comparisonColor = 'red';
  const pivotColor = 'purple';

  // Generates random integers between min and max
  function randomIntGenerator(min, max){
    return Math.floor(Math.random()*(max - min + 1) * min);
  }

  // Resets arrays upon clicking the rest button
  function resetHandler(){
    const arrays = [];
    for(let i = 0; i < 150; i++){
      arrays.push(randomIntGenerator(10, 70));
    }  
    setArrays(arrays);
  }

  // Disables buttons
  function freezeButtons(array){
    const changedStyle={
      position: 'relative',
      top: `${15}px`,
      width: `${120}px`,
      height: `${50}px`,
      fontSize: `${14}px`,
      borderColor: 'red',
      color: 'white',
      backgroundColor: 'red',
      borderRadius: `${7}px`,
      fontWeight: 'bold'
    }
    for(let i = 0; i < array.length; i++){
      array[i].disabled = true;
      Object.assign(array[i].style, changedStyle);
    }
  }

  // Enables buttons
  function unfreezeSortButtons(array){
    const changedStyle={
      position: 'relative',
      top: `${15}px`,
      width: `${120}px`,
      height: `${50}px`,
      fontSize: `${14}px`,
      borderColor: 'green',
      color: 'green',
      backgroundColor: 'white',
      borderRadius: `${7}px`,
      fontWeight: 'normal'
    }
    for(let i = 0; i< array.length; i++){
      array[i].disabled = false;
      Object.assign(array[i].style, changedStyle);
    }
  }

  // Disables speed dropdown items
  function freezeDropDown(array){
    for(let i = 0; i < array.length; i++){
      array[i].style.pointerEvents = "none";
    }
  }

  // Enables speed dropdown items
  function unfreezeDropDown(array){
    for(let i = 0; i < array.length; i++){
      array[i].style.pointerEvents="auto";
    }
  }

  // Animates mergesort
  function mergeSort(timeDelay){
    const buttons = document.getElementsByClassName("buttons");
    const speedDropDown = document.getElementsByClassName("text");
    freezeButtons(buttons);
    freezeDropDown(speedDropDown);

    const animations = mergesort(currentArrays);
    for(let i = 0; i < animations.length; i++){
      const bars = document.getElementsByClassName("bars");
      const colorComparison = i % 3 !== 2;
      if(colorComparison){
        const[firstIndex, secondIndex] = animations[i];
        const firstIndexStyle = bars[firstIndex].style;
        const secondIndexStyle = bars[secondIndex].style;
        const backgroundColor = i % 3 === 0 ? comparisonColor : defaultColor;

        setTimeout(() => {
          firstIndexStyle.backgroundColor = backgroundColor;
          secondIndexStyle.backgroundColor = backgroundColor;
        }, i * timeDelay);
      }
      else{
        const[index, newHeight] = animations[i];
        const indexStyle = bars[index].style;
        setTimeout(() => {
          indexStyle.height = `${newHeight}px`;
        }, i * timeDelay);
      } 
    }
    setTimeout(() => {
      unfreezeSortButtons(buttons);
      unfreezeDropDown(speedDropDown);
    }, animations.length * timeDelay);
  }

  

  // Animates quicksort
  function quickSort(timeDelay){
    const buttons = document.getElementsByClassName("buttons");
    const speedDropDown = document.getElementsByClassName("text");
    freezeButtons(buttons);
    freezeDropDown(speedDropDown);

    const animations = quicksort(currentArrays);
    var swapped = false;

    for(let i = 0; i < animations.length; i++){
      const bars = document.getElementsByClassName("bars");


      if(animations[i].length == 1){
        const pivotIndex = animations[i];
        const pivotIndexStyle = bars[pivotIndex].style;
        setTimeout(() => {
            pivotIndexStyle.backgroundColor = pivotColor
          }, i * timeDelay);
      }


      else if (animations[i].length == 2) {
        const [leftIndex, rightIndex] = animations[i];
        const leftIndexStyle = bars[leftIndex].style;
        const rightIndexStyle = bars[rightIndex].style;
        if (swapped == false) {
          setTimeout(() => {
            leftIndexStyle.backgroundColor = comparisonColor;
            rightIndexStyle.backgroundColor = comparisonColor;
          }, i * timeDelay);
          swapped = true;
        }
        else if (swapped == true) {
          setTimeout(() => {
            leftIndexStyle.backgroundColor = defaultColor;
            rightIndexStyle.backgroundColor = defaultColor;
          }, i * timeDelay);
          swapped = false;
        }
      }
      

      else if (animations[i].length == 3){
        const [index, height, dummyValue] = animations[i];
        const indexStyle = bars[index].style;
        setTimeout(() => {
          indexStyle.height = `${height}px`;
        }, i* timeDelay);
      }
      
    }
    setTimeout(() => {
      unfreezeSortButtons(buttons);
      unfreezeDropDown(speedDropDown);
    }, animations.length * timeDelay);
  }

  // animations insertion sort
  function insertionSort(timeDelay){
    const buttons = document.getElementsByClassName("buttons");
    const speedDropDown = document.getElementsByClassName("text");
    freezeButtons(buttons);
    freezeDropDown(speedDropDown);

    const animations = insertionsort(currentArrays);
    for(let i = 0; i < animations.length; i++){
      const bars = document.getElementsByClassName("bars");
      const colorComparison = i % 4 < 2;
      if(colorComparison){
        const[firstIndex, secondIndex] = animations[i];
        const firstIndexStyle = bars[firstIndex].style;
        const secondIndexStyle = bars[secondIndex].style;
        const backgroundColor = i % 4 === 0 ? comparisonColor : defaultColor;

        setTimeout(() => {
          firstIndexStyle.backgroundColor = backgroundColor;
          secondIndexStyle.backgroundColor = backgroundColor;
        }, i * timeDelay);
      }
      else{
        const[index, newHeight] = animations[i];
        const indexStyle = bars[index].style;
        setTimeout(() => {
          indexStyle.height = `${newHeight}px`;
        }, i * timeDelay);
      }
    }

    setTimeout(() => {
      unfreezeSortButtons(buttons);
      unfreezeDropDown(speedDropDown);
    }, animations.length * timeDelay);
  }

  // animates bubble sort
  function bubbleSort(timeDelay){
    const buttons = document.getElementsByClassName("buttons");
    const speedDropDown = document.getElementsByClassName("text");
    freezeButtons(buttons);
    freezeDropDown(speedDropDown);

    const animations = bubblesort(currentArrays);
    var swapped = false;
    for(let i = 0; i < animations.length; i++){
      const bars = document.getElementsByClassName("bars");

      if(animations[i].length == 2){
        const[firstIndex, secondIndex] = animations[i];
        const firstIndexStyle = bars[firstIndex].style;
        const secondIndexStyle = bars[secondIndex].style;
        if (swapped == false) {
          setTimeout(() => {
            firstIndexStyle.backgroundColor = comparisonColor;
            secondIndexStyle.backgroundColor = comparisonColor;
          }, i * timeDelay);
          swapped = true;
        }
        else if (swapped == true) {
          setTimeout(() => {
            firstIndexStyle.backgroundColor = defaultColor;
            secondIndexStyle.backgroundColor = defaultColor;
          }, i * timeDelay);
          swapped = false;
        }
      }

      else if (animations[i].length == 3){
        const [index, height, dummyValue] = animations[i];
        const indexStyle = bars[index].style;
        setTimeout(() => {
          indexStyle.height = `${height}px`;
        }, i* timeDelay);
      }

    }

    setTimeout(() => {
      unfreezeSortButtons(buttons);
      unfreezeDropDown(speedDropDown);
    }, animations.length * timeDelay);
  }

  // Wrapper function that visualizes the algorithm at a given speed
  function visualizeSort(timeDelay){
    switch(sortingMethod){
      case 'mergesort':
        mergeSort(timeDelay);
        break;
      case 'quicksort':
        quickSort(timeDelay);
        break;
      case 'insertionsort':
        insertionSort(timeDelay);
        break;
      case 'bubblesort':
        bubbleSort(timeDelay);
        break;
    }
  }

  return (
    <div>
     <Header onReset={resetHandler} onSort={visualizeSort}/>
      <div className="instructions instruction-text">
        <ol>
          <p className="instruction-text" style={{margin: 0}}>Instructions </p>
          <li className="instruction-text"> Select a Sorting Method </li>
          <li className="instruction-text"> Generate Array </li>
          <li className="instruction-text"> Click Desired Sorting Speed </li>
        </ol>
      </div>
      <center>
        <div className="visualizer-container">
          {currentArrays.map((values, index) => {
            return <div className="bars" key={index} style={{ height: `${values}px` }}></div>;
          })}
        </div>
      </center>
    </div>
  );
}
