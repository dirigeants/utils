import ava from 'ava';
import { codeBlock } from '../src';

const zws = String.fromCharCode(8203);
const language = 'js';

ava('codeBlock(basic)', (test): void => {
	const expression = 'Hello World';
	const expected = '```js\nHello World```';
	test.is(codeBlock(language, expression), expected);
});

ava('codeBlock(empty)', (test): void => {
	const expression = '';
	const expected = `\`\`\`js\n${zws}\`\`\``;
	test.is(codeBlock(language, expression), expected);
});
