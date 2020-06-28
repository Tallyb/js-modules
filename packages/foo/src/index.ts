import { isNumber } from 'lodash-es';
import { add}  from 'bar';

export function increment (x: number): number | string {
    return isNumber(x) ? add (x, 1) : 'Nooo!';
}