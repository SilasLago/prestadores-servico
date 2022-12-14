import { useEffect } from "react";
import { appendScript } from "Utils/appendScript";

function GoogleRecaptcha() {

  const urlRecaptchScript: string = "https://www.google.com/recaptcha/api.js";
  const siteKey: string = "6LeMVHUjAAAAAEyaGwE3C9evLc2Ynp4Oqe2Cnheb";

  useEffect(() => appendScript(urlRecaptchScript));

  return <div className="g-recaptcha" data-sitekey={siteKey}></div>
}

export default GoogleRecaptcha;