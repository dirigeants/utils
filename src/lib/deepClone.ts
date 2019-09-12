import isPrimitive from './isPrimitive';

/**
 * Deep clone a value
 * @since 0.5.0
 * @param {*} source The object to clone
 * @returns {*}
 */
export default function deepClone(source: T): T {
	// Check if it's a primitive (with exception of function and null, which is typeof object)
	if (source === null || isPrimitive(source)) return source;
	if (Array.isArray(source)) {
		const output = [];
		for (const value of source) output.push(deepClone(value));
		return output;
	}
	if (Util.isObject(source)) {
		const output = {};
		for (const [key, value] of Object.entries(source)) output[key] = deepClone(value);
		return output;
	}
	if (source instanceof Map) {
		const output = new source.constructor();
		for (const [key, value] of source.entries()) output.set(key, deepClone(value));
		return output;
	}
	if (source instanceof Set) {
		const output = new source.constructor();
		for (const value of source.values()) output.add(deepClone(value));
		return output;
	}
	return source;
}