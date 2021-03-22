const slider = document.querySelector(".slider");
const before = document.querySelector(".container-before");
const after =  document.querySelector("container-after");
const container = document.querySelector(".container");

const dragger = (e) => {
    // console.log(e.layerX)
    let xPos = e.layerX;
    before.style.width = xPos + "px";
}

container.addEventListener("mousemove", dragger);