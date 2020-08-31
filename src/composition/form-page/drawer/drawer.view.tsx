import React from "react";

import DesktopIcon from "static/icons/preview/Desktop.svg";
import PadIcon from "static/icons/preview/Pad.svg";
import PhoneIcon from "static/icons/preview/Phone.svg";

import ElementsMenu from "./elements-menu";
import { DrawerContainer, Devices } from "./drawer.styles";

const Drawer: React.FC<Record<string, unknown>> = () => {
    return (
        <DrawerContainer>
            <Devices>
                <DesktopIcon width="19px" className="active" />
                <PadIcon width="13px" />
                <PhoneIcon width="9px" />
            </Devices>
            <ElementsMenu />
            <div className="second-menu-portal"></div>
        </DrawerContainer>
    );
};

export default Drawer;
