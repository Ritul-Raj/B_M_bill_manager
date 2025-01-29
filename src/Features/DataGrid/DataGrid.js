

import './DataGrid.css';
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Footer from '../FooterSection/Footer';

const headers = ["Description", "Category", "Date", "Amount"];

function DataGrid({ selectedMonth, selectedCategory, onEditClick, onDeleteClick }) {
  const transactions = useSelector((state) => state.seedData);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const updateData = () => {
      if (selectedCategory.length) {
        setFilteredData(
          transactions[selectedMonth].filter((entry) => entry.category === selectedCategory)
        );
      } else {
        setFilteredData(transactions[selectedMonth]);
      }
    };

    updateData();
  }, [selectedCategory, selectedMonth, transactions]);

  return (
    <>
      <div className="TableHeader">
        {headers.map((title, idx) => (
          <h2 key={`header_${idx}_${title}`}>{title}</h2>
        ))}
      </div>
      <div className="TableBody">
        {filteredData.map((record, idx) => (
          <div key={`record_${idx}_${record.description}`}>
          <div className="RowContainer">
  <h2>{record.description}</h2>
  <h2>{record.category}</h2>
  <h2>{record.date}</h2>
  <h2>{record.amount}</h2>
  <div className="ButtonContainer">
    <button className="EditButton" onClick={() => onEditClick(record)}>Edit</button>
    <button className="DeleteButton" onClick={() => onDeleteClick(record)}>Delete</button>
  </div>
</div>


            <hr />
          </div>
        ))}
      </div>
      <Footer
  total={filteredData.reduce((acc, record) => acc + Number(record.amount), 0)}
  pageData={filteredData}
/>

    </>
  );
}

export default DataGrid;
