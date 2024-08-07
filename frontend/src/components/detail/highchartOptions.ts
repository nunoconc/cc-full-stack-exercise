import Highcharts from 'highcharts';
import { Company, PriceEnum } from '../../types/company';

interface IDataMap {
    close: number[];
    volume: number[];
    date: string[];
}

export function buildOptions(company: Company): Highcharts.Options {
    const dataMap: IDataMap = company.prices
        .sort((a, b) => {
            return Date.parse(a.date) - Date.parse(b.date);
        })
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
        xAxis: {
            type: 'category',
            categories: dataMap.date,
            labels: {
                formatter: function () {
                    return Highcharts.dateFormat(
                        "%b'%y",
                        Date.parse(this.value as string)
                    );
                },
            },
            uniqueNames: true,
        },
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
