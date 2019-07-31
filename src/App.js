import React,{Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      value:20,
      float1:false,
      float2:false,
      message: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.toggleFloat1 = this.toggleFloat1.bind(this);
    this.toggleFloat2 = this.toggleFloat2.bind(this);
    
  }

  handleChange(event){
    this.setState({value: event.target.value,
                  message:"Volume " + this.state.value})
  }
  toggleFloat1(){
    this.setState({float1:!this.state.float1})
  }
  toggleFloat2(){
    this.setState({float2:!this.state.float2})
  }

  //listeners
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)
    document.addEventListener("keyup", this.handlekeyUp)
}

componentWillUnmount() {
    document.removeEventListener("keydown",   
    this.handleKeyPress)
    document.removeEventListener("keyup", this.handlekeyUp)

}
//listeners end

//Key down handlers
handleQ=()=> {
  this.setState({
    message: 'Heater 1'
  });
}
handleW=()=>{
  this.setState({
    message: 'Heater 2'
  })
}

handleE=()=>{
  this.setState({
    message: 'Heater 3'
  })
}

handleA=()=>{
  this.setState({
    message: 'Heater 4'
  })
}
handleS=()=>{
  this.setState({
    message: 'Clap'
  })
}
handleD=()=>{
  this.setState({
    message: 'Open HH'
  })
}
handleZ=()=>{
  this.setState({
    message: 'Kick n\' Hat'
  })
}
handleX=()=>{
  this.setState({
    message: 'Kick'
  })
}
handleC=()=>{
  this.setState({
    message: 'Closed HH'
  })
}

handlekeyUp=(event)=>{
  if(event.keyCode===81){
    document.getElementById("Heater 1").style.backgroundColor="grey";
    document.getElementById('Q').play();
  }
  if(event.keyCode===87){
    document.getElementById("Heater 2").style.backgroundColor="grey"
    document.getElementById('W').play();

  }
  if(event.keyCode===69){
    document.getElementById("Heater 3").style.backgroundColor="grey"
    document.getElementById('E').play();
  }

  if(event.keyCode===65){
    document.getElementById("Heater 4").style.backgroundColor="grey"
    document.getElementById('A').play();
  }
  if(event.keyCode===83){
    document.getElementById("Clap").style.backgroundColor="grey"
    document.getElementById('S').play();
  }
  if(event.keyCode===68){
    document.getElementById("Open HH").style.backgroundColor="grey"
    document.getElementById('D').play();
  }
  if(event.keyCode===90){
    document.getElementById("Kick n' Hat").style.backgroundColor="grey"
    document.getElementById('Z').play();
  }
  if(event.keyCode===88){
    document.getElementById("Kick").style.backgroundColor="grey"
    document.getElementById('X').play();

  }
  if(event.keyCode===67){
    document.getElementById("Closed HH").style.backgroundColor="grey"
    document.getElementById('C').play();
  }
}

handleKeyPress=(event)=> {
  
  if (event.keyCode === 81) {
    this.handleQ();
    document.getElementById('Q').volume= (this.state.value)/100;
    document.getElementById("Heater 1").style.backgroundColor="orange"
  }
  else if(event.keyCode === 87){
      this.handleW();
      document.getElementById('W').volume= (this.state.value)/100;
      document.getElementById("Heater 2").style.backgroundColor="orange"


  }
  else if(event.keyCode === 69){
    this.handleE();
    document.getElementById('E').volume= (this.state.value)/100;
    document.getElementById("Heater 3").style.backgroundColor="orange"
  }
  else if(event.keyCode === 65){
    this.handleA();
    document.getElementById('A').volume= (this.state.value)/100;
    document.getElementById("Heater 4").style.backgroundColor="orange"

  }
  else if(event.keyCode === 83){
    this.handleS();
    document.getElementById('S').volume= (this.state.value)/100;
    document.getElementById("Clap").style.backgroundColor="orange"

  }
  else if(event.keyCode === 68){
    this.handleD();
    document.getElementById('D').volume= (this.state.value)/100;
   document.getElementById("Open HH").style.backgroundColor="orange"
  }
  else if(event.keyCode === 90){
    this.handleZ();
    document.getElementById('Z').volume= (this.state.value)/100;
    document.getElementById("Kick n' Hat").style.backgroundColor="orange"

  }
  else if(event.keyCode === 88){
    this.handleX();
    document.getElementById('X').volume= (this.state.value)/100;
    document.getElementById("Kick").style.backgroundColor="orange"

  }
  else if(event.keyCode === 67){
    this.handleC();
    document.getElementById('C').volume= (this.state.value)/100;
    document.getElementById("Closed HH").style.backgroundColor="orange"

  }
}
// key down handlers end
  
  render(){

  
  return (
    <div id="container-div">
      <div id="drum-machine" style={{borderColor:(this.state.float1)? 'grey':'orange'}}>
      <em><div style={{ color:"black"}}>Mollelwa<i className="fas fa-music"></i></div></em>

        <div id="inner-drum-container">

         
          <div id="drum-pads-container" style={{color:"black"}}>
            <div className="drum-pad" id="Heater 1" onClick={ () => {
              document.getElementById('Q').play();
              document.getElementById('Q').volume= (this.state.value)/100;
            this.setState({message:"Heater 1"})}} onMouseDown={()=>document.getElementById("Heater 1").style.backgroundColor="orange"} 
            onMouseUp={()=>document.getElementById("Heater 1").style.backgroundColor="grey"}>Q
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" id="Q" className="clip"></audio>
            </div>

            <div className="drum-pad" id="Heater 2" onClick={ () => {
              document.getElementById('W').play();
              document.getElementById('W').volume= (this.state.value)/100;
            this.setState({message:"Heater 2"})}}
            onMouseDown={()=>document.getElementById("Heater 2").style.backgroundColor="orange"} 
            onMouseUp={()=>document.getElementById("Heater 2").style.backgroundColor="grey"}>W
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" id="W" className="clip"></audio>
            </div>

            <div className="drum-pad" id="Heater 3" onClick={ () => {
              document.getElementById('E').play();
              document.getElementById('E').volume= (this.state.value)/100;
            this.setState({message:"Heater 3"})}}
            onMouseDown={()=>document.getElementById("Heater 3").style.backgroundColor="orange"} 
            onMouseUp={()=>document.getElementById("Heater 3").style.backgroundColor="grey"}>E
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" id="E" className="clip"></audio>
            </div>

            <div className="drum-pad" id="Heater 4" onClick={ () => {
              document.getElementById('A').play();
              document.getElementById('A').volume= (this.state.value)/100;
            this.setState({message:"Heater 4"})}}
            onMouseDown={()=>document.getElementById("Heater 4").style.backgroundColor="orange"} 
            onMouseUp={()=>document.getElementById("Heater 4").style.backgroundColor="grey"}>A
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" id="A" className="clip"></audio>
            </div>

            <div className="drum-pad" id="Clap" onClick={ () => {
              document.getElementById('S').play();
              document.getElementById('S').volume= (this.state.value)/100;
            this.setState({message:"Clap"})}}
            onMouseDown={()=>document.getElementById("Clap").style.backgroundColor="orange"} 
            onMouseUp={()=>document.getElementById("Clap").style.backgroundColor="grey"}>S
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" id="S" className="clip"></audio>
            </div>

            <div className="drum-pad" id="Open HH" onClick={ () => {
              document.getElementById('D').play();
              document.getElementById('D').volume= (this.state.value)/100;
            this.setState({message:"Open HH"})}}
            onMouseDown={()=>document.getElementById("Open HH").style.backgroundColor="orange"} 
            onMouseUp={()=>document.getElementById("Open HH").style.backgroundColor="grey"}>D
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" id="D" className="clip"></audio>
            </div>

            <div className="drum-pad" id="Kick n' Hat" onClick={ () => {
              document.getElementById('Z').play();
              document.getElementById('Z').volume= (this.state.value)/100;
            this.setState({message:"Kick n' Hat"})}}
            onMouseDown={()=>document.getElementById("Kick n' Hat").style.backgroundColor="orange"} 
            onMouseUp={()=>document.getElementById("Kick n' Hat").style.backgroundColor="grey"}>Z
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" id="Z" className="clip"></audio>
            </div>

            <div className="drum-pad" id="Kick" onClick={ () => {
              document.getElementById('X').play();
              document.getElementById('X').volume= (this.state.value)/100;
            this.setState({message:"Kick"})}}
            onMouseDown={()=>document.getElementById("Kick").style.backgroundColor="orange"} 
            onMouseUp={()=>document.getElementById("Kick").style.backgroundColor="grey"}>X
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" id="X" className="clip"></audio>
            </div>

            <div className="drum-pad" id="Closed HH" onClick={ () => {
              document.getElementById('C').play();
              document.getElementById('C').volume= (this.state.value)/100;
            this.setState({message:"Closed HH"})}}
            onMouseDown={()=>document.getElementById("Closed HH").style.backgroundColor="orange"} 
            onMouseUp={()=>document.getElementById("Closed HH").style.backgroundColor="grey"}>C
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" id="C" className="clip"></audio>
            </div>
          </div>

          <div id="controls">
            <div>Power</div>
            <div className='power-outer'>
              <div className="inner-button" style={{float:(this.state.float1)?"left":"right"}} onClick={this.toggleFloat1}></div>
            </div>
            <p id="display">{this.state.message}</p>
            <div className="volume-slider">
              <form name="registrationForm">
                <input type="range" name="volume-input" id="slider" value={this.state.value} min={0} max={100} step={1} onChange={this.handleChange}/>
              </form>
            </div>
            <div style={{marginTop:10}}>Bank</div>
            <div className='power-outer'>
              <div className="inner-button" style={{float:(this.state.float2)?"right":"left"}} onClick={this.toggleFloat2}></div>
            </div>
          </div>


        </div>
      </div>     
    </div>
  );
}
}
export default App;
