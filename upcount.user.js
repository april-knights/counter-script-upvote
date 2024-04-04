
// ==UserScript==
// @name			UpCount!
// @version			1.0.0
// @description		Click that Upcount Button!
// @author			Nesho & Daaniea
// @match			https://www.reddit.com/r/Counter/
// @match			https://new.reddit.com/r/Counter/
// @match			https://new.reddit.com/r/Counter/comments/1bt8fw3/counter/
// @match			https://www.reddit.com/r/Counter/comments/1bt8fw3/counter/
// @match			https://www.reddit.com/r/Counter/post-viewer/1bt8fw3/counter/?viewContext=desktopIframe
// @updateURL		https://github.com/april-knights/counter-script-upvote/raw/main/upcount.user.js
// @downloadURL		https://github.com/april-knights/counter-script-upvote/raw/main/upcount.user.js
//
// Created with love using Gorilla
// ==/UserScript==

(function () {
  'use strict';

  const CLICK_RATE = 250;

  var ButtonType;
  (function (ButtonType) {
      ButtonType["Upcount"] = "Upcount";
      ButtonType["Downcount"] = "Downcount";
      ButtonType["Rightcount"] = "Rightcount";
      ButtonType["Leftcount"] = "Leftcount";
  })(ButtonType || (ButtonType = {}));
  function getButton(button) {
      switch (button) {
          case ButtonType.Upcount:
              return getCounterElement()?.shadowRoot?.querySelector("div > div > div > button:nth-child(2)");
          case ButtonType.Downcount:
              return getCounterElement()?.shadowRoot?.querySelector("div > div > div > button:nth-child(4)");
          case ButtonType.Leftcount:
              return getCounterElement()?.shadowRoot?.querySelector("div > div > div > div > button:nth-child(1)");
          case ButtonType.Rightcount:
              return getCounterElement()?.shadowRoot?.querySelector("div > div > div > div > button:nth-child(3)");
          default:
              return undefined;
      }
  }
  function getCounterElement() {
      return document
          .querySelector("#t3_1bt8fw3 > div > shreddit-devvit-ui-loader")
          ?.shadowRoot?.querySelector("div > devvit-custom-post")
          ?.shadowRoot?.querySelector("div > devvit-blocks-renderer");
  }
  function getCounterText() {
      return getCounterElement()?.shadowRoot?.querySelector("div > div > div > span")?.innerText;
  }

  class Clicker {
      strategy;
      constructor(strategy) {
          this.strategy = strategy;
      }
      start() {
          setInterval(() => {
              const target = this.strategy.getTarget();
              console.log(`Pressing ${target} button`);
              const button = getButton(target);
              if (!button) {
                  console.warn(`Button ${target} not found`);
              }
              else {
                  button.click();
              }
          }, CLICK_RATE);
      }
  }

  class Counter {
      getLocation() {
          const counterText = getCounterText();
          if (!counterText) {
              console.error("Could not find counter");
              return;
          }
          const counter = this.parseCounterText(counterText);
          return counter;
      }
      parseCounterText(counterText) {
          const regex = /-?\d+/g;
          const numbers = counterText.match(regex);
          if (numbers && numbers.length >= 2) {
              const x = parseInt(numbers[0]);
              const y = parseInt(numbers[1]);
              return { x, y };
          }
          else {
              console.log("Couldn't find X and Y in the counter string");
          }
      }
  }

  function redirectForNewReddit() {
      if (window.location.host == "new.reddit.com") {
          window.location.href =
              "https://www.reddit.com/r/Counter/post-viewer/1bt8fw3/counter/?viewContext=desktopIframe";
      }
  }

  class Strategy {
      counter;
      target = ButtonType.Upcount;
      constructor(counter) {
          this.counter = counter;
          console.log("Using strategy: Up strategy");
      }
      getTarget() {
          const location = this.counter.getLocation();
          // console.log("Current counter value:", location);
          return this.upStrategy(location);
      }
      upStrategy(_location) {
          return ButtonType.Upcount;
      }
  }

  redirectForNewReddit();
  console.log("Starting UpCount agent!");
  const counter = new Counter();
  const strategy = new Strategy(counter);
  const clicker = new Clicker(strategy);
  clicker.start();

})();
