function createbox(container) {
    // Create a new div for each box
    const box = document.createElement('div');
    box.style.display = 'block';
    box.style.width = '50px';
    box.style.height = '50px';
    box.style.backgroundColor = 'black';
    box.style.opacity = '0';
   
    // Add mouseover and mouseout events for opacity effect
    //box.addEventListener('mouseover', () => {
        //box.style.opacity = '1';
    //});
    box.addEventListener('mouseover', () => {
        let currentOpacity = parseFloat(box.style.opacity);
        if (currentOpacity < 1) {
            box.style.opacity = (currentOpacity + 0.1).toString();
        }
    });
    // Append to the container
    container.appendChild(box);
}

function submit() {
    const userinput = document.getElementById('getnumber');
    const inputValue = parseInt(userinput.value, 10);
    const container = document.getElementById('container');
    // Clear previous boxes
    container.innerHTML = '';
    for (let i = 0; i < inputValue; i++) {
        createbox(container);
    }
}

