import { SelectDataType } from "interfaces/select_data_type"
import { SelectDataClass } from "Utils/classes"

export const requestTypesData: Array<SelectDataType> = [
    new SelectDataClass("Primeira entrada", "Primeira entrada"),
    new SelectDataClass("Comunique-se", "Comunique-se"),
    new SelectDataClass("Retrabalho", "Retrabalho"),
    new SelectDataClass("Retirada de documentos", "Retirada de documentos"),
    new SelectDataClass("Solicitação de informação", "Solicitação de informação"),
    new SelectDataClass("Levantamento fotográfico", "Levantamento fotográfico"),
    new SelectDataClass("Levantamento técnico/cadastral", "Levantamento técnico/cadastral"),
]

export const goalTypesData: Array<SelectDataType> = [
    new SelectDataClass("Pagamento de prestador", "Pagamento de prestador"),
    new SelectDataClass("Reembolso", "Reembolso"),
]