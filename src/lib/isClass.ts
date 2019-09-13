/**
 * Verify if the input is a class constructor.
 * @param input The function to verify
 */
export default function isClass(input: unknown): boolean {
	return typeof input === 'function' &&
		typeof input.prototype === 'object' &&
		input.toString().substring(0, 5) === 'class';
}
