import * as React from 'react';
import { cleanup, render, queryByTestId } from '@testing-library/react';
import Detail from '../src/components/detail';

const mockData = {
    ticker: 'ticker',
    securityName: 'securityName',
    sector: 'sector',
    country: 'country',
    trend: 'trend',
    prices: undefined,
};

jest.mock('react-router-dom', () => {
    return {
        useLoaderData: jest.fn(() => mockData),
    };
});
describe('Component Detail', () => {
    afterEach(cleanup);

    it('Should render with mock data company', () => {
        const { getByTestId, queryByTestId } = render(<Detail />);

        expect(getByTestId('detail-name').textContent).toBe(
            'ticker - securityName'
        );
        expect(getByTestId('detail-sector').textContent).toBe('Sector: sector');
        expect(getByTestId('detail-country').textContent).toBe(
            'Country: country'
        );
        expect(queryByTestId('detail-chart')).toBeNull();
    });
});
