import ava from 'ava';
import { tryParse } from '../src';

ava('tryParse(basic)', (test): void => {
	const source = '{"a":4,"b":6}';
	const expected = { a: 4, b: 6 };
	test.deepEqual(tryParse(source), expected);
});

ava('tryParse(invalid)', (test): void => {
	const source = '{"a":4,"b:6}';
	const expected = '{"a":4,"b:6}';
	test.deepEqual(tryParse(source), expected);
});
