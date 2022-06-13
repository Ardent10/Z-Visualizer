import React,{ useState} from 'react';
import { Nav, Title,Complexity,SpeedSize ,CodeEditor,Canvas,Algobtn,Footer } from '../components';
import {bubbleSort,insertionSort,mergeSort,quickSort,selectionSort,heapSort} from "../Algorithms/sortingUtils";
import generateArray from "../utils/ArrayGenerator";


const Visualizer = () => {
  
    const [array,setArray] = useState(generateArray);
    const [Algorithm,setAlgorithm] = useState(bubbleSort);
    const [TimeComplexity,setTimeComplexity] = useState('Θ(N^2)')
    const [SpaceComplexity,setSpaceComplexity] = useState('O(1)')
    

    const generatedArray = generateArray();
    const heightMapper = () =>{setArray(generatedArray);}
    // console.log(array);

    
    const algoSelector = (e) =>{
        const algorithmSelected = e.target.value;
        setAlgorithm(algorithmSelected);

        if(algorithmSelected.includes('BubbleSort')){
            console.log(algorithmSelected.includes('bubble'))
            setTimeComplexity('Θ(N^2)')
            setSpaceComplexity('O(1)')
       }
       else if(algorithmSelected.includes('HeapSort')){
            setTimeComplexity('Θ(NLogN)')
            setSpaceComplexity('O(1)')
       }
       else if(algorithmSelected.includes('SelectionSort')){
            setTimeComplexity('Θ(N^2)')
            setSpaceComplexity('O(1)')
       }
       else if(algorithmSelected.includes('MergeSort')){
            setTimeComplexity('Θ(NLogN)')
            setSpaceComplexity('O(N)')
       }
       else if(algorithmSelected.includes('QuickSort')){
            setTimeComplexity('Θ(NLogN)')
            setSpaceComplexity('O(N)')
       }
       else if(algorithmSelected.includes('InsertionSort')){
            setTimeComplexity('Θ(N^2)')
            setSpaceComplexity('O(1)')
       }

    }
    
    
    // Classes   
    const optionClass = 'tracking-wider border-2 rounded bg-gradient-to-r from-green-400 to-blue-500'
    const btnClass = "tracking-wider transition all ease delay-100 p-5 m-2 px-6 text-white text-xl rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-red-500 hover:to-purple-500";
    
    return (
    <div class="bg-[#000000] h-full">
        

        <Title/>
        {/* <Nav/>  */}
        <nav>
        <div class="justify-between flex p-2 mx-8">
        <div class="flex flex-row pr-4 m-2 bg-gradient-to-r from-green-400 to-blue-500 rounded">
            <h3 class='text-white p-5 pr-2 text-xl tracking-wider'>Algorithm: </h3>

            <select class='mx-1 w-40 h-7 m-5 border-solid border-2 rounded' onChange={algoSelector}>
                <option value={bubbleSort} id='1' class={optionClass}>Bubble Sort</option>
                <option value={insertionSort} id='2' class={optionClass}>Insertion Sort</option>
                <option value={selectionSort} id='3' class={optionClass}>Selection Sort</option>
                <option value={quickSort} id='4' class={optionClass}>Quick Sort</option>
                <option value={mergeSort} id='5' class={optionClass}>Merge Sort</option>
                <option value={heapSort} id='6' class={optionClass}>Heap Sort</option>
            </select>

        </div>
            <div class="" id="newArray">
                <button type="button" class={btnClass} onClick={heightMapper}>New Array</button>
                <button type="button" class={btnClass}>Run</button>
            </div>
           <SpeedSize array = {array}/>
            
        </div>
    </nav>

        {/* <Complexity/> */}
     <div class='flex flex-row'>
        <CodeEditor value={Algorithm}/>
        <Canvas array={array} TimeComplexity={TimeComplexity} SpaceComplexity={SpaceComplexity}/>
     </div>   


       <Footer/> 
    </div>

  )
}

export default Visualizer;