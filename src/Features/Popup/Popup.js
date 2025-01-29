
import { useEffect, useState } from "react";
import "./Popup.css";
import { useDispatch } from "react-redux";
import TextInput from "../TextInput/TextInput";

function Popup({ data, onCloseModal, selectedMonth }) {
  const dispatch = useDispatch();
  const [formDetails, setFormDetails] = useState({
    description: "",
    category: "",
    date: "",
    amount: 0,
  });

  useEffect(() => {
    if (data.item?.description?.length) {
      console.log(data.item);
      setFormDetails(data.item);
    }
  }, []);

  const handleInputChange = (field, value) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const actionType = data.type === "add" ? "ADD_BILL" : "EDIT_BILL";

    dispatch({
      type: actionType,
      payload: { data: formDetails, month: selectedMonth },
    });

    onCloseModal();
  };

  return (
    <div className="popup-container">
      <div className="close-button" onClick={onCloseModal}>
        <h1>X</h1>
      </div>
      <form className="popup-form">
        <TextInput
          label="Description:"
          type="text"
          name="description"
          placeholder="Enter description"
          value={formDetails.description}
          onChange={(val) => handleInputChange("description", val)}
        />
        <TextInput
          label="Category:"
          type="text"
          name="category"
          placeholder="Enter category"
          value={formDetails.category}
          onChange={(val) => handleInputChange("category", val)}
        />
        <TextInput
          label="Date:"
          type="date"
          name="date"
          placeholder="Select date"
          value={formDetails.date}
          onChange={(val) => handleInputChange("date", val)}
        />
        <TextInput
          label="Amount:"
          type="number"
          name="amount"
          placeholder="Enter amount"
          value={formDetails.amount}
          onChange={(val) => handleInputChange("amount", val)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Popup;
