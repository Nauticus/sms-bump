import React from "react";

import Divider from "app/components/divider";
import TrashIcon from "static/icons/top-menu/Trash-Icon.svg";
import UndoIcon from "static/icons/top-menu/Undo-Icon.svg";
import RedoIcon from "static/icons/top-menu/Redo-Icon.svg";

import {
    NavigationContainer,
    ArtefactMenu,
    Artefact,
    Flow,
    ToolBar,
    BlueButton,
    OutlinedButton,
    DeleteLink,
    ActionLink,
} from "./navigation.styles";

const Navigation: React.FC<Record<string, unknown>> = () => (
    <NavigationContainer>
        <ArtefactMenu>
            <Artefact className="active">1.Design</Artefact>
            <Artefact>2.Behavior</Artefact>
            <Divider />
        </ArtefactMenu>
        <Flow>
            <BlueButton>Form 1</BlueButton>
            <OutlinedButton>Success</OutlinedButton>
        </Flow>
        <ToolBar>
            <ActionLink href="#">
                <UndoIcon />
                Undo
            </ActionLink>
            <ActionLink href="#">
                <RedoIcon />
                Redo
            </ActionLink>
            <Divider />
            <DeleteLink href="#">
                <TrashIcon viewBox="0 1 20 19" />
                Delete Element
            </DeleteLink>
        </ToolBar>
    </NavigationContainer>
);

export default Navigation;
