import { useRef, useContext } from "react";
import Layout from "../../components/Layout/Layout";
import { createCategory } from "../../utils/firebase.utils";
import { UserContext } from "../../contexts/user-context";
import { CategoriesContext } from "../../contexts/categories-context";

const Categories = () => {
  const categoryInputRef = useRef<any>();
  const { currentUser } = useContext(UserContext);
  const { categories, setCategories } = useContext(CategoriesContext);

  const createCategoryHandler = async () => {
    const newCategory = {
      id: String(Math.random()),
      name: categoryInputRef.current?.value,
    };
    await createCategory(newCategory, currentUser.uid);
    setCategories((prevState: any) => {
      if (!prevState) {
        return [newCategory];
      } else {
        return [...prevState, newCategory];
      }
    });
    categoryInputRef.current.value = ""
  };

  return (
    <Layout>
      <h2>Categories</h2>
      <button onClick={createCategoryHandler}>Add Category</button>
      <input type="text" ref={categoryInputRef} />
      <ul>
        {categories &&
          categories.map((category: any) => {
            return <li key={category.id}>{category.name}</li>;
          })}
      </ul>
    </Layout>
  );
};

export default Categories;
