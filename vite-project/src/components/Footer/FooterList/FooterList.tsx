import { JSX } from "react";

type FooterListProps = {
    listTitle: string;
    listElements: Array<string>;
};

function FooterList({ listTitle, listElements }: FooterListProps) {
    let arrayComponents: Array<JSX.Element> = [];

    for (let i = 0; i < listElements.length; i++) {
        let currentItem = listElements[i];
        arrayComponents.push(<li key={i}>{currentItem}</li>);
    }

    return (
        <div>
            <h3>{listTitle}</h3>
            <ul style={{ listStyle: "none" }}>{arrayComponents}</ul>
        </div>
    );
}

export default FooterList;
