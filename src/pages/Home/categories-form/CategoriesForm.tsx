import { useRef } from "react";
import { useFirestore } from "../../../hooks/useFirestore";

const CategoriesForm = ({ uid }: any) => {
  const category = useRef<HTMLInputElement>(null);
  const { addDocument, response } = useFirestore("categories");

  const addCategoryHandler = (event: any) => {
    event.preventDefault();
    addDocument({
      name: category.current?.value,
      uid: uid,
    });
    console.log(response);
  };

  return (
    <div>
      <form>
        <input ref={category} />
        <button onClick={addCategoryHandler}>Click me!</button>
      </form>
    </div>
  );
};

export default CategoriesForm;
