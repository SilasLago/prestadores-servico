import classNames from "classnames";
import React from "react";
import styles from "./default_input.module.scss";

interface IDefaultInput {
  value: any,
  onChange: React.Dispatch<React.SetStateAction<any>>,
  type: string,
  placeholder: string,
  title: string,
  label: string,
  id: string,
  className?: string,
  min?: number,
  max?: number,
}
function DefaultInput({ id, className, type, placeholder, title, label, min, max, value, onChange }: IDefaultInput) {
  return (
    <div className={styles.holder}>
      <label htmlFor={id} className={styles.holder__label}>
        {label}
      </label>
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
        value={value}
        onChange={e => onChange ? onChange(e.target.value) : undefined}
      />
    </div>
  )
}

export default DefaultInput;