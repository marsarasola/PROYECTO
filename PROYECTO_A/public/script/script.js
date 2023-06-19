let amountOfBoludos = 0;
const result = document.querySelector('#result')
const btn = document.querySelector('#counter-btn')

const addOneBoludo = () => {
    amountOfBoludos++;
    let quote = `Agregue ${amountOfBoludos}`;
    result.textContent = quote;
}

btn.onclick = addOneBoludo;
