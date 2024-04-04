export enum ButtonType {
  Upcount = "Upcount",
  Downcount = "Downcount",
  Rightcount = "Rightcount",
  Leftcount = "Leftcount",
}

export function getButton(button: ButtonType): HTMLButtonElement | undefined {
  switch (button) {
    case ButtonType.Upcount:
      return getCounterElement()?.shadowRoot?.querySelector(
        "div > div > div > button:nth-child(2)"
      ) as HTMLButtonElement | undefined;
    case ButtonType.Downcount:
      return getCounterElement()?.shadowRoot?.querySelector(
        "div > div > div > button:nth-child(4)"
      ) as HTMLButtonElement | undefined;
    case ButtonType.Leftcount:
      return getCounterElement()?.shadowRoot?.querySelector(
        "div > div > div > div > button:nth-child(1)"
      ) as HTMLButtonElement | undefined;
    case ButtonType.Rightcount:
      return getCounterElement()?.shadowRoot?.querySelector(
        "div > div > div > div > button:nth-child(3)"
      ) as HTMLButtonElement | undefined;
    default:
      return undefined;
  }
}

export function getCounterElement(): Element | null | undefined {
  return document
    .querySelector("#t3_1bt8fw3 > div > shreddit-devvit-ui-loader")
    ?.shadowRoot?.querySelector("div > devvit-custom-post")
    ?.shadowRoot?.querySelector("div > devvit-blocks-renderer");
}

export function getCounterText(): string | undefined {
  return (
    getCounterElement()?.shadowRoot?.querySelector("div > div > div > span") as
      | HTMLElement
      | undefined
  )?.innerText;
}
