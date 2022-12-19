export class Servico {

    public readonly dataSolicitacao: Date = new Date();
    private _numeroProcesso: string | undefined;

    constructor(
        public readonly idPrestador: number,
        public readonly idAnalista: number,
        public readonly tipoServico: string,
        public readonly idLocalAtendimento: number,
        public readonly cliente: string,
        public readonly filial: string,
        numeroProcesso?: string,
    ) {
        if(numeroProcesso) {
            this._numeroProcesso = numeroProcesso;
        }
    }

    public get numeroProcesso() {
        return this._numeroProcesso;
    }

    public setNumeroProcesso(numeroProcesso: string) {
        this._numeroProcesso = numeroProcesso;
    }

}