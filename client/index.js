console.log('testttttttplss');

import './index.css';
// import gsap from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('meal-form');
    const submitButton = document.getElementById('submit-button');
    const radioButtons = form.querySelectorAll('input[type="radio"]');
  
    // Controleer of een radiobutton is geselecteerd
    const checkRadioSelection = () => {
      const isSelected = Array.from(radioButtons).some(radio => radio.checked);
      submitButton.disabled = !isSelected; // Schakel de knop in of uit
      console.log('Radio selection checked:', isSelected);
    };
  
    // Voeg een eventlistener toe aan elke radiobutton
    radioButtons.forEach(radio => {
      radio.addEventListener('change', checkRadioSelection);
    });
  
    // Controleer de status bij het laden van de pagina
    checkRadioSelection();
  });


document.querySelectorAll('.mealpicca').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();

      console.log('clicked');
   
      const foodId = card.getAttribute('id');
      const targetUrl = `/meal/${foodId}`; // adjust depending on your site
   
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          window.location.href = targetUrl;
        });
      } else {
        window.location.href = targetUrl;
      }
    });
  });

