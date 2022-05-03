function oneThroughTwenty(num){
  let arr = []
  for (let i = 0; i <= 20; i++){
    arr.push(i)
  } 
  return arr
}

function evensToTwenty(num){
  let arr = []
  for (let i = 0; i <= 20; i++){
    if(i % 2 == 0){
      arr.push(i)
    } 
  } 
  return arr
}

function oddsToTwenty() {
  let arr = []
  for (let i = 0; i <= 20; i++){
    if(i % 2 !== 0){
      arr.push(i)
    } 
  } 
  return arr    
}

function multiplesOfFive() {
  let arr = []
  for (let i = 0; i <= 100; i++){
    if(i % 5 == 0){
      arr.push(i)
    } 
  } 
  return arr    
}

function squareNumbers() {
  let arr = []
  for (let i = 0; i <= 100; i++){
    if(Math.sqrt(i) % 1 === 0){
      arr.push(i)
    }
  } 
  return arr       
}

function countingBackwards() {
  let arr = []
  for (let i = 20; i >= 0; i--){
      arr.push(i) 
  } 
  return arr
}   

function evenNumbersBackwards() {
  let arr = []
  for (let i = 20; i >= 0; i--){
    if(i % 2 == 0){
      arr.push(i) 
    }  
  } 
  return arr    
}

function oddNumbersBackwards() {
  let arr = []
  for (let i = 20; i >= 0; i--){
    if(i % 2 !== 0){
      arr.push(i) 
    }  
  } 
  return arr     
}

function multiplesOfFiveBackwards() {
  let arr = []
  for (let i = 20; i >= 0; i--){
    if(i % 5 == 0){
      arr.push(i)
    } 
  } 
  return arr      
}

function squareNumbersBackwards() {
  let arr = []
  for (let i = 100; i >= 0; i--){
    if(Math.sqrt(i) % 1 === 0){
      arr.push(i)
    }
  } 
  return arr     
}
