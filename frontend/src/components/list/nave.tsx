import { Button } from '@mui/material';
import { JSX, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import AppContext from '../../context/appContext';

interface INave {
    page: number;
}

/**
 * Navigation component to interact via buttons to prev and next list pages
 *
 * @export
 * @param {INave} param0
 * @param {number} param0.page
 * @returns {JSX.Element}
 */
export default function Nave({ page }: INave): JSX.Element {
    // Loads securityService instance from the context
    const { securityService } = useContext(AppContext);
    const [hideNext, setHideNext] = useState<boolean>(false);
    // used to navigate using router
    const navigate = useNavigate();

    // method to handle prev or next click
    const goTo = (pg: number) => {
        if (pg >= 0) {
            navigate(`/securities?page=${pg}`);
        }
    };

    // Calls next page to check if it's available to navigate
    // Could be a problem of a duplicated request
    // Sorted out by cache next page, so the next navigation will already be stored upfront
    useEffect(() => {
        securityService
            .getCompanies(page + 1)
            .then((companies) => {
                if (!companies.length) {
                    setHideNext(true);
                } else {
                    setHideNext(false);
                }
            })
            .catch(() => {
                setHideNext(true);
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
                Prev
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
