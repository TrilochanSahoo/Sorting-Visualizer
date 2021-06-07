

function merge(array,l,mid,h,auArray,animations){
    let i = l
    let j = mid + 1
    let k = l
    while(i<=mid && j<=h){
        const animation ={}
        animation.comparision = [i,j]
        if(auArray[i]<=auArray[j]){
            animation.swap=[k,auArray[i]]
            array[k++]=auArray[i++]
        }
        else{
            animation.swap=[k,auArray[j]]
            array[k++] = auArray[j++]
        }
        animations.push(animation)
    }
    while(i<=mid){
        animations.push({
            comparision: [i,i],
            swap: [k,auArray[i]]
        })
        array[k++] = auArray[i++]
    }
    while(j<=h){
        animations.push({
            comparision: [j,j],
            swap: [k,auArray[j]]
        })
        array[k++] = auArray[j++]
    }
}

function MergeSort(array,l,h,auArray,animation){
    if (l===h) return;
    // console.log("before sorting "+array)
    let mid=Math.floor((l+h)/2)
    MergeSort(auArray,l,mid,array,animation)
    MergeSort(auArray,mid+1,h,array,animation)
    merge(array,l,mid,h,auArray,animation)
    
}

export function MSort(array){
    const animations =[]
    // console.log("before: "+array)
    if(array.length<=1) return array
    const auArray = array.slice()
    MergeSort(array,0,array.length-1,auArray,animations)
    // console.log("after: "+array)
    return animations
}