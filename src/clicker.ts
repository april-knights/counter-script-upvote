import { CLICK_RATE } from "./constants";
import { getButton } from "./elements";
import { Strategy } from "./strategy";

export class Clicker {
  constructor(private strategy: Strategy) {}

  public start(): void {
    setInterval(() => {
      const target = this.strategy.getTarget();
      console.log(`Pressing ${target} button`);
      const button = getButton(target);
      if (!button) {
        console.warn(`Button ${target} not found`);
      } else {
        button.click();
      }
    }, CLICK_RATE);
  }
}
