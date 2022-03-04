import '../js/scripts';
function Portfolio()
{
    return(
        <main>
            <section id="content-page">
                <header>
                    <h1>Portfolio</h1>
                </header>
                <p>Refresh page to see projects</p>
                <div id="changeMe" className="projects">
                    <div className="content">
                        <p className="project-load"></p>
                        <h2><a className="first-project-name"></a></h2>
                        <p className="first-project-desc"></p>
                    </div>
                    <div className="content">
                        <p className="project-load"></p>
                        <h2><a className="second-project-name"></a></h2>
                        <p className="second-project-desc"></p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Portfolio;