function toggleImage() {
    var image = document.getElementById('image');
    if (image.style.visibility === 'hidden') {
      image.style.visibility = 'visible'; 
    } else {
      image.style.visibility = 'hidden'; 
    }
  }

function changeTextColor() {
    let textParagraph = document.getElementById('text-paragraph');
    textParagraph.style.color = 'blue';
  }
  
  function changeBackgroundColor() {
    let textParagraph = document.getElementById('text-paragraph');
    textParagraph.style.backgroundColor = 'lightgrey'; 
  }