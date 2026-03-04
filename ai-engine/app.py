from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd

app = FastAPI()

# ✅ ADD THIS BLOCK
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

df = pd.read_csv("food_data.csv")


@app.get("/")
def home():
    return {"message": "Backend working"}


@app.get("/search")
def search(q: str):

    q = q.lower()

    results = df[
        df["name"].str.lower().str.contains(q)
        |
        df["category"].str.lower().str.contains(q)
    ]

    return results.to_dict(orient="records")


@app.get("/chat")
def chat(q: str):

    results = search(q)

    if not results:
        return {"reply": "No food found"}

    names = [r["name"] for r in results[:3]]

    return {
        "reply": "Recommended: " + ", ".join(names),
        "results": results
    }