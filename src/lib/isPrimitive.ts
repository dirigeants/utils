const PRIMITIVE_TYPES = ['string', 'bigint', 'number', 'boolean'];

/**
 * Check whether a value is a primitive
 * @since 0.5.0
 * @param value The value to check
 */
export default function isPrimitive(value: unknown): boolean {
	return PRIMITIVE_TYPES.includes(typeof value);
}
