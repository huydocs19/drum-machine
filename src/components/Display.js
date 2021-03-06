import React, { Component } from 'react'

export default class Display extends Component {
    constructor(props) {
        super(props);    
        this.setMachinePower = this.setMachinePower.bind(this);
        this.setMachineVolume = this.setMachineVolume.bind(this);
        this.setMachineBank = this.setMachineBank.bind(this);
      }
      setMachinePower(event) {
        this.props.updateState("power", event.target.checked);
      }
      setMachineBank(event) {
        let newBank = event.target.checked ? "Smooth Piano Kit" : "Heater Kit"
        this.props.updateState("currentKey", newBank);
        this.props.updateState("currentBank", event.target.checked);
      }
      setMachineVolume(event) {
        this.props.updateState("volume", event.target.value);
      }
      
      render() { 
        return (
          <div id="control-display">
            <p>Power</p> 
            <label className="switch">
            <input type="checkbox" defaultChecked onChange={this.setMachinePower}/>
            <span className="slider"></span>
            </label>
            <div id="display">
              <p>{this.props.getCurrentState().currentKey}</p>
            </div>
            <input type="range" className="range-slider" min="1" max="100" value={this.props.getCurrentState().volume} step="1" onChange={this.setMachineVolume}/>
            <p>Bank</p>
            <label className="switch">
            <input type="checkbox" onChange={this.setMachineBank}/>
            <span className="slider"></span>
            </label>
            
           </div>
        );
      }
}
