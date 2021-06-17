import { isPrimitive } from './isPrimitive';
import { isObject } from './isObject';

/**
 * Deep clone a value
 * @since 0.5.0
 * @param source The object to clone
 */
export function deepClone<T, R extends T>(source: T): R {
	// Check if it's a primitive (with exception of function and null, which is typeof object)
	if (source === null || isPrimitive(source)) return source as R;
	if (Array.isArray(source)) {
		const output = [] as unknown as T & T extends (infer S)[] ? S[] : never;
		for (const value of source) output.push(deepClone(value));
		return output as unknown as R;
	}
	if (isObject(source)) {
		const output = {} as Record<PropertyKey, unknown>;
		for (const [key, value] of Object.entries(source)) output[key] = deepClone(value);
		return output as unknown as R;
	}
	if (source instanceof Map) {
		const output = new (source.constructor as MapConstructor)() as unknown as T & T extends Map<infer K, infer V> ? Map<K, V> : never;
		for (const [key, value] of source.entries()) output.set(key, deepClone(value));
		return output as unknown as R;
	}
	if (source instanceof Set) {
		const output = new (source.constructor as SetConstructor)() as unknown as T & T extends Set<infer K> ? Set<K> : never;
		for (const value of source.values()) output.add(deepClone(value));
		return output as unknown as R;
	}
	return source as R;
}
