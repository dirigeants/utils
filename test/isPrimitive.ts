import ava from 'ava';
import { isPrimitive } from '../src';

ava('isPrimitive(string)', (test): void => {
	const value = 'Hello World';
	test.true(isPrimitive(value));
});

ava('isPrimitive(number)', (test): void => {
	const value = 420;
	test.true(isPrimitive(value));
});

ava('isPrimitive(bigint)', (test): void => {
	// eslint-disable-next-line no-undef
	const value = BigInt(420);
	test.true(isPrimitive(value));
});

ava('isPrimitive(boolean)', (test): void => {
	const value = true;
	test.true(isPrimitive(value));
});

ava('isPrimitive(undefined)', (test): void => {
	const value = undefined;
	test.false(isPrimitive(value));
});

ava('isPrimitive(object)', (test): void => {
	const value = { class: '' };
	test.false(isPrimitive(value));
});

ava('isPrimitive(object-null)', (test): void => {
	const value = null;
	test.false(isPrimitive(value));
});

ava('isPrimitive(function)', (test): void => {
	// eslint-disable-next-line func-style
	const value = function myClass(): void {
		/* noop */
	};
	test.false(isPrimitive(value));
});

ava('isPrimitive(arrow)', (test): void => {
	const value = (): void => {
		/* noop */
	};
	test.false(isPrimitive(value));
});

ava('isPrimitive(class)', (test): void => {
	const value = class A { };
	test.false(isPrimitive(value));
});
