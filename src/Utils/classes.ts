import { SelectDataType } from "interfaces/select_data_type";

export class SelectDataClass implements SelectDataType {
    constructor(
        public readonly value: any,
        public readonly label: string,
    ) {}
}