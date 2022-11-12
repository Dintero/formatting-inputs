import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import NumberInput from "../components/NumberInput";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/NumberInput",
    component: NumberInput,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof NumberInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NumberInput> = (args) => (
    <NumberInput {...args} />
);

export const DefaultWithDecimals = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultWithDecimals.args = {
    options: {
        decimals: 2,
    },
    placeholder: "0.00",
};

export const Norwegian = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Norwegian.args = {
    options: {
        decimals: 2,
        delimiter: ",",
        separator: ".",
    },
    placeholder: "1.000,00",
};

export const SwedishDanishFinish = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SwedishDanishFinish.args = {
    options: {
        decimals: 2,
        delimiter: ",",
        separator: " ",
    },
    placeholder: "1 000,00",
};

export const English = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
English.args = {
    options: {
        decimals: 2,
        delimiter: ".",
        separator: ",",
    },
    placeholder: "1,000.00",
};

export const NoDecimals = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoDecimals.args = {
    options: {},
    placeholder: "0",
};
