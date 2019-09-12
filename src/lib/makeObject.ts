/**
 * Turn a dotted path into a json object.
 * @param {string} path The dotted path
 * @param {*} value The value
 * @param {Object<string, *>} [obj = {}] The object to edit
 * @returns {*}
 */
export default function makeObject(path, value, obj = {}) {
	if (path.indexOf('.') === -1) {
		obj[path] = value;
	} else {
		const route = path.split('.');
		const lastKey = route.pop();
		let reference = obj;
		for (const key of route) {
			if (!reference[key]) reference[key] = {};
			reference = reference[key];
		}
		reference[lastKey] = value;
	}
	return obj;
}