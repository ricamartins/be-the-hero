// MUDA QUAL CHECKBOX ESTÁ ATIVO NA PESQUISA POR CATEGORIA
let categoriesCheckboxes = document.getElementsByName('categories');
for(let i = 0; i < categoriesCheckboxes.length; i++) {

    categoriesCheckboxes[i].addEventListener('change', function () {
        for(let j = 0; j < categoriesCheckboxes.length; j++) {
            categoriesCheckboxes[j].parentElement.classList.remove('active');
            if (categoriesCheckboxes[j].checked) {
                categoriesCheckboxes[j].parentElement.classList.add('active');
            }
        }
    });
}

// MUDA QUAL CHECKBOX ESTÁ ATIVO NA PESQUISA POR TIPO
let filterSearchRadios = document.getElementsByName('filter-search');
for(let i = 0; i < filterSearchRadios.length; i++) {

    filterSearchRadios[i].addEventListener('change', function () {
        for(let j = 0; j < filterSearchRadios.length; j++) {
            filterSearchRadios[j].parentElement.classList.remove('active');
            if (filterSearchRadios[j].checked) {
                filterSearchRadios[j].parentElement.classList.add('active');
            }
        }
    });
}
// MUDA QUAL RADIO BUTTON ESTÁ ATIVO NA ORDENAÇÃO
let sortSearchRadios = document.getElementsByName('sort-search');
for(let i = 0; i < sortSearchRadios.length; i++) {

    sortSearchRadios[i].addEventListener('change', function () {
        for(let j = 0; j < sortSearchRadios.length; j++) {
            sortSearchRadios[j].parentElement.classList.remove('active');
            if (sortSearchRadios[j].checked) {
                sortSearchRadios[j].parentElement.classList.add('active');
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