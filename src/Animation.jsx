function Animation(animations){
    // const animations = array;
        const newAnimations = []
        for(const animation of animations){
            newAnimations.push(animation.comparision)
            newAnimations.push(animation.comparision)
            newAnimations.push(animation.swap)
        }
        console.log(newAnimations)
        for(let i=0; i<newAnimations.length;i++){
            const arrayBars = document.getElementsByClassName("bar");
            const isColorChange = i % 3 !==2
            console.log(isColorChange)
            if (isColorChange){
                const [barOneIdx, barTwoIdx] = newAnimations[i]
                const barOneStyle = arrayBars[barOneIdx].style
                const barTwoStyle = arrayBars[barTwoIdx].style
                const color= i % 3 ===0?'red':'turquoise';
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color
                    barTwoStyle.backgroundColor = color
                },i*10)
            }
            else{
                setTimeout(()=>{
                    const [barOneIdx, newHeight] = newAnimations[i]
                    const barOneValue = arrayBars[barOneIdx]
                    const barOneStyle = arrayBars[barOneIdx].style
                    barOneStyle.height = `${newHeight*2}px`
                    barOneValue.innerHTML = `${newHeight}`
                    

                },i*10)
            }
        }
}

function Animations(animations){
    const newAnimations = []
        for(const animation of animations){
            newAnimations.push(animation.comparision)
            newAnimations.push(animation.comparision)
            newAnimations.push(animation.swap1)
            newAnimations.push(animation.swap2)
        }
        console.log(newAnimations)
        for(let i=0; i<newAnimations.length;i++){
            const arrayBars = document.getElementsByClassName("bar");
            if ((i % 4) !==2 && (i % 4) !==3){
                const [barOneIdx, barTwoIdx] = newAnimations[i]
                const barOneStyle = arrayBars[barOneIdx].style
                const barTwoStyle = arrayBars[barTwoIdx].style

                const color= i % 4 ===0?'red':'turquoise';
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color
                    barTwoStyle.backgroundColor = color
                },i*10)
                
            }
            else{
                if((i % 4) ===2 ){
                    setTimeout(()=>{
                        const [barOneIdx, newHeight] = newAnimations[i]
                        const barOneValue = arrayBars[barOneIdx]
                        const barOneStyle = arrayBars[barOneIdx].style
                        barOneStyle.height = `${newHeight*2}px`
                        barOneValue.innerHTML = `${newHeight}`
                    },i*10)
                }else{
                    setTimeout(()=>{
                        const [barTwoIdx, newHeight] = newAnimations[i]
                        const barTwoValue = arrayBars[barTwoIdx]
                        const barTwoStyle = arrayBars[barTwoIdx].style
                        barTwoStyle.height = `${newHeight*2}px`
                        barTwoValue.innerHTML = `${newHeight}`
                    },i*10)
                }
            }
        }
}

export {Animation,Animations}