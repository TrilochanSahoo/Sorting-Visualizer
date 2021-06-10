function SelectionSort(array){
    console.log(array)
    
    let i,j,k,temp
    for (i=0;i<array.length-1;i++){
        for(j=k=i;j<array.length;j++){
            if(array[j]<array[k]){
                k=j
            }
        }
        temp = array[i]
        array[i] = array[k]
        array[k] = temp
    }
    console.log(array)
}

export function SSort(array){
    if (array.length<=1){
        return array
    }
    SelectionSort(array)
}