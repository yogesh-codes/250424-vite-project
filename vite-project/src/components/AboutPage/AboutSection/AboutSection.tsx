import "./AboutSection.css";

function AboutSection() {
    return (
        <article
            className="about-section container-sm page"
            style={{ maxWidth: "35em" }}
        >
            <section className="mt-2">
                <h2 className="">About</h2>
                <p>This is the about section</p>
            </section>

            <section className="mt-2">
                <h2>Features</h2>
                <div
                    className="d-grid gap-3"
                    style={{ gridTemplateColumns: "repeat(3,1fr)" }}
                >
                    <div className="card mb-3">
                        <div className="card-body">
                            <h3>Task CRUD</h3>
                            <ul>
                                <li>Create new Task</li>
                                <li>View a task </li>
                                <li>Delete a task</li>
                                <li>Sort tasks</li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-body">
                            <h3>Tasks Sorting</h3>
                            <ul>
                                <li>Sort By due date</li>
                                <li>Sort By Alphabetical</li>
                                <li>Sort By Project</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-body">
                            <h3>Tasks Grouping</h3>
                            <ul>
                                <li>Group By due date</li>
                                <li>Group By Project</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <h3>User Authentication</h3>
                            <ul>
                                <li>Login (with Email Password)</li>
                                <li>Sign up</li>
                                <li>With Google Account</li>
                            </ul>
                        </div>
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
