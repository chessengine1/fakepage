document.addEventListener('DOMContentLoaded', function() {
    // Get the form that contains the submit button
    const form = document.querySelector('form[id^="pp-UHnNiR"]');
    const hiddenElements = document.querySelectorAll('.appearlater');
    const totalPriceElement = document.querySelector('.grand-total-price');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent form submission
            
            // Get the input value
            const promoInput = form.querySelector('input[name="ppw-claimCode"]');
            console.log('Input value:', promoInput?.value);
            
            if (promoInput && (promoInput.value === 'hello' || promoInput.value == 'WSDF-POIU-RETY')) {
                console.log('Showing elements');
                // Show all elements with class 'appearlater'
                hiddenElements.forEach(element => {
                    element.style.cssText = 'display: table-row !important';
                });
                
                // Update the total price
                if (totalPriceElement) {
                    totalPriceElement.textContent = '$6.92';
                }
            } else {
                // Hide all elements with class 'appearlater'
                hiddenElements.forEach(element => {
                    element.style.cssText = 'display: none !important';
                });
                
                // Reset the total price
                if (totalPriceElement) {
                    totalPriceElement.textContent = '$56.92';
                }
            }
        });
    }
}); 