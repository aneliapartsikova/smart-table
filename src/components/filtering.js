import {createComparison, defaultRules} from "../lib/compare.js";

<<<<<<< HEAD
export function initFiltering(elements, indexes) {
    Object.keys(indexes)
      .forEach((elementName) => {
        elements[elementName].append(
            ...Object.values(indexes[elementName])
                      .map(name => {
                          const option = document.createElement('option');
                          option.value = name;
                          option.textContent = name;
                          return option;
                      })
        )
     })

    const compare = createComparison(defaultRules);

    return (data, state, action) => {
        if (action && action.name === 'clear') {
            const input = action.closest('.filter-item')?.querySelector('input, select');
            if (input) {
                input.value = '';
                state[action.dataset.field] = '';
            }
        }

        return data.filter(row => compare(row, state));
=======
// @todo: #4.3 — настроить компаратор

export function initFiltering(elements, indexes) {
    // @todo: #4.1 — заполнить выпадающие списки опциями

    return (data, state, action) => {
        // @todo: #4.2 — обработать очистку поля

        // @todo: #4.5 — отфильтровать данные используя компаратор
        return data;
>>>>>>> 461801aa1e804b808c5d3866f44559460f915f0d
    }
}