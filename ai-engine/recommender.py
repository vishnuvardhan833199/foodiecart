import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.preprocessing import StandardScaler

df = pd.read_csv("food_data.csv")

features = df[["price","rating","calories","protein"]]

scaler = StandardScaler()

scaled = scaler.fit_transform(features)

similarity = cosine_similarity(scaled)

def recommend(food_name):

    idx = df[df.name == food_name].index[0]

    scores = list(enumerate(similarity[idx]))

    scores = sorted(scores, key=lambda x:x[1], reverse=True)

    results = []

    for i in scores[1:4]:
        results.append(df.iloc[i[0]].to_dict())

    return results