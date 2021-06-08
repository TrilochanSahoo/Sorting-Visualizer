import React, {Component} from 'react';
import {MSort} from './SortingAlgorithm/MergeSortingAlgorithms'
import {BSort} from './SortingAlgorithm/BubbleSortAlgorithm'

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
        for(var i=0;i<10;i++){
            array.push(randomNumInterval(5,200))
            
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
        console.log(newAnimations)
        for(let i=0; i<newAnimations.length;i++){
            const arrayBars = document.getElementsByClassName("bar");
            const isColorChange = i % 3 !==2
            console.log(isColorChange)
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
                    const barOneValue = arrayBars[barOneIdx]
                    const barOneStyle = arrayBars[barOneIdx].style
                    barOneStyle.height = `${newHeight*2}px`
                    barOneValue.innerHTML = `${newHeight}`
                    

                },i*20)
            }
        }
    }

    BubbleSort(){
        const animations = BSort(this.state.array);
        console.log(animations)
        
        const newAnimations = []
        for(const animation of animations){
            newAnimations.push(animation.comparision)
            newAnimations.push(animation.comparision)
            newAnimations.push(animation.swap)
        }
        console.log(newAnimations)
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
                },i*3000)
                
            }
            else{
                if(newAnimations[i]===undefined){
                    setTimeout(()=>{},i*10)
                }else{

                    setTimeout(()=>{
                        const [barOneIdx, newHeight] = newAnimations[i]
                        const barOneValue = arrayBars[barOneIdx]
                        const barOneStyle = arrayBars[barOneIdx].style
                        barOneStyle.height = `${newHeight*2}px`
                        barOneValue.innerHTML = `${newHeight}`
                    },i*3000)
                }
            }
        }
    }
    
    render(){
        const {array} = this.state
        // console.log(array)
        return (
            <>
                <div className="container">
                     {array.map((value,Idx)=>(
                    <div className="container-box" key={Idx}>
                        {/* <div className="num" >{value}</div> */}
                        <div className="bar" key={Idx} style={{height:`${value*2}px`}}>{value}</div>
                        
                    </div>))}    
                </div>
                    <button onClick={()=> this.resetArray()}>reset</button>
                    <button onClick={()=> this.MergeSort()}>Merge Sort</button>
                    <button onClick={()=> this.BubbleSort()}>Bubble Sort</button>
                    
            </>
        )
    }
    
}


