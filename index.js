const container= document.querySelector('.container');


for(let i=1;i<=256;i++){
    let div= document.createElement('div');
    div.setAttribute('class','grid-divs');
    container.appendChild(div);
}

