import Chart from "react-apexcharts";

const Graphic = () => {
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
        },
        series: [
            {
                data: [30, 45, 32, 70, 40, 40, 40, 40],
                name: "Net Profit",
            }
        ],

    };
    return (
        <div className="graphic">
            <div className="graphic__wrapper">
                <div className="graphic__box">
                    <div className="graphic__box-text">
                        <h2 className="graphic__title">Faturamento dos<br></br> Empreendimentos</h2>
                        <select className="graphic__select">
                            <option className="graphic__option " value="2020">2020</option>
                        </select>
                    </div>
                    <Chart
                        className="graphic__chart"
                        options={config.options}
                        series={config.series}
                        type="line"
                        width="500"
                        height="150"
                    />
                </div>
                <div className="graphic__list-cards">
                    <ul className="graphic__list">
                        <li className="graphic__card graphic__card--red">
                            <span className="graphic__price">$ 1231,00 </span>
                            <span className="graphic__description">total de impostos</span>
                        </li>
                        <li className="graphic__card graphic__card--green">
                            <span className="graphic__price">$ 1231,00 </span>
                            <span className="graphic__description">total de impostos</span>
                        </li>
                        <li className="graphic__card graphic__card--yellow">
                            <span className="graphic__number">34 </span>
                            <span className="graphic__description">total de impostos</span>
                        </li>
                        <li className="graphic__card graphic__card--blue">
                            <span className="graphic__number">34 </span>
                            <span className="graphic__description">total de impostos</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
export default Graphic;