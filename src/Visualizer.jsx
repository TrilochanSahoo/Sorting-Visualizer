import React, {Component} from 'react';
import {MSort} from './SortingAlgorithm/MergeSortingAlgorithms'
import {BSort} from './SortingAlgorithm/BubbleSortAlgorithm'
import {ISort} from './SortingAlgorithm/InsertionSortAlgorithm'
import {SSort} from './SortingAlgorithm/SelectionSortAlgorithm'
import {QSort} from './SortingAlgorithm/QuickSortAlgorithm'
import {CSort} from './SortingAlgorithm/CountSortAlgorithm'

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
        for(var i=0;i<30;i++){
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
            newAnimations.push(animation.swap1)
            newAnimations.push(animation.swap2)
        }
        console.log(newAnimations)
        for(let i=0; i<newAnimations.length;i++){
            const arrayBars = document.getElementsByClassName("bar");
            if ((i % 4) !==2 && (i % 4) !==3){
                const [barOneIdx, barTwoIdx] = newAnimations[i]
                const barOneStyle = arrayBars[barOneIdx].style
                const barTwoStyle = arrayBars[barTwoIdx].style

                const color= i % 4 ===0?'red':'turquoise';
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color
                    barTwoStyle.backgroundColor = color
                },i*20)
                
            }
            else{
                if((i % 4) ===2 ){
                    setTimeout(()=>{
                        const [barOneIdx, newHeight] = newAnimations[i]
                        const barOneValue = arrayBars[barOneIdx]
                        const barOneStyle = arrayBars[barOneIdx].style
                        barOneStyle.height = `${newHeight*2}px`
                        barOneValue.innerHTML = `${newHeight}`
                    },i*20)
                }else{
                    setTimeout(()=>{
                        const [barTwoIdx, newHeight] = newAnimations[i]
                        const barTwoValue = arrayBars[barTwoIdx]
                        const barTwoStyle = arrayBars[barTwoIdx].style
                        barTwoStyle.height = `${newHeight*2}px`
                        barTwoValue.innerHTML = `${newHeight}`
                    },i*20)
                }
            }
        }
    }

    InsertionSort(){
        const animations = ISort(this.state.array);

        const newAnimations = []
        for(const animation of animations){
            newAnimations.push(animation.comparision)
            newAnimations.push(animation.comparision)
            newAnimations.push(animation.swap1)
            newAnimations.push(animation.swap2)
        }
        console.log(newAnimations)
        for(let i=0; i<newAnimations.length;i++){
            const arrayBars = document.getElementsByClassName("bar");
            if ((i % 4) !==2 && (i % 4) !==3){
                const [barOneIdx, barTwoIdx] = newAnimations[i]
                const barOneStyle = arrayBars[barOneIdx].style
                const barTwoStyle = arrayBars[barTwoIdx].style

                const color= i % 4 ===0?'red':'turquoise';
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color
                    barTwoStyle.backgroundColor = color
                },i*20)
                
            }
            else{
                if((i % 4) ===2 ){
                    setTimeout(()=>{
                        const [barOneIdx, newHeight] = newAnimations[i]
                        const barOneValue = arrayBars[barOneIdx]
                        const barOneStyle = arrayBars[barOneIdx].style
                        barOneStyle.height = `${newHeight*2}px`
                        barOneValue.innerHTML = `${newHeight}`
                    },i*20)
                }else{
                    setTimeout(()=>{
                        const [barTwoIdx, newHeight] = newAnimations[i]
                        const barTwoValue = arrayBars[barTwoIdx]
                        const barTwoStyle = arrayBars[barTwoIdx].style
                        barTwoStyle.height = `${newHeight*2}px`
                        barTwoValue.innerHTML = `${newHeight}`
                    },i*20)
                }
            }
        }
    }
    
    SelectionSort(){
        const animations = SSort(this.state.array)

        const newAnimations = []
        for(const animation of animations){
            newAnimations.push(animation.comparision)
            newAnimations.push(animation.comparision)
            newAnimations.push(animation.swap1)
            newAnimations.push(animation.swap2)
        }
        console.log(newAnimations)
        for(let i=0; i<newAnimations.length;i++){
            const arrayBars = document.getElementsByClassName("bar");
            if ((i % 4) !==2 && (i % 4) !==3){
                const [barOneIdx, barTwoIdx] = newAnimations[i]
                const barOneStyle = arrayBars[barOneIdx].style
                const barTwoStyle = arrayBars[barTwoIdx].style

                const color= i % 4 ===0?'red':'turquoise';
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color
                    barTwoStyle.backgroundColor = color
                },i*20)
                
            }
            else{
                if((i % 4) ===2 ){
                    setTimeout(()=>{
                        const [barOneIdx, newHeight] = newAnimations[i]
                        const barOneValue = arrayBars[barOneIdx]
                        const barOneStyle = arrayBars[barOneIdx].style
                        barOneStyle.height = `${newHeight*2}px`
                        barOneValue.innerHTML = `${newHeight}`
                    },i*20)
                }else{
                    setTimeout(()=>{
                        const [barTwoIdx, newHeight] = newAnimations[i]
                        const barTwoValue = arrayBars[barTwoIdx]
                        const barTwoStyle = arrayBars[barTwoIdx].style
                        barTwoStyle.height = `${newHeight*2}px`
                        barTwoValue.innerHTML = `${newHeight}`
                    },i*20)
                }
            }
        }
    }

    QuickSort(){
        const animations = QSort(this.state.array)

        const newAnimations = []
        for(const animation of animations){
            newAnimations.push(animation.comparision)
            newAnimations.push(animation.comparision)
            newAnimations.push(animation.swap1)
            newAnimations.push(animation.swap2)
        }
        console.log(newAnimations)
        for(let i=0; i<newAnimations.length;i++){
            const arrayBars = document.getElementsByClassName("bar");
            if ((i % 4) !==2 && (i % 4) !==3){
                const [barOneIdx, barTwoIdx] = newAnimations[i]
                const barOneStyle = arrayBars[barOneIdx].style
                const barTwoStyle = arrayBars[barTwoIdx].style

                const color= i % 4 ===0?'red':'turquoise';
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color
                    barTwoStyle.backgroundColor = color
                },i*20)
                
            }
            else{
                if((i % 4) ===2 ){
                    setTimeout(()=>{
                        const [barOneIdx, newHeight] = newAnimations[i]
                        const barOneValue = arrayBars[barOneIdx]
                        const barOneStyle = arrayBars[barOneIdx].style
                        barOneStyle.height = `${newHeight*2}px`
                        barOneValue.innerHTML = `${newHeight}`
                    },i*20)
                }else{
                    setTimeout(()=>{
                        const [barTwoIdx, newHeight] = newAnimations[i]
                        const barTwoValue = arrayBars[barTwoIdx]
                        const barTwoStyle = arrayBars[barTwoIdx].style
                        barTwoStyle.height = `${newHeight*2}px`
                        barTwoValue.innerHTML = `${newHeight}`
                    },i*20)
                }
            }
        }
    }

    CountSort(){
        const animations = CSort(this.state.array);

        const newAnimations = []
        for(const animation of animations){
            // newAnimations.push(animation.comparision)
            newAnimations.push(animation.comparision)
            newAnimations.push(animation.swap)
        }
        // console.log(newAnimations)
        for(let i=0; i<newAnimations.length;i++){
            const arrayBars = document.getElementsByClassName("bar");
            const isColorChange = i % 2 !==1
            console.log(isColorChange)
            if (isColorChange){
                const [barOneIdx] = newAnimations[i]
                const barOneStyle = arrayBars[barOneIdx].style
                // const barTwoStyle = arrayBars[barTwoIdx].style
                const color= i % 2 ===0?'red':'turquoise';
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color
                    // barTwoStyle.backgroundColor = color
                },i*20)
            }
            else{
                setTimeout(()=>{
                    const [barOneIdx, newHeight] = newAnimations[i]
                    const barOneValue = arrayBars[barOneIdx]
                    const barOneStyle = arrayBars[barOneIdx].style
                    barOneStyle.backgroundColor = `turquoise`
                    barOneStyle.height = `${newHeight*2}px`
                    barOneValue.innerHTML = `${newHeight}`
                    

                },i*20)
            }
        }
    }
    render(){
        const {array} = this.state
        // console.log(array)
        return (
            <>
                    <button onClick={()=> this.resetArray()}>reset</button>
                    <button onClick={()=> this.BubbleSort()}>Bubble Sort</button>
                    <button onClick={()=> this.InsertionSort()}>Insertion Sort</button>
                    <button onClick={()=> this.SelectionSort()}>Selection Sort</button>
                    <button onClick={()=> this.MergeSort()}>Merge Sort</button>
                    <button onClick={()=> this.QuickSort()}>Quick Sort</button>
                    <button onClick={()=> this.CountSort()}>Count Sort</button>
                <div className="container">
                     {array.map((value,Idx)=>(
                    <div className="container-box" key={Idx}>
                        <div className="bar" key={Idx} style={{height:`${value*2}px`}}>{value}</div>
                    </div>))}    
                </div>
            </>
        )
    }
    
}


