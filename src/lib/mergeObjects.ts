import isObject from './isObject';

/**
 * Merges two objects
 * @param objTarget The object to be merged
 * @param objSource The object to merge
 */
export default function mergeObjects(objTarget: any = {}, objSource: any): any {
	for (const key in objSource) objTarget[key] = isObject(objSource[key]) ? mergeObjects(objTarget[key], objSource[key]) : objSource[key];
	return objTarget;
}