function CountSort(array,l,h){
    let z=0,count = []
    for(let i=l;i<=h;i++){
        count[i]=0
    }
    for(let i=0;i<array.length;i++){
        count[array[i]]++
    }
    for(let i=l;i<=h;i++){
        while(count[i]>0){
            array[z++]=i
            count[i]--
        }
    }
    console.log(array)
}

export function CSort(array){
    if(array.length<=1){
        return array
    }
    console.log(array)
    
    const l =Math.min(...array)
    const h = Math.max(...array)
    console.log(l)
    console.log(h)
    CountSort(array,l,h)
}