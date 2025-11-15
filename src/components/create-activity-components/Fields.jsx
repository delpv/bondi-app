import React from "react";
import { Field } from "../styled/create-activity-style-comp/CreateActivity.styled.jsx";

export function TextField({ id, label, ...props }) {
  return (
    <Field>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </Field>
  );
}

export function TextArea({ id, label, ...props }) {
  return (
    <Field>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} {...props} />
    </Field>
  );
}

export function SelectField({ id, label, children, ...props }) {
  return (
    <Field>
      <label htmlFor={id}>{label}</label>
      <select id={id} {...props}>
        {children}
      </select>
    </Field>
  );
}

export function CheckboxField({ id, label, ...props }) {
  return (
    <Field>
      <label htmlFor={id} style={{ fontWeight: 600 }}>
        <input id={id} type="checkbox" style={{ marginRight: 8 }} {...props} />
        {label}
      </label>
    </Field>
  );
}
