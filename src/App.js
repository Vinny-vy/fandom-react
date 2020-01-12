import React from 'react';
import EpisodePlain from './EpisodePlain';
import location from './location';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import character from './character.js';
class App extends React.Component{
render() {
  return (
    <HashRouter>
   <div >
    <div id="container">
      <div id="header">
        <div id="header-left">
        <img className="logo" id="logo" src="imgg.jpg" alt="fandom"></img>
    
        <div id="header-right">
          <form>
            <button id="button2">character</button>
            <input type="text" id="search" name="search" placeholder="character or location or episode" size="35"></input>
            <button id="button1" > search </button>
          </form>
          <br></br>
      <br></br>
      <br></br>
        </div> 
        </div>
        <div id="flx">

      <div id="list">
        <ul id="listIn">
        <li>
          <NavLink to="/character" target="_self">character</NavLink>
          </li>
          <li><NavLink to="/location" target="_self">location</NavLink></li>
          <li>
            <NavLink to="/EpisodePlain" target="_self">episodes</NavLink>
          </li>
        </ul>
        </div>

       
         <br></br>
         <br></br>

        <div id="body">
          <h2><i>   Rick and Morty </i></h2>
          <hr></hr>
          <p id="content">
          Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's late-night programming block Adult Swim. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures.
          This series premired on December 2,2013,and the third season concluded on October 1,2017.In May 20118, the series was picked up for an additional 70 episodes over an unspecified number of seasons.
        <br></br>
        <br></br>
         Roiland voices the eponymous characters, with Chris Parnell, Spencer Grammer and Sarah Chalke voicing the rest of the family. The series originated from an animated short parody film of Back to the Future, created by Roiland for Channel 101, a short film festival co-founded by Harmon. The series has been acclaimed by critics for its originality, creativity and humor.
          </p>
        </div>
        </div>
        
        <div className="content">
            <Route path="/character" component={character}/>
            <Route path="/location" component={location}/>
            <Route path="/EpisodePlain" component={EpisodePlain}/>
          </div>
          </div>
         
          </div>
  </div>
  </HashRouter>
  );
}
}
export default App;

