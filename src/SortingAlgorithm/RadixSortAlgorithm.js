const radixSort = (arr, size, place,animations) => {
  
    let output = new Array(size + 1).fill(0);
    let max = Math.max(...arr);
    
    let freq = new Array(max + 1).fill(0);
    // console.log(freq)
    // Calculate count of elements
    for (let i = 0; i < size; i++){
        const num = Math.floor(arr[i] / place) % 10;
        freq[num]++;
    }
    // Calculate cummulative count
    for (let i = 1; i < 10; i++){
      freq[i] += freq[i - 1];
    }
    // console.log(freq)
  
    // Place the elements in sorted order
    for (let i = size - 1; i >= 0; i--) {
        const num = Math.floor(arr[i] / place) % 10;
        output[freq[num] - 1] = arr[i];
        freq[num]--;
    }
    
    //Copy the output array
    for (let i = 0; i < size; i++){
      const animation = {}
      animation.comparision = [i,i]
      arr[i] = output[i];
      animation.swap = [i,arr[i]]
      animations.push(animation)
    }
    console.log(arr)
  }

export function RSort(array){
  const animations = []
  for (let i = 0; i < array.length; i++){
    const animation = {}
    animation.comparision = [i,i]
    animation.swap = [i,array[i]]
    animations.push(animation)
  }
    let max = Math.max(...array)
    console.log(array)
    for (let i = 1;parseInt(max/i)>0;i=i*10){
      radixSort(array,array.length,i,animations)
    }
  return animations
}