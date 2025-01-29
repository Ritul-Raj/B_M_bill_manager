# Expense Tracker App

## Overview
Expense Tracker App is a React application built with Redux to help users manage their monthly bills efficiently. The application allows users to add, edit, remove, and filter bills while also providing a time-series chart of their monthly billing cycle. Additionally, it includes a feature to highlight the minimum number of bills that must be paid without exceeding a given budget.

## Features
### Level 1:
- **Manage Bills**: Users can manually add, edit, and remove bills, with all changes reflected in the application state.
- **Filter Bills**: Users can filter bills by category using a dropdown filter.
- **Time-Series Chart**: Displays a graphical representation of the monthly billing cycle.

### Level 2:
- **Budget Constraint**: Highlights the minimum number of bills that should be paid while ensuring the total does not exceed a predefined monthly budget.

## Deployment
The application is live at:
[Expense Tracker App](https://expenseetrackerapp.vercel.app/)

## Installation & Setup
### Prerequisites:
- Node.js and npm/yarn installed

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/Ritul-Raj/B_M_bill_manager.git
   ```
2. Navigate to the project directory:
   ```bash
   cd B_M_bill_manager
   ```
3. Install dependencies:
   ```bash
   npm install  # or yarn install
   ```
4. Start the development server:
   ```bash
   npm start  # or yarn start
   ```
5. Open `http://localhost:3000/` in your browser.

## Usage
- **Adding a Bill**: Click the 'Add Bill' button, fill in the details, and submit.
- **Editing a Bill**: Click the edit icon on a bill, modify the details, and save.
- **Deleting a Bill**: Click the delete icon on a bill.
- **Filtering**: Use the category dropdown to filter bills.
- **Viewing Chart**: The time-series chart updates automatically based on bill data.
- **Budget Optimization**: Enter a budget value, and the system will highlight the minimum bills that need to be paid.

## Technologies Used
- **Frontend**: React, Redux, React Router, Redux Thunk
- **State Management**: Redux
- **Charts**: Chart.js or similar library

## Sample Bills Data Format
```json
{
  "bills": [
    { "id": 1, "description": "Dominoes", "category": "Food & Dining", "amount": "430", "date": "01-02-2020" },
    { "id": 2, "description": "Car wash", "category": "Utility", "amount": "500", "date": "01-06-2020" },
    { "id": 3, "description": "Amazon", "category": "Shopping", "amount": "2030", "date": "01-07-2020" }
  ]
}
```

## Contributing
1. Fork the repository.
2. Create a new branch (`feature-branch-name`).
3. Make your changes and commit them.
4. Push to your fork and submit a pull request.

## License
This project is open-source and available under the MIT License.

## Contact
For any issues or suggestions, feel free to raise an issue in the repository or contact me via GitHub.

---

### Notes
- Ensure you have Redux DevTools installed for easier debugging.
- The project can be extended by integrating a backend for persistent storage.

