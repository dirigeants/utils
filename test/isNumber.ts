import ava from 'ava';
import { isNumber } from '../src';

ava('isNumber(string)', (test): void => {
	const value = 'Hello World';
	test.false(isNumber(value));
});

ava('isNumber(number-integer)', (test): void => {
	const value = 420;
	test.true(isNumber(value));
});

ava('isNumber(number-float)', (test): void => {
	const value = -420.5;
	test.true(isNumber(value));
});

ava('isNumber(number-nan)', (test): void => {
	const value = NaN;
	test.false(isNumber(value));
});

ava('isNumber(number-infinite)', (test): void => {
	const value = Infinity;
	test.false(isNumber(value));
});

ava('isNumber(bigint)', (test): void => {
	// eslint-disable-next-line no-undef
	const value = BigInt(420);
	test.false(isNumber(value));
});

ava('isNumber(boolean)', (test): void => {
	const value = true;
	test.false(isNumber(value));
});

ava('isNumber(undefined)', (test): void => {
	const value = undefined;
	test.false(isNumber(value));
});

ava('isNumber(object)', (test): void => {
	const value = { class: '' };
	test.false(isNumber(value));
});

ava('isNumber(object-null)', (test): void => {
	const value = null;
	test.false(isNumber(value));
});

ava('isNumber(function)', (test): void => {
	// eslint-disable-next-line func-style
	const value = function myClass(): void {
		/* noop */
	};
	test.false(isNumber(value));
});

ava('isNumber(arrow)', (test): void => {
	const value = (): void => {
		/* noop */
	};
	test.false(isNumber(value));
});

ava('isNumber(class)', (test): void => {
	const value = class A { };
	test.false(isNumber(value));
});
