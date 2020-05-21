import ava from 'ava';
import { objectToTuples } from '../src';

ava('objectToTuples(basic)', (test): void => {
	const source = { a: 'Hello', b: 420 };
	const expected = [['a', 'Hello'], ['b', 420]] as [string, unknown][];
	test.deepEqual(objectToTuples(source), expected);
});

ava('objectToTuples(deep)', (test): void => {
	const source = { a: 'Hello', b: 420, deep: { i: [] } };
	const expected = [['a', 'Hello'], ['b', 420], ['deep.i', []]] as [string, unknown][];
	test.deepEqual(objectToTuples(source), expected);
});
