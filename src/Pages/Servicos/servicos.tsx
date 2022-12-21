import Table from "Components/Table/table";
import { Line } from "Components/Table/utils/classes";
import { useState } from "react";
import ServicoInfo from "./Components/ServicoInfo/servico_info";
import styles from "./servicos.module.scss";

function Servicos() {

  const [showServicoId, setShowServicoId] = useState<number | null>(null);

  const servicoTableTitles: Array<string> = ["Cliente", "Filial", "Tipo de solicitação", "Local de atendimento", "Data da solicitação", "Mais informações"]
  const tableLines: Array<Line> = [
    new Line(undefined, undefined, undefined, "Bradesco", "0037 - Serra Preta", "---", "Salvador - BA", new Date().toDateString(), createButton(37))
  ]

  function createButton(id: number): JSX.Element {
    return (
      <button className={styles["view-button"]} onClick={_ => openServicoInfo(id)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-primary bi bi-eye-fill" viewBox="0 0 16 16">
          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
        </svg>
      </button>
    )
  }

  function openServicoInfo(id: number) {
    setShowServicoId(id);
  }

  function closeServicoInfo() {
    setShowServicoId(null);
  }

  return (
    <section className={styles.page}>
      <h1 className={styles.title}>
        Serviços em andamento
      </h1>
      <div className={styles.table}>
        <Table
          titles={servicoTableTitles}
          lines={tableLines}
        />
      </div>
      {showServicoId !== null && <ServicoInfo servicoId={showServicoId} onClose={closeServicoInfo} />}
    </section>
  )
}

export default Servicos;