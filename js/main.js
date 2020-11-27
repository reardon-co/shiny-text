// Getting constants
const text = document.querySelector(".text-gradient");


// Checking the position of the mouse inside the text div
text.addEventListener("mousemove", (event) => {

  let mousePercent = (event.pageX - text.offsetLeft) / text.offsetWidth * 100;

  // console.log(mousePercent);
  let leftLeftGrad = mousePercent - 80;
  let leftGrad = mousePercent - 5;
  let rightGrad = mousePercent + 5;
  let rightRightGrad = mousePercent + 80;

  var backgroundStyle = 
    'linear-gradient(110deg, #b721ff ' + 
    leftLeftGrad +
    '%, #21d4fd ' +
    leftGrad + 
    '%, #3dd3f5 ' + 
    mousePercent + 
    '%, #21d4fd ' +
    rightGrad +
    '%, #b721ff ' +
    rightRightGrad +
    '%)';
  
  text.style.backgroundImage = backgroundStyle;
});
