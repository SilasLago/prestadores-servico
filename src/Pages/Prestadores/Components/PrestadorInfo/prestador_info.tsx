import DefaultModal from "Components/Modals/DefaultModal/default_modal";
import DefaultButton from "Components/Inputs/DefaultButton/default_button";
import { Prestador } from "Pages/RegisterPrestador/utils/classes";
import { useState } from "react";
import { states } from "Utils/datas";
import DeactivatePrestador from "./Components/DeactivatePrestador/deactivate_prestador";
import DeletePrestador from "./Components/DeletePrestador/delete_prestador";
import styles from "./prestador_info.module.scss";
import StartService from "./Components/StartService/start_service";
import UpdatePrestadorForm from "./Components/UpdatePrestadorForm/update_prestador_form";
import { actionsDataContext } from "./Contexts/prestador_context";
import { ActionsPrestadorData } from "./Contexts/prestador_context_class";
import { PrestadorLocalDeAtendimento } from "Utils/classes";

interface IPrestadorInfo {
  id: number,
  onClose: React.MouseEventHandler<HTMLDivElement>
}
function PrestadorInfo({ id, onClose }: IPrestadorInfo) {

  const [showAction, setShowAction] = useState<number | null>(null);
  const [curPrestador, setCurPrestador] = useState<Prestador>(new Prestador(
    "Charlie Brown Junior",
    states[0].value,
    "Curitiba",
    "charliebrown@gmail.com",
    "(41) 9 9999-9999",
    "Administração",
    "Entregas",
    1500.59,
    10,
    "84.984.984-89",
    "111.154.487-52",
    [new PrestadorLocalDeAtendimento("Curitiba", states[0].value)],
    "https://www.contratos.com.br/grupomayer/charliebrownjunior/",
    id
  ));

  function closeActions() {
    setShowAction(null);
  }

  const actionPrestadorData = new ActionsPrestadorData(closeActions, id);

  return (<>
    {showAction === null && (
      <DefaultModal
        title={`Informações do prestador: ${curPrestador.nome}`}
        onClose={onClose}
        size="lg"
      >
        <div>
          <UpdatePrestadorForm curPrestador={curPrestador} setCurPrestador={setCurPrestador} />
          <hr />
          <div className={styles.info__actions}>
            <h2 className={styles.info__actions__title}>
              Ações
            </h2>
            <div className={styles.info__actions__body}>
              <DefaultButton label="Solicitar serviço" type="button" onClick={_ => setShowAction(0)} />
              <DefaultButton label="Baixar contrato" type="button" onClick={_ => setShowAction(1)} disabled={!curPrestador.temContrato()} />
              <DefaultButton label="Inativar prestador" type="button" onClick={_ => setShowAction(2)} />
              <DefaultButton label="Deletar prestador" type="button" onClick={_ => setShowAction(3)} />
            </div>
          </div>
        </div>
      </DefaultModal>
    )}
    <actionsDataContext.Provider value={actionPrestadorData}>
      {showAction === 0 && <StartService />}
      {showAction === 2 && <DeactivatePrestador />}
      {showAction === 3 && <DeletePrestador />}
    </actionsDataContext.Provider>
  </>)
}

export default PrestadorInfo;