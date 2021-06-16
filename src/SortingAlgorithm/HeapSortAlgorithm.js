let length
function maxHeap(array,i,animations){
    const left = 2*i+1
    const right = 2*i+2
    let max = i
    if(left<length && array[left]>array[max]){
        const animation ={}
        animation.comparision = [max,left]
        animation.swap1 = [max,array[left]]
        animation.swap2 = [left,array[max]]
        max=left
        animations.push(animation)
    }
    if(right<length && array[right]>array[max]){
        const animation ={}
        animation.comparision = [max,right]
        animation.swap1 = [max,array[right]]
        animation.swap2 = [right,array[max]]
        max=right
        animations.push(animation)
    }
    if(max !== i){
        const animation ={}
        animation.comparision = [i,max]
        animation.swap1 = [i,array[max]]
        animation.swap2 = [max,array[i]]
        animations.push(animation)
        swap(array,i,max)
        maxHeap(array,max,animations)
    }
}

function swap(array,x,y){
    const temp = array[x]
    array[x] = array[y]
    array[y] = temp
}

export function HSort(array){
    const animations = []
    length = array.length
    for(let i=Math.floor(length/2);i>=0;i--){
        maxHeap(array,i,animations)
    }

    console.log(array)
    for(let i=array.length-1;i>0;i--){
        const animation ={}
        animation.comparision = [0,i]
        animation.swap1 = [0,array[i]]
        animation.swap2 = [i,array[0]]
        animations.push(animation)
        swap(array,0,i)
        length--
        maxHeap(array,0,animations)
    }

    console.log(array)
    return animations

}