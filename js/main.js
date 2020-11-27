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

  console.log(backgroundStyle);
  
  /*
  // Finding the slope of the mouse to the center
  let centerX = text.offsetLeft + text.offsetWidth / 2;
  let centerY = text.offsetTop + text.offsetHeight / 2;
  let gradientSlope = Math.abs((event.pageY - centerY) / (event.pageX - centerX));
  
  // Giving the slope of the "default" gradient angle
  let defaultSlope = 0;

  // Calculating the angle between the two lines
  let angOfInclGrad = Math.atan(gradientSlope);
  //let angOfInclDef = Math.atan(defaultSlope);
  //let angleInRads = angOfInclGrad - angOfInclDef;
  let angleInDegrees = angOfInclGrad * (180 / Math.PI);

  console.log(angleInDegrees);
  */
});
