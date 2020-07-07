import _ from 'lodash-es';
import { add}  from 'bar';

export function increment (x: any): number | string {
    return _.isNumber(x) ? add (x, 1) : 'Oy Vey!';
}
