import ava from 'ava';
import { isArrayOfNumbers } from '../dist';

ava('isArrayOfNumbers([number, number])', (test): void => {
	const value = [42, 7];
	test.true(isArrayOfNumbers(value));
});

ava('isArrayOfNumbers([string, string])', (test): void => {
	const value = ['Hello', 'World'];
	test.false(isArrayOfNumbers(value));
});

ava('isArrayOfNumbers([number, string])', (test): void => {
	const value = [42, 'Hello World'];
	test.false(isArrayOfNumbers(value));
});

ava('isArrayOfNumbers([string, number])', (test): void => {
	const value = ['Hello World', 42];
	test.false(isArrayOfNumbers(value));
});

ava('isArrayOfNumbers([boolean, boolean])', (test): void => {
	const value = [true, false];
	test.false(isArrayOfNumbers(value));
});

ava('isArrayOfNumbers([string, boolean])', (test): void => {
	const value = ['Hello World', false];
	test.false(isArrayOfNumbers(value));
});

ava('isArrayOfNumbers([boolean, string])', (test): void => {
	const value = [true, 'Hello World'];
	test.false(isArrayOfNumbers(value));
});

ava('isArrayOfNumbers([object, object])', (test): void => {
	const obj = { class: '' };
	const value = [obj, obj];
	test.false(isArrayOfNumbers(value));
});

ava('isArrayOfNumbers([string, object])', (test): void => {
	const obj = { class: '' };
	const value = ['Hello World', obj];
	test.false(isArrayOfNumbers(value));
});

ava('isArrayOfNumbers([object, string])', (test): void => {
	const obj = { class: '' };
	const value = [obj, 'Hello World'];
	test.false(isArrayOfNumbers(value));
});
