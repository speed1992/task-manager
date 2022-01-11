import { useEffect } from "react";
import dataSet from "../../../static/initialData";
import { getDataFromLocalStorage, setDataInLocalStorage } from "../../../utils/commonUtils";

export const getDataDefaultState = () => {
    debugger;
    const dataFromLocalStorage = getDataFromLocalStorage();
    return !dataFromLocalStorage ? dataSet : dataFromLocalStorage;
}

export const useLocalStorage = (data) => {
    useEffect(() => {
        setDataInLocalStorage(data);
    }, [data])
}