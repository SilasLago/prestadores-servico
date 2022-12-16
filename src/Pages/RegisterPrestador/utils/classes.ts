export class Prestador {

    public readonly contrato: string | undefined;
    public readonly id: number | undefined;

    constructor(
        public readonly nome: string,
        public readonly estado: string,
        public readonly cidade: string,
        public readonly email: string,
        public readonly telefone: string,
        public readonly formacao: string,
        public readonly tipoDeServico: string,
        public readonly valorCobrado: number,
        public readonly avaliacao: number,
        public readonly rg: string,
        public readonly cpf: string,
        contrato?: string,
        id?: number,
    ) {
        if(contrato) {
            this.contrato = contrato;
        }
        if(id) {
            this.id = id;
        }
    }

    public temContrato(): boolean {
        return this.contrato !== undefined;
    }

}