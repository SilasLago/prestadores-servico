import styles from "./side_menu.module.scss";
import { SideMenuButton } from "./utils/classes";
import userImg from "./src/user.png";
import servicoImg from "./src/servico.png";
import SideMenuButtonComponent from "./SideMenuButton/side_menu_button";
import { useState } from "react";
import classNames from "classnames";
import { SelectDataClass } from "Utils/classes";

function SideMenu() {

  const [openMenu, setOpenMenu] = useState<boolean>(true);
  const [options, setOptions] = useState<Array<SideMenuButton>>([
    new SideMenuButton(
      "Prestadores",
      [
        new SelectDataClass("/list/prestadores", "Procurar prestadores"),
        new SelectDataClass("/register/prestadores", "Cadastrar prestador")
      ],
      userImg,
      true
    ),
    new SideMenuButton(
      "Serviços",
      [
        new SelectDataClass("/list/servicos", "Acompanhar serviços"),
        new SelectDataClass("/list/servicos_finalizados", "Serviços finalizados")
      ],
      servicoImg
    )
  ]);

  function changeTab(button: SideMenuButton) {
    setOptions(options.map(option => {
      const curButton = option;
      curButton.setSelected(curButton.name === button.name);
      return curButton;
    }))
  }

  return (
    <>
      <section className={classNames({
        [styles.menu]: true,
        [styles["menu--closed"]]: !openMenu
      })}>
        {openMenu && (<>
          {options.map(button => (
            <SideMenuButtonComponent
              key={button.name}
              data={button}
              onClick={() => changeTab(button)}
            />
          ))}
        </>)}
        <button
          className={styles.menu__button}
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
          )}
        </button>
      </section>
      {openMenu && <div className={styles.out} />}
    </>
  )
}

export default SideMenu;