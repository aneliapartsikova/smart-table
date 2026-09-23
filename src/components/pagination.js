import {getPages} from "../lib/utils.js";

<<<<<<< HEAD
export function initPagination(elements, createPage) {
    const {pages, fromRow, toRow, totalRows} = elements;

    return (data, state, action) => {
        const rowsPerPage = state.rowsPerPage;
        const pageCount = Math.ceil(data.length / rowsPerPage);
        let page = state.page;

        if (action) switch(action.name) {
            case 'prev': page = Math.max(1, page - 1); break;
            case 'next': page = Math.min(pageCount, page + 1); break;
            case 'first': page = 1; break;
            case 'last': page = pageCount; break;
        }

        const pageTemplate = pages.firstElementChild.cloneNode(true);
        pages.firstElementChild.remove();

        const visiblePages = getPages(page, pageCount, 5);
        pages.replaceChildren(...visiblePages.map(pageNumber => {
            const el = pageTemplate.cloneNode(true);
            return createPage(el, pageNumber, pageNumber === page);
        }));

        fromRow.textContent = (page - 1) * rowsPerPage + 1;
        toRow.textContent = Math.min((page * rowsPerPage), data.length);
        totalRows.textContent = data.length;

        const skip = (page - 1) * rowsPerPage;
        return data.slice(skip, skip + rowsPerPage);
    };
=======
export const initPagination = ({pages, fromRow, toRow, totalRows}, createPage) => {
    // @todo: #2.3 — подготовить шаблон кнопки для страницы и очистить контейнер

    return (data, state, action) => {
        // @todo: #2.1 — посчитать количество страниц, объявить переменные и константы

        // @todo: #2.6 — обработать действия

        // @todo: #2.4 — получить список видимых страниц и вывести их

        // @todo: #2.5 — обновить статус пагинации

        // @todo: #2.2 — посчитать сколько строк нужно пропустить и получить срез данных
        return data.slice(0, 10);
    }
>>>>>>> 461801aa1e804b808c5d3866f44559460f915f0d
}