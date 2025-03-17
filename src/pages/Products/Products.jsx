import "./Products.css";
import Nav from "../../components/nav/Nav";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { BiCategory } from "react-icons/bi";
import { RiMindMap } from "react-icons/ri";
import { MdAccessTime } from "react-icons/md";
import { TbSchool } from "react-icons/tb";
import { IoRocketOutline } from "react-icons/io5";
import { PiShootingStarBold } from "react-icons/pi";
import { LuFileCode2 } from "react-icons/lu";
import { BsFileEarmarkPlay } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
const Products = () => {
  const [filter, setFilter] = useState(true);
  const [selectStandards, setSelectStandards] = useState({});
  const Standards = [
    {
      name: "Type",
      logo: <BiCategory />,
      choises: [
        {
          title: "Course",
          logo: <LuFileCode2 />,
        },
        {
          title: "Build",
          logo: <BsFileEarmarkPlay />,
        },
      ],
    },
    {
      name: "Price",
      logo: <IoCartOutline />,
      choises: [
        {
          title: "Pro",
          logo: <IoRocketOutline />,
        },
        {
          title: "Free",
          logo: <PiShootingStarBold />,
        },
      ],
    },
    {
      name: "Instructors",
      logo: <GoPerson />,
    },
    {
      name: "Track",
      logo: <RiMindMap />,
    },
    {
      name: "Duration",
      logo: <MdAccessTime />,
      choises: [
        {
          title: "4-7 Weeks",
          logo: undefined,
        },
        {
          title: "7-9 Weeks",
          logo: undefined,
        },
        {
          title: "+9 Weeks",
          logo: undefined,
        },
      ],
    },
    {
      name: "Level",
      logo: <TbSchool />,
      choises: [
        {
          title: "Beginner",
          logo: undefined,
        },
        {
          title: "Intermediate",
          logo: undefined,
        },
        {
          title: "Advanced",
          logo: undefined,
        },
      ],
    },
  ];

  return (
    <div className="container products">
      <Nav />

      <div className="products-header">
        <div className="filter">
          <div className="filter-icon">
            <IoFilter />
            <p>filters</p>
          </div>
          <div
            className="change"
            onClick={() => {
              setFilter(!filter);
            }}
          >
            <div className={filter ? "filterr" : "not-filter"}></div>
          </div>
        </div>
        <div className="search-product">
          <div className="search-course">
            <CiSearch className="search-icon" />
            <input type="text" placeholder="Search java,react,spring boot..." />
          </div>
        </div>
      </div>
      <div className="filtering-body">
        <div className="details"></div>
        <div className="products-filter"></div>
      </div>
    </div>
  );
};

export default Products;
