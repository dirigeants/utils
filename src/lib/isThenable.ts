import isFunction from './isFunction';

/**
 * Verify if an object is a promise.
 * @param input The promise to verify
 */
export default function isThenable(input: unknown): boolean {
	if (!input) return false;
	return (input instanceof Promise) ||
		(input !== Promise.prototype && isFunction(input['then']) && isFunction(input['catch']));
}