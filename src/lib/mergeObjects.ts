import isObject from './isObject';

/**
 * Merges two objects
 * @param objTarget The object to be merged
 * @param objSource The object to merge
 */
export default function mergeObjects<
	A extends Record<PropertyKey, unknown>,
	B extends Record<PropertyKey, unknown>
>(objTarget: A & Partial<B>, objSource: B): A & B {
	for (const key in objSource) {
		// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
		// @ts-ignore
		objTarget[key] = typeof objTarget[key] === 'undefined' ?
			objSource[key] :
			isObject(objSource[key]) ?
				mergeObjects(objTarget[key] as A & Partial<B>, objSource[key] as B) :
				objSource[key];
	}
	return objTarget as A & B;
}
