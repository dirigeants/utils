/**
 * Splits up an array into chunks
 * @since 0.5.0
 * @param entries The object to be merged
 * @param chunkSize The object to merge
 */
export function chunk<T>(entries: readonly T[], chunkSize: number): T[][] {
	if (!Array.isArray(entries)) throw new TypeError('entries must be an array.');
	if (!Number.isInteger(chunkSize)) throw new TypeError('chunkSize must be an integer.');
	if (chunkSize < 1) throw new RangeError('chunkSize must be 1 or greater.');
	const clone: T[] = entries.slice();
	const chunks: T[][] = [];
	while (clone.length) chunks.push(clone.splice(0, chunkSize));
	return chunks;
}
