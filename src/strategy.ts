import { Counter, Location } from "./counter";
import { ButtonType } from "./elements";

export class Strategy {
  target: ButtonType = ButtonType.Upcount;

  constructor(private counter: Counter) {
    console.log("Using strategy: Up strategy");
  }

  public getTarget(): ButtonType {
    const location = this.counter.getLocation();
    // console.log("Current counter value:", location);
    return this.upStrategy(location);
  }

  upStrategy(_location: Location | undefined): ButtonType {
    return ButtonType.Upcount;
  }
}
