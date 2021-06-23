import dados from "../dados/data";
import Card from "../components/Card"
import Authors from "./Authors";
const Section = () => {
    console.log(dados);
    return (
        <section className="section">
            <div className="section__wrapper">
                {
                    dados.card.map((item) => {
                        return (
                            <Card
                                icon={item.icon}
                                title={item.title}
                                subtitle={item.subtitle}
                                number={item.number}
                                color={item.color}
                            />
                        )
                    })
                }
            </div>
            <div className="section__wrapper"> 
                <Authors
                    dados={dados.authors1}
                />
                <Authors
                    dados={dados.authors1}
                />
            </div>

        </section>
    )
}
export default Section;
