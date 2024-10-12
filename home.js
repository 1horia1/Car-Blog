document.addEventListener('keyup', function(event) {
    if (event.key === 'b' || event.key === 'B') {
        removeText('masina');
        document.querySelector('.masina').classList.add('zoom');
        document.querySelector('.masina1').classList.add('invizibil')
        document.querySelector('.masina1').classList.remove('zoom')
        document.querySelector('.masina').classList.remove('invizibil')
        displayText('That’s what makes a car great. You start to think of it as a person. You start to love it.','masina'); 
        displayText('--Jeremy Clarkson.','masina'); 
        removeText('masina1');

  
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === '`' || event.key === '~') {
        document.querySelector('.masina').classList.remove('zoom');
        document.querySelector('.masina1').classList.remove('invizibil');
        removeText('masina');
    
    }
});
document.addEventListener('keyup', function(event) {
    if (event.key === 'm' || event.key === 'M') {
        removeText('masina1');
        document.querySelector('.masina1').classList.add('zoom');
        document.querySelector('.masina').classList.add('invizibil')
        document.querySelector('.masina').classList.remove('zoom')
        document.querySelector('.masina1').classList.remove('invizibil');
        displayText('It is not just about getting from point A to point B, it is about how you get there','masina1'); 
        removeText('masina');
          
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === '`' || event.key === '~') {
        document.querySelector('.masina1').classList.remove('zoom');
        document.querySelector('.masina').classList.remove('invizibil');
        removeText('masina1');
    }
});
function displayText(message,className) {
    var elements = document.getElementsByClassName(className); // Obținem toate elementele cu clasa 'masina1'
  
      var element = elements[elements.length-1];
      var textNode = document.createElement('h2'); // Creăm un element <h2>
      textNode.innerText = message; // Setăm textul pentru elementul <h2>
      element.appendChild(textNode); // Adăugăm elementul <h2> la fiecare element cu clasa 'masina1'
    
  }
  function removeText(className) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var textNodes = element.getElementsByTagName('h2');
      while (textNodes[0]) {
        element.removeChild(textNodes[0]);
      }
    }
  }
  
  
  window.onload = function() {
    
  };
