import { Counter, Location } from "./counter";
import { ButtonType } from "./elements";

export class Strategy {
  target: ButtonType = ButtonType.Upcount;

  constructor(private counter: Counter) {
    console.log("Using strategy: Up strategy");
  }

  public getButton(): ButtonType {
    const location = this.counter.getLocation();
    // console.log("Current counter value:", location);
    return this.upStrategy(location);
  }

  upStrategy(_location: Location | undefined): ButtonType {
    return ButtonType.Upcount;
  }

  straightUpStrategy(location: Location | undefined): ButtonType {
    if (!location) return ButtonType.Upcount;

    if (location.x > 200) {
      return ButtonType.Leftcount;
    } else if (location.x < -200) {
      return ButtonType.Rightcount;
    } else {
      return ButtonType.Upcount;
    }
  }
}
