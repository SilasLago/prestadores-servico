import Table from "Components/Table/table";
import { Line } from "Components/Table/utils/classes";
import { useDesapear } from "Hooks/useDesapear/useDesapear";
import { useState } from "react";
import PrestadorInfo from "./Components/PrestadorInfo/prestador_info";
import styles from "./prestadores.module.scss";

function Prestadores() {

  const [curIdPrestadorInfo, setCurIdPrestadorInfo] = useState<number | null>(null);
  const desapear = useDesapear();

  const tableTitles: Array<string> = [
    "Perfil", 
    "Nome", 
    "Avaliação", 
    "Valor cobrado", 
    "Mais informações"
  ] 

  const [lines, setLines] = useState<Array<Line>>([
    new Line().defineValue("IMG").defineValue("João Cleber Silva").defineValue("9 / 10").defineValue("R$ 150,55").defineValue(createButton(0)),
    new Line().defineValue("IMG").defineValue("Marcia Maria Pereira").defineValue("10 / 10").defineValue("R$ 98,55").defineValue(createButton(1)),
    new Line().defineValue("IMG").defineValue("Ana Toledo Silva").defineValue("7 / 10").defineValue("R$ 175,00").defineValue(createButton(2)),
    new Line().defineValue("IMG").defineValue("Hugo Jonathas Santos").defineValue("4 / 10").defineValue("R$ 50,88").defineValue(createButton(3)),
    new Line().defineValue("IMG").defineValue("Matheus Issac Rosa").defineValue("10 / 10").defineValue("R$ 165,55").defineValue(createButton(4)),
    new Line().defineValue("IMG").defineValue("Kaike Barros Aroudo").defineValue("0 / 10").defineValue("R$ 366,01").defineValue(createButton(5)),
  ]);

  function createButton(id: number): JSX.Element {
    return (
      <button className={styles["view-button"]} onClick={_ => openPrestadorInfo(id)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-primary bi bi-eye-fill" viewBox="0 0 16 16">
          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
        </svg>
      </button>
    )
  }

  function openPrestadorInfo(id: number): void {
    setCurIdPrestadorInfo(id);
    desapear.update(true);
  }

  function closePrestadorInfo() {
    setCurIdPrestadorInfo(null);
    desapear.update(false);
  }

  return (
    <section className={styles.content}>
      <h1 className={styles.content__title}>
        Prestadores
      </h1>
      <Table
        titles={tableTitles}
        lines={lines}
        pageable={true}
      />
      {typeof(curIdPrestadorInfo) === "number" && 
      <PrestadorInfo id={curIdPrestadorInfo} onClose={closePrestadorInfo} />}
    </section>
  )
}

export default Prestadores;