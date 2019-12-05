/**
 * Verify if the input is an object literal (or class).
 * @param input The object to verify
 */
export default function isObject(input: unknown): input is Record<string | number | symbol, unknown> {
	return typeof input === 'object' && input ? input.constructor === Object : false;
}
