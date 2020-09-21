import React, { FC, TextareaHTMLAttributes } from 'react';
import './styles.css';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const TextArea: FC<TextAreaProps> = ({ label, name, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </div>
  );
};

export default TextArea;
