import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "../column/styled-components";
import { addNewCardHandler, validate } from "./utils/handlerUtils";
import { useOnClickOutside } from "./utils/utils";

export const AddNewCard = ({ column, appData }) => {
    const ref = useRef();
    const titleRef = useRef();
    const [isCardOpen, setCardOpen] = useState(false);
    const [newCard, setNewCard] = useState({ title: "", description: "" });
    const memoizedCallback = useCallback(() => setCardOpen(false), []);
    useOnClickOutside(ref, memoizedCallback);

    const handleCardChanges = (e) => {
        let newState = { ...newCard };
        if (e.target.id === "title") newState.title = e.target.value;
        if (e.target.id === "description") newState.description = e.target.value
        setNewCard(newState)
    }

    useEffect(() => {
        if (isCardOpen) titleRef.current.focus();
    }, [isCardOpen])

    return (
        <Container>
            {isCardOpen ?
                (<span ref={ref} onChange={handleCardChanges}>
                    <input ref={titleRef} id="title" type="text" />
                    <textarea id="description" />
                    <button onClick={() => {
                        if (validate(newCard)) {
                            addNewCardHandler({ ...newCard, column, appData })
                            setNewCard({ title: "", description: "" })
                            setCardOpen(false)
                        }
                    }}> Add</button >
                </span >)
                :
                (<button onClick={() => {
                    setCardOpen(true);
                }}> Add new card</button >)}
        </Container>
    )
}