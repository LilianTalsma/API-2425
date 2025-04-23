

import './index.css';
// import gsap from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('meal-form');
    // selecteert het formulier op de home pagina
    const submitButton = document.getElementById('submit-button');
    // selecteert de submit knop op de home pagina
    const radioButtons = form.querySelectorAll('input[type="radio"]');
    // selecteert de radio buttons in het formulier
  
    // Checkt of een radio button geselecteerd is & schakelt dan de submit
    // button in of uit
    const checkRadioSelection = () => {
      const isSelected = Array.from(radioButtons).some(radio => radio.checked);
      submitButton.disabled = !isSelected; // Schakel de knop in of uit
    };
  
    // Voeg een eventlistener toe aan elke radiobutton die kijkt welke radio
    // button geselecteerd is
    radioButtons.forEach(radio => {
      radio.addEventListener('change', checkRadioSelection);
    });
  
    checkRadioSelection();
    // controleert de status bij het laden van de pagina
  });


document.querySelectorAll('.mealpicca').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
    // Voorkomt de standaardactie van de klik (bijvoorbeeld navigeren).

   
      const foodId = card.getAttribute('id');
      const targetUrl = `/meal/${foodId}`; 
    // haalt het id van de foto/card op
   
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          window.location.href = targetUrl;
        });
        // gaat naar detail pagina met een view transition
      } else {
        window.location.href = targetUrl;
        // Als er geen view transition is, ga dan gewoon naar de detailpagina
      }
    });
  });

