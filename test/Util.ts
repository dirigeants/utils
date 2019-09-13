import ava from 'ava';
import {
	arrayStrictEquals
} from '..';

ava('arrayStrictEquals', (test): void => {
	test.plan(5);

	test.true(arrayStrictEquals([], []));
	test.true(arrayStrictEquals([1], [1]));
	test.true(arrayStrictEquals([5, 2, 1], [5, 2, 1]));
	test.false(arrayStrictEquals([1], []));
	test.false(arrayStrictEquals([0, 1, 2], [2, 1, 0]));
});

// ... others
