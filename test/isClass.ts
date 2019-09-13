import ava from 'ava';
import { isClass } from '../dist';

ava('isClass(string)', (test): void => {
	const value = 'Hello World';
	test.false(isClass(value));
});

ava('isClass(number)', (test): void => {
	const value = 420;
	test.false(isClass(value));
});

ava('isClass(bigint)', (test): void => {
	// eslint-disable-next-line no-undef
	const value = BigInt(420);
	test.false(isClass(value));
});

ava('isClass(boolean)', (test): void => {
	const value = true;
	test.false(isClass(value));
});

ava('isClass(undefined)', (test): void => {
	const value = undefined;
	test.false(isClass(value));
});

ava('isClass(object)', (test): void => {
	const value = { class: '' };
	test.false(isClass(value));
});

ava('isClass(object-null)', (test): void => {
	const value = null;
	test.false(isClass(value));
});

ava('isClass(function)', (test): void => {
	// eslint-disable-next-line func-style
	const value = function myClass(): void {
		/* noop */
	};
	test.false(isClass(value));
});

ava('isClass(arrow)', (test): void => {
	const value = (): void => {
		/* noop */
	};
	test.false(isClass(value));
});

ava('isClass(class)', (test): void => {
	const value = class A {};
	test.true(isClass(value));
});
