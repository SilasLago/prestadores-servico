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
}