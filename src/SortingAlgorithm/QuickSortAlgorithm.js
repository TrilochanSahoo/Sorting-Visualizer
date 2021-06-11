function partition(array,l,h,animations){
    let temp
    let pivot =array[h]
    let i=l-1
    for(let j= l;j<h;j++){
        const animation = {}
        animation.comparision =[h,j]
        if(array[j]<=pivot){
            i++
            temp = array[i]
            array[i] = array[j]
            array[j] = temp
            animation.swap1=[i,array[i]]
            animation.swap2=[j,array[j]]
        }else{
            animation.swap1=[h,pivot]
            animation.swap2=[j,array[j]]

        }
        animations.push(animation)
    }
    const animation = {}
    animation.comparision = [i+1,h]
    animation.swap1 = [i+1,array[h]]
    animation.swap2 = [h,array[i+1]]
    animations.push(animation)

    temp = array[i+1]
    array[i+1] = array[h]
    array[h] = temp

    return i+1
}

function QuickSort(array,l,h,animations){
    // console.log(array)
    let j
    if(l<h){
        j =partition(array,l,h,animations)
        console.log(j)
        QuickSort(array,l,j-1,animations)
        QuickSort(array,j+1,h,animations)
    }
    // console.log(array)
}


export function QSort(array){
    const animations = []
    console.log(array)
    if (array.length<=1){
        return array
    }
    QuickSort(array,0,array.length-1,animations)
    console.log(array)
    return animations

}