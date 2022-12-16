import classNames from "classnames";
import styles from "./default_form.module.scss";

interface IDefaultModal {
  size: "sm" | "md" | "lg" | "xl",
  title: string,
  children: JSX.Element
}
function DefaultModal({ size, title, children }: IDefaultModal) {
  return (
    <div className={styles.background}>
      <section className={classNames({
        [styles.modal]: true,
        [styles.sm]: size === "sm",
        [styles.md]: size === "md",
        [styles.lg]: size === "lg",
        [styles.xl]: size === "xl",
      })}>
        <div className={styles.modal__header}>
          <h1 className={styles.modal__header__title}>
            {title}
          </h1>
          <div className={styles.modal__header__close} />
        </div>
        <hr />
        <div className={styles.modal__body}>
          {children}
        </div>
        <hr />
      </section>
    </div>
  )
}

export default DefaultModal;