import { User } from "Components/Header/Components/UserInfo/utils/classes";
import { Servico } from "Pages/Prestadores/Components/PrestadorInfo/Components/StartService/utils/classes";
import { Prestador } from "Pages/RegisterPrestador/utils/classes";

export class RG {
    constructor(
        public readonly analista: User,
        public readonly prestador: Prestador,
        public readonly servico: Servico,
        public readonly finalidade: string,
        public readonly descricaoServico: string,
        public readonly motivoRequisicao: string,
        public readonly banco: string,
        public readonly agencia: string,
        public readonly conta: string,
        public readonly valor: number,
        public readonly quantidade: number
    ) {}
}