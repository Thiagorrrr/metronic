import Chart from "react-apexcharts";
import dados from "../dados/data"
import { useState } from "react";

const CollumnChart = () => {
    const getData = (item) => {
        let series = [
            item.map((valor)=> valor )
        ]
        console.log(series[0]);
        return series
    }
    

    let config = {
        options: {
            plotOptions: {
                bar: {
                    horizontal: false,
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            },
            yaxis: {
                title: {
                    text: '$ (mil)'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " mil"
                    }
                }
            }
        }
    }

    const [select, setSelect] = useState(dados.graphic[0].ano);
    const setSelectValue = (valor) => {
        setSelect(valor)
    }

    return (
        <div className="basic">
            <div className="basic__wrapper">
                <div className="basic__box">
                    <div className="basic__box-text">
                        <h2 className="basic__title">Faturamento dos<br></br> Empreendimentos</h2>
                        <select className="basic__select" onChange={e => setSelectValue(e.target.value)}>
                            {
                                dados?.collumnChart.map((item, index) => <option key={index} className="basic__option " value={item.ano}>{item.ano}</option>)
                            }

                        </select>
                    </div>
                    {

                        dados?.collumnChart.map((item) =>
                            <>
                                {
                                    item.ano === select ?
                                        <Chart
                                            className="basic__chart"
                                            options={config.options}
                                            series={getData(item.data)[0]}
                                            type="bar"
                                        /> : null
                                }
                            </>
                        )
                    }
                </div>
            </div>
        </div>

    )
}
export default CollumnChart;