import DefaultButton from "Components/Inputs/DefaultButton/default_button";
import DefaultInput from "Components/Inputs/DefaultInput/default_input";
import { DefaultInputData } from "Components/Inputs/DefaultInput/utils/classes";
import Table from "Components/Table/table";
import { Functions, Line } from "Components/Table/utils/classes";
import { useDesapear } from "Hooks/useDesapear/useDesapear";
import { Prestador } from "Pages/RegisterPrestador/utils/classes";
import { FormEvent, useMemo, useState } from "react";
import { PrestadorLocalDeAtendimento, SelectDataClass } from "Utils/classes";
import { states } from "Utils/datas";
import PrestadorInfo from "./Components/PrestadorInfo/prestador_info";
import styles from "./prestadores.module.scss";

function Prestadores() {

  const tableTitles: Array<string> = [
    "Perfil",
    "Nome",
    "Avaliação",
    "Valor cobrado",
    "Mais informações"
  ];

  const allLines = [
    new Line(createFunctions(), undefined, undefined, "IMG", "João Cleber Silva", "9 / 10", "R$ 150,55", createButton(0)),
    new Line(createFunctions(), undefined, undefined, "IMG", "João Cleber Silva", "9 / 10", "R$ 150,55", createButton(1)),
    new Line(createFunctions(), undefined, undefined, "IMG", "João Cleber Silva", "9 / 10", "R$ 150,55", createButton(2)),
    new Line(createFunctions(), undefined, undefined, "IMG", "João Cleber Silva", "9 / 10", "R$ 150,55", createButton(3)),
    new Line(createFunctions(), undefined, undefined, "IMG", "João Cleber Silva", "9 / 10", "R$ 150,55", createButton(4)),
    new Line(createFunctions(), undefined, undefined, "IMG", "João Cleber Silva", "9 / 10", "R$ 150,55", createButton(5)),
  ]

  const [searchByState, setSearchByState] = useState<string>("");
  const [searchByCity, setSearchByCity] = useState<string>("");
  const [searchByHasContract, setSearchByHasContract] = useState<boolean>(true);
  const [curIdPrestadorInfo, setCurIdPrestadorInfo] = useState<number | null>(null);
  const [lines, setLines] = useState<Array<Line>>(allLines);
  const desapear = useDesapear();

  const table = useMemo(() => (<Table titles={tableTitles} lines={lines} />), [lines]);

  const inputs: Array<DefaultInputData> = [
    new DefaultInputData(searchByState, setSearchByState, "estado", "select", "Estado", "Estado", "Estado", [new SelectDataClass("", "estado..."), ...states], false, false),
    new DefaultInputData(searchByCity, setSearchByCity, "cidade", "select", "Cidade", "Cidade", "Cidade", [new SelectDataClass("", "cidade..."), ...states], false, false),
    new DefaultInputData(searchByHasContract, setSearchByHasContract, "contrato", "checkbox", "Tem contrato", "Tem contrato", "Tem contrato", states, false, false),
  ];

  function createFunctions(): Functions {
    const functions = new Functions();

    const prestador = new Prestador(
      "Julio Cocielo", 
      "PR", 
      "Curitiba", 
      "cocielo@gmail.com", 
      "(41) 9 4944-4444", 
      "Pedreiro", 
      "Entrega de pedras", 
      1500.59, 
      10, 
      "41.154.222-45", 
      "123.456.789-01",
      [new PrestadorLocalDeAtendimento("Curitiba", "PR")]
    );
    
    functions.defineFunction("getHasContract", function(): boolean {
      return prestador.temContrato();
    });
    functions.defineFunction("getState", function(): string {
      return prestador.estado;
    });
    functions.defineFunction("getCity", function(): string {
      return prestador.cidade;
    });

    return functions;
  }

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

    setLines(allLines.filter((line: Line) => {
      const curFunctions: any = line.functions;

      let getLine = true;

      getLine = searchByHasContract === curFunctions.getHasContract()
      && (searchByState === curFunctions.getState() || searchByState === "")
      && (searchByCity === curFunctions.getCity() || searchByCity === "");

      return getLine;
    }));

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
                isPositionFixed={false}
              />
            </div>
          ))}
        </div>
        <div className={styles.filters__button}>
          <DefaultButton type="submit" label="Buscar" />
        </div>
      </form>
      {table}
      {typeof(curIdPrestadorInfo) === "number" && <PrestadorInfo id={curIdPrestadorInfo} onClose={closePrestadorInfo} />}
    </section>
  )
}

export default Prestadores;