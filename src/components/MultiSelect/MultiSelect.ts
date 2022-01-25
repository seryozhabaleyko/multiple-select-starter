import { SelectElement, SelectOptions } from '../../typings';
import { noop } from '../../utils';
import { IMultiSelect } from './types';
import './styles.scss';

const defaultOptions: SelectOptions = {
    onChange: noop,
};

export class MultiSelect implements IMultiSelect {
    private readonly select: SelectElement;
    private readonly options: SelectOptions;

    constructor(element: SelectElement, options: SelectOptions) {
        this.select = element;
        this.options = { ...defaultOptions, ...options };

        this.init();
    }

    init() {
        console.log('select:', this.select);
        console.log('options:', this.options);
    }

    // your code...
}
