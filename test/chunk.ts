import ava from 'ava';
import { chunk } from '../dist';

ava('chunk(basic)', (test): void => {
	const entries = [0, 1, 2, 3, 4, 5];
	const chunkSize = 2;
	const expected = [[0, 1], [2, 3], [4, 5]];
	test.deepEqual(chunk(entries, chunkSize), expected);
});

ava('chunk(too-short)', (test): void => {
	const entries = [0, 1, 2, 3, 4, 5];
	const chunkSize = 0;
	test.throws(() => chunk(entries, chunkSize), 'chunkSize must be 1 or greater.');
});

ava('chunk(non-integer)', (test): void => {
	const entries = [0, 1, 2, 3, 4, 5];
	const chunkSize = 1.5;
	test.throws(() => chunk(entries, chunkSize), 'chunkSize must be an integer.');
});

ava('chunk(non-array)', (test): void => {
	const entries = {} as unknown as unknown[];
	const chunkSize = 2;
	test.throws(() => chunk(entries, chunkSize), 'entries must be an array.');
});
