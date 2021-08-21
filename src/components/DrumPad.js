import React, { Component } from 'react'

export default class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      padBackgroundColor: "#808080",
      width: 100,
      height: 90
    };
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  } 
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
    
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  
  handleKeyPress = (event) => { 
    
    if (this.props.id == event.key.toUpperCase()) {
          this.playSound(); 
    }
    
    
  }
  
  playSound = () => { 
    if (this.props.getCurrentState().power)  {       
      let audio = document.getElementById(this.props.id);
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
      this.setState({padBackgroundColor: "#ffa500", width: 97, height: 87});    
      setTimeout(() => {this.setState({padBackgroundColor:"#808080", width: 100, height: 90});}, 100);     
       
       
    } else {
      this.setState({width: 97, height: 87});
      setTimeout(() => {this.setState({width: 100, height: 90});}, 100);
    }
    
    
  }
  render() {
    return (
      <div className="drum-pad" onClick={this.playSound} onKeyDown={this.handleKeyPress} >
            <div style={{background: this.state.padBackgroundColor, width: this.state.width, height: this.state.height}}>{this.props.id}</div>
            <audio  className="clip" id={this.props.id} src={this.props.soundUrl} >
              Your browser does not support the
              <code>audio</code> element.
            </audio>
      </div>
    );
    
  }
}
