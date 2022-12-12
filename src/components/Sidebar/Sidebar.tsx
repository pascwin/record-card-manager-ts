import logo from "../../assets/logo.png"
import control from "../../assets/control.png"
import CategoryIcon from '@mui/icons-material/Category';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Sidebar = (props:any) => {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)
  const Menus = [
    { title: "Dashboard", src: <DashboardIcon />, gap: false, path: ["/home", "/"] },
    { title: "Statistics", src: <BarChartIcon />, gap: false, path: ["/statistics"] },
    { title: "Categories", src: <CategoryIcon />, gap: true, path: ["/category"] },
    // { title: "Inbox", src: Chat },
    // { title: "Accounts", src: "User", gap: true },
    // { title: "Schedule ", src: Category },
    // { title: "Search", src: "Search" },
    // { title: "Analytics", src: "Chart" },
    // { title: "Files ", src: Folder, gap: true },
    // { title: "Setting", src: "Setting" },
  ];

  return (
    <div className="flex" style={{marginTop: "46px"}}>
      <div
        className={` ${
          props.open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
        style={{position: "fixed"}}
      >
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!props.open && "rotate-180"}`}
          onClick={() => props.setOpen(!props.open)}
          alt="1"
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            className={`cursor-pointer duration-500 white ${
              props.open && "rotate-[360deg]"
            }`}
            alt="1"
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !props.open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              onClick={() => navigate(Menu.path[0])}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} 
              ${Menu.path.includes(location.pathname) && "bg-light-white"}`}
            >
                <div>
                    {Menu.src}
                </div>
              <span className={`${!props.open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-4">
        <h1 className="text-2xl font-semibold ">{props.children}</h1>
      </div>
    </div>
  );
};
export default Sidebar;