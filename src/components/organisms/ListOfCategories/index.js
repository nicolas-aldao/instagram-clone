import React, { useState, useEffect } from 'react';
import { LoadingCategory } from '../../atoms/LoadingCategory';
import { Category } from '../../atoms/Category';
import { List, Item } from './styles';
import { categories } from '../../../../api/db.json';

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false);
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
          setLoading(false);
        });
    }, []);

    return { categories, loading };
  }

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
      setShowFixed(newShowFixed);
    };
    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  });

  const renderList = fixed => (
    <List fixed={fixed}>
      {loading
        ? loadingArray.map(category => (
          <Item key={category}>
            <LoadingCategory {...category} path={`/pet/${category.id}`} />
          </Item>
        ))
        : categories.map(category => (
            <Item key={category.id}>
              <Category {...category} path={`/pet/${category.id}`} />
            </Item>
          ))}
    </List>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};
