import ava from 'ava';
import { regExpEsc } from '../src';

ava('regExpEsc(hyphen)', (test): void => {
	const source = String.raw`test-this`;
	const expected = String.raw`test\-this`;
	test.is(regExpEsc(source), expected);
});

ava('regExpEsc(slash)', (test): void => {
	const source = String.raw`test/this`;
	const expected = String.raw`test\/this`;
	test.is(regExpEsc(source), expected);
});

ava('regExpEsc(back slash)', (test): void => {
	const source = String.raw`test\this`;
	const expected = String.raw`test\\this`;
	test.is(regExpEsc(source), expected);
});

ava('regExpEsc(caret)', (test): void => {
	const source = String.raw`^test`;
	const expected = String.raw`\^test`;
	test.is(regExpEsc(source), expected);
});

ava('regExpEsc(dollar)', (test): void => {
	const source = String.raw`test$`;
	const expected = String.raw`test\$`;
	test.is(regExpEsc(source), expected);
});

ava('regExpEsc(* quantifier)', (test): void => {
	const source = String.raw`test*this`;
	const expected = String.raw`test\*this`;
	test.is(regExpEsc(source), expected);
});

ava('regExpEsc(+ quantifier)', (test): void => {
	const source = String.raw`test+this`;
	const expected = String.raw`test\+this`;
	test.is(regExpEsc(source), expected);
});

ava('regExpEsc(? quantifier)', (test): void => {
	const source = String.raw`test?this`;
	const expected = String.raw`test\?this`;
	test.is(regExpEsc(source), expected);
});

ava('regExpEsc(. quantifier)', (test): void => {
	const source = String.raw`test.this`;
	const expected = String.raw`test\.this`;
	test.is(regExpEsc(source), expected);
});

ava('regExpEsc(parentheses)', (test): void => {
	const source = String.raw`(test)`;
	const expected = String.raw`\(test\)`;
	test.is(regExpEsc(source), expected);
});

ava('regExpEsc(vertical bar)', (test): void => {
	const source = String.raw`test|this`;
	const expected = String.raw`test\|this`;
	test.is(regExpEsc(source), expected);
});

ava('regExpEsc(brackets)', (test): void => {
	const source = String.raw`[test]`;
	const expected = String.raw`\[test\]`;
	test.is(regExpEsc(source), expected);
});

ava('regExpEsc(curly brackets)', (test): void => {
	const source = String.raw`{test}`;
	const expected = String.raw`\{test\}`;
	test.is(regExpEsc(source), expected);
});

ava('regExpEsc(combined)', (test): void => {
	const source = String.raw`^(he?l*l+.)|[wW]o{,2}rld$`;
	const expected = String.raw`\^\(he\?l\*l\+\.\)\|\[wW\]o\{,2\}rld\$`;
	test.is(regExpEsc(source), expected);
});
