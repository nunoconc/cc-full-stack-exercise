import express, { Request, Response } from 'express';
import routeCache from 'route-cache';
import CompanyService from '../services/companyService';

const router = express.Router();
const companyService = new CompanyService()

router.get('/list', routeCache.cacheSeconds(20), async function (req: Request, res: Response) {
    const { pageSize, index } = req.query;


    if (typeof pageSize !== 'string'|| typeof index !== 'string') {
        res.status(400).send('Invalid query parameters');
    } else {
        const data = await companyService.getCompanies(parseInt(pageSize), parseInt(index));
        res.json(data);
    }
});

router.get('/detail', routeCache.cacheSeconds(20), async function (req: Request, res: Response) {
    const { id } = req.query;

    if (typeof id !== 'string') {
        res.status(400).send('Invalid query parameters');
    } else {
        const data = await companyService.getCompany(parseInt(id));
        res.json(data);
    }
});

export default router;