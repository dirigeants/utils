import ava from 'ava';
import { deepClone } from '../dist';

ava('deepClone(null)', (test): void => {
	const source = null;
	test.deepEqual(deepClone(source), source);
});

ava('deepClone(string)', (test): void => {
	const source = 'Hello';
	test.deepEqual(deepClone(source), source);
});

ava('deepClone(number)', (test): void => {
	const source = 420;
	test.deepEqual(deepClone(source), source);
});

ava('deepClone(bigint)', (test): void => {
	// eslint-disable-next-line no-undef
	const source = BigInt(420);
	test.deepEqual(deepClone(source), source);
});

ava('deepClone(boolean)', (test): void => {
	const source = true;
	test.deepEqual(deepClone(source), source);
});

ava('deepClone(symbol)', (test): void => {
	const source = Symbol('klasa');
	test.is(deepClone(source), source);
});

ava('deepClone(function)', (test): void => {
	const source = null;
	test.is(deepClone(source), source);
});

ava('deepClone(array)', (test): void => {
	test.plan(2);
	const source = [1, 2, 3];
	const clone = deepClone(source);

	test.not(source, clone);
	test.deepEqual(clone, source);
});

ava('deepClone(array-nested)', (test): void => {
	test.plan(4);
	const source: [number, number, number, (number | number[])[]] = [1, 2, 3, [4, 5, [6, 7, 8]]];
	const clone = deepClone(source);

	test.not(source, clone);
	test.not(source[3], clone[3]);
	test.not(source[3][2], clone[3][2]);
	test.deepEqual(clone, source);
});

ava('deepClone(object)', (test): void => {
	test.plan(2);
	const source = { a: 1, b: 2 };
	const clone = deepClone(source);

	test.not(source, clone);
	test.deepEqual(clone, source);
});

ava('deepClone(object-nested)', (test): void => {
	test.plan(4);
	const source = { ab: 1, cd: 2, ef: { gh: 3, ij: 4, kl: [1] } };
	const clone = deepClone(source);

	test.not(source, clone);
	test.not(source.ef, clone.ef);
	test.not(source.ef.kl, clone.ef.kl);
	test.deepEqual(clone, source);
});

ava('deepClone(map)', (test): void => {
	test.plan(5);
	const source = new Map()
		.set('Hello', 420)
		.set('World', 'Yay!');
	const cloned = deepClone(source);

	test.true(cloned instanceof Map);
	test.not(source, cloned);
	test.is(cloned.size, 2);
	test.is(cloned.get('Hello'), 420);
	test.is(cloned.get('World'), 'Yay!');
});

ava('deepClone(set)', (test): void => {
	test.plan(5);
	const source = new Set()
		.add('Hello')
		.add('World');
	const cloned = deepClone(source);

	test.true(cloned instanceof Set);
	test.not(source, cloned);
	test.is(cloned.size, 2);
	test.true(cloned.has('Hello'));
	test.true(cloned.has('World'));
});
