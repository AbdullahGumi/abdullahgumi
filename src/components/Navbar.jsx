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
    <div className="flex items-center sm:justify-between justify-center mt-5 w-full">
      <div className="flex flex-col items-center gap-4">
        <img
          src={PortraitImage}
          className="w-[100px] h-auto  md:w-[150px] sm:w-[100px]"
        />
        <span className="md:text-2xl text-lg">GUMI</span>
      </div>
      <div className="sm:flex gap-x-14 items-center hidden mb-16">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            smooth={true}
            style={{ cursor: "pointer" }}
          >
            <span
              className="md:text-lg text-base md:font-extrabold font-bold"
              style={{
                fontFamily: "Alegreya SC",
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
