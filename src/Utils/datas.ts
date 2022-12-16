import { SelectDataType } from "interfaces/select_data_type"
import { SelectDataClass } from "./classes"

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

export const states: Array<SelectDataType> = [
    new SelectDataClass("AC", "Acre"),
    new SelectDataClass("AL", "Alagoas"),
    new SelectDataClass("AP", "Amapá"),
    new SelectDataClass("AM", "Amazonas"),
    new SelectDataClass("BA", "Bahia"),
    new SelectDataClass("CE", "Ceará"),
    new SelectDataClass("ES", "Espirito Santo"),
    new SelectDataClass("GO", "Goiás"),
    new SelectDataClass("MA", "Maranhão"),
    new SelectDataClass("MT", "Mato Grosso"),
    new SelectDataClass("MS", "Mato Grosso do Sul"),
    new SelectDataClass("MG", "Minas Gerais"),
    new SelectDataClass("PA", "Pará"),
    new SelectDataClass("PB", "Paraíba"),
    new SelectDataClass("PR", "Paraná"),
    new SelectDataClass("PE", "Pernambuco"),
    new SelectDataClass("PI", "Piauí"),
    new SelectDataClass("RJ", "Rio de Janeiro"),
    new SelectDataClass("RN", "Rio Grande do Norte"),
    new SelectDataClass("RS", "Rio Grande do Sul"),
    new SelectDataClass("RO", "Rondônia"),
    new SelectDataClass("RR", "Roraima"),
    new SelectDataClass("SC", "Santa Catarina"),
    new SelectDataClass("SP", "São Paulo"),
    new SelectDataClass("SE", "Sergipe"),
    new SelectDataClass("TO", "Tocantins"),
    new SelectDataClass("DF", "Distrito Federal"),
]