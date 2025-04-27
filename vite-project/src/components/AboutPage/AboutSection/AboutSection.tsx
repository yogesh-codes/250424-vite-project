import "./AboutSection.css";

function AboutSection() {
    return (
        <div
            className="container-sm d-flex flex-column justify-content-center page"
            style={{ maxWidth: "35em" }}
        >
            <h2>About</h2>
            <p>This is the about section</p>

            <h2>Features</h2>
            <h3>User Authentication</h3>
            <ul>
                <li>Authentication System</li>
                <li>The app uses supabase for storing users and tasks</li>

                <li>So that each user only gets their own tasks</li>
                <li>a logged in user cannot access certain eg: /login</li>
                <li>
                    A logged out user will be redirected to the login page to
                    see their todos
                </li>
            </ul>
            <h3>Tasks</h3>
            <p>The user has the following </p>
            <ul>
                <li>
                    <span className="fx">Insert</span> new tasks
                </li>
                <li>
                    <span className="fx">Update</span> existing tasks
                </li>
                <li>
                    <span className="fx">View/ Read </span>
                    <span />
                    their tasks
                </li>
                <li>
                    <span className="fx">delete</span> their tasks
                </li>
                <li>
                    <span className="fx">Search</span> for a task (fuzzy search)
                </li>
                <li>todo-Sort through their tasks</li>
                <li>todo-Filter Tasks by date</li>
                <li>
                    Each task has 4 editable props-
                    title,description,isCompleted, and dueOn
                </li>
                <li>
                    Unmutable props are createdOn,modifiedOn, ID, completedOn
                </li>
                <li>todo-- add due datetime stamps</li>
                <li>todo-- view their tasks by calendar</li>
                <li>todo-Export their data</li>
            </ul>

            <h3>Profile</h3>
            <ul>
                <li>Users can sign up, sign in and sign out</li>
                <li>Signing in and out- usage of cookies and local Storage </li>
            </ul>

            <h2>Credits</h2>
            <ul>
                <li>Icons from icon provider</li>
                <li>Images from pexels </li>
                <li>
                    fsdfsfdsds
                    <a href="https://unsplash.com/@im_benmoses">Benmoses</a>
                </li>
            </ul>
        </div>
    );
}

export default AboutSection;
