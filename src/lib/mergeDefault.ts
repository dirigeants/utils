import { deepClone } from './deepClone';
import { isObject } from './isObject';

import type { DeepRequired } from './utilityTypes';

type NonNullObject = {};

/**
 * Sets default properties on an object that aren't already specified.
 * @since 0.5.0
 * @param def Default properties
 * @param given Object to assign defaults to
 */
export function mergeDefault<A extends NonNullObject, B extends Partial<A>>(defaults: A, given?: B): DeepRequired<A & B> {
	if (!given) return deepClone(defaults) as DeepRequired<A & B>;
	for (const key in defaults) {
		if (typeof given[key] === 'undefined') {
			Reflect.set(given, key, deepClone(defaults[key]));
		} else if (isObject(given[key])) {
			Reflect.set(given, key, mergeDefault(defaults[key], given[key]));
		}
	}

	return given as DeepRequired<A & B>;
}
