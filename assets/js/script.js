document.addEventListener('DOMContentLoaded', () => {
    const frequencyInputs = document.querySelectorAll('.freq-input');
    const totalInput = document.getElementById('totalInput');

    function calculateTotal() {
        let total = 0;
        frequencyInputs.forEach(input => {
            const value = parseInt(input.value, 10);
            if (!isNaN(value)) {
                total += value;
            }
        });
        if (totalInput) {
            totalInput.value = total;
        }
    }

    frequencyInputs.forEach(input => {
        input.addEventListener('input', calculateTotal);
    });

    calculateTotal(); // Calculate initial total in case of pre-filled values

   // --- Intro.js Tour (Restricted to exercise.html) ---
    // This checks if the current URL path ends with or contains 'exercise.html'
    if (window.location.pathname.includes('exercise.html')) {
        
        if (typeof introJs === 'function') {
            introJs().setOptions({
                steps: [
                    {
                        element: document.querySelector('#intro-marks'),
                        intro: "Use this data to create your numeric frequency distribution table."
                    },
                    {
                        element: document.querySelector('#intro-sort'),
                        intro: "Use this section to sort the mark data accordingly."
                    },
                    {
                        element: document.querySelector('#intro-table'),
                        intro: "This is your table. Complete the table using the data provided."
                    },
                    {
                        element: document.querySelector('#intro-check'),
                        intro: "Once complete click on submit to see your results."
                    }
                ]
            }).start();
        } else {
            console.error("Intro.js library not loaded.");
        }
        
    }
});