import classNames from "classnames";
import { MouseEventHandler, useState } from "react";
import { SideMenuButton } from "../utils/classes";
import styles from "./side_menu_button.module.scss";
import optionLineImg from "./src/line.png";

interface ISideMenuButtonProps {
  data: SideMenuButton;
  onClick: MouseEventHandler<HTMLElement>;
}

function SideMenuButtonComponent({ data, onClick }: ISideMenuButtonProps) {

  const [optionSelected, setOptionSelected] = useState<string>(data.options[0]);

  return (
    <div>
      <div role="button" className={classNames({
        [styles.button]: true,
        [styles["button--selected"]]: data.selected
      })} onClick={onClick}>
        <div className={styles.button__info}>
          <img
            alt="Ícone"
            src={data.img}
            className={styles.img}
          />
          <span className={styles.option}>
            {data.name}
          </span>
        </div>
        <div className={styles.button__img}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </div>
      </div>
      {data.selected && (
        <div className={styles.options}>
          {data.options.map((option: string) => (
            <div className={classNames({
              [styles.options__option]: true,
              [styles["options__option--selected"]]: optionSelected === option,
            })} onClick={() => setOptionSelected(option)} key={option}>
              <div className={styles.options__option__img}>
                <img
                  src={optionLineImg}
                  alt="Imagem de linha"
                />
              </div>
              <div className={styles.options__option__name}>
                {option}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SideMenuButtonComponent;