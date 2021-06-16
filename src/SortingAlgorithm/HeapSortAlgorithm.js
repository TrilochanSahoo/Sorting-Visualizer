let length
function maxHeap(array,i){
    const left = 2*i+1
    const right = 2*i+2
    let max = i
    if(left<length && array[left]>array[max]){
        max=left
    }
    if(right<length && array[right]>array[max]){
        max=right
    }
    if(max != i){
        swap(array,i,max)
        maxHeap(array,max)
    }
}

function swap(array,x,y){
    const temp = array[x]
    array[x] = array[y]
    array[y] = temp
}

export function HSort(array){
    length = array.length
    for(let i=Math.floor(length/2);i>=0;i--){
        maxHeap(array,i)
    }

    console.log(array)
    for(let i=array.length-1;i>0;i--){
        swap(array,0,i)
        length--
        maxHeap(array,0)
    }

    console.log(array)

}