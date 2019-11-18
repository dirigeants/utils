import ava from 'ava';
import { isString } from '../dist';

ava('isString(string)', (test): void => {
	const value = 'Hello World';
	test.true(isString(value));
});

ava('isString(number)', (test): void => {
	const value = 42;
	test.false(isString(value));
});

ava('isString(boolean)', (test): void => {
	const value = false;
	test.false(isString(value));
});

ava('isString(object)', (test): void => {
	const value = { class: '' };
	test.false(isString(value));
});
