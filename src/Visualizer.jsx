import React, {Component} from 'react';
import './Visualizer.css';

// generating random number 
function randomNumInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

// merge sort algorithm 
function helpMergeSort(array){
    console.log("before: "+array)
    if(array.length<=1)return array
    const auArray = array.slice()
    MergeSort(array,0,array.length-1,auArray)
    console.log("after: "+array)
}

function merge(array,l,mid,h,b){
    let i = l
    let j = mid + 1
    let k = l
    while(i<=mid && j<=h){
        if(b[i]<b
            [j]){
            array[k++]=b[i++]
        }
        else{
            array[k++] = b[j++]
        }
    }
    while(i<=mid){
        array[k++] = b[i++]
    }
    while(j<=h){
        array[k++] = b[j++]
    }
}

function MergeSort(array,l,h,auArray){
    if (l===h)return;
    // console.log("before sorting "+array)
    let mid=Math.floor((l+h)/2)
    MergeSort(auArray,l,mid,array)
    MergeSort(auArray,mid+1,h,array)
    merge(array,l,mid,h,auArray)
    
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
            array.push(randomNumInterval(5,100))
            
        }
        this.setState({array})
        // console.log(this.setState(array))
    }

    // MergeSort(array,l,h){
        
    //     this.setState({array})
    // }
    
    render(){
        const {array} = this.state
        // console.log(array)
        return (
            <>
                <div className="container">
                    {array.map((value,id)=>(
                    <div className="container-box">
                        <div className="num">{value}</div>
                        <div className="bar" key={id} style={{height:`${value*2}px`}}></div>
                        
                    </div>))}
                </div>
                <button onClick={()=>(this.resetArray())}>reset</button>
                <button onClick={()=>(helpMergeSort(array))}>Merge Sort</button>
            </>
        )
    }
    
}


