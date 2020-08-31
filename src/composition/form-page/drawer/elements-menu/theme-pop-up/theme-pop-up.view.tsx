import React from "react";

import FormPreviewOne from "static/form-previews/3ead4b932b47c63ed49588b37587bd9a.svg";
import FormPreviewTwo from "static/form-previews/49a406b43f070ca5ce59d6d235a8bf9e.svg";
import FormPreviewThree from "static/form-previews/68762bb7a84db417b7163333a8f22688.svg";

import { ThemeContainer, ThemeCard, Title } from "app/components/preview-grid/pop-up.styles";

const ThemePopUp: React.FC<Record<string, unknown>> = () => {
    return (
        <ThemeContainer>
            <ThemeCard>
                <FormPreviewOne width="120px" height="120px" />
                <Title>
                    This form has <b>3 steps</b>
                </Title>
            </ThemeCard>
            <ThemeCard>
                <FormPreviewTwo width="120px" height="120px" />
                <Title>
                    This form has <b>2 steps</b>
                </Title>
            </ThemeCard>
            <ThemeCard>
                <FormPreviewThree width="120px" height="120px" />
                <Title>
                    This form has <b>2 steps</b>
                </Title>
            </ThemeCard>
        </ThemeContainer>
    );
};

export default ThemePopUp;
