import React,{Component} from 'react';
import './App.css';
import Result from './components/result';
import Keypad from './components/keypad';
let cnt = 0;
class App extends Component{
  
  constructor(){
    super();
    this.state={
      result: ""
    }
  }
  
  onClick=button=>{
    
    if(button==="=")
    {
      this.calculate()
    }
    else if(button==="C")
    {
      this.reset()
      cnt=0;
    }
    else if(button==="DEL")
    {
      this.backspace()
      cnt=cnt-1;
    }
    else
    {
      cnt=cnt+1;
      console.log(cnt);
      if(cnt>=16){
        this.setState({
         // result:"Out Of Range!"
         result: this.state.result
        })
      }
      else
      {
        this.setState({
          
          result: this.state.result+button
        })
      }
      
    }
  };

  calculate=()=>{
    try{
      this.setState(
        {
          result: (eval(this.state.result) || "")+""
        }
      )
    }
    catch(e){
      this.setState({
        result: "error"
      })
    }
  };

  reset=()=>{
    this.setState({
      result: ""
    })
  };

  backspace=()=>{
    this.setState({
      result: this.state.result.slice(0,-1)
    })
  };

  render(){
    return(
      <div>
        <div className="calculator-body">
          <h1>Calculator</h1>
          <Result result={this.state.result}/>
          <Keypad onClick={this.onClick}/>
        </div>
      </div>
    )
  }
}

export default App;
