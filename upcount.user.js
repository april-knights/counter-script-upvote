// ==UserScript==
// @name     UpCount!
// @author Nesho
// @Description Click that Upcount Button!
// @version  2024.04.02.03
// @grant    none
// @match        https://www.reddit.com/r/Counter/
// @match        https://new.reddit.com/r/Counter/
// @icon         https://icons.duckduckgo.com/ip2/reddit.com.ico
// @updateURL  https://github.com/april-knights/counter-script-upvote/raw/main/upcount.user.js
// @downloadURL https://github.com/april-knights/counter-script-upvote/raw/main/upcount.user.js
// ==/UserScript==

(function() {
    console.log("Starting Upvote agent!");
    setInterval(function() {
        console.log("Sending Request to Reddit");
        document.querySelector("#t3_1bt8fw3 > div > shreddit-devvit-ui-loader").shadowRoot.querySelector("div > devvit-custom-post").shadowRoot.querySelector("div > devvit-blocks-renderer").shadowRoot.querySelector("div > div > div > button:nth-child(2)").click();
    }, 100);
})();

