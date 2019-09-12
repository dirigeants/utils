/**
 * Verify if a number is a finite number.
 * @param input The number to verify
 */
export default function isNumber(input: unknown): boolean {
	return typeof input === 'number' && !isNaN(input) && Number.isFinite(input);
}