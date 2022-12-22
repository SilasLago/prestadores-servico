import DefaultModal from "Components/Modals/DefaultModal/default_modal";
import { useState } from "react";
import { PrestadorLocalDeAtendimento, SelectDataClass } from "Utils/classes";
import { states } from "Utils/datas";
import DefaultButton from "../DefaultButton/default_button";
import DefaultInput from "../DefaultInput/default_input";
import LocalAtendimentoList from "./Components/LocalAtendimentoList/local_atendimento_list";
import styles from "./local_atendimento_input.module.scss";

interface ILocalAtendimentoInput {
  locaisSelecionados: Array<PrestadorLocalDeAtendimento>,
  setLocaisSelecionados: React.Dispatch<React.SetStateAction<PrestadorLocalDeAtendimento[]>>
}
function LocalAtendimentoInput({ locaisSelecionados, setLocaisSelecionados }: ILocalAtendimentoInput) {

  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  const [openSelection, setOpenSelection] = useState<boolean>(false);

  function onSubmitLocalAtendimentoForm() {
    const newLocalAtendimento = new PrestadorLocalDeAtendimento(selectedCity, selectedState);
    if(newLocalAtendimento.isValidLocale()) {
      
      const locales = locaisSelecionados.filter(localExistente => !localExistente.isEqual(newLocalAtendimento));
      
      if(locales.length === locaisSelecionados.length) {
        const newLocaisSelecionados = [...locaisSelecionados];
        newLocaisSelecionados.push(newLocalAtendimento);
        setLocaisSelecionados(newLocaisSelecionados);
        setSelectedCity("");
        setSelectedState("");
        alert("Nova localização adicionada!");
      }else {
        alert("Essa localização já foi adicionada!")
      }
      
    }else {
      alert("Localização inválida!");
    }
  }

  function closeModal() {
    setOpenSelection(false);
  }

  function getLocaisList(): JSX.Element {
    return (
      <LocalAtendimentoList 
        locaisAtendimento={locaisSelecionados} 
        setLocaisAtendimento={setLocaisSelecionados}
      />
    )
  }

  return (
    <div className={styles.holder}>
      <label className={styles.holder__label}>
        Locais de atendimento
      </label>
      <div 
        className={styles.input}
        title="Locais de atendimento"
        tabIndex={0}
        onClick={_ => setOpenSelection(true)}
      >
        <span className={styles.input__placeholder}>
          Selecione um local de atendimento
        </span>
        <span className={styles.input__icon}>
          +
        </span>
      </div>
      {getLocaisList()}
      {openSelection && (
        <DefaultModal
          title="Selecione um local de atendimento"
          size="lg"
          onClose={closeModal}
        >
          <section>
            <DefaultInput
              id="estados"
              label="Estado"
              placeholder="Estado"
              title="Estado"
              type="select"
              value={selectedState}
              onChange={setSelectedState}
              data={[new SelectDataClass("", "estado..."), ...states]}
              isPositionFixed={true}
              required={true}
            />
            <DefaultInput
              id="cidade"
              label="Cidade"
              placeholder="Cidade"
              title="Cidade"
              type="text"
              value={selectedCity}
              onChange={setSelectedCity}
              disabled={selectedState === ""}
              isPositionFixed={true}
              required={true}
            />
            <DefaultButton type="button" label="Adicionar" onClick={onSubmitLocalAtendimentoForm} />
            <hr/>
            {getLocaisList()}
          </section>
        </DefaultModal>
      )}

    </div>
  )
}

export default LocalAtendimentoInput;