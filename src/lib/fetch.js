const oldFetch = window.fetch;
const newFetch = function (url, options = {}) {
  const token = localStorage.getItem("token");
  if (token) {
    options.headers = {
      ...(options.headers ?? {}),
      Authorization: "Bearer " + token,
    };
  }
  return oldFetch(url, options);
};

window.fetch = newFetch;
