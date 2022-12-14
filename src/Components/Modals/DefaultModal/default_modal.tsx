import classNames from "classnames";
import { MouseEventHandler } from "react";
import styles from "./default_modal.module.scss";

interface IDefaultModal {
  size: "sm" | "md" | "lg" | "xl",
  title: string,
  onClose: MouseEventHandler<HTMLDivElement> | false,
  children?: any
}
function DefaultModal({ size, title, children, onClose }: IDefaultModal) {
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
          {onClose !== false && (
            <div 
              className={styles.modal__header__close} 
              onClick={onClose} 
              tabIndex={0} 
              onKeyDown={e => e.key === "Enter" ? onClose({} as React.MouseEvent<HTMLDivElement, MouseEvent>) : undefined} 
            />
          )}
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