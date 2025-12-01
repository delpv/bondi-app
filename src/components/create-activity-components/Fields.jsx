import React from "react";

import {
  Field,
  CheckboxLabel,
  CheckboxInput,
} from "../styled/create-activity-style-comp/CreateActivity.styled.jsx";

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
      <CheckboxLabel htmlFor={id}>
        <CheckboxInput id={id} type="checkbox" {...props} />
        {label}
      </CheckboxLabel>
    </Field>
  );
}
