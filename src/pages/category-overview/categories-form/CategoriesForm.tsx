import { useRef } from "react";
import { useFirestore } from "../../../hooks/useFirestore";

const CategoriesForm = ({ uid }: any) => {
  const category = useRef<HTMLInputElement>(null);
  const { addDocument } = useFirestore("categories");

  const addCategoryHandler = (event: any) => {
    event.preventDefault();
    addDocument({
      name: category.current?.value,
      uid: uid,
    });
  };

  return (
    <div>
      <form>
        <input ref={category} />
        <button onClick={addCategoryHandler}>Add Category</button>
      </form>
    </div>
  );
};

export default CategoriesForm;
