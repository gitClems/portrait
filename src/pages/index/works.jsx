import { PreloadImages } from "../../components/loading"
import { imgUrl, projects } from "../../data/dataSet"
import "../css/works.scss"
import Project from "../../components/project"
import ScrollToTop from "../../components/scrollTop"


function Works(props) {
    return (
        <PreloadImages imageUrls={imgUrl}>
            <div className="works-page">
                <section className="accroche">
                    <p className="title">Mes réalisations</p>
                    <p className="message">Consultez mes projets les plus récents ci-dessous pour avoir une idée de mon expérience.</p>
                </section>
                <section className="works">
                    <Project projects = {projects} lenght = {projects.length}></Project>
                </section>
                <ScrollToTop></ScrollToTop>
            </div>
        </PreloadImages>
    )
}

export default Works