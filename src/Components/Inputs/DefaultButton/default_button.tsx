import classNames from "classnames";
import styles from "./default_button.module.scss";

interface IDefaultButton {
  label: string,
  type: "button" | "submit" | "reset",
  id?: string,
  className?: string,
  variant?: "default" | "red"
}
function DefaultButton({ label, type, className, id, variant = "red" }: IDefaultButton) {
  return (
    <div className={styles.holder}>
      <button id={id} type={type} className={classNames({
        [className ? className : ""]: true,
        [styles.holder__button]: variant === "default",
        [styles["holder__button--red"]]: variant === "red"
      })}>
        {label}
      </button>
    </div>
  )
}

export default DefaultButton;