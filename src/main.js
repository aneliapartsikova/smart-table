import './fonts/ys-display/fonts.css'
import './style.css'

import {data as sourceData} from "./data/dataset_1.js";

import {initData} from "./data.js";
import {processFormData} from "./lib/utils.js";

import {initTable} from "./components/table.js";
<<<<<<< HEAD
import {initPagination} from "./components/pagination.js";
import {initSorting} from "./components/sorting.js";
import {initFiltering} from "./components/filtering.js";
import {initSearching} from "./components/searching.js";
=======
// @todo: подключение

>>>>>>> 461801aa1e804b808c5d3866f44559460f915f0d

// Исходные данные используемые в render()
const {data, ...indexes} = initData(sourceData);

/**
 * Сбор и обработка полей из таблицы
 * @returns {Object}
 */
function collectState() {
    const state = processFormData(new FormData(sampleTable.container));
<<<<<<< HEAD
    const rowsPerPage = parseInt(state.rowsPerPage);
    const page = parseInt(state.page ?? 1);

    return {
        ...state,
        rowsPerPage,
        page
=======

    return {
        ...state
>>>>>>> 461801aa1e804b808c5d3866f44559460f915f0d
    };
}

/**
 * Перерисовка состояния таблицы при любых изменениях
 * @param {HTMLButtonElement?} action
 */
function render(action) {
<<<<<<< HEAD
    let state = collectState();
    let result = [...data];

    result = applySearching(result, state, action);
    result = applyFiltering(result, state, action);
    result = applySorting(result, state, action);
    result = applyPagination(result, state, action);

    sampleTable.render(result);
=======
    let state = collectState(); // состояние полей из таблицы
    let result = [...data]; // копируем для последующего изменения
    // @todo: использование


    sampleTable.render(result)
>>>>>>> 461801aa1e804b808c5d3866f44559460f915f0d
}

const sampleTable = initTable({
    tableTemplate: 'table',
    rowTemplate: 'row',
<<<<<<< HEAD
    before: ['search', 'header', 'filter'],
    after: ['pagination'],
}, (action) => {
    render(action);
});

const applyPagination = initPagination(
    sampleTable.pagination.elements,
    (el, page, isCurrent) => {
        const input = el.querySelector('input');
        const label = el.querySelector('span');
        input.value = page;
        input.checked = isCurrent;
        label.textContent = page;
        return el;
    }
);

const applySorting = initSorting([
    sampleTable.header.elements.sortByDate,
    sampleTable.header.elements.sortByTotal
]);

const applyFiltering = initFiltering(sampleTable.filter.elements, {
    searchBySeller: indexes.sellers
});

const applySearching = initSearching('search');
=======
    before: [],
    after: []
}, render);

// @todo: инициализация

>>>>>>> 461801aa1e804b808c5d3866f44559460f915f0d

const appRoot = document.querySelector('#app');
appRoot.appendChild(sampleTable.container);

<<<<<<< HEAD
render();
=======
render();
>>>>>>> 461801aa1e804b808c5d3866f44559460f915f0d
