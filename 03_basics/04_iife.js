// Imediately Invoked Function Expression
// These are used to avoid the issues with global scope

// Named IIFE
(function chai() {
    console.log(`DB Connected`);
})();

// 
((name) => {console.log(`${name}, DB TWO Connected`)})('Sahil');

