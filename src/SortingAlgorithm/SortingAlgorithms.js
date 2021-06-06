

function merge(array,l,mid,h,b,animations){
    let i = l
    let j = mid + 1
    let k = l
    while(i<=mid && j<=h){
        const animation ={}
        animation.comparision = [i,j]
        if(b[i]<b[j]){
            animation.swap=[k,i]
            array[k++]=b[i++]
        }
        else{
            animation.swap=[k,j]
            array[k++] = b[j++]
        }
    }
    while(i<=mid){
        animations.push({
            comparision: [i,i],
            swap: [k,i]
        })
        array[k++] = b[i++]
    }
    while(j<=h){
        animations.push({
            comparision: [j,j],
            swap: [k,j]
        })
        array[k++] = b[j++]
    }
}

function MergeSort(array,l,h,auArray,animation){
    if (l===h)return;
    // console.log("before sorting "+array)
    let mid=Math.floor((l+h)/2)
    MergeSort(auArray,l,mid,array,animation)
    MergeSort(auArray,mid+1,h,array,animation)
    merge(array,l,mid,h,auArray,animation)
    
}

export function MSort(array){
    const animation =[]
    // console.log("before: "+array)
    if(array.length<=1)return array
    const auArray = array.slice()
    MergeSort(array,0,array.length-1,auArray,animation)
    // console.log("after: "+array)
    return animation
}