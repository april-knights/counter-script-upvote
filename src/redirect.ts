export function redirectForNewReddit() {
  if (window.location.host == "new.reddit.com") {
    window.location.href =
      "https://www.reddit.com/r/Counter/post-viewer/1bt8fw3/counter/?viewContext=desktopIframe";
  }
}
