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