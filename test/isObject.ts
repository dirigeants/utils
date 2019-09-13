import ava from 'ava';
import { isObject } from '../dist';

ava('isObject(string)', (test): void => {
	const value = 'Hello World';
	test.false(isObject(value));
});

ava('isObject(number)', (test): void => {
	const value = 420;
	test.false(isObject(value));
});

ava('isObject(bigint)', (test): void => {
	// eslint-disable-next-line no-undef
	const value = BigInt(420);
	test.false(isObject(value));
});

ava('isObject(boolean)', (test): void => {
	const value = true;
	test.false(isObject(value));
});

ava('isObject(undefined)', (test): void => {
	const value = undefined;
	test.false(isObject(value));
});

ava('isObject(object)', (test): void => {
	const value = { class: '' };
	test.true(isObject(value));
});

ava('isObject(object-null)', (test): void => {
	const value = null;
	test.false(isObject(value));
});

ava('isObject(object-array)', (test): void => {
	const value = [];
	test.false(isObject(value));
});

ava('isObject(object-non-literal)', (test): void => {
	const value = new class A {}();
	test.false(isObject(value));
});

ava('isObject(function)', (test): void => {
	// eslint-disable-next-line func-style
	const value = function myClass(): void {
		/* noop */
	};
	test.false(isObject(value));
});

ava('isObject(arrow)', (test): void => {
	const value = (): void => {
		/* noop */
	};
	test.false(isObject(value));
});

ava('isObject(class)', (test): void => {
	const value = class A { };
	test.false(isObject(value));
});
