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
    
    constructor(
        public readonly value: any,
        public readonly onChange: React.Dispatch<React.SetStateAction<any>>,
        public readonly id: string,
        public readonly type: string,
        public readonly title: string,
        public readonly placeholder: string,
        public readonly label: string,
    ) {}

}