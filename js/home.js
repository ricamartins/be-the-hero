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

// MEDIA QUERY PARA CELULARES EM LANDSCAPE
const mobileLandscape = window.matchMedia('(max-height: 425px) and (orientation: landscape)');

// TOGGLE PARA A BARRA DE CATEGORIAS
let categoriesToggle = document.getElementById('categories-toggle');
categoriesToggle.addEventListener('click', function () {
    let categories = document.getElementById('categories');
    let btnToolbar = document.getElementById('btn-toolbar');

    if (mobileLandscape.matches) {
        // FECHA A BARRA DE OPÇÕES DE PESQUISA SE ESTIVER ABERTA
        if (btnToolbar.style.display = 'flex') {
            btnToolbar.style.display = 'none';
        }

        // TOGGLE BARRA DE CATEGORIA
        if (categories.style.display == 'flex') {
            categories.style.display = 'none';
        } else {
            categories.style.display = 'flex';
        }

    // SE NÃO ESTIVER EM LANDSCAPE PERMITE DUAS BARRAS ABERTAS
    } else {
        // TOGGLE BARRA DE CATEGORIA
        if (categories.style.display == 'flex') {
            categories.style.display = 'none';
        } else {
            categories.style.display = 'flex';
        }
    }
});

// TOGGLE PARA A BARRA DE OPÇÕES DE PESQUISAS
let btnToolbarToggle = document.getElementById('btn-toolbar-toggle');
btnToolbarToggle.addEventListener('click', function () {
    let btnToolbar = document.getElementById('btn-toolbar');
    let categories = document.getElementById('categories');

    if (mobileLandscape.matches) {
        // FECHA A BARRA DE CATEGORIA SE ESTIVER ABERTA
        if (categories.style.display == 'flex') {
            categories.style.display = 'none';
        }

        // TOGGLE BARRA DE OPÇÕES DE PESQUISA
        if (btnToolbar.style.display == 'flex') {
            btnToolbar.style.display = 'none';
        } else {
            btnToolbar.style.display = 'flex';
        }

    // SE NÃO ESTIVER EM LANDSCAPE PERMITE DUAS BARRAS ABERTAS
    } else {
        // TOGGLE BARRA DE OPÇÕES DE PESQUISA
        if (btnToolbar.style.display == 'flex') {
            btnToolbar.style.display = 'none';
        } else {
            btnToolbar.style.display = 'flex';
        }
    }
});