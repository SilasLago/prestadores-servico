import { createContext, useContext, useState } from "react";
import { DesapearData } from "./utils/classes";

const notInitialized = new DesapearData(false, (desapear: boolean) => {});
const Desapear = createContext<DesapearData>(notInitialized);

interface ICreateDesapear {
    children: JSX.Element
}
export function CreateDesapear({ children }: ICreateDesapear) {

    const [desapear, setDesapear] = useState<boolean>(false);

    function update(desapear: boolean) {
        setDesapear(desapear);
    }

    const desapearData = new DesapearData(
        desapear,
        update
    );

    return <Desapear.Provider value={desapearData}>
        {children}
    </Desapear.Provider>
}

export function useDesapear(): DesapearData {
    return useContext(Desapear);
}