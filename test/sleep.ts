import ava from 'ava';
import { sleep } from '../src';

ava('sleep(cozy)', async (test): Promise<void> => {
	test.plan(2);

	const pending = sleep(1);
	test.true(pending instanceof Promise);

	const result = await pending;
	test.is(result, undefined);
});
