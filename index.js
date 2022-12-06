const container= document.querySelector('.container');

function setGrid(gridSize) {
    for (let i = 1; i <= (gridSize * gridSize); i++) {
        container.setAttribute('style',`grid-template-columns: repeat(${gridSize},1fr);`)
        let div = document.createElement('div');
        div.setAttribute('class', 'grid-divs');
        div.setAttribute('style', `height:${960/gridSize}px; width:${960/gridSize}px;`)
        container.appendChild(div);
    }
}

window.addEventListener('load',()=>{
    setGrid(16);
    hoverEffect();
})

function hoverEffect() {
    const gridDivs = document.querySelectorAll(".grid-divs");
    gridDivs.forEach(div => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        })
    });
}

const clearBtn= document.getElementById('clear');
clearBtn.addEventListener('click',()=>{
    const gridDivs = document.querySelectorAll(".grid-divs");
    gridDivs.forEach(div => {
        div.style.backgroundColor = "rgb(236 241 240)";
    });
})


const gridBtn= document.getElementById('grid-size-btn');


gridBtn.addEventListener('click',()=>{
    let gridSize;
    while(1){
        gridSize= prompt("Enter grid size");
        if(gridSize<100) break;
        else continue;
    }
    container.innerHTML="";
    setGrid(gridSize);
    hoverEffect();
})


