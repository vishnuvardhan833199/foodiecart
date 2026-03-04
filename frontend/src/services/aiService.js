const API = "http://127.0.0.1:8000";

export async function searchFood(query) {

  if (!query) return [];

  const res = await fetch(
    `${API}/search?q=${encodeURIComponent(query)}`
  );

  const data = await res.json();

  return data;
}