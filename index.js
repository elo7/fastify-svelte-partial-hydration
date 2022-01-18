export default {
	stage: 'postRender',
	key: 'componentsToHydrate',
	apply: ({ html }) => {
		const attrRegex = /data-component=(['"])(?<name>\w+)\1/g;
		const matches = new Set();
		let match = null;

		while ((match = attrRegex.exec(html)) !== null) {
			matches.add(match.groups.name);
		}

		return Array.from(matches);
	},
};
