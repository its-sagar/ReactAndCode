import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState(null); // Default to null or an appropriate initial state
  const [error, setError] = useState(null); // Add error handling

  useEffect(() => {
    if (!currency) return; // Guard clause for invalid currency values

    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((res) => {
        setData(res[currency] || {});
        setError(null); // Reset error if the fetch is successful
      })
      .catch((err) => {
        console.error("Error fetching currency data:", err);
        setError(err.message);
        setData(null); // Reset data on error
      });
  }, [currency]);

  return { data, error }; // Return both data and error
}

export default useCurrencyInfo;
