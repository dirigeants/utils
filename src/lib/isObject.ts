/**
 * Verify if the input is an object literal (or class).
 * @param input The object to verify
 */
export default function isObject(input: unknown): boolean {
	return input ? input.constructor === Object : false;
}
