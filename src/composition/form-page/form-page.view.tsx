import React from "react";

import PreviewImage from "static/form-previews/d-1.svg";

import Navigation from "./navigation";
import Drawer from "./drawer";
import { FormEditor, Viewport, Preview } from "./form-page.styles";

const FormPage: React.FC<Record<string, unknown>> = () => (
    <FormEditor>
        <Navigation />
        <Viewport>
            <Drawer />
            <Preview>
                <PreviewImage width="444px" height="444px" />
            </Preview>
        </Viewport>
    </FormEditor>
);

export { FormPage as default };
