import { SelectDataType } from "interfaces/select_data_type";

export class SelectDataClass implements SelectDataType {
    constructor(
        public readonly value: any,
        public readonly label: string,
    ) {}
}

export class PrestadorLocalDeAtendimento {
    constructor(
        public readonly city: string,
        public readonly state: string,
    ) {}

    public isValidLocale(): boolean {
        return this.city !== "" && this.state !== "";
    }

    public isEqual(localAtendimento: PrestadorLocalDeAtendimento) {
        return this.city === localAtendimento.city 
        && this.state === localAtendimento.state;
    }
 
}