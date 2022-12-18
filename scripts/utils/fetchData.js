export const fetchData = async (url) => {
	return fetch(url)
		.then((res) => res.json())
		.then((res) => res)
		.catch((err) => {
			alert(err + 'Failed to fetch Data');
		});
};
