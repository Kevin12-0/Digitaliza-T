let appInsights = window.appInsights || function (config) {
    function i(config) { t[config] = function () { var i = arguments; t.queue.push(function () { t[config].apply(t, i) }) } } var t = { config: config }, u = document, e = window, o = "script", s = u.createElement(o), i, f; for (s.src = config.url || "//az416426.vo.msecnd.net/scripts/a/ai.0.js", u.getElementsByTagName(o)[0].parentNode.appendChild(s), t.cookie = u.cookie, t.queue = [], i = ["Event", "Exception", "Metric", "PageView", "Trace", "Dependency"]; i.length;) i.pop(), i.push(i[0] + "Data"), t[i[0]] = function () { t.queue.push(arguments) }; return t
}({
    instrumentationKey: "9fc6acc2-1fbf-4ceb-a023-b67b9b1afa7b"
});
window.appInsights = appInsights;
appInsights.trackPageView();
appInsights = window.appInsights || {};
appInsights.queue = [];
appInsights.config = {
    instrumentationKey: "9fc6acc2-1fbf-4ceb-a023-b67b9b1afa7b"
};
appInsights.trackEvent({ name: "eventName", properties: { property1: "value1", property2: "value2" } });
