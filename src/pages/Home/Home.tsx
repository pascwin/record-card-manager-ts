import "./Home.scss";
import CategoriesForm from "./categories-form/CategoriesForm";
import CategoriesList from "./categories-list/CategoriesList";
import { useAuthContext } from "../../hooks/useAuthContext";

const Home = () => {
  const { user } = useAuthContext();
  console.log(user.uid)
  return (
    <div className="home-container">
      <h1>Record Card Manager</h1>
      <CategoriesForm uid={user.uid} />
      <CategoriesList uid={user.uid} />
    </div>
  );
};

export default Home;
