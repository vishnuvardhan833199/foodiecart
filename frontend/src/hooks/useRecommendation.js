import { useEffect, useState } from "react";

function useRecommendation(foods) {

  const [recommended, setRecommended] = useState([]);

  useEffect(() => {

    // simulate AI recommendation
    const sorted = [...foods].sort(
      (a, b) => b.rating - a.rating
    );

    setRecommended(sorted);

  }, [foods]);

  return recommended;
}

export default useRecommendation;