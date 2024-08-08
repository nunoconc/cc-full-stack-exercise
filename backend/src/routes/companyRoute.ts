import express, { NextFunction, Request, Response } from 'express';
import routeCache from 'route-cache';
import CompanyService from '../services/companyService';

// Use router to route the path methods
const router = express.Router();

// Initializes company service instance
const companyService = new CompanyService();

// GET - List route to get companies data
router.get(
    '/list',
    routeCache.cacheSeconds(20),
    async function (req: Request, res: Response, next: NextFunction) {
        // read filters from query string
        const { pageSize, index } = req.query;

        try {
            // Query string parameters validation
            if (
                typeof pageSize !== 'string' ||
                typeof index !== 'string' ||
                pageSize === 'NaN' ||
                index === 'NaN'
            ) {
                res.status(400).send('Invalid query parameters');
            } else {
                // Calls company service instance to get the data
                const data = await companyService.getCompanies(
                    parseInt(pageSize),
                    parseInt(index)
                );
                res.json(data);
            }
        } catch (error) {
            // propagate error to the error handler
            next(error);
        }
    }
);

// GET - Detail route to get company data
router.get(
    '/detail/:symbol',
    routeCache.cacheSeconds(20),
    async function (req: Request, res: Response, next: NextFunction) {
        try {
            // read filters from parameters
            const { symbol } = req.params;

            // Query string parameters validation
            if (typeof symbol !== 'string' || symbol === 'NaN') {
                res.status(400).send('Invalid query parameters');
            } else {
                // Calls company service instance to get the data
                const data = await companyService.getCompany(symbol);
                res.json(data);
            }
        } catch (error) {
            // propagate error to the error handler
            next(error);
        }
    }
);

export default router;
