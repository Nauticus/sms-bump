import React from "react";
import ReactDOM from "react-dom";
import cx from "classnames";

import { ElementContainer } from "./item.styles";
import ItemProps from "./item.types";

//TODO: Over-engineered - figure out a different layout
const PopUpPortal: React.FC<Record<string, unknown>> = ({ children }) => {
    const [node, setNode] = React.useState<Element | null>();

    React.useLayoutEffect(() => {
        setNode(document.querySelector(".second-menu-portal"));
    }, []);

    return node ? ReactDOM.createPortal(children, node) : null;
};

const Item: React.FC<ItemProps> = ({ children, onClick, icon: Icon, popUp: PopUp, isActive }) => {
    return (
        <ElementContainer onClick={onClick} className={cx({ active: isActive })}>
            {Icon}
            {children}
            {isActive ? <PopUpPortal>{PopUp}</PopUpPortal> : null}
        </ElementContainer>
    );
};

export default Item;
