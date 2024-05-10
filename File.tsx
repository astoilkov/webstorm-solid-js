import { createEffect, type JSXElement } from "solid-js";

export default function File(): JSXElement {
  createEffect(() => {
    console.log("effect")
  })
  return <div class="asdf"></div>
}
