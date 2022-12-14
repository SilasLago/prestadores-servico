export const appendScript = (scriptToAppend: string): void => {
    const script: HTMLScriptElement = document.createElement("script");
    script.src = scriptToAppend;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}