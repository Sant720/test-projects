window.onload = function(){
    var myArray = [
  "Get ready. We are here to drive your digital transformation and take it to the next level.",
  "We create impactful solutions that drive meaningful change with a strategic vision.",
  "We provide top services for world-class clients, from startups to companies of all sizes.",
  "Get a dedicated Delivery Team Powered by Technology and Driven by Talent."
];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

document.getElementById('output').innerHTML = randomItem;
};