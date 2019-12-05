import ava from 'ava';
import { mergeObjects } from '../dist';

ava('mergeObjects(basic)', (test): void => {
	const source = { a: 0, b: 1 };
	const target = {};
	test.deepEqual(mergeObjects(target, source), { a: 0, b: 1 });
});

ava('mergeObjects(mutation)', (test): void => {
	test.plan(2);

	const source = { a: 0, b: 1 };
	const target = {};
	mergeObjects(target, source);

	test.deepEqual(source, { a: 0, b: 1 });
	test.deepEqual(target, { a: 0, b: 1 });
});

ava('mergeObjects(clone)', (test): void => {
	const source = { a: 0, b: 1 };
	const target = {};
	test.deepEqual(mergeObjects(target, source), { a: 0, b: 1 });
});

ava('mergeObjects(partial)', (test): void => {
	const source = { a: 0, b: 1 };
	const target = { a: 2 };
	test.deepEqual(mergeObjects(target, source), { a: 0, b: 1 });
});

ava('mergeObjects(extended)', (test): void => {
	const source = { a: 0, b: 1 };
	const target = { a: 2, i: 2 };
	test.deepEqual(mergeObjects(target, source), { a: 0, i: 2, b: 1 });
});

ava('mergeObjects(deep)', (test): void => {
	const source = { a: 0 };
	const target = { b: { i: 4 } };
	test.deepEqual(mergeObjects(target, source), { a: 0, b: { i: 4 } });
});
