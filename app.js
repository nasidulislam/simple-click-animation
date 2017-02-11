/**
 * Created by nasidulislam on 2/5/17.
 */
const button = document.querySelector('.round-button');
const divs = document.querySelectorAll('div');

function handleTransition(event) {
    divs.forEach(function (div) {
        div.classList.toggle('active');
    });
}

button.addEventListener('click', handleTransition);