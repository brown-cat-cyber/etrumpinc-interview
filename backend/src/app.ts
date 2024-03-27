import { WriteStream } from "fs";
import { createServer, IncomingMessage, ServerResponse } from "http";
import { createWriteStream } from "node:fs";
import { resolve, sep } from "path";

const methods = {} as Record<
  "PUT",
  (req: IncomingMessage) => Promise<{
    status: number;
    body?: string;
  }>
>;

const server = createServer((req, res) => {
  function resolveCors() {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Request-Method", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, PUT");
    res.setHeader("Access-Control-Allow-Headers", "*");
    if (req.method === "OPTIONS") {
      res.writeHead(200);
      res.end();
      return true;
    }
  }
  if (resolveCors()) return;
  const handler = methods["PUT"];

  handler(req)
    .catch((error) => {
      if (error.status) return error;
      return {
        status: 500,
        body: String(error),
      };
    })
    .then(({ body, status = 200, type = "text/plain" }) => {
      setTimeout(() => {
        if (Math.random() > 0.3) {
          res.writeHead(500, {
            "Content-Type": "text/plain",
          });
          res.end("server error");
          return;
        }
        res.writeHead(status, {
          "Content-Type": type,
        });
        if (body && typeof body.pipe === "function") {
          body.pipe(res);
        }
        res.end(body);
      }, 0);
    });
});
server.listen(3002, () => {
  console.log("listen on 3002");
});
function urlPath(url?: string) {
  if (!url)
    throw {
      status: 400,
      body: "bad request",
    };
  const baseDir = process.cwd();
  const { pathname } = new URL(url, "http://dummy");
  const path = resolve(decodeURIComponent(pathname).slice(1));
  if (path != baseDir && !path.startsWith(baseDir + sep)) {
    throw {
      status: 403,
      body: "forbidden",
    };
  }
  return path;
}

methods.PUT = async (req) => {
  const filePath = urlPath(req.url);
  await pipeStream(req, createWriteStream(filePath));
  return {
    status: 200,
  };
};

function pipeStream(fromStream: IncomingMessage, toStream: WriteStream) {
  return new Promise((resolve, reject) => {
    fromStream.on("error", reject);
    toStream.on("error", reject);
    toStream.on("finish", resolve);
    fromStream.pipe(toStream);
  });
}
