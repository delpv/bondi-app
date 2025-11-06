import React from "react";
import styled from "styled-components";

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  label {
    font-weight: 600;
    color: #333;
  }

  input,
  textarea,
  select {
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid #ddd;
    font-size: 0.95rem;
    background: #fff;
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }
`;

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
