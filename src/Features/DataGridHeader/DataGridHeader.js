


import "./DataGridHeader.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Popup from '../Popup/Popup';
import DataGrid from '../DataGrid/DataGrid';
import Graph from '../Graph/Graph';

const categories = [
  "FoodNDinning",
  "Utility",
  "Shopping",
  "Education",
  "Personal Care",
  "Travel",
];

const monthList = [
  "January",
  "February",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function DataGridHeader() {
  const dispatch = useDispatch();
  const [modalState, setModalState] = useState({
    type: "",
    isOpen: false,
    item: {},
  });
  const [isChartVisible, setChartVisibility] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");
  const [activeMonth, setActiveMonth] = useState(1);
  const transactions = useSelector((state) => state.seedData);

  const openModal = (type, item = {}) => {
    setModalState({ type, isOpen: true, item });
  };

  const closeModal = () => {
    setModalState({ type: "", isOpen: false, item: {} });
  };

  const handleDelete = (item) => {
    dispatch({
      type: "DELETE_BILL",
      payload: { data: item, month: activeMonth },
    });
  };

  return (
    <>
      <div className="HeaderContainer">
        <div className="MonthSelector">
          <select onChange={(e) => setActiveMonth(e.target.value)} value={activeMonth}>
            {monthList.map((month, idx) => (
              <option value={idx + 1} key={`month_${idx}_${month}`}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div className="CategorySelector">
          <select onChange={(e) => setActiveCategory(e.target.value)} value={activeCategory}>
            <option value="">Choose a category</option>
            {categories.map((category, idx) => (
              <option value={category} key={`category_${idx}_${category}`}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="ActionButtons">
          {modalState.isOpen && (
            <Popup
              data={modalState}
              onCloseModal={closeModal}
              selectedMonth={activeMonth}
            />
          )}
          {isChartVisible && (
            <Graph
              onCloseChart={() => setChartVisibility((prev) => !prev)}
              monthlyData={transactions[activeMonth]}
            />
          )}
          <button onClick={() => openModal("add")}>Add</button>
          <button onClick={() => setChartVisibility((prev) => !prev)}>Chart</button>
        </div>
      </div>
      <DataGrid
        selectedMonth={activeMonth}
        selectedCategory={activeCategory}
        onEditClick={(item) => openModal("edit", item)}
        onDeleteClick={handleDelete}
      />
    </>
  );
}

export default DataGridHeader;
