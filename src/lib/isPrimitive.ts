const PRIMITIVE_TYPES = ['string', 'bigint', 'number', 'boolean'];

/**
 * Check whether a value is a primitive
 * @since 0.5.0
 * @param input The input to check
 */
export default function isPrimitive(input: unknown): input is (string | bigint | number | boolean) {
	return PRIMITIVE_TYPES.includes(typeof input);
}
