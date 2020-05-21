import ava from 'ava';
import { mergeDefault } from '../src';

ava('mergeDefault(basic)', (test): void => {
	const defaults = { a: 0, b: 1 };
	const given = {};
	test.deepEqual(mergeDefault(defaults, given), { a: 0, b: 1 });
});

ava('mergeDefault(mutation)', (test): void => {
	test.plan(2);

	const defaults = { a: 0, b: 1 };
	const given = {};
	mergeDefault(defaults, given);

	test.deepEqual(defaults, { a: 0, b: 1 });
	test.deepEqual(given, { a: 0, b: 1 });
});

ava('mergeDefault(clone)', (test): void => {
	const defaults = { a: 0, b: 1 };
	test.deepEqual(mergeDefault(defaults), { a: 0, b: 1 });
});

ava('mergeDefault(partial)', (test): void => {
	const defaults = { a: 0, b: 1 };
	const given = { a: 2 };
	test.deepEqual(mergeDefault(defaults, given), { a: 2, b: 1 });
});

ava('mergeDefault(extended)', (test): void => {
	const defaults = { a: 0, b: 1 };
	const given = { a: 2, i: 3 };
	test.deepEqual(mergeDefault(defaults, given), { a: 2, i: 3, b: 1 });
});

ava('mergeDefault(partial-falsy-null)', (test): void => {
	const defaults: { a: null | number, b: number } = { a: 0, b: 1 };
	const given = { a: null };
	test.deepEqual(mergeDefault(defaults, given), { a: null, b: 1 });
});

ava('mergeDefault(partial-undefined)', (test): void => {
	const defaults = { a: 0, b: 1 };
	const given = { a: undefined };
	test.deepEqual(mergeDefault(defaults, given), { a: 0, b: 1 });
});

ava('mergeDefault(deep)', (test): void => {
	const defaults = { a: { b: 1 } };
	const given = { a: { b: 2 } };
	test.deepEqual(mergeDefault(defaults, given), { a: { b: 2 } });
});
