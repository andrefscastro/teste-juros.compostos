/**calculating rate with API */

async function getContent() {


    try {
        const response = await fetch('http://api.mathjs.org/v4/')

        const data = await response.json()
        
    } catch (error) {
        console.log(error)
    }
}



/** Validating Form */
let form = document.querySelector('#formSubmit');

form.onsubmit = function(evento){
    evento.preventDefault()

    let error = false;

    var nameValue = document.forms['formSubmit']['name'].value;

    var monthlyValue = document.forms['formSubmit']['monthly'].value;

    var rateValue = document.forms['formSubmit']['rate'].value;

    var periodValue = document.forms['formSubmit']['period'].value;

    let inputName = document.querySelector('#name');

    let inputMonthly = document.querySelector('#monthly');

    let inputRate = document.querySelector('#rate');
    
    if(!nameValue){
        let error = true;

        (inputName).classList.add('inputError')

        inputName.placeholder = 'Digite o seu nome corretamente'

    } else {

        (inputName).classList.remove('inputError')

        inputName.placeholder = ''

    }

    if(!monthlyValue){

        let error = true;

        inputMonthly.classList.add('inputError')

        inputMonthly.placeholder = 'Digite a mensalidade corretamente'

    } else {

        inputMonthly.classList.remove('inputError')

        inputMonthly.placeholder = ''

    }

    if(!rateValue){

        let error = true;

        inputRate.classList.add('inputError')

        inputRate.placeholder = 'Digite a taxa de juros corretamente'

    } else {

        inputRate.classList.remove('inputError')

        inputRate.placeholder = ''

    }

}

//** Finished */