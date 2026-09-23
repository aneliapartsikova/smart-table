import {sortCollection, sortMap} from "../lib/sort.js";

export function initSorting(columns) {
<<<<<<< HEAD
    let field = null;
    let order = 'none';

    return (data, state, action) => {

        if (action && columns.includes(action)) {
            action.dataset.value = sortMap[action.dataset.value];
            field = action.dataset.field;
            order = action.dataset.value;

            columns.forEach(column => {
                if (column.dataset.field !== action.dataset.field) {
                    column.dataset.value = 'none';
                }
            });
        }

        columns.forEach(column => {
            if (column.dataset.value !== 'none') {
                field = column.dataset.field;
                order = column.dataset.value;
            }
        });

        return sortCollection(data, field, order);
    };
=======
    return (data, state, action) => {
        let field = null;
        let order = null;

        if (action && action.name === 'sort') {
            // @todo: #3.1 — запомнить выбранный режим сортировки

            // @todo: #3.2 — сбросить сортировки остальных колонок
        } else {
            // @todo: #3.3 — получить выбранный режим сортировки
        }

        return sortCollection(data, field, order);
    }
>>>>>>> 461801aa1e804b808c5d3866f44559460f915f0d
}