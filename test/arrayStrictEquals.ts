import ava from 'ava';
import { arrayStrictEquals } from '../dist';

ava('arrayStrictEquals(reference)', (test): void => {
	const array = [];

	test.true(arrayStrictEquals(array, array));
});

ava('arrayStrictEquals(identical)', (test): void => {
	test.plan(2);

	test.true(arrayStrictEquals([], []));
	test.true(arrayStrictEquals([5, 2, 1], [5, 2, 1]));
});

ava('arrayStrictEquals(different-order)', (test): void => {
	test.false(arrayStrictEquals([0, 1, 2], [2, 1, 0]));
});

ava('arrayStrictEquals(different-length)', (test): void => {
	test.false(arrayStrictEquals([1], []));
});

ava('arrayStrictEquals(different-values)', (test): void => {
	test.false(arrayStrictEquals([1, 2, 5], [1, 2, 4]));
});
