import React from "react";

import "./FormFields.css";

const formFields = ({
  formParams,
  formTitle,
  book,
  handleChange,
  handleSubmit
}) => {
  const form = formParams.map(paramTitle => {
    const paramValue = paramTitle.toLowerCase();
    return (
      <div key={paramValue} className="bf-form__item">
        <label className="bf-form__label">{paramTitle}</label>
        <input
          name={paramValue}
          type={(paramTitle === "Price" ? "number" : "text")}
          className="bf-form__input"
          value={book[paramValue]}
          onChange={handleChange}
          required
        />
      </div>
    );
  });
  return (
    <div className="bf-wrapper">
      <h3>{formTitle}</h3>
      <form className="bf-form" onSubmit={handleSubmit}>
        {form}
        <button type="submit" className="button button--success">
          Save
        </button>
      </form>
    </div>
  );
};

export default formFields;
