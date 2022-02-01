<h1 align="center">Education Horizons Coding Challenge</h1>

## Installation
💾 In order to view the colours generated you must clone this repository to your machine and navigate to the 'colour-challenge' folder in the terminal and type in the command:
## `npm start`

Then open [http://localhost:3000](http://localhost:3000) in the browser to view.


## The Challenge
For this challenge, we would like to see an application that will produce an image in
which each colour occurs exactly once — with no repition and no unused colours.
For the purpose of this challenge; colours are made up of three components — red,
green, and blue. We require you to break each colour component into 32 steps — 8,
16, 24 .. 256 — this means when combined, you will have 32,768 discrete colours to
utilise.

## My Process
* First understanding the problem and what was required. This took some time and research but was made clear in time.
* Created a React App in VS Code and started to implement the challenge.
* First created a function that broke down the colours into 32 steps.
* The next function uses splice to take random values from each colour and subsequenlty pushes them into an array. Therefore all of the colours are now mixed and randomised inside the colour array.
* Multiple sorting algorithms were then implemented, and the final array was mapped over and displayed on the browser.
* Each algorithm used was compared to each other regarding speed and aesthetics.
* Some styling was done to make the final image appear nicer in the browser window.

* <u>NOTE</u> - the algorithms used have been left in the document but commented out. If you would like to test the algorithms I have used then simply comment out what is being used and uncomment the algorithm you wish to view.

## Results
Algorithms from fastest to slowest:
1. Radix Sort
2. Merge Sort
3. Quick Sort
4. Selection Sort
5. Cocktail Sort

Radix, merge and quick sort were all very close in efficiency as the time complexities of merge and quick sort are O(nlogn), where as radix is O(nk). In this case as the length of each number (k) in the array was not high it acted as O(n).

Selection and cocktail sort(variation of bubble sort) on the other hand were very inefficient and the browser was close to crashing as their time complexities were much higher at O(n^2).

Interestingly enough all of the algorithms apart from radix sort produced the same style image, which can be seen in the screenshots below. This is due to radix sort being a non-comparative sorting algorithm, and as such it does not bunch up any elements within the array like the others do.

## Radix
![image](https://user-images.githubusercontent.com/81725246/151945370-96227cfd-94ca-4834-a9b8-4b7fc7e30297.png)

## The rest
![image](https://user-images.githubusercontent.com/81725246/151946474-105b7e94-14af-42f1-907b-5ad1b2630c1b.png)