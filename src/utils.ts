const baseUrl = "http://locathost:1573";

async function get<T>(url: string): Promise<T> {
  const response = await fetch(`${baseUrl}${url}`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return (await response.json()) as Promise<T>;
}

export { get };
