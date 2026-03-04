import pandas as pd

df = pd.read_csv("food_data.csv")

def search(query):

    query = query.lower()

    results = df

    if "cheap" in query or "under" in query:
        results = results[results.price < 200]

    if "healthy" in query:
        results = results[results.healthy == "yes"]

    if "protein" in query:
        results = results[results.protein > 15]

    if "low calorie" in query:
        results = results[results.calories < 300]

    return results.to_dict(orient="records")