const API = "http://127.0.0.1:8000";

export async function chatWithAI(message){

const res = await fetch(
`${API}/chat?q=${encodeURIComponent(message)}`
);

return await res.json();

}