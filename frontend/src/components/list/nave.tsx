import { Button } from '@mui/material';
import { JSX, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import AppContext from '../../context/appContext';

interface INave {
    page: number;
}

export default function Nave({ page }: INave): JSX.Element {
    const { securityService } = useContext(AppContext);
    const [hideNext, setHideNext] = useState<boolean>(false);
    const navigate = useNavigate();

    const goTo = (pg: number) => {
        if (pg >= 0) {
            navigate(`/securities?page=${pg}`);
        }
    };

    useEffect(() => {
        securityService.getCompanies(page + 1).then((companies) => {
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
