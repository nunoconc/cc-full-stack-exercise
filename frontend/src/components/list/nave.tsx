import { Button } from '@mui/material';
import { JSX } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

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
        <div className={"naveContainer"}>
            <Button className={'naveButton'} variant="contained" disabled={page === 0} onClick={() => goTo(--page)}>
                Back
            </Button>
            <Button className={'naveButton'} variant="contained" hidden={hideNext} onClick={() => goTo(++page)}>Next</Button>
        </div>
    );
}
