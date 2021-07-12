import { useEffect, useState } from 'react'
import styles from './Chart.module.css'
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2'


const Chart = ({ data, country }) => {
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        fetchDailyApi()
    }, [])

    const fetchDailyApi = async () => {
        const dailyDatas = await fetchDailyData()
        setDailyData(dailyDatas)
    }


    const lineChart = (
        dailyData.length > 0 ? (
            <Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [
                        {
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'Infected',
                            borderColor: '#3333ff',
                            backgroundColor: 'lightgrey',
                            fill: true,
                        },
                        {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'Deaths',
                            borderColor: 'red',
                            backgroundColor: 'lightgrey',
                            fill: true,
                        }
                    ]
                }}
            />
        ) : null
    );

    const barChart = (
        data.confirmed ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            data: [data.confirmed.value, data.recovered.value, data.deaths.value],
                            backgroundColor: [
                                'blue',
                                'green',
                                'red'
                            ],
                        }
                    ]
                }}
                options={{
                    legend: {display: false},
                    title: {display: true, text: `Current state in ${country}`}
                }}
            />
        ) : null
    );
    return (
        <div className={styles.container}>
            {country ? barChart: lineChart}
        </div>
    )
}

export default Chart
