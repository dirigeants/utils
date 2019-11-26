import isFunction from './isFunction';

function hasThen(input: { then?: Function }): boolean {
	return Reflect.has(input, 'then') && isFunction(input.then);
}

function hasCatch(input: { catch?: Function }): boolean {
	return Reflect.has(input, 'catch') && isFunction(input.catch);
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
