'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var ReactDOM = _interopDefault(require('react-dom'));

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n";
styleInject(css);

var _ref = /*#__PURE__*/React.createElement("g", {
  fill: "#61DAFB"
}, /*#__PURE__*/React.createElement("path", {
  d: "M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 420.9,
  cy: 296.5,
  r: 45.7
}));

var logo = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20841.9%20595.3%22%3E%20%20%20%20%3Cg%20fill%3D%22%2361DAFB%22%3E%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M666.3%20296.5c0-32.5-40.7-63.3-103.1-82.4%2014.4-63.6%208-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6%200%208.3.9%2011.4%202.6%2013.6%207.8%2019.5%2037.5%2014.9%2075.7-1.1%209.4-2.9%2019.3-5.1%2029.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50%2032.6-30.3%2063.2-46.9%2084-46.9V78c-27.5%200-63.5%2019.6-99.9%2053.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7%200%2051.4%2016.5%2084%2046.6-14%2014.7-28%2031.4-41.3%2049.9-22.6%202.4-44%206.1-63.6%2011-2.3-10-4-19.7-5.2-29-4.7-38.2%201.1-67.9%2014.6-75.8%203-1.8%206.9-2.6%2011.5-2.6V78.5c-8.4%200-16%201.8-22.6%205.6-28.1%2016.2-34.4%2066.7-19.9%20130.1-62.2%2019.2-102.7%2049.9-102.7%2082.3%200%2032.5%2040.7%2063.3%20103.1%2082.4-14.4%2063.6-8%20114.2%2020.2%20130.4%206.5%203.8%2014.1%205.6%2022.5%205.6%2027.5%200%2063.5-19.6%2099.9-53.6%2036.4%2033.8%2072.4%2053.2%2099.9%2053.2%208.4%200%2016-1.8%2022.6-5.6%2028.1-16.2%2034.4-66.7%2019.9-130.1%2062-19.1%20102.5-49.9%20102.5-82.3zm-130.2-66.7c-3.7%2012.9-8.3%2026.2-13.5%2039.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4%2014.2%202.1%2027.9%204.7%2041%207.9zm-45.8%20106.5c-7.8%2013.5-15.8%2026.3-24.1%2038.2-14.9%201.3-30%202-45.2%202-15.1%200-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8%206.2-13.4%2013.2-26.8%2020.7-39.9%207.8-13.5%2015.8-26.3%2024.1-38.2%2014.9-1.3%2030-2%2045.2-2%2015.1%200%2030.2.7%2045%201.9%208.3%2011.9%2016.4%2024.6%2024.2%2038%207.6%2013.1%2014.5%2026.4%2020.8%2039.8-6.3%2013.4-13.2%2026.8-20.7%2039.9zm32.3-13c5.4%2013.4%2010%2026.8%2013.8%2039.8-13.1%203.2-26.9%205.9-41.2%208%204.9-7.7%209.8-15.6%2014.4-23.7%204.6-8%208.9-16.1%2013-24.1zM421.2%20430c-9.3-9.6-18.6-20.3-27.8-32%209%20.4%2018.2.7%2027.5.7%209.4%200%2018.7-.2%2027.8-.7-9%2011.7-18.3%2022.4-27.5%2032zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9%203.7-12.9%208.3-26.2%2013.5-39.5%204.1%208%208.4%2016%2013.1%2024%204.7%208%209.5%2015.8%2014.4%2023.4zM420.7%20163c9.3%209.6%2018.6%2020.3%2027.8%2032-9-.4-18.2-.7-27.5-.7-9.4%200-18.7.2-27.8.7%209-11.7%2018.3-22.4%2027.5-32zm-74%2058.9c-4.9%207.7-9.8%2015.6-14.4%2023.7-4.6%208-8.9%2016-13%2024-5.4-13.4-10-26.8-13.8-39.8%2013.1-3.1%2026.9-5.8%2041.2-7.9zm-90.5%20125.2c-35.4-15.1-58.3-34.9-58.3-50.6%200-15.7%2022.9-35.6%2058.3-50.6%208.6-3.7%2018-7%2027.7-10.1%205.7%2019.6%2013.2%2040%2022.5%2060.9-9.2%2020.8-16.6%2041.1-22.2%2060.6-9.9-3.1-19.3-6.5-28-10.2zM310%20490c-13.6-7.8-19.5-37.5-14.9-75.7%201.1-9.4%202.9-19.3%205.1-29.4%2019.6%204.8%2041%208.5%2063.5%2010.9%2013.5%2018.5%2027.5%2035.3%2041.6%2050-32.6%2030.3-63.2%2046.9-84%2046.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7%2038.2-1.1%2067.9-14.6%2075.8-3%201.8-6.9%202.6-11.5%202.6-20.7%200-51.4-16.5-84-46.6%2014-14.7%2028-31.4%2041.3-49.9%2022.6-2.4%2044-6.1%2063.6-11%202.3%2010.1%204.1%2019.8%205.2%2029.1zm38.5-66.7c-8.6%203.7-18%207-27.7%2010.1-5.7-19.6-13.2-40-22.5-60.9%209.2-20.8%2016.6-41.1%2022.2-60.6%209.9%203.1%2019.3%206.5%2028.1%2010.2%2035.4%2015.1%2058.3%2034.9%2058.3%2050.6-.1%2015.7-23%2035.6-58.4%2050.6zM320.8%2078.4z%22%2F%3E%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%22420.9%22%20cy%3D%22296.5%22%20r%3D%2245.7%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M520.5%2078.1z%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

var css$1 = ".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n";
styleInject(css$1);

function App() {
  return React.createElement(
    'div',
    { className: 'App' },
    React.createElement(
      'header',
      { className: 'App-header' },
      React.createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
      React.createElement(
        'p',
        null,
        'Edit ',
        React.createElement(
          'code',
          null,
          'src/App.js'
        ),
        ' and save to reload.'
      ),
      React.createElement(
        'a',
        {
          className: 'App-link',
          href: 'https://reactjs.org',
          target: '_blank',
          rel: 'noopener noreferrer'
        },
        'Learn React'
      )
    )
  );
}

// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA

var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
// [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' ||
// 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    }).catch(function (error) {
      console.error(error.message);
    });
  }
}

ReactDOM.render(React.createElement(
  React.StrictMode,
  null,
  React.createElement(App, null)
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();
//# sourceMappingURL=index.js.map
