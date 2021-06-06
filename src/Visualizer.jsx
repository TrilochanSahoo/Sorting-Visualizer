import React, {Component} from 'react';
import {MSort} from './SortingAlgorithm/SortingAlgorithms'

import './Visualizer.css';

// generating random number 
function randomNumInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

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
        for(var i=0;i<100;i++){
            array.push(randomNumInterval(5,500))
            
        }
        this.setState({array})
        // console.log(this.setState(array))
    }

    MergeSort(){
        const animations = MSort(this.state.array);
        const newAnimations = []
        for(const animation of animations){
            newAnimations.push(animation.comparision)
            newAnimations.push(animation.comparision)
            newAnimations.push(animation.swap)
        }
        for(let i=0; i<newAnimations.length;i++){
            const arrayBars = document.getElementsByClassName("bar");
            const isColorChange = i % 3 !==2
            if (isColorChange){
                const [barOneIdx, barTwoIdx] = newAnimations[i]
                const barOneStyle = arrayBars[barOneIdx].style
                const barTwoStyle = arrayBars[barTwoIdx].style
                const color= i % 3 ===0?'red':'turquoise';
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color
                    barTwoStyle.backgroundColor = color
                },i*20)
            }
            else{
                setTimeout(()=>{
                    const [barOneIdx, newHeight] = newAnimations[i]
                    const barOneStyle = arrayBars[barOneIdx].style
                    barOneStyle.height = `${newHeight}px`
                },i*20)
            }
        }
    }
    
    render(){
        const {array} = this.state
        // console.log(array)
        return (
                <div className="container">
                     {/* {array.map((value,Idx)=>(
                    <div className="container-box" key={Idx}>
                        <div className="num">{value}</div>
                        <div className="bar" key={Idx} style={{height:`${value*2}px`}}></div>
                        
                    </div>))} */}
                    {array.map((value, idx) => (
          <div
            className="bar"
            key={idx}
            style={{
              backgroundColor: 'turquoise',
              height: `${value}px`,
            }}></div>
        ))}
                    
                    <button onClick={()=> this.resetArray()}>reset</button>
                    <button onClick={()=> this.MergeSort()}>Merge Sort</button>
                </div>
        )
    }
    
}


