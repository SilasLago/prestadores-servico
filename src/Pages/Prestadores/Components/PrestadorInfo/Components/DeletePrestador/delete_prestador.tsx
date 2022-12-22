import DefaultModal from "Components/Modals/DefaultModal/default_modal";
import DefaultButton from "Components/Inputs/DefaultButton/default_button";
import { useContext } from "react";
import { actionsDataContext } from "../../Contexts/prestador_context";
import { ActionsPrestadorData } from "../../Contexts/prestador_context_class";
import styles from "./delete_prestador.module.scss";

function DeletePrestador() {

  const dependencies = useContext<ActionsPrestadorData>(actionsDataContext);

  function onCloseDeletePrestador() {
    dependencies.onClose();
  }

  function onClickCancelButton() {
    onCloseDeletePrestador();
  }

  function onClickConfirmButton() {
    alert("Prestador deletado com sucesso!");
    onCloseDeletePrestador();
  }

  return (
    <DefaultModal
      onClose={onCloseDeletePrestador}
      size="md"
      title="Deseja deletar o prestador?"
    >
      <div className={styles.body}>
        Essa ação não pode ser revertida.
      </div>
      <hr />
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

export default DeletePrestador;