import { SelectDataType } from "interfaces/select_data_type"

class SelectDataClass implements SelectDataType {
    constructor(
        public readonly value: any,
        public readonly label: string,
    ) {}
}

export const departments: Array<SelectDataType> = [
    new SelectDataClass("TI", "TI")
]

export const offices: Array<SelectDataType> = [
    new SelectDataClass("Desenvolvedor de Sistemas", "Desenvolvedor de Sistemas")
]

export const branchs: Array<SelectDataType> = [
    new SelectDataClass("0000 - Matriz", "0000 - Matriz"),
    new SelectDataClass("0001 - São Paulo", "0001 - São Paulo")
]