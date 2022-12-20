import { RG } from "./classes";
import * as XLSX from "xlsx-js-style";
import { bigTitleStyle, blankSpaceStyle, keyStyle, titleStyle, valueStyle } from "./create_rg_styles";

export function createRg(rgData: RG) {
  fetch(`${process.env.PUBLIC_URL}/src/rg_base.xlsx`)
    .then(resp => resp.arrayBuffer())
    .then(buffer => exportXLSXWithData(rgData, XLSX.read(buffer, {
      cellStyles: true,
      cellFormula: true,
      type: "buffer",
      bookDeps: true,
      raw: true,
    })))
}

function exportXLSXWithData(rgData: RG, workbook: XLSX.WorkBook) {

  const workbookKeys = Object.keys(workbook.Sheets["Prestador - Reembolso"]);
  const keysAndValues = createExportDependencies(rgData);
  const titles = ["relatório de despesa", "dados do processo", "dados para depósito"]

  workbookKeys.forEach(wkey => {

    const finder: string = String(workbook.Sheets["Prestador - Reembolso"][wkey].v);
    if (finder !== "_") {
      const keyAndValue = keysAndValues.find(keyAndValue => keyAndValue[0] === finder);
      if (finder.toLowerCase() === titles[0] || finder.toLowerCase() === titles[1] || finder.toLowerCase() === titles[2]) {
        if (finder.toLowerCase() === titles[0]) {
          if (workbook.Sheets["Prestador - Reembolso"][wkey].s) {
            workbook.Sheets["Prestador - Reembolso"][wkey].s = bigTitleStyle;
          }
        } else {
          if (workbook.Sheets["Prestador - Reembolso"][wkey].s) {
            workbook.Sheets["Prestador - Reembolso"][wkey].s = titleStyle;
          }
        }
      } else if (keyAndValue !== undefined) {
        workbook.Sheets["Prestador - Reembolso"][wkey].v = keyAndValue[1];
        workbook.Sheets["Prestador - Reembolso"][wkey].h = keyAndValue[1];
        workbook.Sheets["Prestador - Reembolso"][wkey].w = keyAndValue[1];
        const rValue = workbook.Sheets["Prestador - Reembolso"][wkey].r;
        workbook.Sheets["Prestador - Reembolso"][wkey].r = rValue.replace(finder, keyAndValue[1]);
        workbook.Sheets["Prestador - Reembolso"][wkey].s = valueStyle;
      } else if (workbook.Sheets["Prestador - Reembolso"][wkey].s) {
        workbook.Sheets["Prestador - Reembolso"][wkey].s = keyStyle;
      }
    }else {
      if (workbook.Sheets["Prestador - Reembolso"][wkey].s) {
        workbook.Sheets["Prestador - Reembolso"][wkey].s = blankSpaceStyle;
      }
    }

  })

  const today = new Date();
  const todayFormatted = `${today.getUTCDate()}-${today.getUTCMonth() + 1}-${today.getUTCFullYear()}`
  const fileName = `RG - ${todayFormatted}.xlsx`;

  XLSX.writeFile(workbook, fileName);
}

function createExportDependencies(rgData: RG): Array<Array<string | number | undefined>> {
  const analista = rgData.analista;
  const servico = rgData.servico;
  const prestador = rgData.prestador;

  const today = new Date();
  const todayFormatted: string = `${today.getUTCDate()}/${today.getUTCMonth()}/${today.getUTCFullYear()}`;

  const keysAndValues: Array<Array<string | number | undefined>> = [
    ["nome_solicitante", analista.nome],
    ["cargo_solicitante", analista.cargo],
    ["departamento_solicitante", analista.departamento],
    ["data_solicitacao", todayFormatted],
    ["finalidade_solicitante", rgData.finalidade],
    ["numero_processo", servico.numeroProcesso],
    ["cliente_processo", servico.cliente],
    ["filial_processo", servico.filial],
    ["tipo_solicitacao_processo", servico.tipoServico],
    ["cidade_processo", "Curitiba"],
    ["uf_processo", "Paraná"],
    ["nome_prestador_deposito", prestador.nome],
    ["cidade_deposito", prestador.cidade],
    ["uf_deposito", prestador.estado],
    ["rg_deposito", prestador.rg],
    ["cpf_deposito", prestador.cpf],
    ["banco_deposito", rgData.banco],
    ["agencia_deposito", rgData.agencia],
    ["conta_deposito", rgData.conta],
    ["motivo_requisicao", rgData.motivoRequisicao],
    ["quantidade_deposito", rgData.quantidade],
    ["valor_deposito", rgData.valor],
    ["descricao_deposito", rgData.descricaoServico]
  ]

  return keysAndValues
}