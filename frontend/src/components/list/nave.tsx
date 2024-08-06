import { JSX } from 'react';
import { useNavigate } from 'react-router-dom';

interface INave {
    page: number;
    hideNext: boolean;
}

export default function Nave({ page, hideNext }: INave): JSX.Element {
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
            <button hidden={hideNext} onClick={() => goTo(++page)}>Next</button>
        </>
    );
}
