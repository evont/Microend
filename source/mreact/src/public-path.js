(function () {
  if (window.__POWERED_BY_QIANKUN__) {
    // if (process.env.NODE_ENV === "development") {
    //   // eslint-disable-next-line
    //   __webpack_public_path__ = `//localhost:${process.env.REACT_APP_PORT}/`;
    //   return;
    // }
    // eslint-disable-next-line
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
    // __webpack_public_path__ = `${process.env.BASE_URL}/`
  }
})();
