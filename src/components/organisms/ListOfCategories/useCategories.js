import { useState, useEffect } from "react";
import { API_URL } from "../../../constants";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/categories`)
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
      });
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      setLoading(false);
    }
  }, [categories]);

  return { categories, loading };
};
