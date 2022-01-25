import { SelectElement, SelectOptions } from '../../typings';
import { MultiSelect } from '../MultiSelect';
import { ITreeSelect } from './types';
import './styles.scss';

export class TreeSelect extends MultiSelect implements ITreeSelect {
    constructor(element: SelectElement, options: SelectOptions) {
        super(element, options);
    }

    // your code...
}
