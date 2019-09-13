import ava from 'ava';
import { isThenable } from '../dist';

ava('isThenable(string)', (test): void => {
	const value = 'Hello World';
	test.false(isThenable(value));
});

ava('isThenable(number)', (test): void => {
	const value = 420;
	test.false(isThenable(value));
});

ava('isThenable(bigint)', (test): void => {
	// eslint-disable-next-line no-undef
	const value = BigInt(420);
	test.false(isThenable(value));
});

ava('isThenable(boolean)', (test): void => {
	const value = true;
	test.false(isThenable(value));
});

ava('isThenable(undefined)', (test): void => {
	const value = undefined;
	test.false(isThenable(value));
});

ava('isThenable(object)', (test): void => {
	const value = { class: '' };
	test.false(isThenable(value));
});

ava('isThenable(object-null)', (test): void => {
	const value = null;
	test.false(isThenable(value));
});

ava('isThenable(promise-constructor)', (test): void => {
	const value = new Promise((resolve): void => resolve(true));
	test.true(isThenable(value));
});

ava('isThenable(promise-resolve)', (test): void => {
	const value = Promise.resolve(true);
	test.true(isThenable(value));
});

ava('isThenable(promise-like)', (test): void => {
	const value = {
		then(): boolean {
			return true;
		},
		catch(): void {
			/* noop */
		}
	};
	test.true(isThenable(value));
});

ava('isThenable(function)', (test): void => {
	// eslint-disable-next-line func-style
	const value = function myClass(): void {
		/* noop */
	};
	test.false(isThenable(value));
});

ava('isThenable(arrow)', (test): void => {
	const value = (): void => {
		/* noop */
	};
	test.false(isThenable(value));
});

ava('isThenable(class)', (test): void => {
	const value = class A { };
	test.false(isThenable(value));
});
