import React from "react";

import FormIcon from "static/icons/main/Form.svg";
import ThemeIcon from "static/icons/main/Theme.svg";
import TextIcon from "static/icons/main/Text_New.svg";
import PhoneIcon from "static/icons/main/Phone_Field.svg";
import EmailIcon from "static/icons/main/Email_Field.svg";
import NameIcon from "static/icons/main/Name_Field.svg";
import ButtonIcon from "static/icons/main/Button_Field.svg";
import CheckboxIcon from "static/icons/main/Checkbox.svg";
import CloseIcon from "static/icons/main/Close_Button.svg";
import ComplianceIcon from "static/icons/main/Compliance.svg";

import { ElementsList, PopUpContainer } from "./elements-menu.styles";
import Item from "./item";
import ThemePopUp from "./theme-pop-up";
import FormPopUp from "./form-pop-up";

const ElementsMenu: React.FC<Record<string, unknown>> = () => {
    const [activeElement, setActiveElement] = React.useState<string>();

    const isActiveItem = (id: string) => id === activeElement;

    return (
        <ElementsList>
            <Item
                isActive={isActiveItem("theme")}
                onClick={() => setActiveElement("theme")}
                icon={<ThemeIcon viewBox="0 0 26 26" />}
                popUp={
                    <PopUpContainer>
                        <ThemePopUp />
                    </PopUpContainer>
                }
            >
                Theme
            </Item>
            <Item
                isActive={isActiveItem("form")}
                onClick={() => setActiveElement("form")}
                icon={<FormIcon viewBox="0 0 26 28" />}
                popUp={
                    <PopUpContainer>
                        <FormPopUp />
                    </PopUpContainer>
                }
            >
                Form
            </Item>
            <Item
                isActive={isActiveItem("text")}
                onClick={() => setActiveElement("text")}
                icon={<TextIcon />}
            >
                Text
            </Item>
            <Item
                isActive={isActiveItem("phone")}
                onClick={() => setActiveElement("phone")}
                icon={<PhoneIcon viewBox="0 0 28 28" />}
            >
                Phone Field
            </Item>
            <Item
                isActive={isActiveItem("email")}
                onClick={() => setActiveElement("email")}
                icon={<EmailIcon viewBox="0 0 27 19" />}
            >
                Email Field
            </Item>
            <Item
                isActive={isActiveItem("name")}
                onClick={() => setActiveElement("name")}
                icon={<NameIcon viewBox="0 0 26 22" />}
            >
                Name Field
            </Item>
            <Item
                isActive={isActiveItem("button")}
                onClick={() => setActiveElement("button")}
                icon={<ButtonIcon viewBox="0 0 26 23" />}
            >
                Button Field
            </Item>
            <Item
                isActive={isActiveItem("checkbox")}
                onClick={() => setActiveElement("checkbox")}
                icon={<CheckboxIcon />}
            >
                Checkbox
            </Item>
            <Item isActive={isActiveItem("close")} onClick={() => setActiveElement("close")} icon={<CloseIcon />}>
                Close Button
            </Item>
            <Item
                isActive={isActiveItem("compliance")}
                onClick={() => setActiveElement("compliance")}
                icon={<ComplianceIcon />}
            >
                Close Button
            </Item>
        </ElementsList>
    );
};

export default ElementsMenu;
