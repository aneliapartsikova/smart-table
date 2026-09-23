import {sortCollection, sortMap} from "../lib/sort.js";

export function initSorting(columns) {
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
}