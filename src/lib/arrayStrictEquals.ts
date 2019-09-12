/**
 * Compare if both arrays are strictly equal
 * @param arr1 The first array to compare
 * @param arr2 The second array to compare
 */
export default function arraysStrictEquals(arr1: unknown[], arr2: unknown[]): boolean {
	if (arr1 === arr2) return true;
	if (arr1.length !== arr2.length) return false;

	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}
	return true;
}