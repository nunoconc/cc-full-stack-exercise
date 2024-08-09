import CompanyService from '../src/services/companyService';

const mockFindCompanies = jest.fn();
const mockFindCompany = jest.fn();
jest.mock(
    '../src/database/postgresDatabase',
    () =>
        class {
            findCompanies = mockFindCompanies;
            findCompany = mockFindCompany;
        }
);

describe('Service Module', () => {
    describe('Company Service', () => {
        test('Get Companies should fetch the page size 10 and index 0', async () => {
            const companyService = new CompanyService();

            await companyService.getCompanies(10, 0);

            expect(mockFindCompanies).toHaveBeenCalledTimes(1);
            expect(mockFindCompanies).toHaveBeenCalledWith(10, 0);
        });

        test('Get Companies should fetch the page size 10 and index 1', async () => {
            const companyService = new CompanyService();

            await companyService.getCompanies(10, 1);

            expect(mockFindCompanies).toHaveBeenCalledTimes(2);
            expect(mockFindCompanies).toHaveBeenCalledWith(10, 10);
        });

        test('Get Company should fetch symbol 123', async () => {
            const companyService = new CompanyService();

            await companyService.getCompany('123');

            expect(mockFindCompany).toHaveBeenCalledTimes(1);
            expect(mockFindCompany).toHaveBeenCalledWith('123');
        });
    });
});
