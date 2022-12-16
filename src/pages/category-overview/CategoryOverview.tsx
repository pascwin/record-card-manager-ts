import "./CategoryOverview.scss";
import CategoriesList from "./categories-list/CategoriesList";
import { useAuthContext } from "../../hooks/useAuthContext";

const CategoryOverview = () => {
  const { user } = useAuthContext();
  console.log(user.uid)
  return (
    <div className="home-container">
      <h1 style={{margin: "25px"}}>Categories Overview</h1>
      <CategoriesList uid={user.uid} />
    </div>
  );
};

export default CategoryOverview;
