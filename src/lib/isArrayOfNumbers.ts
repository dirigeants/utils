import isNumber from './isNumber';

/**
 * Verify an array only includes numbers
 * @param array The array to verify
 */
export default function isArrayOfNumbers(array: unknown[]): array is number[] {
	return array.every(val => isNumber(val));
}
