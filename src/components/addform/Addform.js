import "./addform.css";
import "react-toastify/dist/ReactToastify.css";
import { categories } from "../../constans/addExpenseConstant";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../../redux/actions/expenses";
import { ToastContainer, toast } from "react-toastify";
const Addform = () => {
  const cat = categories;
  // console.log(cat);
  const [categeryOpen, setCategoryOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [categery, setCatogery] = useState("");
  const dispatch = useDispatch();
  const handelTitle = (e) => {
    setTitle(e.target.value);
  };
  const handelAmount = (e) => {
    setAmount(e.target.value);
  };

  const handelCatogery = (cat) => {
    setCatogery(cat);
    setCategoryOpen(false);
  };

  const handleSubmit = () => {
    console.log("submit");
    if (title === "" || amount === "" || !categery) {
      console.log("empty");
      const notify = () => toast("Please enter valid data");
      notify();
      return;
    }
    const data = {
      title,
      amount,
      category: categery,
      createdAt: new Date()
    };
    dispatch(addExpense(data));
  };
  return (
    <div className="add-form">
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <div className="form-item">
        <label>Title </label>
        <input
          placeholder="Give name of the expenditure"
          value={title}
          onChange={(e) => handelTitle(e)}
        />
      </div>
      <div className="form-item">
        <label>₹ Amount</label>
        <input
          type="number"
          placeholder=" Rupees"
          value={amount}
          onChange={(e) => handelAmount(e)}
        />
      </div>
      <div className="catrgory-container-parent">
        <div className="catogery">
          <div
            className="catogery-dropdown"
            onClick={() => setCategoryOpen(!categeryOpen)}
          >
            <label>{categery ? categery.title : "Category"}</label>
            <i class="fi fi-sr-sort-down"></i>
          </div>
          {categeryOpen && (
            <div className="category-container">
              {cat.map((cate) => (
                <div
                  className="category-item"
                  style={{
                    borderRight: `5px solid ${cate.color}`
                  }}
                  key={cate.id}
                  onClick={() => handelCatogery(cate)}
                >
                  <label>{cate.title}</label>
                  <i>{cate.icon}</i>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="form-addButton">
        <div onClick={() => handleSubmit()}>
          <label>Add</label>
          <i class="fi fi-rs-inbox-out"></i>
        </div>
      </div>
    </div>
  );
};

export default Addform;
