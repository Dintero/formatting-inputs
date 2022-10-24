import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BlocksRangeInput from "../components/BlocksRangeInput";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/BlocksRangeInput",
    component: BlocksRangeInput,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof BlocksRangeInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BlocksRangeInput> = (args) => (
    <BlocksRangeInput {...args} />
);

export const CreditCard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CreditCard.args = {
    options: {
        blocks: [4, 4, 4, 4],
        separators: [" ", " ", " "],
        overflow: false,
        range: /[0-9]/,
    },
    placeholder: "xxxx xxxx xxxx xxxx",
};

export const IsoDate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
IsoDate.args = {
    options: {
        blocks: [4, 2, 2],
        separators: ["-", "-"],
        overflow: false,
        range: /[0-9]/,
    },
    placeholder: "yyyy-mm-dd",
};

export const PhoneNumber = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PhoneNumber.args = {
    options: {
        blocks: [3, 2, 3],
        range: /[0-9]/,
    },
    placeholder: "957 25 545",
};

export const Uuid = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Uuid.args = {
    options: {
        separators: ["-", "-", "-", "-"],
        blocks: [8, 4, 4, 4, 12],
        range: /[a-z0-9]/,
    },
    placeholder: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    size: 38,
};

export const Aplhanumeric = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Aplhanumeric.args = {
    options: {
        range: /[a-z0-9]/,
    },
    placeholder: "abc1234",
};

export const HexColor = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HexColor.args = {
    options: {
        range: /[a-f0-9]/,
    },
    placeholder: "f1f1f1",
    size: 6,
    maxLength: 6,
};
