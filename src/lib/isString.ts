/**
 * Verify if a the input is a string.
 * @param input The input to verify
 */
export default function isString(input: unknown): input is string {
	return typeof input === 'string';
}
