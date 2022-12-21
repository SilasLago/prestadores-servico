import DefaultButton from "Components/Inputs/DefaultButton/default_button";
import DefaultInput from "Components/Inputs/DefaultInput/default_input";
import { DefaultInputData } from "Components/Inputs/DefaultInput/utils/classes";
import Table from "Components/Table/table";
import { Line } from "Components/Table/utils/classes";
import { useDesapear } from "Hooks/useDesapear/useDesapear";
import { FormEvent, useState } from "react";
import { SelectDataClass } from "Utils/classes";
import { states } from "Utils/datas";
import PrestadorInfo from "./Components/PrestadorInfo/prestador_info";
import styles from "./prestadores.module.scss";

function Prestadores() {

  const [searchByState, setSearchByState] = useState<string>("");
  const [searchByCity, setSearchByCity] = useState<string>("");
  const [searchByHasContract, setSearchByHasContract] = useState<boolean>(true);

  const inputs: Array<DefaultInputData> = [
    new DefaultInputData(searchByState, setSearchByState, "estado", "select", "Estado", "Estado", "Estado", [new SelectDataClass("", "estado..."), ...states], true, false),
    new DefaultInputData(searchByCity, setSearchByCity, "cidade", "select", "Cidade", "Cidade", "Cidade", [new SelectDataClass("", "cidade..."), ...states], true, false),
    new DefaultInputData(searchByHasContract, setSearchByHasContract, "contrato", "checkbox", "Tem contrato", "Tem contrato", "Tem contrato", states, false, false),
  ]

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
    new Line(undefined, undefined, undefined, "IMG", "João Cleber Silva", "9 / 10", "R$ 150,55", createButton(0)),
    new Line(undefined, undefined, undefined, "IMG", "João Cleber Silva", "9 / 10", "R$ 150,55", createButton(1)),
    new Line(undefined, undefined, undefined, "IMG", "João Cleber Silva", "9 / 10", "R$ 150,55", createButton(2)),
    new Line(undefined, undefined, undefined, "IMG", "João Cleber Silva", "9 / 10", "R$ 150,55", createButton(3)),
    new Line(undefined, undefined, undefined, "IMG", "João Cleber Silva", "9 / 10", "R$ 150,55", createButton(4)),
    new Line(undefined, undefined, undefined, "IMG", "João Cleber Silva", "9 / 10", "R$ 150,55", createButton(5)),
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

  function onSubmitFilters(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Busca feita!");
  }

  return (
    <section className={styles.content}>
      <h1 className={styles.content__title}>
        Prestadores
      </h1>
      <form onSubmit={onSubmitFilters} className={styles.filters}>
        <h2 className={styles.filters__title}>
          Buscar
        </h2>
        <div className={styles.filters__inputs}>
          {inputs.map(({ type, data, disabled, id, label, onChange, placeholder, required, title, value }) => (
            <div key={id} className={styles.filters__inputs__input}>
              <DefaultInput
                type={type}
                data={data}
                disabled={id === "cidade" ? searchByState === "" : disabled}
                id={id}
                label={label}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                title={title}
                value={value}
              />
            </div>
          ))}
        </div>
        <div className={styles.filters__button}>
          <DefaultButton type="submit" label="Buscar" />
        </div>
      </form>
      <Table
        titles={tableTitles}
        lines={lines}
        pageable={true}
      />
      {typeof (curIdPrestadorInfo) === "number" &&
        <PrestadorInfo id={curIdPrestadorInfo} onClose={closePrestadorInfo} />}
    </section>
  )
}

export default Prestadores;