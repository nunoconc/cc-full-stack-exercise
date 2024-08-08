import Highcharts from 'highcharts';
import { Company, PriceEnum } from '../../types/company';

interface IDataMap {
    close: number[];
    volume: number[];
    date: string[];
}

/**
 * High charts options builder helper function
 *
 * @export
 * @param {Company} company
 * @returns {Highcharts.Options}
 */
export function buildOptions(company: Company): Highcharts.Options {
    // Maps data according to each Price property to seed chart
    const dataMap: IDataMap = company.prices
        // sort by date crescent
        .sort((a, b) => {
            return Date.parse(a.date) - Date.parse(b.date);
        })
        // reduce into each property array
        .reduce(
            (acc, curr) => {
                acc.close.push(parseInt(curr.close));
                acc.volume.push(parseInt(curr.volume));
                acc.date.push(curr.date);

                return acc;
            },
            {
                close: [],
                volume: [],
                date: [],
            } as IDataMap
        );

    return {
        chart: {
            type: 'line',
        },
        title: {
            text: 'Price Chart',
        },
        // x(dates) type and labels config
        xAxis: {
            type: 'category',
            categories: dataMap.date,
            labels: {
                // parses date into format
                formatter: function () {
                    return Highcharts.dateFormat(
                        "%b'%y",
                        Date.parse(this.value as string)
                    );
                },
            },
            // shows only unique names (dates)
            uniqueNames: true,
        },
        // y(series close and volume) names and id's config
        yAxis: [
            {
                id: PriceEnum.CLOSE,
                title: {
                    text: PriceEnum.CLOSE,
                },
            },
            {
                id: PriceEnum.VOLUME,
                opposite: true,
                title: {
                    text: PriceEnum.VOLUME,
                },
            },
        ],
        // series(close and volume) to be shown in yAxis
        series: [
            {
                name: PriceEnum.CLOSE,
                yAxis: PriceEnum.CLOSE,
                type: 'line',
                data: dataMap.close,
                showInLegend: false,
            },
            {
                name: PriceEnum.VOLUME,
                yAxis: PriceEnum.VOLUME,
                type: 'line',
                data: dataMap.volume,
                showInLegend: false,
            },
        ],
    };
}
