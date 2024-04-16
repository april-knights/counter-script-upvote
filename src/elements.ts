export enum ButtonType {
  Upcount = "Upcount",
  Downcount = "Downcount",
  Rightcount = "Rightcount",
  Leftcount = "Leftcount",
}

export function getButton(button: ButtonType): HTMLButtonElement | undefined {
  return searchForButton(getCounterElement()?.shadowRoot, button);
}

function searchForButton(
  root: ShadowRoot | null | undefined,
  button: ButtonType
): HTMLButtonElement | undefined {
  if (!root) return undefined;
  const buttons = root.querySelectorAll("button");
  for (let i = 0; i < buttons.length; i++) {
    const buttonText = buttons[i].textContent?.trim();
    if (buttonText === ButtonType[button]) {
      return buttons[i] as HTMLButtonElement;
    }
  }
  return undefined;
}

export function getCounterElement(): Element | null | undefined {
  return document
    .querySelector("#t3_1bt8fw3 > div > shreddit-devvit-ui-loader")
    ?.shadowRoot?.querySelector("div > devvit-custom-post")
    ?.shadowRoot?.querySelector("div > devvit-blocks-renderer");
}

export function getCounterText(): string | undefined {
  return (
    getCounterElement()?.shadowRoot?.querySelector(
      "div > div > div > span:nth-of-type(2)"
    ) as HTMLElement | undefined
  )?.innerText;
}
