import React, { Component } from 'react';
import DrumPad from './DrumPad';
import Display from './Display';

const sounds = [
  {id: "Q", 
   name: "Heater 1", 
   altName: "Chord 1",
   soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", 
   altSoundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},
  {id: "W", 
   name: "Heater 2", 
   altName: "Chord 2",
   soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", 
   altSoundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},
  {id: "E", 
   name: "Heater 3", 
   altName: "Chord 3",
   soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", 
   altSoundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},
  {id: "A", 
   name: "Heater 4",
   altName: "Shaker",
   soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", 
   altSoundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},
  {id: "S", 
   name: "Clap", 
   altName: "Open HH",
   soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", 
   altSoundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},
  {id: "D", 
   name: "Open HH",
   altName: "Closed HH",
   soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", 
   altSoundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},
  {id: "Z", 
   name: "Kick n' Hat", 
   altName: "Punchy Kick",
   soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", 
   altSoundUrl: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},
  {id: "X", 
   name: "Kick", 
   altName: "Side Stick",
   soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", 
   altSoundUrl: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},
  {id: "C", 
   name: "Closed HH",
   altName: "Snare",
   soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", 
   altSoundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}
  
];
const HEATER_KIT = false;
export default class DrumMachine extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      currentKey: "",
      currentBank: HEATER_KIT,
      power: true,
      volume: 20
            
    }
    this.updateState = this.updateState.bind(this);
     this.getCurrentState = this.getCurrentState.bind(this);
  }
  getCurrentState() {
    return this.state;
  }
  updateState(propertyName, value) {    
    let newState = {};
    newState[propertyName] = value;
    this.setState(newState);
  }
  
  render() { 
    
    return (
      <div className='inner-container' id="drum-machine">
        <p>FCC <i className="fcc-logo fab fa-free-code-camp"></i></p>
        <div className="main-machine">         
          <div id="drum">
            {sounds.map((value, index) => {
              return <DrumPad key={index} id={value.id} name={value.name} altName={value.altName} soundUrl={value.soundUrl} altSoundUrl={value.altSoundUrl}
              getCurrentState={this.getCurrentState} updateState={this.updateState}/>
            })}     
          </div>
          <Display getCurrentState={this.getCurrentState} updateState={this.updateState}/>
        </div>
      </div>

    );
  }
}



