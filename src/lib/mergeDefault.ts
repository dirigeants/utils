import { deepClone } from './deepClone';
import { isObject } from './isObject';

import type { DeepRequired } from './utilityTypes';

type KeyedObject = Record<PropertyKey, unknown>;

/**
 * Sets default properties on an object that aren't already specified.
 * @since 0.5.0
 * @param def Default properties
 * @param given Object to assign defaults to
 */
export function mergeDefault<A extends KeyedObject, B extends Partial<A>>(defaults: A, given?: B): DeepRequired<A & B> {
	if (!given) return deepClone(defaults) as DeepRequired<A & B>;
	for (const key in defaults) {
		if (typeof given[key] === 'undefined') {
			given[key] = deepClone(defaults[key]) as unknown as B[Extract<keyof A, string>];
		} else if (isObject(given[key])) {
			given[key] = mergeDefault(defaults[key] as KeyedObject, given[key] as KeyedObject) as unknown as B[Extract<keyof A, string>];
		}
	}

	return given as DeepRequired<A & B>;
}
