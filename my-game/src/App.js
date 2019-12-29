
import React, { Component } from 'react'; 
import './App.css';
import OnePlayer from './Components/OnePlayer'
import TwoPlayer from './Components/TwoPlayer'
class App extends Component{
 

constructor(props){
super();
this.state= {
  display:'first'
};
this.changeDisplay=this.changeDisplay.bind(this);
}

changeDisplay=() => {
  let {display}= this.state;
  this.setState({display:display ==='first'? 'second': 'first'});
} 
 renderInner(){
  let {display}= this.state;

  if(display==='first'){
    return <OnePlayer />;
  }
  else{
    return <TwoPlayer />;
  }
}


render(){
  return( 
    <div>  
      <h4>Select no of Player(s)</h4>
      <form>
      <select name="no of Player(s)" id="choose" onChange={this.changeDisplay}>
         <option value="1">1</option>
         <option value="2">2</option>
      </select>{this.renderInner()}
      </form>
         <h4 align="justify">Made By: Srishti Kamra</h4>
      
    </div>
  )
}
}
export default App;