export const fetchData = async (url) => {
	return fetch(url)
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
