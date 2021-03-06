/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-marbles
 */

const isArray = require("lodash/isArray");

export interface UnnamedCase {
    [key: string]: any;
    only?: boolean;
    skip?: boolean;
}

export interface NamedCase extends UnnamedCase {
    name: string;
}

export function _cases<T extends UnnamedCase>(adapter: (_case: NamedCase) => void, cases: { [key: string]: T }): void;
export function _cases<T extends NamedCase>(adapter: (_case: NamedCase) => void, cases: T[]): void;
export function _cases(adapter: (_case: NamedCase) => void, cases: any): void {

    if (!isArray(cases)) {
        cases = Object.keys(cases).map((key) => ({ ...cases[key], name: key }));
    }
    cases.forEach(adapter);
}
