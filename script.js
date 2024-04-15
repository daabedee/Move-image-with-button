let isImageInOriginalPosition = true;
let imageNotOri = true;
let imageCtr = true;

function slideImageRht() {
    const centerCell = document.getElementById('center-cell');
    const img = centerCell.querySelector('img');

    if (isImageInOriginalPosition) {
        // Move the image to the right cell
        img.style.transform = 'translateX(100%)';
    } else {
        // Move the image back to the center cell
        img.style.transform = 'translateX(0)';
    }

    // Toggle the state
  
}

function slideImageLft() {
    const centerCell = document.getElementById('center-cell');
    const img = centerCell.querySelector('img');



    if (imageNotOri) {
        // Move the image to the right cell
        img.style.transform = 'translateX(-100%)';
    } else {
        // Move the image back to the center cell
        img.style.transform = 'translateX(0)';
    }
    // Toggle the state
  
}

function slideImageCtr() {
    const centerCell = document.getElementById('center-cell');
    const img = centerCell.querySelector('img');



    if (imageCtr) {
        // Move the image to the center bottom cell
        img.style.transform = 'translate(0%)';
        img.style.transform = 'translateY(100%)'; 

    } 
   
    else {
        // Move the image back to the center cell
        img.style.transform = 'translateX(-100)';
    }
}
    // Toggle the state
