import classNames from "classnames";
import { SelectDataType } from "interfaces/select_data_type";
import React from "react";
import styles from "./default_input.module.scss";

interface IDefaultInput {
  value: any,
  onChange: React.Dispatch<React.SetStateAction<any>>,
  type: "text" | "number" | "select" | "password" | "email" | "textarea",
  placeholder: string,
  title: string,
  label: string,
  id: string,
  disabled?: boolean,
  required?: boolean,
  className?: string,
  min?: number,
  max?: number,
  data?: Array<SelectDataType>
}
function DefaultInput({ id, className, type, placeholder, title, label, min, max, value, onChange, data, disabled, required = true }: IDefaultInput) {
  return (
    <div className={styles.holder}>
      <label htmlFor={id} className={styles.holder__label}>
        {label}
      </label>
      {type !== "textarea" && type !== "select" && (
        <input 
          id={id}
          className={classNames({
            [className ? className : ""]: true,
            [styles.holder__input]: true,
          })}
          placeholder={placeholder}
          type={type}
          title={title}
          min={min}
          max={max}
          required={required}
          value={value}
          disabled={disabled}
          onChange={e => onChange ? onChange(e.target.value) : undefined}
        />
      )}  
      {type === "select" && (
        <select
          id={id}
          title={title}
          value={value}
          required={required}
          disabled={disabled}
          onChange={e => onChange ? onChange(e.target.value) : undefined}
          className={classNames({
            [className ? className : ""]: true,
            [styles.holder__input]: true,
          })}
        >
          {data?.map(curOption => (
            <option value={curOption.value} key={curOption.value}>
              {curOption.label}
            </option>
          ))}
        </select>
      )}
      {type === "textarea" && (
        <textarea
          id={id}
          title={title}
          value={value}
          required={required}
          placeholder={placeholder}
          minLength={min}
          maxLength={max}
          disabled={disabled}
          onChange={e => onChange ? onChange(e.target.value) : undefined}
          className={classNames({
            [className ? className : ""]: true,
            [styles.holder__input]: true,
          })}
        ></textarea>
      )} 
    </div>
  )
}

export default DefaultInput;