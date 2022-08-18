/**calculating rate with API */






const configs = {
    method: 'POST',
    headers: {'content-type: application/json'},
    body: { "expr": '[valor da mensalidade] * (((1 + [taxa de juros]) ^ [tempo de contribuicao em meses] - 1) / [taxa de juros])' }
}

clickButton.onclick = () => fetch('http://api.mathjs.org/v4/', configs).then(showResult).catch(showError)


/**Show on the screen */

function showScreen(expr) {
    let output = ''

    for(let resultado of expr) {
        output += `
            <div class="result">
    
                <p>Olá ${resultado.nome}, investindo R$ ${resultado.mensalidade} todo mês, você terá R$ ${resultado.result} em ${resultado.tempo} sob uma taxa de juros de ${resultado.rate} ao mês.</p>
    
            </div>

        `
    }

    document.querySelector('.resultText').innerHTML = output

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