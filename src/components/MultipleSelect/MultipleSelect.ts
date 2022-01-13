import { noop } from '../../utils';

import { IMultipleSelect, Element, Options } from './types';
import './styles.scss';

const defaultOptions: Options = {
    onChange: noop,
};

export class MultipleSelect implements IMultipleSelect {
    private readonly select: Element;
    private readonly options: Options;

    constructor(element: Element, options: Options) {
        this.select = element;
        this.options = { ...defaultOptions, ...options };

        this.init();
    }

    private init() {
        console.log('select:', this.select);
        console.log('options:', this.options);
    }

    // your code...
}
