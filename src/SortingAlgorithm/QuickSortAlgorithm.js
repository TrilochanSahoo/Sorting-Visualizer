function partition(array,l,h){
    let temp
    let pivot =array[h]
    let i=l-1
    for(let j= l;j<h;j++){
        if(array[j]<=pivot){
            i++
            temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }

    temp = array[i+1]
    array[i+1] = array[h]
    array[h] = temp

    return i+1
}

function QuickSort(array,l,h){
    // console.log(array)
    let j
    if(l<h){
        j =partition(array,l,h)
        QuickSort(array,l,j-1)
        QuickSort(array,j+1,h)
    }
    // console.log(array)
}


export function QSort(array){
    console.log(array)
    if (array.length<=1){
        return array
    }
    QuickSort(array,0,array.length-1)
    console.log(array)

}