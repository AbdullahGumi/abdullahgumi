import { Link } from "react-scroll";
import PortraitImage from "../assets/images/portrait.png";
const navItems = [
  {
    title: "ABOUT",
    id: "aboutId",
  },
  {
    title: "SKILLS",
    id: "skillsId",
  },
  {
    title: "PROJECTS",
    id: "projectsId",
  },
  {
    title: "CONTACT",
    id: "contactId",
  },
];

function Navbar() {
  return (
    <div className="flex items-center md:justify-between justify-center mt-5 w-full px-10">
      <div className="flex flex-col items-center gap-4">
        <img
          src={PortraitImage}
          className="w-[100px] h-auto sm: sm:w-[162px]"
        />
        <span style={{ fontSize: "24px" }}>GUMI</span>
      </div>
      <div className="sm:flex gap-x-14 items-center hidden mb-16 mr-10">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            smooth={true}
            style={{ cursor: "pointer" }}
          >
            <span
              style={{
                fontFamily: "Alegreya SC",
                fontSize: "18px",
                fontWeight: "800",
              }}
            >
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
