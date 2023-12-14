import { MealsContext } from "@/context/MealsContext";
import { useContext } from "react";

export function useFilter() {
    return useContext(MealsContext);
};
