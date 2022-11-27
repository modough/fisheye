export default function createElementDOM(
	type,
	txt = '',
	className = '',
	attributes = []
) {
	const elt = document.createElement(type);
	elt.innerText = txt;
	elt.className = className;
	if (attributes.length) {
		attributes.map((attribute) =>
			elt.setAttribute(attribute.key, attribute.value)
		);
	}
	return elt;
}
