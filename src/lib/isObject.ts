/**
 * Verify if the input is an object literal (or class).
 * @param input The object to verify
 */
export default function isObject(input: unknown): input is Record<PropertyKey, unknown> | object {
	return typeof input === 'object' && input ? input.constructor === Object : false;
}
