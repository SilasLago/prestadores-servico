import SideMenu from "Components/SideMenu/side_menu";
import { useDesapear } from "Hooks/useDesapear/useDesapear";
import { Outlet } from "react-router-dom";
import styles from "./base_page.module.scss";

function BasePage() {

	const { value: desapear } = useDesapear();

	return (
		<section className={styles.content}>
			{!desapear && <SideMenu />}
			<Outlet />
		</section>
	)
}

export default BasePage;