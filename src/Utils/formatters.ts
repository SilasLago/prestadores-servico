export function formatCPF(cpf: string): string {

    // We just want to format it if it is a valid number.
    if(!isNaN(parseInt(cpf))) {

        // Placeholder of an CPF.
        let placeholder = "xxx.xxx.xxx-xx";
        let index: number = 0;
        /* Amount of characters that our cpf has, we want to fill the
        placeholder little by little to show the user what numbers he 
        still don't fill */
        let maxLengthCpf: number = cpf.length;
        let stepBack: number = 0;

        // Catching all characters of the placeholder
        for(const char of placeholder) {
            /* We don't want the application to crash, so we stop catching 
            the placeholder characters when we don't have more CPF characters 
            typed */
            if(index < maxLengthCpf + stepBack) {
                /* This prevents the dots and the minus symbol of
                the cpf be replaced by numbers, so we jump to the next character
                in the placeholder, but plus one in step back to know which character
                catch in the cpf to the next character in the placeholder */
                if((index + 1) % 4 !== 0) {
                    placeholder = placeholder.replace(char, cpf.slice(index - stepBack, index + 1 - stepBack));
                }else {
                    stepBack++;
                }
                // Next character
                index++;
            }else {
                break;
            }
        }
        return placeholder
    }

    return cpf;
}

export function formatRG(rg: string): string {
    const placeholder = "?.xxx.xxx-xx";
    return "";
}

export function formatCEP(cep: string): string {
    const placeholder = "xxxxx-xxx";
    return "";
}

export function formatPhone(phone: string): string {
    if(!isNaN(parseInt(phone))) {
        let placeholder = "(xx) x xxxx-xxxx";
        let index = 0;
        let stepBack = 0;
        const phoneCharsLength = phone.length;
        for(const char of placeholder) {
            const gap = index - stepBack;
            if(char === "x" && gap < phoneCharsLength) {
                const phoneChar = phone.slice(gap, gap + 1);
                placeholder = placeholder.replace(char, phoneChar);
            }else {
                stepBack++;
            }
            index++;
        }
        return placeholder
    }
    return phone;
}