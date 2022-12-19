import { createContext } from "react";
import { ActionsPrestadorData } from "./prestador_context_class";

export const actionsDataContext = createContext<ActionsPrestadorData>(new ActionsPrestadorData());