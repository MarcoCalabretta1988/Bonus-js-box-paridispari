console.log('JS OK ');


// TAKE ELEMENT TO DOM

const numeroBox = document.getElementById('n-box');
const numeroMax = document.getElementById('n-max');
const numeroMin = document.getElementById('n-min');
const board = document.getElementById('board');
const printArea = document.getElementById('print-area');
const getBtn = document.getElementById('get-btn');
const resetBtn = document.getElementById('reset-btn');


// GENERATE BUTTON EVENT
getBtn.addEventListener ('click' , function(){
    printArea.classList.remove('d-none');

    const min = parseInt(numeroMin.value.trim());
    const max = parseInt(numeroMax.value.trim());
    const index = parseInt(numeroBox.value.trim());

    if ( isNaN(min) || isNaN(max) || isNaN(index)){
        alert ('I campi non possono essere vuoti');
    }
    else if ( (min < 1 || min > 1000) || (max < 1 || max > 1000)){
        alert ('Inserisci un valore valido tra 1 e 1000');
    }
    else if( index < 1 || index > 100){
        alert ('Inserisci un valore di box compreso tra 1 e 100');
    }
    else if ( min > max){
        alert ('Il valore minimo non può essere maggiore del massimo');
    }
    else{
        let content = '';
        for (let i = 0; i < index ; i++){
            content += `<div class=\"col-4\"> <div class=\"m-3 rounded py-3`;
            const randValue = Math.floor(Math.random() * ( max - min) + min);
            if ( randValue % 2 === 0){
                content += ` bg-success`;
            }
            else{
                content += ` bg-danger`;
            }
            
            content += `\">${randValue}`;
            content += `</div></div>`;
            console.log (content);
        }
    
        board.innerHTML = content ;
    }

});

resetBtn.addEventListener ('click' , function(){

    numeroBox.value = '';
    numeroMax.value = '';
    numeroMin.value =  '';
    printArea.classList.add('d-none');
});