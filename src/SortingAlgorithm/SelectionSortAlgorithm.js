function SelectionSort(array,animations){
    console.log(array)
    
    let i,j,k,temp
    for (i=0;i<array.length-1;i++){
        for(j=k=i;j<array.length;j++){
            const animation={}
            if(array[j]<array[k]){
                k=j
                animation.comparision =[k,j]
                animation.swap1=[j,array[j]]
                animation.swap2=[k,array[k]]
            }else{
                animation.comparision =[k,j]
                animation.swap1=[j,array[j]]
                animation.swap2=[k,array[k]]
            }
            animations.push(animation)
        }
        const animation = {}
        animation.comparision =[i,k]
        animation.swap1=[i,array[k]]
        animation.swap2=[k,array[i]]

        temp = array[i]
        array[i] = array[k]
        array[k] = temp
        animations.push(animation)
    }
    console.log(array)
}

export function SSort(array){
    const animations = []
    if (array.length<=1){
        return array
    }
    SelectionSort(array,animations)
    return animations
}