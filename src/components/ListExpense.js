import { useState } from "react";

const Form = ({ onAdd }) => {
  const [expenseDetail, setExpenseDetail] = useState({
    name: "",
    price: ""
  });

  const updateName = (event) => {
    setExpenseDetail({
      ...expenseDetail,
      name: event.target.value
    });
  };

  const updatePrice = (event) => {
    setExpenseDetail({
      ...expenseDetail,
      price: event.target.value
    });
  };

  const clearForm = () => {
    setExpenseDetail({
      name: "",
      price: ""
    });
  };

  const handleAddToList = () => {
    onAdd(expenseDetail);
    clearForm();
  };

  return (
    <div className="form">
      <div>
        <label>Name</label>
        <input value={expenseDetail.name} onChange={updateName} />
      </div>
      <div>
        <label>Price</label>
        <input value={expenseDetail.price} onChange={updatePrice} />
      </div>
      <button onClick={handleAddToList}>Add Expense </button>
    </div>
  );
};

const List = ({ data }) => {
  return (
    <div className="item-wrapper">
      {data.map((item) => (
        <div className="item">
          <div className="icon"></div>
          <div className="detail">
            <div className="title">{item.name}</div>
            <div className="sub-title">on {item.date}</div>
          </div>
          <div className="price">$ {item.price}</div>
        </div>
      ))}
    </div>
  );
};

const ListExpense = ({ sumExpense }) => {
  const [visibility, setVisibility] = useState(false);
  const [list, updateList] = useState([]);

  const handleAdd = (data) => {
    if (data.price) {
      updateList([
        ...list,
        {
          id: Math.random(),
          date: "21/12/2022",
          ...data
        }
      ]);
    }

    toggleForm();
    let sum = 0;
    list.forEach((item) => {
      sum = sum + parseInt(item.price || 0);
    });

    sumExpense(sum + parseInt(data.price || 0));
  };

  const toggleForm = () => {
    setVisibility(!visibility);
  };

  return (
    <div className="list">
      <div className="heading">
        <div className="text">All Expense</div>
        <button onClick={toggleForm}>+</button>
      </div>
      {visibility ? <Form onAdd={handleAdd} /> : <List data={list} />}
    </div>
  );
};

export default ListExpense;
