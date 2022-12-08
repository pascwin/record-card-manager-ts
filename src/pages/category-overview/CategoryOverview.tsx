import "./CategoryOverview.scss";
import CategoriesForm from "./categories-form/CategoriesForm";
import CategoriesList from "./categories-list/CategoriesList";
import { useAuthContext } from "../../hooks/useAuthContext";
// import RecordsDataGrid from "../category/RecordsTable/RecordsDataGrid/RecordsDataGrid";

const CategoryOverview = () => {
  const { user } = useAuthContext();
  console.log(user.uid)
  return (
    <div className="home-container">
      <h1>Record Card Manager</h1>
      <CategoriesForm uid={user.uid} />
      <CategoriesList uid={user.uid} />
      {/* <RecordsDataGrid /> */}
    </div>
  );
};

export default CategoryOverview;
