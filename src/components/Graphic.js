import Chart from "react-apexcharts";
import dados from "../dados/data"
import { useState } from "react";

const Graphic = () => {
    const getData = (item) => {
        let series = [
            {
                data: item,
                name: "Net Profit",
            }
        ]
        return series
    }


    let config = {
        options: {
            stroke: {
                curve: 'smooth',
            },
            chart: {
                id: "basic-bar",
                toolbar: {
                    show: false
                },
                selection: {
                    enabled: false
                },
                zoom: {
                    enabled: false,
                    autoScaleYaxis: false,
                }
            },
            tooltip: {
                marker: {
                    show: false,
                },
            },
            colors: ['#f36090'],
            grid: {
                show: false,
                yaxis: {
                    lines: {
                        show: false
                    }
                },
            },
            subtitle: {
                text: undefined,
            },
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],

            legend: {
                show: false,
            },
            yaxis: {
                show: false,
            },
            xaxis: {
                labels: {
                    show: false,
                },
                title: {
                    text: undefined,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                tooltip: {
                    enabled: false,
                },
                crosshairs: {
                    show: false,
                }

            },
            markers: {
                colors: '#fff',
                strokeColors: '#d13647',
                strokeWidth: 3,
            }
        }
    }

    const [select, setSelect] = useState("ano");
    const setSelectValue = (valor) => {
        setSelect(valor)
    }

    return (
        <div className="graphic">
            <div className="graphic__wrapper">
                <div className="graphic__box">
                    <div className="graphic__box-text">
                        <h2 className="graphic__title">Faturamento dos<br></br> Empreendimentos</h2>
                        <select className="graphic__select" onChange={e => setSelectValue(e.target.value)}>
                            <option className="graphic__option " value="ano">ano</option>
                            {
                                dados?.graphic.map((item, index) => <option key={index} className="graphic__option " value={item.ano}>{item.ano}</option>)
                            }

                        </select>
                    </div>
                    {

                        dados?.graphic.map((item) =>
                            <>
                                {
                                    item.ano === select ?
                                        <Chart
                                            className="graphic__chart"
                                            options={config.options}
                                            series={getData(item.data)}
                                            type="line"
                                            height= "125"
                                        /> : null
                                }
                            </>
                        )
                    }
                </div>
                <div className="graphic__list-cards">
                    <ul className="graphic__list">
                        {
                            dados?.graphic.map((item) => {
                                return (
                                    <>

                                        {
                                            item.ano === select ?
                                                item.cards.map((valor) =>
                                                    <li className={`graphic__card graphic__card--${valor.color}`}>
                                                        {valor.price &&
                                                            <span className="graphic__price">{valor.price}</span>
                                                        }
                                                        {valor.number &&
                                                            <span className="graphic__number">{valor.number} </span>
                                                        }
                                                        {valor.description &&
                                                            <span className="graphic__description">{valor.description}</span>
                                                        }
                                                    </li>) : null
                                        }
                                    </>



                                )
                            }


                            )
                        }
                    </ul>
                </div>
            </div>
        </div>

    )
}
export default Graphic;