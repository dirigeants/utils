import ava from 'ava';
import { isFunction } from '../src';

ava('isFunction(string)', (test): void => {
	const value = 'Hello World';
	test.false(isFunction(value));
});

ava('isFunction(number)', (test): void => {
	const value = 420;
	test.false(isFunction(value));
});

ava('isFunction(bigint)', (test): void => {
	// eslint-disable-next-line no-undef
	const value = BigInt(420);
	test.false(isFunction(value));
});

ava('isFunction(boolean)', (test): void => {
	const value = true;
	test.false(isFunction(value));
});

ava('isFunction(undefined)', (test): void => {
	const value = undefined;
	test.false(isFunction(value));
});

ava('isFunction(object)', (test): void => {
	const value = { class: '' };
	test.false(isFunction(value));
});

ava('isFunction(object-null)', (test): void => {
	const value = null;
	test.false(isFunction(value));
});

ava('isFunction(function)', (test): void => {
	// eslint-disable-next-line func-style
	const value = function myClass(): void {
		/* noop */
	};
	test.true(isFunction(value));
});

ava('isFunction(arrow)', (test): void => {
	const value = (): void => {
		/* noop */
	};
	test.true(isFunction(value));
});

ava('isFunction(class)', (test): void => {
	const value = class A { };
	test.true(isFunction(value));
});
