function box(){
const div = document.querySelector("div");
const box = document.createElement('div'); 

// Set its display to 'block' (default for div)
box.style.display = 'block';

// Set its dimensions 
box.style.width = '50px';
box.style.height = '50px';

//  Set the background color using rgba() to achieve transparency
box.style.backgroundColor = 'black'; // Black with 0 opacity (fully transparent)
box.style.opacity = '0'; 


box.addEventListener('mouseover'), () => {
    box.style.opacity = '1'
}
box.addEventListener('mouseout'), () => {
    box.style.opacity = '0'
}


// Add the box to the body of the document
document.body.appendChild(box); 
}
