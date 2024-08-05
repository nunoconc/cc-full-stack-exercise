import { Client } from 'pg';
import { Company } from '../types/company';
import data from '../data/data.json';

export default class PostGres {
    init() {
        const connection = new Client({
            user: 'postgres',
            host: 'localhost',
            database: 'security-db',
            password: 'postgres',
            port: 5432,
        })

        connection.connect(function (err: Error) {
            if (err) {
                throw err;
            }

            console.log("Connected to database!");


            const companies = data as Company[]


            console.log("Read from file all companies!")

            connection.query(
                'DROP TABLE IF EXISTS company;' + ' CREATE TABLE company (id serial, ticker varchar(50), securityName varchar(50), sector varchar(50), country varchar(50), trend numeric, prices jsonb);',
                (err) => {
                    if (err) {
                        throw err
                    }

                    console.log('Created table company')
                    console.log('Filling it with company')


                    const queryString = `INSERT INTO company (ticker, securityName, sector, country, trend, prices) VALUES` +
                        companies.map((company: Company) => ` ('${company.ticker}', '${company.securityName}', '${company.sector}', '${company.country}', '${company.trend}', '${JSON.stringify(company.prices)}')`).join(',');

                    connection.query(queryString,
                        (err, result) => {
                            if (err) {
                                throw err
                            }

                            console.log(`Inserted ${result.rowCount} companies`)
                            connection.end()
                        }
                    )
                }
            );
        });
    }
}