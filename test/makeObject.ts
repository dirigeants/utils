import ava from 'ava';
import { makeObject } from '../src';

ava('makeObject(basic)', (test): void => {
	const made = makeObject('hello', 'world');
	test.deepEqual(made, { hello: 'world' });
});

ava('makeObject(nested)', (test): void => {
	const made = makeObject('he.llo', 'world');
	test.deepEqual(made, { he: { llo: 'world' } });
});

ava('makeObject(existing)', (test): void => {
	const made = makeObject('hello', 'world', { he: { llo: 'world' } });
	test.deepEqual(made, { he: { llo: 'world' }, hello: 'world' });
});

ava('makeObject(existing-nested)', (test): void => {
	const made = makeObject('he.wor', 'ld', { he: { llo: 'world' } });
	test.deepEqual(made, { he: { llo: 'world', wor: 'ld' } });
});
