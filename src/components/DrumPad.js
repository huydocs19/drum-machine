import React, { Component } from 'react'

export default class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();    
    this.buttonRef = React.createRef();
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  } 
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
    
  }
  handleKeyPress = (event) => { 
    if (this.props.getCurrentState().power && this.props.id == event.key.toUpperCase()) { 
      this.buttonRef.current.focus();
      this.playSound(); 
      
    }
    
  }
  playSound = () => { 
    if (this.props.getCurrentState().power)  { 
      let audio = this.audioRef.current;
      if (audio != null) {
        if (this.props.getCurrentState().currentBank) {
          audio.src = this.props.altSoundUrl;
          this.props.updateState("currentKey", this.props.altName);
        } else {
          audio.src = this.props.soundUrl;
          this.props.updateState("currentKey", this.props.name)
        }
              
        if (audio.paused) {
            audio.volume = this.props.getCurrentState().volume / 100.0;          
            audio.play();
        }else{
            audio.currentTime = 0
        }
      }
     
         
    }
    
    
  }
  render() {
    return (
      <div class="drum-pad" id={this.props.id} onClick={this.playSound} tabIndex="0" onKeyDown={this.handleKeyPress} >
            <button ref={this.buttonRef}>{this.props.id}</button>
            <audio  class="clip" id={this.props.id} src={this.props.soundUrl} ref={this.audioRef}>
              Your browser does not support the
              <code>audio</code> element.
            </audio>
      </div>
    );
    
  }
}
