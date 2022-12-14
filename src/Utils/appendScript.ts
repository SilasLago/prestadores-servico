export const appendScript = (scriptURL: string): void => {
    const script: HTMLScriptElement = document.createElement("script");
    script.src = scriptURL;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}