export default (componentBuilder) => {
	const elements = document.getElementsByClassName('hydrate-me');

	for (let element of elements) {
		const component = element.getAttribute('data-component');
		const props = element.getAttribute('data-props');

		componentBuilder({
			component,
			element,
			props,
		});
	}
};

