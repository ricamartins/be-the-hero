// MUDA QUAL RADIO BUTTON ESTÁ ATIVO NO PRIMEIRO GRUPO DE PESQUISA
let firstSearchRadios = document.getElementsByName('first-search');
for(let i = 0; i < firstSearchRadios.length; i++) {

    firstSearchRadios[i].addEventListener('change', function () {
        for(let j = 0; j < firstSearchRadios.length; j++) {
            firstSearchRadios[j].parentElement.classList.remove('active');
            if (firstSearchRadios[j].checked) {
                firstSearchRadios[j].parentElement.classList.add('active');
            }
        }
    });
}
// MUDA QUAL RADIO BUTTON ESTÁ ATIVO NO SEGUNDO GRUPO DE PESQUISA
let secondSearchRadios = document.getElementsByName('second-search');
for(let i = 0; i < secondSearchRadios.length; i++) {

    secondSearchRadios[i].addEventListener('change', function () {
        for(let j = 0; j < secondSearchRadios.length; j++) {
            secondSearchRadios[j].parentElement.classList.remove('active');
            if (secondSearchRadios[j].checked) {
                secondSearchRadios[j].parentElement.classList.add('active');
            }
        }
    });
}

// TOGGLE PARA A BARRA DE CATEGORIAS
let categoriesToggle = document.getElementById('categories-toggle');
categoriesToggle.addEventListener('click', function () {
    let categories = document.getElementById('categories');
    if (categories.style.display == 'flex') {
        categories.style.display = 'none';
    } else {
        categories.style.display = 'flex';
    }
});

// TOGGLE PARA A BARRA DE OPÇÕES DE PESQUISAS
let btnToolbarToggle = document.getElementById('btn-toolbar-toggle');
btnToolbarToggle.addEventListener('click', function () {
    let btnToolbar = document.getElementById('btn-toolbar');
    if (btnToolbar.style.display == 'flex') {
        btnToolbar.style.display = 'none';
    } else {
        btnToolbar.style.display = 'flex';
    }
});