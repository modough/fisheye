export const fetchData = async () => {
	return fetch('data/photographers.json')
		.then((res) => res.json())
		.then((res) => {
			const photographers = res.photographers;
			const media = res.media;
			return {
				photographers,
				media,
			};
		})
		.catch((err) => {
			alert(err + 'Failed to fetch Data');
		});
};
