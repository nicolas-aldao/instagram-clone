import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../../Context';
import { BasicTypo } from '../../atoms/Typography';
import { LoadingCategory } from '../../atoms/LoadingCategory';
import { Category } from '../../atoms/Category';
import { List, Item } from './styles';

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData();
  const { setCategorySelected } = useContext(Context);
  const loadingArray = [1, 2, 3, 4];

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
              <LoadingCategory
                {...category}
                path={`/categories/${category.id}`}
              />
            </Item>
          ))
        : categories.map(category => (
            <Item
              key={category.id}
              onClick={() => {
                setCategorySelected(category.id);
              }}>
              <Category {...category} />
              <BasicTypo>{category.name}</BasicTypo>
            </Item>
          ))}
    </List>
  );

  return <>{renderList()}</>;
};
