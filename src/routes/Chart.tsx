import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchCoinHistory } from '../api';
import ApexChart from 'react-apexcharts';
interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Chart() {
  const { coinId } = useParams();
  const { isLoading, data } = useQuery<IHistorical[]>(['ohlcv', coinId], () =>
    fetchCoinHistory(coinId)
  );
  return (
    <div>
      {isLoading ? (
        'Loading chart...'
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: 'Price',
              data: data?.map((price) => price.close)
            }
          ]}
          options={{
            theme: {
              mode: 'dark'
            },
            chart: {
              toolbar: {
                show: false
              },
              animations: {
                enabled: false
              },
              background: 'transparent'
            },
            fill: {
              type: 'gradient',
              gradient: {
                gradientToColors: ['#f4382b'],
                stops: [0, 100]
              }
            },
            grid: { show: false },
            stroke: {
              curve: 'smooth',
              width: 4
            },

            yaxis: {
              show: false
            },
            xaxis: {
              categories: data?.map((price) => {
                const date = price.time_close.split('T')[0].split('-');
                const formatDate = (date: string) =>
                  date.length > 1 ? date.replace(/(^0+)/, '') : date;
                return `${formatDate(date[1])}/${formatDate(date[2])}`;
              }),
              tickPlacement: 'between',
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: {
                show: true,
                hideOverlappingLabels: true,
                style: {
                  fontSize: '14px'
                }
              }
            },
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(2)}`
              }
            }
          }}
        />
      )}
    </div>
  );
}

export default Chart;
