import { IoIosArrowDown } from "react-icons/io";

const Details = (prop) => {
  return (
    <div className="details">
      <div
        className="list-item pointer"
        onClick={() => {
          prop.closeres();
          prop.setShowMenu(!prop.showMenu);
        }}
      >
        <p>{prop.title}</p>
        <div className="arraw2">
          <IoIosArrowDown className={` arraw1 ${prop.showMenu && "arraw"}  `} />
        </div>
      </div>
      <div className={`menu-details  ${!prop.showMenu && prop.title}`}>
        <p className="title-menu"> {prop.title}</p>
        <div className="menu-container">
          {prop.menu.map((element, index) => {
            return (
              <div className="element" key={index}>
                <p>{element.title}</p>
                <p>{element.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Details;
