import deepClone from './deepClone';
import isObject from './isObject';

/**
 * Sets default properties on an object that aren't already specified.
 * @since 0.5.0
 * @param def Default properties
 * @param given Object to assign defaults to
 */
export default function mergeDefault<A, B extends Partial<A & B>>(defaults: A, given?: B): A & B {
	if (!given) return deepClone(defaults) as A & B;
	for (const key in defaults) {
		// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
		// @ts-ignore
		if (typeof given[key] === 'undefined') given[key] = deepClone(defaults[key]);
		else if (isObject(given[key])) given[key] = mergeDefault(defaults[key], given[key]);
	}

	return given as A & B;
}
