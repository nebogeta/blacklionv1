
export function withMethods(methods, handler) {
  return async function (req, res) {
    if (!req.method || !methods.includes(req.method)) {
      return res.status(405).end();
    }

    return handler(req, res);
  };
}