import ava from 'ava';
import { clean, initClean } from '../dist';

const token = 'MzM5OTQyNzM5Mjc1Njc3NzI3.4qyqwg.WjrWfDaMQdCP8xVn7P0va5gujmh';
const zws = String.fromCharCode(8203);

ava.serial('clean(uninitialized)', (test): void => {
	test.throws(() => clean(token), 'initClean must be called before running this.');
});

ava.serial('clean(initClean)', (test): void => {
	test.notThrows(() => initClean(token));
});

ava.serial('clean(initialized)', (test): void => {
	test.is(clean(token), '「ｒｅｄａｃｔｅｄ」');
});

ava.serial('clean(multiple)', (test): void => {
	test.is(clean(`${token}${token}`), '「ｒｅｄａｃｔｅｄ」「ｒｅｄａｃｔｅｄ」');
});

ava.serial('clean(case-insensitive)', (test): void => {
	test.is(clean(token.toLowerCase()), '「ｒｅｄａｃｔｅｄ」');
});

ava.serial('clean(backtick)', (test): void => {
	test.is(clean('`Hello'), `\`${zws}Hello`);
});

ava.serial('clean(mention)', (test): void => {
	test.is(clean('@Hello'), `@${zws}Hello`);
});
