import { useState } from "react";
import Phone from "../assets/iphone.png";
import ListExpense from "./ListExpense";
import Summary from "./Summary";

const ExpenseApp = () => {
  const [sum, setSum] = useState();
  return (
    <div className="App">
      <div className="wrapper">
        <div className="phone">
          <img src={Phone} style={{ width: "100%" }} />
        </div>
        <div className="app-body">
          <Summary value={sum} />
          <ListExpense sumExpense={setSum} />
        </div>
      </div>
    </div>
  );
};

export default ExpenseApp;
