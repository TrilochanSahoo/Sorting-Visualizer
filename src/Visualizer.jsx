import React, {Component} from 'react';
import {MSort} from './SortingAlgorithm/MergeSortingAlgorithms'
import {BSort} from './SortingAlgorithm/BubbleSortAlgorithm'
import {ISort} from './SortingAlgorithm/InsertionSortAlgorithm'
import {SSort} from './SortingAlgorithm/SelectionSortAlgorithm'
import {QSort} from './SortingAlgorithm/QuickSortAlgorithm'
import {HSort} from './SortingAlgorithm/HeapSortAlgorithm'
import {CSort} from './SortingAlgorithm/CountSortAlgorithm'
import {RSort} from './SortingAlgorithm/RadixSortAlgorithm'
import {Animation,Animations} from './Animation'

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

    
    BubbleSort(){
        const animations = BSort(this.state.array);
        Animations(animations)
    }
    
    InsertionSort(){
        const animations = ISort(this.state.array);
        Animations(animations)
        
    }
    
    SelectionSort(){
        const animations = SSort(this.state.array)
        Animations(animations)
        
    }
    
    QuickSort(){
        const animations = QSort(this.state.array)
        Animations(animations)

    }
    
    MergeSort(){
        const animations = MSort(this.state.array);
        Animation(animations)
    }

    HeapSort(){
        const animations = HSort(this.state.array)
        Animations(animations)

    }

    CountSort(){
        const animations = CSort(this.state.array);
        Animation(animations)

    }


    RadixSort(){
        const animations = RSort(this.state.array)
        Animation(animations)
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
                    <button onClick={()=> this.HeapSort()}>Heap Sort</button>
                    <button onClick={()=> this.CountSort()}>Count Sort</button>
                    <button onClick={()=> this.RadixSort()}>Radix Sort</button>
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


