import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';

export default function Header(props){
  return(
    <center>
      <div className="header">
        <div className='dropdown'>
          <button className='buttons'>Sorting Method</button>
          <div className='dropdown-items'>
            <div className="hover-color"><Link className="text" to="/mergesort">Merge Sort</Link></div>
            <div className="hover-color"><Link className="text" to="/quicksort">Quick Sort</Link></div>
            <div className="hover-color"><Link className="text" to="/insertionsort">Insertion Sort</Link></div>
            <div className="hover-color"><Link className="text" to="/bubblesort">Bubble Sort</Link></div>
          </div>
        </div>

        
        <button className="buttons" onClick={()=>props.onSort(40)}>40ms</button>
        <button className="buttons" onClick={()=>props.onSort(25)}>25ms</button>
        <button className="buttons" onClick={()=>props.onSort(10)}>10ms</button>
        <button className="buttons" onClick={()=>props.onSort(5)}>5ms</button>
        <button className="buttons" onClick={props.onReset}>Generate Array</button>
        

      </div>
    </center>
  );

}