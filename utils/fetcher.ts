//Helper function to fetch

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default fetcher;
