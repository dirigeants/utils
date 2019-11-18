import isString from './isString';

/**
 * Verify if an array only includes strings
 * @param array The array to verify
 */
export default function isArrayOfStrings(array: unknown[]): array is string[] {
	return array.every(val => isString(val));
}
