import { SelectDataType } from "interfaces/select_data_type";

export class DefaultInputData {
    
    public readonly data: Array<SelectDataType> | undefined;
    public readonly required: boolean | undefined;

    private _disabled: boolean = false;

    constructor(
        public readonly value: any,
        public readonly onChange: React.Dispatch<React.SetStateAction<any>>,
        public readonly id: string,
        public readonly type: "text" | "number" | "select" | "password" | "email" | "textarea" | "checkbox",
        public readonly title: string,
        public readonly placeholder: string,
        public readonly label: string,
        data?: Array<SelectDataType>,
        required?: boolean,
        disabled?: boolean,
    ) {
        if(data) {
            this.data = data;
        }
        if(required !== undefined) {
            this.required = required;
        }
        if(disabled) {
            this._disabled = disabled;
        }
    }

    public get disabled() {
        return this._disabled;
    }

    public setDisabled(isDisabled: boolean): void {
        this._disabled = isDisabled;
    }

}