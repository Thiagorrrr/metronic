import Chart from "react-apexcharts";
import dados from "../dados/data"
import { useState } from "react";

const Ind = () => {
    const getData = () => dados.ind.map((item, index) => `${index + 1}-step`)

    let config = {

        options: {
            chart: {
                type: 'donut'
            },
            labels: getData(),
            legend: {
                show: false,
            },
            plotOptions: {
                pie: {
                    expandOnClick: true,
                    customScale: 1,
                    donut: {
                        size: '25%',
                    }   
                }
            }
        }
    }

    const [select, setSelect] = useState(dados.ind[0].ano);
    const setSelectValue = (valor) => {
        setSelect(valor)
    }

    return (
        <div className="ind">
            <div className="ind__wrapper">
                <div className="ind__box">
                    <div className="ind__box-text">
                        <h2 className="ind__title">Indicadores<br></br> Consolidados</h2>
                        <select className="ind__select" onChange={e => setSelectValue(e.target.value)}>
                            {
                                dados?.ind.map((item, index) => <option key={index} className="ind__option " value={item.ano}>{item.ano}</option>)
                            }

                        </select>
                    </div>
                </div>
                <div className="ind__box-graphic">
                    {

                        dados?.ind.map((item) =>
                            <>
                                {
                                    item.ano === select ?
                                        <Chart className="ind__chart" options={config.options} series={item.data} type="donut" /> : null
                                }
                            </>
                        )
                    }
                </div>
            </div>
        </div>

    )
}
export default Ind;