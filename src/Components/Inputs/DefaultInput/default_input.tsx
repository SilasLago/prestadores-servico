import classNames from "classnames";
import { SelectDataType } from "interfaces/select_data_type";
import React from "react";
import styles from "./default_input.module.scss";

interface IDefaultInput {
  value: any,
  onChange: React.Dispatch<React.SetStateAction<any>>,
  type: "text" | "number" | "select" | "password" | "email" | "textarea" | "checkbox",
  placeholder: string,
  title: string,
  label: string,
  id: string,
  disabled?: boolean,
  required?: boolean,
  className?: string,
  min?: number,
  max?: number,
  data?: Array<SelectDataType>,
  isPositionFixed: boolean
}
function DefaultInput({ id, className, type, placeholder, title, label, min, max, value, onChange, data, disabled, required = true, isPositionFixed }: IDefaultInput) {
  
  function getDefaultClassNames(): string {
    return classNames({
      [styles.holder__input]: true,
      [styles["holder__input--z"]]: !isPositionFixed,
    })
  }
  
  return (
    <div className={classNames({
      [styles.holder]: true,
      [className ? className : ""]: true,
    })}>
      <label htmlFor={id} className={styles.holder__label}>
        {label}
      </label>
      {type !== "textarea" && type !== "select" && type !== "checkbox" && (
        <input 
          id={id}
          className={getDefaultClassNames()}
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
          className={getDefaultClassNames()}
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
          className={getDefaultClassNames()}
        ></textarea>
      )} 
      {type === "checkbox" && (
        <input 
          type={type}
          id={id}
          className={getDefaultClassNames()}
          placeholder={placeholder}
          title={title}
          min={min}
          max={max}
          required={required}
          checked={value}
          value={value}
          disabled={disabled}
          onChange={e => onChange(!value)}
        />
      )}
    </div>
  )
}

export default DefaultInput;