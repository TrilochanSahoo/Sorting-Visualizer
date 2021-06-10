function InsertionSort(array,animations){
    let x,j
    for(let i=1;i<array.length;i++){
        j=i-1
        x=array[i]
        while(j>-1 && array[j]>x){
            const animation = {}
            animation.comparision=[j,j+1]
            animation.swap1=[j+1,array[j]]
            animation.swap2=[j,array[j+1]]
            array[j+1]=array[j]
            j--
            animations.push(animation)
        }
        if(j===-1){
            const animation = {}
            animation.comparision=[j+1,j+1]
            animation.swap1=[j+1,x]
            animation.swap2=[j+1,x]
            animations.push(animation)
        }
        else{
            const animation = {}
            animation.comparision=[j,j+1]
            animation.swap1=[j+1,x]
            animation.swap2=[j,array[j]]
            animations.push(animation)
        }
        array[j+1]=x
        // animation.swap=[j+1,array[i]]
    }
    console.log(array)
}


export function ISort(array){
    const animations = []
    console.log(array)
    if(array.length<=1){
        return array
    }
    InsertionSort(array,animations)
    return animations
}