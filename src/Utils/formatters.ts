export function cleanString(target: string, ...chars: Array<string>): string {
    let targetCleaned = target;
    for(const char of chars) {
        targetCleaned = targetCleaned.replaceAll(char, "");
    }
    return targetCleaned
}

export function formatCPF(cpf: string, ...chars: Array<string>): string {
    let cleanedCpf = cleanString(cpf, ...chars);
    if (!isNaN(parseInt(cleanedCpf))) {
        const placeholder = "xxx.xxx.xxx-xx";
        return formatter(placeholder, cleanedCpf);
    }
    return cpf;
}

export function formatRG(rg: string, ...chars: Array<string>): string {
    let cleanedRg = cleanString(rg, ...chars);
    if(!isNaN(parseInt(cleanedRg))) {
        const placeholder = "xx.xxx.xxx-xx";
        return formatter(placeholder, cleanedRg);
    }
    return rg;
}

export function formatCEP(cep: string, ...chars: Array<string>): string {
    let cleanedCep = cleanString(cep, ...chars);
    if (!isNaN(parseInt(cleanedCep))) {
        const placeholder = "xxxxx-xxx";
        return formatter(placeholder, cleanedCep);
    }
    return cep;
}

export function formatPhone(phone: string, ...chars: Array<string>): string {
    let cleanedPhone = cleanString(phone, ...chars);
    if (!isNaN(parseInt(cleanedPhone))) {
        const placeholder = "(xx) x xxxx-xxxx";
        return formatter(placeholder, cleanedPhone);
    }
    return phone;
}

function formatter(placeholder: string, value: string) {
    let index = 0;
    let stepBack = 0;
    const phoneCharsLength = value.length;
    for (const char of placeholder) {
        const gap = index - stepBack;
        if (char === "x" && gap < phoneCharsLength) {
            const phoneChar = value.slice(gap, gap + 1);
            placeholder = placeholder.replace(char, phoneChar);
        } else {
            stepBack++;
        }
        index++;
    }
    return placeholder;
}