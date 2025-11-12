const baseUrl = "http://127.0.0.1:1573";

async function get<T>(url: string): Promise<T> {
  try {
    const response = await fetch(`${baseUrl}${url}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export { get };
