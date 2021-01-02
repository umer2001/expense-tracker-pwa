import React, { useState, useContext, useEffect } from "react";

import { GlobalContext } from "../context/GlobalState";

export const AddTransection = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { transections, addTransection } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();
    if (text !== "") {
      const newTransection = {
        id: Math.floor(Math.random() * 10000000),
        text,
        amount: +amount,
      };
      addTransection(newTransection);
      setText("");
      setAmount(0);
    }
  };

  useEffect(() => {
    if (transections.length !== 0) {
      localStorage.setItem("transections", JSON.stringify(transections));
    }
  }, [transections]);

  return (
    <>
      <h3>Add new transection</h3>
      <form className="frm shadow p-3 rounded">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="text">
              Text
              <br />
              &nbsp;
            </label>
            <input
              type="text"
              className="form-control"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter expence..."
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="amount">
              Amount
              <br />
              <small className="amount-help">
                (negative - expense, positive - income)
              </small>
            </label>
            <input
              type="number"
              className="form-control"
              value={amount === 0 ? "" : amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount..."
            />
          </div>
        </div>
        <button onClick={onSubmit} className="btn btn-primary col-12">
          Add
        </button>
      </form>
    </>
  );
};
