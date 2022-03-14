export default async function fetcher(...args) {
  const response = await fetch(args[0], {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(args[1]),
  });
  const result = await (response.ok ? response.json() : response.text());

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = result;
    error.status = response.status;
    throw error;
  }

  return result;
}
