function main () {
    const panelsElements = document.querySelector('.wrapper');
    panelsElements.addEventListener('click',function(){
        if((event.clientX <= 107) && (event.clientY <= 107)){
            let count = ++document.querySelector('.red-counter').innerHTML; 
            document.querySelector('.red').innerHTML = `<span style="color: white;">${count}</span>`;
        }

        else if((event.clientX <= 107) && (event.clientY <= 207)){
            let count = ++document.querySelector('.green-counter').innerHTML; 
            document.querySelector('.green').innerHTML = `<span style="color: white;">${count}</span>`;
        }
        
        else if((event.clientX >= 107) && (event.clientY <= 207)){
            let count = ++document.querySelector('.blue-counter').innerHTML; 
            document.querySelector('.blue').innerHTML = `<span style="color: white">${count}</span>`;
        }
    });
}
  
window.onload = main;
