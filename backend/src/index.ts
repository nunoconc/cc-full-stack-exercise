import createError from 'http-errors';
import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import companyRoute from './routes/companyRoute';

// set .env variables
dotenv.config();

const app = express();

// allow json parser
app.use(express.json());

// allow dev logging
app.use(morgan('dev'));

// allow cross origin for the frontend origin
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', process.env.ALLOWED_CORS);
    res.header(
        'Access-Control-Allow-Headers',
        'Content-Type, Pragma, Access-Control-Allow-Origin, Cache-Control, Expires'
    );
    next();
});

// route company path
app.use('/company', companyRoute);

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
    next(createError(404));
});

// error handler
app.use(function (
    err: { message: string; status: number },
    req: Request,
    res: Response
) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // set error status code
    res.status(err.status || 500);
});

// starts in the configured PORT
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port:${process.env.PORT}`);
});
