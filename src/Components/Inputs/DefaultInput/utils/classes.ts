import { SelectDataType } from "interfaces/select_data_type";

export class DefaultInputData {
    
    public readonly data: Array<SelectDataType> | undefined;
    public readonly required: boolean | undefined;

    constructor(
        public readonly value: any,
        public readonly onChange: React.Dispatch<React.SetStateAction<any>>,
        public readonly id: string,
        public readonly type: "text" | "number" | "select" | "password" | "email",
        public readonly title: string,
        public readonly placeholder: string,
        public readonly label: string,
        data?: Array<SelectDataType>,
        required?: boolean,
    ) {
        if(data) {
            this.data = data;
        }
        if(required) {
            this.required = required;
        }
    }

}