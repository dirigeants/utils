import isObject from './isObject';

/**
 * Convert an object to a tuple
 * @since 0.5.0
 * @param {Object<string, *>} object The object to convert
 * @param {string} [prefix=''] The prefix for the key
 * @returns {Array<Array<*>>}
 */
export default function objectToTuples(object, prefix = '') {
	const entries = [];
	for (const [key, value] of Object.entries(object)) {
		if (isObject(value)) {
			entries.push(...objectToTuples(value, `${prefix}${key}.`));
		} else {
			entries.push([`${prefix}${key}`, value]);
		}
	}

	return entries;
}