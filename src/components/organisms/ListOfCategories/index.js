import React, { useState, useEffect } from 'react';
import { LoadingCategory } from '../../atoms/LoadingCategory';
import { Category } from '../../atoms/Category';
import { List, Item } from './styles';

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData();
  const loadingArray = [1, 2, 3, 4, 5];

  function useCategoriesData() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      fetch('https://json-server-ruby.vercel.app/categories')
        .then(res => res.json())
        .then(response => {
          setCategories(response);
        });
    }, []);

    useEffect(() => {
      if (categories.length > 0) {
        setLoading(false);
      }
    }, [categories]);

    return { categories, loading };
  }

  const renderList = () => (
    <List>
      {loading
        ? loadingArray.map(category => (
            <Item key={category}>
              <LoadingCategory {...category} path={`/categories/${category.id}`} />
            </Item>
          ))
        : categories.map(category => (
            <Item key={category.id}>
              <Category {...category} path={`/categories/${category.id}`} />
            </Item>
          ))}
    </List>
  );

  return <>{renderList()}</>;
};
