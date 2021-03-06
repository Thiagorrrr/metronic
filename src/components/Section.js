import dados from "../dados/data";
import Card from "../components/Card"
import Authors from "./Authors";
import Activity from "./Activity";
import ChartLine from "./ChartLine"
import CollumnChart from "./CollumnChart"
import Footer from "./Footer";
const Section = () => {
    return (
        <section className="section">
            <div className="section__wrapper section__wrapper--card">
                {
                    dados.card.map((item, index) => {
                        return (
                            <Card
                                index={index}
                                icon={item.icon}
                                title={item.title}
                                subtitle={item.subtitle}
                                number={item.number}
                                image={item.image}
                                alt={item.alt}
                                color={item.color}
                            />
                        )
                    })
                }
            </div>
            <div className="section__wrapper">
                <Authors
                    title="Empreendimentos"
                    dados={dados.authors1}
                />
                <Authors
                    title="Empreendedores"
                    dados={dados.authors2}
                />
                <Activity
                    dados={dados.activity}
                />
            </div>
            <div className="section__wrapper section__wrapper--collumn">
                <ChartLine/>
                <CollumnChart/>
            </div>

            <Footer/>

        </section>
    )
}
export default Section;
