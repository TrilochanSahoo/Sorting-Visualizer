function CountSort(array,l,h,animations){
    let z=0,count = []
    for(let i=l;i<=h;i++){
        count[i]=0
    }
    for(let i=0;i<array.length;i++){
        const animation = {}
        animation.comparision =[i,i]
        animation.swap = [i,array[i]]
        count[array[i]]++
        animations.push(animation)
    }
    for(let i=l;i<=h;i++){
        while(count[i]>0){
            const animation = {}
            animation.comparision = [z,z]
            array[z]=i
            animation.swap = [z,array[z]]
            z++
            count[i]--
            animations.push(animation)
        }
    }
    console.log(array)
}

export function CSort(array){
    const animations = []
    if(array.length<=1){
        return array
    }
    console.log(array)
    
    const l =Math.min(...array)
    const h = Math.max(...array)
    CountSort(array,l,h,animations)
    return animations
}