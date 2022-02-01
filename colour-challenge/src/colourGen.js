import React from 'react';

const ColourGen = () => {
    // function to create all steps for each colour
    const rgbColours = createColours();
    
    function coloursRGB(start, end) {
        let colours = [];
        for (let i = start; i <= end; i++) {
            if (i !== 0 && i % 8 === 0) {
                colours.push(i);
            }
        }
        return colours;
    };

    function createColours() {
        // function creates all discrete colours for each respective colour (RGB)
        var red = coloursRGB(8, 256);
        var green = coloursRGB(8, 256);
        var blue = coloursRGB(8, 256);
        var allColours = [];

        let i = 0;
        // Use of while loop splits up and generates each discrete colour randomly
        while (i < red.length) {
            const redRandomIndex = Math.floor(Math.random() * red.length);
            const redValue = red[redRandomIndex];
            red.splice(redRandomIndex, 0);
            i++;

            let j = 0;
            while (j < blue.length) {
                const blueRandomIndex = Math.floor(Math.random() * blue.length);
                const blueValue = blue[blueRandomIndex];
                blue.splice(blueRandomIndex, 0);
                j++;

                let k = 0;
                while (k < green.length) {
                    const greenRandomIndex = Math.floor(Math.random() * green.length);
                    const greenValue = green[greenRandomIndex];
                    green.splice(greenRandomIndex, 0);

                    // All colours generated are pushed into one array
                    const rgb = `rgb(${redValue},${greenValue},${blueValue})`;
                    allColours.push(rgb);
                    k++;
                }
            }
        }
        return shuffleColours(allColours);
    };

// SELECTION SORT
    // function shuffleColours(arr){
    //     for(let i = 0; i < arr.length; i++){
    //         let lowest = i;
    //         for(let j = i + 1; j < arr.length; j++){
    //             if(arr[j] < arr[lowest]){
    //                 lowest = j;            
    //             } 
    //         }
    //         if(i !== lowest){
    //             let temp = arr[i];
    //             arr[i] = arr[lowest];
    //             arr[lowest] = temp;
    //         }
    //     }
    //     return arr;
    // }

// MERGE SORT - much faster than selection
    function merge(arr1, arr2){
        let results = [];
        let i = 0;
        let j = 0;
        while(i < arr1.length && j < arr2.length){
            if(arr2[j] > arr1[i]){
                results.push(arr1[i]);
                i++;
            } else {
                results.push(arr2[j])
                j++;
            }
        }
        while(i < arr1.length) {
            results.push(arr1[i])
            i++;
        }
        while(j < arr2.length) {
            results.push(arr2[j])
            j++;
        }
        return results;
    }

    function shuffleColours(arr){
        if(arr.length <= 1) return arr;
        let mid = Math.floor(arr.length/2);
        let left = shuffleColours(arr.slice(0,mid));
        let right = shuffleColours(arr.slice(mid));
        return merge(left, right);
    }

// QUICK SORT
    // function pivot(arr, start = 0, end = arr.length - 1) {
    //     const swap = (arr, idx1, idx2) => {
    //     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    //     };
    
    //     let pivot = arr[start];
    //     let swapIdx = start;
    
    //     for (let i = start + 1; i <= end; i++) {
    //     if (pivot > arr[i]) {
    //         swapIdx++;
    //         swap(arr, swapIdx, i);
    //     }
    //     }
    
    //     swap(arr, start, swapIdx);
    //     return swapIdx;
    // }
    
    // function shuffleColours(arr, left = 0, right = arr.length -1){
    //     if(left < right){
    //         let pivotIndex = pivot(arr, left, right) //3
    //         shuffleColours(arr,left,pivotIndex-1);
    //         shuffleColours(arr,pivotIndex+1,right);
    //         }
    //     return arr;
    // } 

// COCKTAIL SORT
    // function shuffleColours(arr) {
    //     let start = 0, end = arr.length, swapped = true;
    
    //     while (swapped) {
    //         swapped = false;
    //         for (let i = start; i < end - 1; i++) {
    //             if (arr[i] > arr[i+1]) {
    //                 let temp = arr[i];
    //                 arr[i] = arr[i+1];
    //                 arr[i+1] = temp;
    //                 swapped = true;
    //             }
    //         }
    //         end--;
    //         if (!swapped)
    //             break;
        
    //         swapped = false;
    //         for (let i = end - 1; i > start; i--) {
    //             if (arr[i - 1] > arr[i]) {
    //                 let temp = arr[i];
    //                 arr[i] = arr[i - 1];
    //                 arr[i - 1] = temp;
    //                 swapped = true;
    //             }
    //         }   
    //         start++;
    //     }
    //     return arr;
    // }

// RADIX SORT 
    // function getDigit(num, i) {
    //     return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
    //   }
      
    //   function digitCount(num) {
    //     if (num === 0) return 1;
    //     return Math.floor(Math.log10(Math.abs(num))) + 1;
    //   }
      
    //   function mostDigits(nums) {
    //     let maxDigits = 0;
    //     for (let i = 0; i < nums.length; i++) {
    //       maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    //     }
    //     return maxDigits;
    //   }
      
    //   function shuffleColours(nums){
    //       let maxDigitCount = mostDigits(nums);
    //       for(let k = 0; k < maxDigitCount; k++){
    //           let digitBuckets = Array.from({length: 10}, () => []);
    //           for(let i = 0; i < nums.length; i++){
    //               let digit = getDigit(nums[i],k);
    //               digitBuckets[digit].push(nums[i]);
    //           }
    //           nums = [].concat(...digitBuckets);
    //       }
    //       return nums;
    //   }
      
    return (
        rgbColours.map((colour, index) => {
            return (
                <div className="picDiv" style={{ width: '50%', marginTop: '20px'}}>
                    <div className="colour" key={index} id={index} style={{ backgroundColor: colour }}></div>
                </div>
            )
        })
    );
}

export default ColourGen;
