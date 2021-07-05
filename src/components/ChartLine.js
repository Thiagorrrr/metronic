import Chart from "react-apexcharts";
import dados from "../dados/data"
import { useState } from "react";

const ChartLine = () => {
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
            chart: {
                toolbar: {
                    tools: {
                        download: true,
                        selection: false,
                        zoom: false,
                        zoomin: false,
                        zoomout: false,
                        pan: false,
                        reset: false
                    },
                },
            },
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
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
                                dados?.chartLine.map((item, index) => <option key={index} className="basic__option " value={item.ano}>{item.ano}</option>)
                            }

                        </select>
                    </div>
                    {

                        dados?.chartLine.map((item) =>
                            <>
                                {
                                    item.ano === select ?
                                        <Chart
                                            className="basic__chart"
                                            options={config.options}
                                            series={getData(item.data)}
                                            type="line"
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
export default ChartLine;