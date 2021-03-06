import {  useSelector } from "react-redux";
import { selectedSelector } from "../redux/selectItems/selectItemsSelectors";
import "../css/Table.css";

const DropDown = () => {
  const selected = useSelector(selectedSelector);
  console.log("selected", selected);

  return (
    <div>
      <div className="dropDown">
        <div className="headerDrop">
          <span>Selected:</span>
        </div>
        <div className="contentDrop">
          {selected && selected.length 
            ? selected.map((item) => (
                <div>
                  {" "}
                  {item.country}, {item.age}, {item.sex}{" "}
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
