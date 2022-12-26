//libs
import React from "react";

//src
import { TPButton } from "./TPButton";

export default {
  title: "Components/TPButton",
  component: TPButton,
};

const Template = (args) => <TPButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "FAE Button",
  primary: true,
};
