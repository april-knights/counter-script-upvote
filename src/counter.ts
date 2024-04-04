import { getCounterText } from "./elements";

export class Counter {
  public getLocation(): Location | undefined {
    const counterText = getCounterText();
    if (!counterText) {
      console.error("Could not find counter");
      return;
    }
    const counter = this.parseCounterText(counterText);
    return counter;
  }

  private parseCounterText(counterText: string): Location | undefined {
    const regex = /-?\d+/g;
    const numbers = counterText.match(regex);

    if (numbers && numbers.length >= 2) {
      const x = parseInt(numbers[0]);
      const y = parseInt(numbers[1]);
      return { x, y };
    } else {
      console.log("Couldn't find X and Y in the counter string");
    }
  }
}

export interface Location {
  x: number;
  y: number;
}
