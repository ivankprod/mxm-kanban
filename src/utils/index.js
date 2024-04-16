/**
 *
 * @param obj {object} объект со значениями перечисления
 */
export function Enum(obj) {
	const newObj = {};

	for (const prop in obj)
		if (obj.hasOwnProperty(prop)) newObj[prop] = obj[prop];

	return Object.freeze(newObj);
}
