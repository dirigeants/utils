import ava from 'ava';
import { toTitleCase } from '../dist';

ava('toTitleCase(basic)', (test): void => {
	const source = toTitleCase('something');
	const expected = 'Something';
	test.is(source, expected);
});

ava('toTitleCase(unicode)', (test): void => {
	const source = toTitleCase('🎈something');
	const expected = '🎈Something';
	test.is(source, expected);
});

ava('toTitleCase(keyword)', (test): void => {
	const source = toTitleCase('textchannel');
	const expected = 'TextChannel';
	test.is(source, expected);
});
