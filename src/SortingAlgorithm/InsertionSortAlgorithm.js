function InsertionSort(array){
    let x,j
    for(let i=1;i<array.length;i++){
        j=i-1
        x=array[i]
        while(j>-1 && array[j]>x){
            array[j+1]=array[j]
            j--
        }
        array[j+1]=x
    }
    console.log(array)
}


export function ISort(array){
    if(array.length<=1){
        return array
    }
    InsertionSort(array)
}