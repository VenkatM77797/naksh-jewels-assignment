const API_BASE = "http://127.0.0.1:5000";

export async function fetchProducts() {
  const url = `${API_BASE}/products`;
  console.log("Fetching:", url);

  const res = await fetch(url, {
    method: "GET",
    headers: { "Accept": "application/json" }
  });

  console.log("Response status:", res.status);

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Failed to fetch: ${res.status} ${text}`);
  }
  return res.json();
}
