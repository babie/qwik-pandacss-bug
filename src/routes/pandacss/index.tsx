import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { stack } from "~/styled-system/patterns";

const headerStyles = css(
  {},
  stack.raw({
    w: "100%",
    h: "4rem",
    bg: "red.900",
  })
);

export default component$(() => {
  return (
    <div
      class={css({
        padding: 10,
        bg: "red.400",
        height: "dvh",
        margin: 100,
        fontSize: 30,
      })}
    >
      <header class={headerStyles}>This is header.</header>
      This box is styled with PandaCSS.
    </div>
  );
});
