export const appendScript = (scriptToAppend: string): void => {
    const script: HTMLScriptElement = document.createElement("script");
    script.src = scriptToAppend;
    script.async = true;
    document.head.appendChild(script);
}