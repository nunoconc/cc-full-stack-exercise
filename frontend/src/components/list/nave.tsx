import { Button } from '@mui/material';
import { JSX, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { getCompanies } from '../../services/securityService';

interface INave {
    page: number;
}

export default function Nave({ page }: INave): JSX.Element {
    const navigate = useNavigate();
    const [hideNext, setHideNext] = useState<boolean>(false);

    const goTo = (pg: number) => {
        if (pg >= 0) {
            navigate(`/securities?page=${pg}`);
        }
    };

    useEffect(() => {
        getCompanies(page + 1).then((companies) => {
            if (!companies.length) {
                setHideNext(true);
            } else {
                setHideNext(false);
            }
        });
    }, [page]);

    return (
        <div className={'naveContainer'}>
            <Button
                className={'naveButton'}
                variant="contained"
                disabled={page === 0}
                onClick={() => goTo(page - 1)}
            >
                Back
            </Button>
            <Button
                className={'naveButton'}
                variant="contained"
                disabled={hideNext}
                onClick={() => goTo(page + 1)}
            >
                Next
            </Button>
        </div>
    );
}
