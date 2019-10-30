/**
 * Verify if the input is a function.
 * @param input The function to verify
 */
export default function isFunction(input: unknown): input is Function {
	return typeof input === 'function';
}
