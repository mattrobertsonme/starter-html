var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var rand = myArray[Math.floor(Math.random() * myArray.length)];
// 1
if (rand === 1) {
      if (rand == 1) {
        number = 10;
      } else if (rand == 2) {
        number = 20;
      } else {
        number = 30;
      };         
      
      headline = "The" + number + "Things Said By";
    } 

//2
else if (rand == 2) {
      headline = "The 50 Worst";
    } 

//3 
else if (rand == 3) {
      if (rand == 1) {
        number = 100;
      } else if (rand == 2) {
        number = 200;
      } else {
        number = 300;
      };         
      
      headline = number + " Reasons You'll Love";
    } 

// 4 
  else if (rand == 4) {
      headline = "Trump did something";
    } 

// 5 
  else if (rand == 5) {
      if (rand == 1) {
        number = "Elon Musk";
      } else if (rand == 2) {
        number = "Donald Trump";
      } else {
        number = "Mark Zuckerberg";
      };         
      
      headline = number + " Says This Thing";
    } 

// 6 
  else if (rand == 6) {
      headline = "The Internet is Angry About";
    } 

// 7 
   else if (rand === 7) {
      if (rand == 1) {
        number = "Reddit";
      } else if (rand == 2) {
        number = "Facebook";
      } else {
        number = "YouTube";
      };         
      
      headline = " Someone on " + number + " created an awesome";
    } 

// 8 
  else if (rand === 8) {
      headline = "The latest fad is";
    } 

// 9 
else if (rand === 9) {
      if (rand == 1) {
        number = "To Lose A Guy In Ten Days";
      } else if (rand == 2) {
        number = "To Save A City From Ghosts";
      } else {
        number = "To Learn A Programming Language";
      };         
      
      headline = "The Best Ways" + number;
    } 

// 0
else {
  if (rand == 1) {
        number = "Amazing";
      } else if (rand == 2) {
        number = "Terrible";
      } else if (rand == 3) {
        number = "Crazy";
      } else if (rand == 4) {
        number = "Really Really Cool";
      } else {
        number = "Fasinating";
      };         
      headline = 'Someone did something ' + number; 
    } 

// document.write(headline);

function getHeadline() {
    document.getElementById("demo").innerText = rand + ": " + headline;
}

console.log(getHeadline());