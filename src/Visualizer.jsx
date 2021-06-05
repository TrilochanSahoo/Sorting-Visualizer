import React, {Component} from 'react';
import './Visualizer.css';

export default class Visualizer extends Component{
    constructor(props){
        super(props)
        // console.log(props)
        this.state = {
            array: [],
        }
    }
    componentDidMount(){
        this.resetArray();
    }
    resetArray(){
        const array = [];
        for(var i=0;i<30;i++){
            array.push(randomNumInterval(5,100))
            
        }
        this.setState({array})
        // console.log(this.setState(array))
    }
    
    render(){
        const {array} = this.state
        console.log(array)
        return (
            <div className="container">
                {array.map((value,id)=>(
                <div className="container-box">
                    <div className="num">{value}</div>
                    <div className="bar" key={id} style={{height:`${value*2}px`}}></div>
                    
                </div>))}
            </div>
        )
    }
    
}

function randomNumInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
// export default Visualizer;