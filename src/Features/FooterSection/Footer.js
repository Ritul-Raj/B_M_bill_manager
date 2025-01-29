

import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import "./Footer.css";

function Footer({ total, pageData }) {
  const [allocatedBudget, setAllocatedBudget] = useState(0);
  const [displayBills, setDisplayBills] = useState(false);
  const [optimizedBills, setOptimizedBills] = useState([]);

  const calculateMinBills = (pageData, allocatedBudget) => {
    let count = 0;
    const selectedBills = [];
    const sortedData = [...pageData].sort((a, b) => b.amount - a.amount);
    let remainingBudget = allocatedBudget;

    while (
      sortedData.length > 0 &&
      remainingBudget - Number(sortedData[0].amount) < 0
    ) {
      sortedData.shift();
    }

    let remainingDifference = 1;

    while (remainingDifference > 0 && sortedData.length > 0) {
      if (remainingDifference === 1) {
        remainingDifference = remainingBudget - Number(sortedData[0].amount);
      } else {
        remainingDifference -= Number(sortedData[0].amount);
      }

      if (remainingDifference > 0) {
        count += 1;
        selectedBills.push(Number(sortedData[0].amount));
      } else {
        remainingDifference += Number(sortedData[0].amount);
      }
      sortedData.shift();
    }

    setDisplayBills(true);
    setOptimizedBills({ count, selectedBills });
  };

  return (
    <div className="footer-container">
      <div className="total-section">
        <h3>Total: </h3>
        <h3> {total}</h3>
      </div>
      <div className="budget-section">
        <p>Budget:🤵‍♂️</p>
        <div className="input-container">
          <TextInput
            label=""
            type="text"
            name="budget"
            placeholder="Enter Budget"
            value={allocatedBudget}
            onChange={(val) => {
              setAllocatedBudget(Number(val) || 0); // Ensure the value is converted to a number
            }}
          />
        </div>
        <div className="button-container">
          <button onClick={() => calculateMinBills(pageData, allocatedBudget)}>
            Calculate
          </button>
        </div>
        {displayBills && (
          <div className="result-container">
            <h3>{"\u00A0"} Min.No.Of Bills: </h3>
            <p>{optimizedBills.count}</p>
            <h3> Bills Amount: </h3>
            {optimizedBills.selectedBills.map((amount, index) => (
              <p className="total-section" key={`${amount}_${index}`}>
                {amount}
                {", "}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Footer;
