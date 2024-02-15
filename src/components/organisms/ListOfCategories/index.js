import React, { useContext } from "react";
import { Context } from "../../../Context";
import { BasicTypo } from "../../atoms/Typography";
import { LoadingCategory } from "../../atoms/LoadingCategory";
import { Category } from "../../atoms/Category";
import { useCategories } from "./useCategories";
import { List, Item } from "./styles";

export const ListOfCategories = () => {
  const loadingArray = [1, 2, 3, 4];
  const { setCategorySelected } = useContext(Context);
  const { categories, loading } = useCategories();

  return (
    <List>
      {loading
        ? loadingArray.map((category) => (
            <Item key={category}>
              <LoadingCategory
                {...category}
                path={`/categories/${category.id}`}
              />
            </Item>
          ))
        : categories.map((category) => (
            <Item
              key={category.id}
              onClick={() => {
                setCategorySelected(category.id);
              }}
            >
              <Category {...category} />
              <BasicTypo>{category.name}</BasicTypo>
            </Item>
          ))}
    </List>
  );
};
