import * as React from "react";

// tslint:disable-next-line:no-implicit-dependencies
import { storiesOf } from "@storybook/react";
// tslint:disable-next-line:no-implicit-dependencies
import { action } from "@storybook/addon-actions";
// tslint:disable-next-line:no-implicit-dependencies
import { linkTo } from "@storybook/addon-links";
// tslint:disable-next-line
import { Welcome } from "@storybook/react/demo";

import { <%= uCamelCName %> } from "./<%= uCamelCName %>";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("<%= uCamelCName %>")} />
));

storiesOf("<%= uCamelCName %>", module)
  .add("with text", () => (
    <<%= uCamelCName %> onClick={action("clicked")}>Hello <%= uCamelCName %></<%= uCamelCName %>>
  ))
  .add("with some emoji", () => (
    <<%= uCamelCName %> onClick={action("clicked")}>😀 😎 👍 💯</<%= uCamelCName %>>
  ));