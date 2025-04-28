import "./AboutSection.css";

function AboutSection() {
    return (
        <article className="container-sm page" style={{ maxWidth: "35em" }}>
            <section className="mt-2">
                <h2 className="">About</h2>
                <p>This is the about section</p>
            </section>

            <section className="mt-2">
                <h2>Features</h2>
                <div
                    className="d-grid gap-3"
                    style={{ gridTemplateColumns: "1fr 1fr" }}
                >
                    <div className="card mb-3">
                        <div className="card-body">
                            <h3>Task Component</h3>
                            <p>ds</p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-body"></div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body"></div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body"></div>
                    </div>
                </div>
            </section>

            <section className="mt-2">
                <h2>Credits</h2>
                <ul>
                    <li>Icons from icon provider</li>
                    <li>Images from pexels </li>
                    <li>
                        fsdfsfdsds
                        <a href="https://unsplash.com/@im_benmoses">Benmoses</a>
                    </li>
                </ul>
            </section>
        </article>
    );
}

export default AboutSection;
