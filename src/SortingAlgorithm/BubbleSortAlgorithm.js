export function BSort(array){
    const animations =[]
    if(array.length<=1)
        return array
    BubbleSort(array, array.length,animations)
    return animations
}

function BubbleSort(array, length , animations){
    // const array = [10,20,30,40,50,60,70,71,72,73]
    let flag 
    for (let i=0;i<length-1;i++){
        flag = 0
        for(let j=0 ; j<length-1-i;j++){
            const animation = {}
            animation.comparision=[j,j+1]
            // animations.push(j,j+1)
            // animations.push(j,j+1)
            if(array[j]>array[j+1]){
                // animations.push(j,array[j+1])
                animation.swap1=[j,array[j+1]]
                animation.swap2=[j+1,array[j]]
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
                flag = 1
             }
            else{
                animation.swap1 =[j,array[j]]
                animation.swap2 =[j+1,array[j+1]]

            }
            animations.push(animation)
        }
        if(flag===0){
            break
        }
    }
    console.log(array)
}