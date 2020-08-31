import React from "react";

import FormPreviewOne from "static/form-previews/73b5ca8ae9e82f9b21ea1de07ccea6c9.svg";
import FormPreviewTwo from "static/form-previews/a706bc0e24b207bcc3295e098a576e23.svg";
import FormPreviewThree from "static/form-previews/af4ee26b3bac515475498a1c32b88d79.svg";

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
