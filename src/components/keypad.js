import React,{Component} from 'react';

class Keypad extends Component{
    render(){
        return(
            <diV className="button">
                <button className="del" name="DEL" onClick={e=>this.props.onClick(e.target.name)}>DEL</button>
                <button className="c" name="C" onClick={e=>this.props.onClick(e.target.name)}>C</button>
                <button className="sign" name="+" onClick={e=>this.props.onClick(e.target.name)}>+</button>
                <button className="sign" name="-" onClick={e=>this.props.onClick(e.target.name)}>-</button>
                <br/>

                <button className="btn" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button className="btn" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button className="btn" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button className="sign" name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>

                <button className="btn" name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button className="btn" name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button className="btn" name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button className="sign" name="/" onClick={e => this.props.onClick(e.target.name)}>/</button><br/>


                <button className="btn" name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button className="btn" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button className="equal" style={{width:'50%'}} name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                
            </diV>
        );
    }
}
export default Keypad;