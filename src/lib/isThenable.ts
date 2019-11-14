import isFunction from './isFunction';
import isObject from './isObject';

function hasThen(input: unknown | { then?: Function }): boolean {
	return isObject(input) && isFunction(input.then);
}

function hasCatch(input: unknown | { catch?: Function }): boolean {
	return isObject(input) && isFunction(input.catch);
}

/**
 * Verify if an object is a promise.
 * @param input The promise to verify
 */
export default function isThenable(input: unknown): boolean {
	if (!input) return false;
	return (input instanceof Promise) ||
		(input !== Promise.prototype && hasThen(input) && hasCatch(input));
}
