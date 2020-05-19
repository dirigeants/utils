import { isObject } from './isObject';

import type { DeepRequired } from './utilityTypes';

type KeyedObject = Record<PropertyKey, unknown>;

/**
 * Merges two objects
 * @param objTarget The object to be merged
 * @param objSource The object to merge
 */
export function mergeObjects<A extends KeyedObject, B extends KeyedObject>(objTarget: A, objSource: B): DeepRequired<A & B> {
	for (const [key, value] of Object.entries(objSource) as [keyof B, unknown][]) {
		const targetValue = objTarget[key];
		if (isObject(value)) {
			Reflect.set(objTarget, key, isObject(targetValue) ? mergeObjects(targetValue as KeyedObject, value as KeyedObject) : value);
		} else if (!isObject(targetValue)) {
			Reflect.set(objTarget, key, value);
		}
	}
	return objTarget as DeepRequired<A & B>;
}
