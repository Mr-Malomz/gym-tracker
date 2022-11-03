export const createTrack = async (description) => {
	const body = {
		description,
		created_on: new Date(),
	};

	const resp = await fetch(
		`${process.env.NEXT_PUBLIC_XATA_URL}:main/tables/tracker/data`,
		{
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_XATA_API_KEY}`,
			},
		}
	);

	return resp;
};

export const getTrackers = async () => {
	const body = {
		page: {
			size: 20,
		},
	};

	const resp = await fetch(
		`${process.env.NEXT_PUBLIC_XATA_URL}:main/tables/tracker/query`,
		{
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_XATA_API_KEY}`,
			},
		}
	);

	return resp;
};
