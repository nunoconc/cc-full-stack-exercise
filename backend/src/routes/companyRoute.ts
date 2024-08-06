import express, { NextFunction, Request, Response } from 'express';
import routeCache from 'route-cache';
import CompanyService from '../services/companyService';

const router = express.Router();
const companyService = new CompanyService()

router.get('/list', routeCache.cacheSeconds(20), async function (req: Request, res: Response, next: NextFunction) {
    const { pageSize, index } = req.query;

    try {
        if (typeof pageSize !== 'string' || typeof index !== 'string' || pageSize === 'NaN' || index === 'NaN') {
            res.status(400).send('Invalid query parameters');
        } else {

            const data = await companyService.getCompanies(parseInt(pageSize), parseInt(index));
            res.json(data);
        }
    } catch (error) {
        next(error);
    };
});

router.get('/detail', routeCache.cacheSeconds(20), async function (req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.query;

        if (typeof id !== 'string' ||  id === 'NaN') {
            res.status(400).send('Invalid query parameters');
        } else {

            const data = await companyService.getCompany(parseInt(id));
            res.json(data);
        }

       
    } catch (error) {
        next(error);
    };

});

export default router;