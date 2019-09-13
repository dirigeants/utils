/**
 * Splits up an array into chunks
 * @since 0.5.0
 * @param entries The object to be merged
 * @param chunkSize The object to merge
 */
export default function chunk<T>(entries: readonly T[], chunkSize: number): T[][] {
	if (!Array.isArray(entries)) throw new TypeError('entries is not an array.');
	if (!Number.isInteger(chunkSize)) throw new TypeError('chunkSize is not an integer.');
	const clone: T[] = entries.slice();
	const chunks: T[][] = [];
	while (clone.length) chunks.push(clone.splice(0, chunkSize));
	return chunks;
}
