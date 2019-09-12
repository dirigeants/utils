import deepClone from './deepClone';
import isObject from './isObject';

/**
 * Sets default properties on an object that aren't already specified.
 * @since 0.5.0
 * @param def Default properties
 * @param [given] Object to assign defaults to
 * @returns 
 * @private
 */
export default function mergeDefault(def: T, given?: unknown): T {
   if (!given) return deepClone(def);

   for (const key in def) {
	   if (typeof given[key] === 'undefined') given[key] = deepClone(def[key]);
	   else if (isObject(given[key])) given[key] = mergeDefault(def[key], given[key]);
   }

   return given;
}