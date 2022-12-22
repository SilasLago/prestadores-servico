import classNames from "classnames";
import { memo, useEffect } from "react";
import { appendScript } from "Utils/appendScript";
import styles from "./google_recaptcha.module.scss";

function GoogleRecaptcha() {

  const urlRecaptchScript: string = "https://www.google.com/recaptcha/api.js";
  const siteKey: string = "6LeMVHUjAAAAAEyaGwE3C9evLc2Ynp4Oqe2Cnheb";

  useEffect(() => appendScript(urlRecaptchScript));

  return <div className={classNames({
    "g-recaptcha": true,
    [styles.recaptcha]: true,
  })} data-sitekey={siteKey}></div>
}

export default memo(GoogleRecaptcha);