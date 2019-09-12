/**
 * Splits up an array into chunks
 * @since 0.5.0
 * @param {any[]} entries The object to be merged
 * @param {number} chunkSize The object to merge
 * @returns {any[]}
 */
export default function chunk(entries: T[], chunkSize: number): T[][] {
	if (!Array.isArray(entries)) throw new TypeError('entries is not an array.');
	if (!Number.isInteger(chunkSize)) throw new TypeError('chunkSize is not an integer.');
	const clone = entries.slice();
	const chunks = [];
	while (clone.length) chunks.push(clone.splice(0, chunkSize));
	return chunks;
}