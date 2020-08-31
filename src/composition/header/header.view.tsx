import React from "react";

import Divider from "app/components/divider";
import Logo from "static/SMSBump-Logo.svg";
import PenIcon from "static/icons/top-menu/Pen-icon.svg";
import ExitIcon from "static/icons/top-menu/Exit-icon.svg";

import { HeaderContainer, Form, FormLink, VersionsDropdown, ExitLink } from "./header.styles";

const Header: React.FC<Record<string, unknown>> = () => (
    <HeaderContainer>
        <Logo className="sms-bump-logo" />
        <Divider />
        <Form>
            <FormLink href="#">
                <PenIcon viewBox="2 0 16 16" />
                <span>Form 1</span>
            </FormLink>
            <VersionsDropdown>Draft</VersionsDropdown>
        </Form>
        <Divider />
        <ExitLink href="#">
            <ExitIcon viewBox="0 1 16 21" />
            <span>Exit</span>
        </ExitLink>
    </HeaderContainer>
);

export default Header;
