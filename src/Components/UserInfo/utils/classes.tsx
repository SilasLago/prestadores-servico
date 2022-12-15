import { SelectDataType } from "interfaces/select_data_type";

export class User {
    
    constructor(
        public readonly nome: string,
        public readonly departamento: string,
        public readonly cargo: string,
        public readonly filial: string,
        public readonly telefone: string,
        public readonly email: string
    ) {}

}

export class UserInput {
    
    public readonly data: Array<SelectDataType> | undefined;

    constructor(
        public readonly value: any,
        public readonly onChange: React.Dispatch<React.SetStateAction<any>>,
        public readonly id: string,
        public readonly type: "text" | "number" | "select" | "password" | "email",
        public readonly title: string,
        public readonly placeholder: string,
        public readonly label: string,
        data?: Array<SelectDataType>
    ) {
        if(data) {
            this.data = data;
        }
    }

}