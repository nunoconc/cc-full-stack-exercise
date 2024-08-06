import { JSX } from 'react';
import { useNavigate } from 'react-router-dom';

interface IRow {
    page: number;
    hideNext: boolean;
}

export default function Nave({ page }: IRow): JSX.Element {
    const navigate = useNavigate();

    const goTo = (pg: number) => {
        if (pg >= 0) {
            navigate(`/securities?page=${pg}`);
        }
    };

    return (
        <>
            <button hidden={page === 0} onClick={() => goTo(--page)}>
                Back
            </button>
            <button onClick={() => goTo(++page)}>Next</button>
        </>
    );
}
