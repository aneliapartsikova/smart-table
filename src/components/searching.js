import {rules, createComparison} from "../lib/compare.js";

<<<<<<< HEAD
export function initSearching(searchField) {
    const compare = createComparison(
        ['skipEmptyTargetValues'],
        [rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false)]
    );

    return (data, state, action) => {
        return data.filter(row => compare(row, state));
    };
=======

export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор

    return (data, state, action) => {
        // @todo: #5.2 — применить компаратор
        return data;
    }
>>>>>>> 461801aa1e804b808c5d3866f44559460f915f0d
}