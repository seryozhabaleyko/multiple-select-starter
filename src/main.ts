import 'normalize.css';

import { MultiSelect, TreeSelect } from './components';
import './style.scss';

/** Region **/

const regionSelect = document.querySelector<HTMLSelectElement>(
    'select[name="region"]'
);

new MultiSelect(regionSelect, {
    onChange: (selectedOptions) => {
        console.log('regionSelect -> selectedOptions:', selectedOptions);
    },
});

regionSelect?.addEventListener('change', (event) => {
    const target = event.target as HTMLSelectElement;

    console.log('regionSelect -> value:', target.value);
});

/** Customer **/

const customerSelect = document.querySelector<HTMLSelectElement>(
    'select[name="customer"]'
);

new TreeSelect(customerSelect, {
    onChange: (selectedOptions) => {
        console.log('customerSelect -> selectedOptions:', selectedOptions);
    },
});

customerSelect?.addEventListener('change', (event) => {
    const target = event.target as HTMLSelectElement;

    console.log('customerSelect -> value:', target.value);
});
