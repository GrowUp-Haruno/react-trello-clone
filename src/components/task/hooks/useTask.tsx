import { useState } from 'react';

export const useTask = (setTaskList: React.Dispatch<React.SetStateAction<string[]>>, index: number) => {
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const changeEdit = () => {
        setIsEdit(true);
    };

    const Change: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setTaskList((prevList) =>
            prevList.map((prev, prevIndex) => (prevIndex === index ? event.target.value : prev))
        );
    };

    const Blur = () => {
        setIsEdit(false);
        setTaskList((prevList) => prevList.filter(Boolean));
    };

    const Submit: React.FormEventHandler<HTMLDivElement> = (event) => {
        event.preventDefault();
        setIsEdit(false);
        setTaskList((prevList) => prevList.filter(Boolean));
    };

    const Delete = () => {
        setTaskList((prevList) => prevList.filter((_, prevIndex) => prevIndex !== index));
    };

    const state = { isEdit };
    const handle = { changeEdit, Change, Blur, Submit, Delete };

    return { state, handle };
};
