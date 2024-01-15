import { PreloadImages } from "../../components/loading"
import { projects } from "../../data/dataSet"
import "../css/works.scss"
import Project from "../../components/project"
import { removeMenu } from "../../components/appBar"


function Works(props) {
    return (
        <PreloadImages >
            {/* <!DOCTYPE html> */}
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Document</title>
                </head>
                <body>
                    <div id="works-page" onClick={removeMenu} onLoad={removeMenu}>
                        <section className="accroche">
                            <p className="title">Mes réalisations</p>
                            <p className="message">Consultez mes projets les plus récents ci-dessous pour avoir une idée de mon expérience.</p>
                        </section>
                        <section className="works">
                            <Project projects={projects} lenght={projects.length}></Project>
                        </section>
                    </div>
                </body>
            </html>
        </PreloadImages>
    )
}

export default Works