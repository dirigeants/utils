import isObject from './isObject';

/**
 * Merges two objects
 * @param objTarget The object to be merged
 * @param objSource The object to merge
 */
export default function mergeObjects<
	A extends Record<PropertyKey, unknown>,
	B extends Record<PropertyKey, unknown>
>(objTarget: A, objSource: B): A & B {
	for (const [key, value] of Object.entries(objSource) as [keyof B, unknown][]) {
		const targetValue = objTarget[key];
		if (isObject(value)) {
			Reflect.set(objTarget, key, isObject(targetValue) ? mergeObjects(targetValue, value) : value);
		} else if (!isObject(targetValue)) {
			Reflect.set(objTarget, key, value);
		}
	}
	return objTarget as A & B;
}
