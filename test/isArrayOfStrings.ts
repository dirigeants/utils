import ava from 'ava';
import { isArrayOfStrings } from '../dist';

ava('isArrayOfStrings([string, string])', (test): void => {
	const value = ['Hello', 'World'];
	test.true(isArrayOfStrings(value));
});

ava('isArrayOfStrings([number, number])', (test): void => {
	const value = [42, 7];
	test.false(isArrayOfStrings(value));
});

ava('isArrayOfStrings([number, string])', (test): void => {
	const value = [42, 'Hello World'];
	test.false(isArrayOfStrings(value));
});

ava('isArrayOfStrings([string, number])', (test): void => {
	const value = ['Hello World', 42];
	test.false(isArrayOfStrings(value));
});

ava('isArrayOfStrings([boolean, boolean])', (test): void => {
	const value = [true, false];
	test.false(isArrayOfStrings(value));
});

ava('isArrayOfStrings([string, boolean])', (test): void => {
	const value = ['Hello World', false];
	test.false(isArrayOfStrings(value));
});

ava('isArrayOfStrings([boolean, string])', (test): void => {
	const value = [true, 'Hello World'];
	test.false(isArrayOfStrings(value));
});

ava('isArrayOfStrings([object, object])', (test): void => {
	const obj = { class: '' };
	const value = [obj, obj];
	test.false(isArrayOfStrings(value));
});

ava('isArrayOfStrings([string, object])', (test): void => {
	const obj = { class: '' };
	const value = ['Hello World', obj];
	test.false(isArrayOfStrings(value));
});

ava('isArrayOfStrings([object, string])', (test): void => {
	const obj = { class: '' };
	const value = [obj, 'Hello World'];
	test.false(isArrayOfStrings(value));
});
