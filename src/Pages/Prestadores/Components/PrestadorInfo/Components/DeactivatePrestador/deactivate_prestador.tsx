import DefaultModal from "Components/DefaultModal/default_modal";
import DefaultButton from "Components/Inputs/DefaultButton/default_button";
import React, { useContext } from "react";
import { actionsDataContext } from "../../Contexts/prestador_context";
import { ActionsPrestadorData } from "../../Contexts/prestador_context_class";
import styles from "./deactivate_prestador.module.scss";

function DeactivatePrestador() {

  const dependencies = useContext<ActionsPrestadorData>(actionsDataContext);

  function onDeactiveClose() {
    dependencies.onClose();
  }

  function onClickCancelButton() {
    onDeactiveClose();
  }

  function onClickConfirmButton() {
    alert("Prestador desativado!");
    onDeactiveClose();
  }

  return (
    <DefaultModal
      title="Deseja inativar esse prestador?"
      size="md"
      onClose={onDeactiveClose}
    >
      <div className={styles.body}>
        Não será mais possível solicitar novos serviços
        com este prestador enquanto o mesmo estiver
        desativado, tem certeza que deseja prosseguir?
      </div>
      <hr/>
      <div className={styles.buttons}>
        <div className={styles.buttons__button}>
          <DefaultButton type="button" label="Cancelar" onClick={onClickCancelButton} />
        </div>
        <div className={styles.buttons__button}>
          <DefaultButton type="button" label="Confirmar" onClick={onClickConfirmButton} />
        </div>
      </div>
    </DefaultModal>
  )
}

export default DeactivatePrestador;