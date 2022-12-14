import SideMenu from "Components/SideMenu/side_menu";
import { Outlet } from "react-router-dom";
import styles from "./base_page.module.scss";

function BasePage() {
	return (
		<section className={styles.content}>
			<SideMenu />
			<Outlet />
		</section>
	)
}

export default BasePage;