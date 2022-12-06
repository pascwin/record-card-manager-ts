import logo from "../../assets/logo.png"
import control from "../../assets/control.png"
import Chart_fill from "../../assets/Chart_fill.png"
// import logo from "../../assets/logo.png"
// import logo from "../../assets/logo.png"
const Sidebar = (props:any) => {
//   const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: Chart_fill },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
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
            className={`cursor-pointer duration-500 ${
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
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={Menu.src} alt="1" />
              <span className={`${!props.open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">{props.children}</h1>
      </div>
    </div>
  );
};
export default Sidebar;