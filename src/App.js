import React from "react";
import {Route, Switch} from 'react-router-dom';
import Visualizer from "./Components/Visualizer.js";

export default function App() {
  return (
      <div>
        <Switch>
          <Route path="/" exact><Visualizer /></Route>
          <Route path='/mergesort' exact><Visualizer method='mergesort'/></Route>
          <Route path='/quicksort' exact><Visualizer method='quicksort'/></Route>
          <Route path='/insertionsort' exact><Visualizer method='insertionsort' /></Route>
          <Route path='/bubblesort' exact><Visualizer method='bubblesort' /></Route>
        </Switch>
      </div>
  );
}
