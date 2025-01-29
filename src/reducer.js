

import sampleData from "./sampleData";

export const reducer = (state = sampleData, action) => {
  switch (action.type) {
    case "ADD_BILL": {
      const { month, data } = action.payload;
      const newBill = { ...data, id: `${state[month].length + 1}` };

      return {
        ...state,
        [month]: [...state[month], newBill],
      };
    }

    case "EDIT_BILL": {
      const { month, data } = action.payload;
      const updatedBills = state[month].map((bill) =>
        bill.id === data.id ? { ...data } : bill
      );

      return {
        ...state,
        [month]: updatedBills,
      };
    }

    case "DELETE_BILL": {
      const { month, data } = action.payload;
      const filteredBills = state[month].filter((bill) => bill.id !== data.id);

      const reIndexedBills = filteredBills.map((bill, index) => ({
        ...bill,
        id: `${index + 1}`,
      }));

      return {
        ...state,
        [month]: reIndexedBills,
      };
    }

    default:
      return state;
  }
};
