import 'normalize.css';

import { MultipleSelect } from './components';
import './style.scss';

/** Customer **/

const customerSelect = document.querySelector<HTMLSelectElement>(
    'select[name="customer"]'
);

new MultipleSelect(customerSelect, {
    onChange: (selectedOptions) => {
        console.log('customerSelect -> selectedOptions:', selectedOptions);
    },
});

customerSelect?.addEventListener('change', (event) => {
    const target = event.target as HTMLSelectElement;

    console.log('customerSelect -> value:', target.value);
});

/** Region **/

const regionSelect = document.querySelector<HTMLSelectElement>(
    'select[name="region"]'
);

new MultipleSelect(regionSelect, {
    onChange: (selectedOptions) => {
        console.log('regionSelect -> selectedOptions:', selectedOptions);
    },
});

regionSelect?.addEventListener('change', (event) => {
    const target = event.target as HTMLSelectElement;

    console.log('regionSelect -> value:', target.value);
});
