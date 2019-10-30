/**
 * Verify if a number is a finite number.
 * @param input The number to verify
 */
export default function isNumber(input: unknown): input is number {
	return typeof input === 'number' && !isNaN(input) && Number.isFinite(input);
}
