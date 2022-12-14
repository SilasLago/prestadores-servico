import Table from "Components/Table/table";
import { Line } from "Components/Table/utils/classes";
import { useState } from "react";
import styles from "./main.module.scss";

function Main() {

  const [lines, setLines] = useState<Array<Line>>([
    new Line().defineValue("IMG").defineValue("João Cleber Silva").defineValue("9 / 10").defineValue("R$ 150,55").defineValue(""),
    new Line().defineValue("IMG").defineValue("Marcia Maria Pereira").defineValue("10 / 10").defineValue("R$ 98,55").defineValue(""),
    new Line().defineValue("IMG").defineValue("Ana Toledo Silva").defineValue("7 / 10").defineValue("R$ 175,00").defineValue(""),
    new Line().defineValue("IMG").defineValue("Hugo Jonathas Santos").defineValue("4 / 10").defineValue("R$ 50,88").defineValue(""),
    new Line().defineValue("IMG").defineValue("Matheus Issac Rosa").defineValue("10 / 10").defineValue("R$ 165,55").defineValue(""),
    new Line().defineValue("IMG").defineValue("Kaike Barros Aroudo").defineValue("0 / 10").defineValue("R$ 366,01").defineValue(""),
  ]);

  return (
    <section className={styles.content}>
      <h1 className={styles.content__title}>
        Prestadores
      </h1>
      <Table
        titles={["Perfil", "Nome", "Avaliação", "Valor cobrado", "Mais informações"]}
        lines={lines}
        pageable={true}
      />
    </section>
  )
}

export default Main;