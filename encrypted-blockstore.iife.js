"use strict";
var Fireproof = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name3 in all)
      __defProp(target, name3, { get: all[name3], enumerable: true });
  };
  var __copyProps = (to, from5, except, desc) => {
    if (from5 && typeof from5 === "object" || typeof from5 === "function") {
      for (let key of __getOwnPropNames(from5))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from5[key], enumerable: !(desc = __getOwnPropDesc(from5, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // ../../node_modules/.pnpm/varint@6.0.0/node_modules/varint/encode.js
  var require_encode = __commonJS({
    "../../node_modules/.pnpm/varint@6.0.0/node_modules/varint/encode.js"(exports, module) {
      "use strict";
      module.exports = encode12;
      var MSB3 = 128;
      var REST3 = 127;
      var MSBALL3 = ~REST3;
      var INT3 = Math.pow(2, 31);
      function encode12(num, out, offset) {
        if (Number.MAX_SAFE_INTEGER && num > Number.MAX_SAFE_INTEGER) {
          encode12.bytes = 0;
          throw new RangeError("Could not encode varint");
        }
        out = out || [];
        offset = offset || 0;
        var oldOffset = offset;
        while (num >= INT3) {
          out[offset++] = num & 255 | MSB3;
          num /= 128;
        }
        while (num & MSBALL3) {
          out[offset++] = num & 255 | MSB3;
          num >>>= 7;
        }
        out[offset] = num | 0;
        encode12.bytes = offset - oldOffset + 1;
        return out;
      }
    }
  });

  // ../../node_modules/.pnpm/varint@6.0.0/node_modules/varint/decode.js
  var require_decode = __commonJS({
    "../../node_modules/.pnpm/varint@6.0.0/node_modules/varint/decode.js"(exports, module) {
      "use strict";
      module.exports = read3;
      var MSB3 = 128;
      var REST3 = 127;
      function read3(buf2, offset) {
        var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf2.length;
        do {
          if (counter >= l || shift > 49) {
            read3.bytes = 0;
            throw new RangeError("Could not decode varint");
          }
          b = buf2[counter++];
          res += shift < 28 ? (b & REST3) << shift : (b & REST3) * Math.pow(2, shift);
          shift += 7;
        } while (b >= MSB3);
        read3.bytes = counter - offset;
        return res;
      }
    }
  });

  // ../../node_modules/.pnpm/varint@6.0.0/node_modules/varint/length.js
  var require_length = __commonJS({
    "../../node_modules/.pnpm/varint@6.0.0/node_modules/varint/length.js"(exports, module) {
      "use strict";
      var N13 = Math.pow(2, 7);
      var N23 = Math.pow(2, 14);
      var N33 = Math.pow(2, 21);
      var N43 = Math.pow(2, 28);
      var N53 = Math.pow(2, 35);
      var N63 = Math.pow(2, 42);
      var N73 = Math.pow(2, 49);
      var N83 = Math.pow(2, 56);
      var N93 = Math.pow(2, 63);
      module.exports = function(value) {
        return value < N13 ? 1 : value < N23 ? 2 : value < N33 ? 3 : value < N43 ? 4 : value < N53 ? 5 : value < N63 ? 6 : value < N73 ? 7 : value < N83 ? 8 : value < N93 ? 9 : 10;
      };
    }
  });

  // ../../node_modules/.pnpm/varint@6.0.0/node_modules/varint/index.js
  var require_varint = __commonJS({
    "../../node_modules/.pnpm/varint@6.0.0/node_modules/varint/index.js"(exports, module) {
      "use strict";
      module.exports = {
        encode: require_encode(),
        decode: require_decode(),
        encodingLength: require_length()
      };
    }
  });

  // ../../node_modules/.pnpm/cross-fetch@4.0.0_encoding@0.1.13/node_modules/cross-fetch/dist/browser-ponyfill.js
  var require_browser_ponyfill = __commonJS({
    "../../node_modules/.pnpm/cross-fetch@4.0.0_encoding@0.1.13/node_modules/cross-fetch/dist/browser-ponyfill.js"(exports, module) {
      "use strict";
      var __global__ = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || typeof global !== "undefined" && global;
      var __globalThis__ = function() {
        function F() {
          this.fetch = false;
          this.DOMException = __global__.DOMException;
        }
        F.prototype = __global__;
        return new F();
      }();
      (function(globalThis2) {
        var irrelevant = function(exports2) {
          var global2 = typeof globalThis2 !== "undefined" && globalThis2 || typeof self !== "undefined" && self || typeof global2 !== "undefined" && global2;
          var support = {
            searchParams: "URLSearchParams" in global2,
            iterable: "Symbol" in global2 && "iterator" in Symbol,
            blob: "FileReader" in global2 && "Blob" in global2 && function() {
              try {
                new Blob();
                return true;
              } catch (e) {
                return false;
              }
            }(),
            formData: "FormData" in global2,
            arrayBuffer: "ArrayBuffer" in global2
          };
          function isDataView(obj) {
            return obj && DataView.prototype.isPrototypeOf(obj);
          }
          if (support.arrayBuffer) {
            var viewClasses = [
              "[object Int8Array]",
              "[object Uint8Array]",
              "[object Uint8ClampedArray]",
              "[object Int16Array]",
              "[object Uint16Array]",
              "[object Int32Array]",
              "[object Uint32Array]",
              "[object Float32Array]",
              "[object Float64Array]"
            ];
            var isArrayBufferView = ArrayBuffer.isView || function(obj) {
              return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
            };
          }
          function normalizeName(name3) {
            if (typeof name3 !== "string") {
              name3 = String(name3);
            }
            if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name3) || name3 === "") {
              throw new TypeError('Invalid character in header field name: "' + name3 + '"');
            }
            return name3.toLowerCase();
          }
          function normalizeValue(value) {
            if (typeof value !== "string") {
              value = String(value);
            }
            return value;
          }
          function iteratorFor(items) {
            var iterator = {
              next: function() {
                var value = items.shift();
                return { done: value === void 0, value };
              }
            };
            if (support.iterable) {
              iterator[Symbol.iterator] = function() {
                return iterator;
              };
            }
            return iterator;
          }
          function Headers(headers) {
            this.map = {};
            if (headers instanceof Headers) {
              headers.forEach(function(value, name3) {
                this.append(name3, value);
              }, this);
            } else if (Array.isArray(headers)) {
              headers.forEach(function(header) {
                this.append(header[0], header[1]);
              }, this);
            } else if (headers) {
              Object.getOwnPropertyNames(headers).forEach(function(name3) {
                this.append(name3, headers[name3]);
              }, this);
            }
          }
          Headers.prototype.append = function(name3, value) {
            name3 = normalizeName(name3);
            value = normalizeValue(value);
            var oldValue = this.map[name3];
            this.map[name3] = oldValue ? oldValue + ", " + value : value;
          };
          Headers.prototype["delete"] = function(name3) {
            delete this.map[normalizeName(name3)];
          };
          Headers.prototype.get = function(name3) {
            name3 = normalizeName(name3);
            return this.has(name3) ? this.map[name3] : null;
          };
          Headers.prototype.has = function(name3) {
            return this.map.hasOwnProperty(normalizeName(name3));
          };
          Headers.prototype.set = function(name3, value) {
            this.map[normalizeName(name3)] = normalizeValue(value);
          };
          Headers.prototype.forEach = function(callback, thisArg) {
            for (var name3 in this.map) {
              if (this.map.hasOwnProperty(name3)) {
                callback.call(thisArg, this.map[name3], name3, this);
              }
            }
          };
          Headers.prototype.keys = function() {
            var items = [];
            this.forEach(function(value, name3) {
              items.push(name3);
            });
            return iteratorFor(items);
          };
          Headers.prototype.values = function() {
            var items = [];
            this.forEach(function(value) {
              items.push(value);
            });
            return iteratorFor(items);
          };
          Headers.prototype.entries = function() {
            var items = [];
            this.forEach(function(value, name3) {
              items.push([name3, value]);
            });
            return iteratorFor(items);
          };
          if (support.iterable) {
            Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
          }
          function consumed(body) {
            if (body.bodyUsed) {
              return Promise.reject(new TypeError("Already read"));
            }
            body.bodyUsed = true;
          }
          function fileReaderReady(reader) {
            return new Promise(function(resolve, reject) {
              reader.onload = function() {
                resolve(reader.result);
              };
              reader.onerror = function() {
                reject(reader.error);
              };
            });
          }
          function readBlobAsArrayBuffer(blob) {
            var reader = new FileReader();
            var promise = fileReaderReady(reader);
            reader.readAsArrayBuffer(blob);
            return promise;
          }
          function readBlobAsText(blob) {
            var reader = new FileReader();
            var promise = fileReaderReady(reader);
            reader.readAsText(blob);
            return promise;
          }
          function readArrayBufferAsText(buf2) {
            var view = new Uint8Array(buf2);
            var chars = new Array(view.length);
            for (var i = 0; i < view.length; i++) {
              chars[i] = String.fromCharCode(view[i]);
            }
            return chars.join("");
          }
          function bufferClone(buf2) {
            if (buf2.slice) {
              return buf2.slice(0);
            } else {
              var view = new Uint8Array(buf2.byteLength);
              view.set(new Uint8Array(buf2));
              return view.buffer;
            }
          }
          function Body() {
            this.bodyUsed = false;
            this._initBody = function(body) {
              this.bodyUsed = this.bodyUsed;
              this._bodyInit = body;
              if (!body) {
                this._bodyText = "";
              } else if (typeof body === "string") {
                this._bodyText = body;
              } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
                this._bodyBlob = body;
              } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
                this._bodyFormData = body;
              } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                this._bodyText = body.toString();
              } else if (support.arrayBuffer && support.blob && isDataView(body)) {
                this._bodyArrayBuffer = bufferClone(body.buffer);
                this._bodyInit = new Blob([this._bodyArrayBuffer]);
              } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
                this._bodyArrayBuffer = bufferClone(body);
              } else {
                this._bodyText = body = Object.prototype.toString.call(body);
              }
              if (!this.headers.get("content-type")) {
                if (typeof body === "string") {
                  this.headers.set("content-type", "text/plain;charset=UTF-8");
                } else if (this._bodyBlob && this._bodyBlob.type) {
                  this.headers.set("content-type", this._bodyBlob.type);
                } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                  this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                }
              }
            };
            if (support.blob) {
              this.blob = function() {
                var rejected = consumed(this);
                if (rejected) {
                  return rejected;
                }
                if (this._bodyBlob) {
                  return Promise.resolve(this._bodyBlob);
                } else if (this._bodyArrayBuffer) {
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                } else if (this._bodyFormData) {
                  throw new Error("could not read FormData body as blob");
                } else {
                  return Promise.resolve(new Blob([this._bodyText]));
                }
              };
              this.arrayBuffer = function() {
                if (this._bodyArrayBuffer) {
                  var isConsumed = consumed(this);
                  if (isConsumed) {
                    return isConsumed;
                  }
                  if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
                    return Promise.resolve(
                      this._bodyArrayBuffer.buffer.slice(
                        this._bodyArrayBuffer.byteOffset,
                        this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
                      )
                    );
                  } else {
                    return Promise.resolve(this._bodyArrayBuffer);
                  }
                } else {
                  return this.blob().then(readBlobAsArrayBuffer);
                }
              };
            }
            this.text = function() {
              var rejected = consumed(this);
              if (rejected) {
                return rejected;
              }
              if (this._bodyBlob) {
                return readBlobAsText(this._bodyBlob);
              } else if (this._bodyArrayBuffer) {
                return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
              } else if (this._bodyFormData) {
                throw new Error("could not read FormData body as text");
              } else {
                return Promise.resolve(this._bodyText);
              }
            };
            if (support.formData) {
              this.formData = function() {
                return this.text().then(decode16);
              };
            }
            this.json = function() {
              return this.text().then(JSON.parse);
            };
            return this;
          }
          var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
          function normalizeMethod(method) {
            var upcased = method.toUpperCase();
            return methods.indexOf(upcased) > -1 ? upcased : method;
          }
          function Request(input, options) {
            if (!(this instanceof Request)) {
              throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            }
            options = options || {};
            var body = options.body;
            if (input instanceof Request) {
              if (input.bodyUsed) {
                throw new TypeError("Already read");
              }
              this.url = input.url;
              this.credentials = input.credentials;
              if (!options.headers) {
                this.headers = new Headers(input.headers);
              }
              this.method = input.method;
              this.mode = input.mode;
              this.signal = input.signal;
              if (!body && input._bodyInit != null) {
                body = input._bodyInit;
                input.bodyUsed = true;
              }
            } else {
              this.url = String(input);
            }
            this.credentials = options.credentials || this.credentials || "same-origin";
            if (options.headers || !this.headers) {
              this.headers = new Headers(options.headers);
            }
            this.method = normalizeMethod(options.method || this.method || "GET");
            this.mode = options.mode || this.mode || null;
            this.signal = options.signal || this.signal;
            this.referrer = null;
            if ((this.method === "GET" || this.method === "HEAD") && body) {
              throw new TypeError("Body not allowed for GET or HEAD requests");
            }
            this._initBody(body);
            if (this.method === "GET" || this.method === "HEAD") {
              if (options.cache === "no-store" || options.cache === "no-cache") {
                var reParamSearch = /([?&])_=[^&]*/;
                if (reParamSearch.test(this.url)) {
                  this.url = this.url.replace(reParamSearch, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
                } else {
                  var reQueryString = /\?/;
                  this.url += (reQueryString.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
                }
              }
            }
          }
          Request.prototype.clone = function() {
            return new Request(this, { body: this._bodyInit });
          };
          function decode16(body) {
            var form = new FormData();
            body.trim().split("&").forEach(function(bytes) {
              if (bytes) {
                var split = bytes.split("=");
                var name3 = split.shift().replace(/\+/g, " ");
                var value = split.join("=").replace(/\+/g, " ");
                form.append(decodeURIComponent(name3), decodeURIComponent(value));
              }
            });
            return form;
          }
          function parseHeaders(rawHeaders) {
            var headers = new Headers();
            var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
            preProcessedHeaders.split("\r").map(function(header) {
              return header.indexOf("\n") === 0 ? header.substr(1, header.length) : header;
            }).forEach(function(line) {
              var parts = line.split(":");
              var key = parts.shift().trim();
              if (key) {
                var value = parts.join(":").trim();
                headers.append(key, value);
              }
            });
            return headers;
          }
          Body.call(Request.prototype);
          function Response(bodyInit, options) {
            if (!(this instanceof Response)) {
              throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            }
            if (!options) {
              options = {};
            }
            this.type = "default";
            this.status = options.status === void 0 ? 200 : options.status;
            this.ok = this.status >= 200 && this.status < 300;
            this.statusText = options.statusText === void 0 ? "" : "" + options.statusText;
            this.headers = new Headers(options.headers);
            this.url = options.url || "";
            this._initBody(bodyInit);
          }
          Body.call(Response.prototype);
          Response.prototype.clone = function() {
            return new Response(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new Headers(this.headers),
              url: this.url
            });
          };
          Response.error = function() {
            var response = new Response(null, { status: 0, statusText: "" });
            response.type = "error";
            return response;
          };
          var redirectStatuses = [301, 302, 303, 307, 308];
          Response.redirect = function(url, status) {
            if (redirectStatuses.indexOf(status) === -1) {
              throw new RangeError("Invalid status code");
            }
            return new Response(null, { status, headers: { location: url } });
          };
          exports2.DOMException = global2.DOMException;
          try {
            new exports2.DOMException();
          } catch (err) {
            exports2.DOMException = function(message, name3) {
              this.message = message;
              this.name = name3;
              var error = Error(message);
              this.stack = error.stack;
            };
            exports2.DOMException.prototype = Object.create(Error.prototype);
            exports2.DOMException.prototype.constructor = exports2.DOMException;
          }
          function fetch2(input, init) {
            return new Promise(function(resolve, reject) {
              var request = new Request(input, init);
              if (request.signal && request.signal.aborted) {
                return reject(new exports2.DOMException("Aborted", "AbortError"));
              }
              var xhr = new XMLHttpRequest();
              function abortXhr() {
                xhr.abort();
              }
              xhr.onload = function() {
                var options = {
                  status: xhr.status,
                  statusText: xhr.statusText,
                  headers: parseHeaders(xhr.getAllResponseHeaders() || "")
                };
                options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
                var body = "response" in xhr ? xhr.response : xhr.responseText;
                setTimeout(function() {
                  resolve(new Response(body, options));
                }, 0);
              };
              xhr.onerror = function() {
                setTimeout(function() {
                  reject(new TypeError("Network request failed"));
                }, 0);
              };
              xhr.ontimeout = function() {
                setTimeout(function() {
                  reject(new TypeError("Network request failed"));
                }, 0);
              };
              xhr.onabort = function() {
                setTimeout(function() {
                  reject(new exports2.DOMException("Aborted", "AbortError"));
                }, 0);
              };
              function fixUrl(url) {
                try {
                  return url === "" && global2.location.href ? global2.location.href : url;
                } catch (e) {
                  return url;
                }
              }
              xhr.open(request.method, fixUrl(request.url), true);
              if (request.credentials === "include") {
                xhr.withCredentials = true;
              } else if (request.credentials === "omit") {
                xhr.withCredentials = false;
              }
              if ("responseType" in xhr) {
                if (support.blob) {
                  xhr.responseType = "blob";
                } else if (support.arrayBuffer && request.headers.get("Content-Type") && request.headers.get("Content-Type").indexOf("application/octet-stream") !== -1) {
                  xhr.responseType = "arraybuffer";
                }
              }
              if (init && typeof init.headers === "object" && !(init.headers instanceof Headers)) {
                Object.getOwnPropertyNames(init.headers).forEach(function(name3) {
                  xhr.setRequestHeader(name3, normalizeValue(init.headers[name3]));
                });
              } else {
                request.headers.forEach(function(value, name3) {
                  xhr.setRequestHeader(name3, value);
                });
              }
              if (request.signal) {
                request.signal.addEventListener("abort", abortXhr);
                xhr.onreadystatechange = function() {
                  if (xhr.readyState === 4) {
                    request.signal.removeEventListener("abort", abortXhr);
                  }
                };
              }
              xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
            });
          }
          fetch2.polyfill = true;
          if (!global2.fetch) {
            global2.fetch = fetch2;
            global2.Headers = Headers;
            global2.Request = Request;
            global2.Response = Response;
          }
          exports2.Headers = Headers;
          exports2.Request = Request;
          exports2.Response = Response;
          exports2.fetch = fetch2;
          return exports2;
        }({});
      })(__globalThis__);
      __globalThis__.fetch.ponyfill = true;
      delete __globalThis__.fetch.polyfill;
      var ctx = __global__.fetch ? __global__ : __globalThis__;
      exports = ctx.fetch;
      exports.default = ctx.fetch;
      exports.fetch = ctx.fetch;
      exports.Headers = ctx.Headers;
      exports.Request = ctx.Request;
      exports.Response = ctx.Response;
      module.exports = exports;
    }
  });

  // src/index.ts
  var src_exports2 = {};
  __export(src_exports2, {
    CarTransaction: () => CarTransaction,
    CompactionFetcher: () => CompactionFetcher,
    ConnectREST: () => ConnectREST,
    Connection: () => Connection,
    DataStore: () => DataStore,
    EncryptedBlockstore: () => EncryptedBlockstore,
    Loadable: () => Loadable,
    Loader: () => Loader,
    MetaStore: () => MetaStore,
    RemoteWAL: () => RemoteWAL,
    connect: () => connect,
    makeStores: () => makeStores,
    validateDataParams: () => validateDataParams,
    validateMetaParams: () => validateMetaParams
  });

  // ../../node_modules/.pnpm/cborg@4.1.3/node_modules/cborg/lib/is.js
  var typeofs = [
    "string",
    "number",
    "bigint",
    "symbol"
  ];
  var objectTypeNames = [
    "Function",
    "Generator",
    "AsyncGenerator",
    "GeneratorFunction",
    "AsyncGeneratorFunction",
    "AsyncFunction",
    "Observable",
    "Array",
    "Buffer",
    "Object",
    "RegExp",
    "Date",
    "Error",
    "Map",
    "Set",
    "WeakMap",
    "WeakSet",
    "ArrayBuffer",
    "SharedArrayBuffer",
    "DataView",
    "Promise",
    "URL",
    "HTMLElement",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Uint16Array",
    "Int32Array",
    "Uint32Array",
    "Float32Array",
    "Float64Array",
    "BigInt64Array",
    "BigUint64Array"
  ];
  function is(value) {
    if (value === null) {
      return "null";
    }
    if (value === void 0) {
      return "undefined";
    }
    if (value === true || value === false) {
      return "boolean";
    }
    const typeOf = typeof value;
    if (typeofs.includes(typeOf)) {
      return typeOf;
    }
    if (typeOf === "function") {
      return "Function";
    }
    if (Array.isArray(value)) {
      return "Array";
    }
    if (isBuffer(value)) {
      return "Buffer";
    }
    const objectType = getObjectType(value);
    if (objectType) {
      return objectType;
    }
    return "Object";
  }
  function isBuffer(value) {
    return value && value.constructor && value.constructor.isBuffer && value.constructor.isBuffer.call(null, value);
  }
  function getObjectType(value) {
    const objectTypeName = Object.prototype.toString.call(value).slice(8, -1);
    if (objectTypeNames.includes(objectTypeName)) {
      return objectTypeName;
    }
    return void 0;
  }

  // ../../node_modules/.pnpm/cborg@4.1.3/node_modules/cborg/lib/token.js
  var Type = class {
    /**
     * @param {number} major
     * @param {string} name
     * @param {boolean} terminal
     */
    constructor(major, name3, terminal) {
      this.major = major;
      this.majorEncoded = major << 5;
      this.name = name3;
      this.terminal = terminal;
    }
    /* c8 ignore next 3 */
    toString() {
      return `Type[${this.major}].${this.name}`;
    }
    /**
     * @param {Type} typ
     * @returns {number}
     */
    compare(typ) {
      return this.major < typ.major ? -1 : this.major > typ.major ? 1 : 0;
    }
  };
  Type.uint = new Type(0, "uint", true);
  Type.negint = new Type(1, "negint", true);
  Type.bytes = new Type(2, "bytes", true);
  Type.string = new Type(3, "string", true);
  Type.array = new Type(4, "array", false);
  Type.map = new Type(5, "map", false);
  Type.tag = new Type(6, "tag", false);
  Type.float = new Type(7, "float", true);
  Type.false = new Type(7, "false", true);
  Type.true = new Type(7, "true", true);
  Type.null = new Type(7, "null", true);
  Type.undefined = new Type(7, "undefined", true);
  Type.break = new Type(7, "break", true);
  var Token = class {
    /**
     * @param {Type} type
     * @param {any} [value]
     * @param {number} [encodedLength]
     */
    constructor(type, value, encodedLength) {
      this.type = type;
      this.value = value;
      this.encodedLength = encodedLength;
      this.encodedBytes = void 0;
      this.byteValue = void 0;
    }
    /* c8 ignore next 3 */
    toString() {
      return `Token[${this.type}].${this.value}`;
    }
  };

  // ../../node_modules/.pnpm/cborg@4.1.3/node_modules/cborg/lib/byte-utils.js
  var useBuffer = globalThis.process && // @ts-ignore
  !globalThis.process.browser && // @ts-ignore
  globalThis.Buffer && // @ts-ignore
  typeof globalThis.Buffer.isBuffer === "function";
  var textDecoder = new TextDecoder();
  var textEncoder = new TextEncoder();
  function isBuffer2(buf2) {
    return useBuffer && globalThis.Buffer.isBuffer(buf2);
  }
  function asU8A(buf2) {
    if (!(buf2 instanceof Uint8Array)) {
      return Uint8Array.from(buf2);
    }
    return isBuffer2(buf2) ? new Uint8Array(buf2.buffer, buf2.byteOffset, buf2.byteLength) : buf2;
  }
  var toString = useBuffer ? (
    // eslint-disable-line operator-linebreak
    /**
     * @param {Uint8Array} bytes
     * @param {number} start
     * @param {number} end
     */
    (bytes, start, end) => {
      return end - start > 64 ? (
        // eslint-disable-line operator-linebreak
        // @ts-ignore
        globalThis.Buffer.from(bytes.subarray(start, end)).toString("utf8")
      ) : utf8Slice(bytes, start, end);
    }
  ) : (
    // eslint-disable-line operator-linebreak
    /**
     * @param {Uint8Array} bytes
     * @param {number} start
     * @param {number} end
     */
    (bytes, start, end) => {
      return end - start > 64 ? textDecoder.decode(bytes.subarray(start, end)) : utf8Slice(bytes, start, end);
    }
  );
  var fromString = useBuffer ? (
    // eslint-disable-line operator-linebreak
    /**
     * @param {string} string
     */
    (string) => {
      return string.length > 64 ? (
        // eslint-disable-line operator-linebreak
        // @ts-ignore
        globalThis.Buffer.from(string)
      ) : utf8ToBytes(string);
    }
  ) : (
    // eslint-disable-line operator-linebreak
    /**
     * @param {string} string
     */
    (string) => {
      return string.length > 64 ? textEncoder.encode(string) : utf8ToBytes(string);
    }
  );
  var fromArray = (arr) => {
    return Uint8Array.from(arr);
  };
  var slice = useBuffer ? (
    // eslint-disable-line operator-linebreak
    /**
     * @param {Uint8Array} bytes
     * @param {number} start
     * @param {number} end
     */
    (bytes, start, end) => {
      if (isBuffer2(bytes)) {
        return new Uint8Array(bytes.subarray(start, end));
      }
      return bytes.slice(start, end);
    }
  ) : (
    // eslint-disable-line operator-linebreak
    /**
     * @param {Uint8Array} bytes
     * @param {number} start
     * @param {number} end
     */
    (bytes, start, end) => {
      return bytes.slice(start, end);
    }
  );
  var concat = useBuffer ? (
    // eslint-disable-line operator-linebreak
    /**
     * @param {Uint8Array[]} chunks
     * @param {number} length
     * @returns {Uint8Array}
     */
    (chunks, length3) => {
      chunks = chunks.map((c) => c instanceof Uint8Array ? c : (
        // eslint-disable-line operator-linebreak
        // @ts-ignore
        globalThis.Buffer.from(c)
      ));
      return asU8A(globalThis.Buffer.concat(chunks, length3));
    }
  ) : (
    // eslint-disable-line operator-linebreak
    /**
     * @param {Uint8Array[]} chunks
     * @param {number} length
     * @returns {Uint8Array}
     */
    (chunks, length3) => {
      const out = new Uint8Array(length3);
      let off = 0;
      for (let b of chunks) {
        if (off + b.length > out.length) {
          b = b.subarray(0, out.length - off);
        }
        out.set(b, off);
        off += b.length;
      }
      return out;
    }
  );
  var alloc = useBuffer ? (
    // eslint-disable-line operator-linebreak
    /**
     * @param {number} size
     * @returns {Uint8Array}
     */
    (size) => {
      return globalThis.Buffer.allocUnsafe(size);
    }
  ) : (
    // eslint-disable-line operator-linebreak
    /**
     * @param {number} size
     * @returns {Uint8Array}
     */
    (size) => {
      return new Uint8Array(size);
    }
  );
  function compare(b1, b2) {
    if (isBuffer2(b1) && isBuffer2(b2)) {
      return b1.compare(b2);
    }
    for (let i = 0; i < b1.length; i++) {
      if (b1[i] === b2[i]) {
        continue;
      }
      return b1[i] < b2[i] ? -1 : 1;
    }
    return 0;
  }
  function utf8ToBytes(str) {
    const out = [];
    let p = 0;
    for (let i = 0; i < str.length; i++) {
      let c = str.charCodeAt(i);
      if (c < 128) {
        out[p++] = c;
      } else if (c < 2048) {
        out[p++] = c >> 6 | 192;
        out[p++] = c & 63 | 128;
      } else if ((c & 64512) === 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) === 56320) {
        c = 65536 + ((c & 1023) << 10) + (str.charCodeAt(++i) & 1023);
        out[p++] = c >> 18 | 240;
        out[p++] = c >> 12 & 63 | 128;
        out[p++] = c >> 6 & 63 | 128;
        out[p++] = c & 63 | 128;
      } else {
        out[p++] = c >> 12 | 224;
        out[p++] = c >> 6 & 63 | 128;
        out[p++] = c & 63 | 128;
      }
    }
    return out;
  }
  function utf8Slice(buf2, offset, end) {
    const res = [];
    while (offset < end) {
      const firstByte = buf2[offset];
      let codePoint = null;
      let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
      if (offset + bytesPerSequence <= end) {
        let secondByte, thirdByte, fourthByte, tempCodePoint;
        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 128) {
              codePoint = firstByte;
            }
            break;
          case 2:
            secondByte = buf2[offset + 1];
            if ((secondByte & 192) === 128) {
              tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
              if (tempCodePoint > 127) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 3:
            secondByte = buf2[offset + 1];
            thirdByte = buf2[offset + 2];
            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
              tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
              if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 4:
            secondByte = buf2[offset + 1];
            thirdByte = buf2[offset + 2];
            fourthByte = buf2[offset + 3];
            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
              tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
              if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                codePoint = tempCodePoint;
              }
            }
        }
      }
      if (codePoint === null) {
        codePoint = 65533;
        bytesPerSequence = 1;
      } else if (codePoint > 65535) {
        codePoint -= 65536;
        res.push(codePoint >>> 10 & 1023 | 55296);
        codePoint = 56320 | codePoint & 1023;
      }
      res.push(codePoint);
      offset += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
  }
  var MAX_ARGUMENTS_LENGTH = 4096;
  function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) {
      return String.fromCharCode.apply(String, codePoints);
    }
    let res = "";
    let i = 0;
    while (i < len) {
      res += String.fromCharCode.apply(
        String,
        codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
      );
    }
    return res;
  }

  // ../../node_modules/.pnpm/cborg@4.1.3/node_modules/cborg/lib/bl.js
  var defaultChunkSize = 256;
  var Bl = class {
    /**
     * @param {number} [chunkSize]
     */
    constructor(chunkSize = defaultChunkSize) {
      this.chunkSize = chunkSize;
      this.cursor = 0;
      this.maxCursor = -1;
      this.chunks = [];
      this._initReuseChunk = null;
    }
    reset() {
      this.cursor = 0;
      this.maxCursor = -1;
      if (this.chunks.length) {
        this.chunks = [];
      }
      if (this._initReuseChunk !== null) {
        this.chunks.push(this._initReuseChunk);
        this.maxCursor = this._initReuseChunk.length - 1;
      }
    }
    /**
     * @param {Uint8Array|number[]} bytes
     */
    push(bytes) {
      let topChunk = this.chunks[this.chunks.length - 1];
      const newMax = this.cursor + bytes.length;
      if (newMax <= this.maxCursor + 1) {
        const chunkPos = topChunk.length - (this.maxCursor - this.cursor) - 1;
        topChunk.set(bytes, chunkPos);
      } else {
        if (topChunk) {
          const chunkPos = topChunk.length - (this.maxCursor - this.cursor) - 1;
          if (chunkPos < topChunk.length) {
            this.chunks[this.chunks.length - 1] = topChunk.subarray(0, chunkPos);
            this.maxCursor = this.cursor - 1;
          }
        }
        if (bytes.length < 64 && bytes.length < this.chunkSize) {
          topChunk = alloc(this.chunkSize);
          this.chunks.push(topChunk);
          this.maxCursor += topChunk.length;
          if (this._initReuseChunk === null) {
            this._initReuseChunk = topChunk;
          }
          topChunk.set(bytes, 0);
        } else {
          this.chunks.push(bytes);
          this.maxCursor += bytes.length;
        }
      }
      this.cursor += bytes.length;
    }
    /**
     * @param {boolean} [reset]
     * @returns {Uint8Array}
     */
    toBytes(reset = false) {
      let byts;
      if (this.chunks.length === 1) {
        const chunk = this.chunks[0];
        if (reset && this.cursor > chunk.length / 2) {
          byts = this.cursor === chunk.length ? chunk : chunk.subarray(0, this.cursor);
          this._initReuseChunk = null;
          this.chunks = [];
        } else {
          byts = slice(chunk, 0, this.cursor);
        }
      } else {
        byts = concat(this.chunks, this.cursor);
      }
      if (reset) {
        this.reset();
      }
      return byts;
    }
  };

  // ../../node_modules/.pnpm/cborg@4.1.3/node_modules/cborg/lib/common.js
  var decodeErrPrefix = "CBOR decode error:";
  var encodeErrPrefix = "CBOR encode error:";
  var uintMinorPrefixBytes = [];
  uintMinorPrefixBytes[23] = 1;
  uintMinorPrefixBytes[24] = 2;
  uintMinorPrefixBytes[25] = 3;
  uintMinorPrefixBytes[26] = 5;
  uintMinorPrefixBytes[27] = 9;
  function assertEnoughData(data, pos, need) {
    if (data.length - pos < need) {
      throw new Error(`${decodeErrPrefix} not enough data for type`);
    }
  }

  // ../../node_modules/.pnpm/cborg@4.1.3/node_modules/cborg/lib/0uint.js
  var uintBoundaries = [24, 256, 65536, 4294967296, BigInt("18446744073709551616")];
  function readUint8(data, offset, options) {
    assertEnoughData(data, offset, 1);
    const value = data[offset];
    if (options.strict === true && value < uintBoundaries[0]) {
      throw new Error(`${decodeErrPrefix} integer encoded in more bytes than necessary (strict decode)`);
    }
    return value;
  }
  function readUint16(data, offset, options) {
    assertEnoughData(data, offset, 2);
    const value = data[offset] << 8 | data[offset + 1];
    if (options.strict === true && value < uintBoundaries[1]) {
      throw new Error(`${decodeErrPrefix} integer encoded in more bytes than necessary (strict decode)`);
    }
    return value;
  }
  function readUint32(data, offset, options) {
    assertEnoughData(data, offset, 4);
    const value = data[offset] * 16777216 + (data[offset + 1] << 16) + (data[offset + 2] << 8) + data[offset + 3];
    if (options.strict === true && value < uintBoundaries[2]) {
      throw new Error(`${decodeErrPrefix} integer encoded in more bytes than necessary (strict decode)`);
    }
    return value;
  }
  function readUint64(data, offset, options) {
    assertEnoughData(data, offset, 8);
    const hi = data[offset] * 16777216 + (data[offset + 1] << 16) + (data[offset + 2] << 8) + data[offset + 3];
    const lo = data[offset + 4] * 16777216 + (data[offset + 5] << 16) + (data[offset + 6] << 8) + data[offset + 7];
    const value = (BigInt(hi) << BigInt(32)) + BigInt(lo);
    if (options.strict === true && value < uintBoundaries[3]) {
      throw new Error(`${decodeErrPrefix} integer encoded in more bytes than necessary (strict decode)`);
    }
    if (value <= Number.MAX_SAFE_INTEGER) {
      return Number(value);
    }
    if (options.allowBigInt === true) {
      return value;
    }
    throw new Error(`${decodeErrPrefix} integers outside of the safe integer range are not supported`);
  }
  function decodeUint8(data, pos, _minor, options) {
    return new Token(Type.uint, readUint8(data, pos + 1, options), 2);
  }
  function decodeUint16(data, pos, _minor, options) {
    return new Token(Type.uint, readUint16(data, pos + 1, options), 3);
  }
  function decodeUint32(data, pos, _minor, options) {
    return new Token(Type.uint, readUint32(data, pos + 1, options), 5);
  }
  function decodeUint64(data, pos, _minor, options) {
    return new Token(Type.uint, readUint64(data, pos + 1, options), 9);
  }
  function encodeUint(buf2, token) {
    return encodeUintValue(buf2, 0, token.value);
  }
  function encodeUintValue(buf2, major, uint) {
    if (uint < uintBoundaries[0]) {
      const nuint = Number(uint);
      buf2.push([major | nuint]);
    } else if (uint < uintBoundaries[1]) {
      const nuint = Number(uint);
      buf2.push([major | 24, nuint]);
    } else if (uint < uintBoundaries[2]) {
      const nuint = Number(uint);
      buf2.push([major | 25, nuint >>> 8, nuint & 255]);
    } else if (uint < uintBoundaries[3]) {
      const nuint = Number(uint);
      buf2.push([major | 26, nuint >>> 24 & 255, nuint >>> 16 & 255, nuint >>> 8 & 255, nuint & 255]);
    } else {
      const buint = BigInt(uint);
      if (buint < uintBoundaries[4]) {
        const set = [major | 27, 0, 0, 0, 0, 0, 0, 0];
        let lo = Number(buint & BigInt(4294967295));
        let hi = Number(buint >> BigInt(32) & BigInt(4294967295));
        set[8] = lo & 255;
        lo = lo >> 8;
        set[7] = lo & 255;
        lo = lo >> 8;
        set[6] = lo & 255;
        lo = lo >> 8;
        set[5] = lo & 255;
        set[4] = hi & 255;
        hi = hi >> 8;
        set[3] = hi & 255;
        hi = hi >> 8;
        set[2] = hi & 255;
        hi = hi >> 8;
        set[1] = hi & 255;
        buf2.push(set);
      } else {
        throw new Error(`${decodeErrPrefix} encountered BigInt larger than allowable range`);
      }
    }
  }
  encodeUint.encodedSize = function encodedSize(token) {
    return encodeUintValue.encodedSize(token.value);
  };
  encodeUintValue.encodedSize = function encodedSize2(uint) {
    if (uint < uintBoundaries[0]) {
      return 1;
    }
    if (uint < uintBoundaries[1]) {
      return 2;
    }
    if (uint < uintBoundaries[2]) {
      return 3;
    }
    if (uint < uintBoundaries[3]) {
      return 5;
    }
    return 9;
  };
  encodeUint.compareTokens = function compareTokens(tok1, tok2) {
    return tok1.value < tok2.value ? -1 : tok1.value > tok2.value ? 1 : (
      /* c8 ignore next */
      0
    );
  };

  // ../../node_modules/.pnpm/cborg@4.1.3/node_modules/cborg/lib/1negint.js
  function decodeNegint8(data, pos, _minor, options) {
    return new Token(Type.negint, -1 - readUint8(data, pos + 1, options), 2);
  }
  function decodeNegint16(data, pos, _minor, options) {
    return new Token(Type.negint, -1 - readUint16(data, pos + 1, options), 3);
  }
  function decodeNegint32(data, pos, _minor, options) {
    return new Token(Type.negint, -1 - readUint32(data, pos + 1, options), 5);
  }
  var neg1b = BigInt(-1);
  var pos1b = BigInt(1);
  function decodeNegint64(data, pos, _minor, options) {
    const int = readUint64(data, pos + 1, options);
    if (typeof int !== "bigint") {
      const value = -1 - int;
      if (value >= Number.MIN_SAFE_INTEGER) {
        return new Token(Type.negint, value, 9);
      }
    }
    if (options.allowBigInt !== true) {
      throw new Error(`${decodeErrPrefix} integers outside of the safe integer range are not supported`);
    }
    return new Token(Type.negint, neg1b - BigInt(int), 9);
  }
  function encodeNegint(buf2, token) {
    const negint = token.value;
    const unsigned = typeof negint === "bigint" ? negint * neg1b - pos1b : negint * -1 - 1;
    encodeUintValue(buf2, token.type.majorEncoded, unsigned);
  }
  encodeNegint.encodedSize = function encodedSize3(token) {
    const negint = token.value;
    const unsigned = typeof negint === "bigint" ? negint * neg1b - pos1b : negint * -1 - 1;
    if (unsigned < uintBoundaries[0]) {
      return 1;
    }
    if (unsigned < uintBoundaries[1]) {
      return 2;
    }
    if (unsigned < uintBoundaries[2]) {
      return 3;
    }
    if (unsigned < uintBoundaries[3]) {
      return 5;
    }
    return 9;
  };
  encodeNegint.compareTokens = function compareTokens2(tok1, tok2) {
    return tok1.value < tok2.value ? 1 : tok1.value > tok2.value ? -1 : (
      /* c8 ignore next */
      0
    );
  };

  // ../../node_modules/.pnpm/cborg@4.1.3/node_modules/cborg/lib/2bytes.js
  function toToken(data, pos, prefix, length3) {
    assertEnoughData(data, pos, prefix + length3);
    const buf2 = slice(data, pos + prefix, pos + prefix + length3);
    return new Token(Type.bytes, buf2, prefix + length3);
  }
  function decodeBytesCompact(data, pos, minor, _options) {
    return toToken(data, pos, 1, minor);
  }
  function decodeBytes8(data, pos, _minor, options) {
    return toToken(data, pos, 2, readUint8(data, pos + 1, options));
  }
  function decodeBytes16(data, pos, _minor, options) {
    return toToken(data, pos, 3, readUint16(data, pos + 1, options));
  }
  function decodeBytes32(data, pos, _minor, options) {
    return toToken(data, pos, 5, readUint32(data, pos + 1, options));
  }
  function decodeBytes64(data, pos, _minor, options) {
    const l = readUint64(data, pos + 1, options);
    if (typeof l === "bigint") {
      throw new Error(`${decodeErrPrefix} 64-bit integer bytes lengths not supported`);
    }
    return toToken(data, pos, 9, l);
  }
  function tokenBytes(token) {
    if (token.encodedBytes === void 0) {
      token.encodedBytes = token.type === Type.string ? fromString(token.value) : token.value;
    }
    return token.encodedBytes;
  }
  function encodeBytes(buf2, token) {
    const bytes = tokenBytes(token);
    encodeUintValue(buf2, token.type.majorEncoded, bytes.length);
    buf2.push(bytes);
  }
  encodeBytes.encodedSize = function encodedSize4(token) {
    const bytes = tokenBytes(token);
    return encodeUintValue.encodedSize(bytes.length) + bytes.length;
  };
  encodeBytes.compareTokens = function compareTokens3(tok1, tok2) {
    return compareBytes(tokenBytes(tok1), tokenBytes(tok2));
  };
  function compareBytes(b1, b2) {
    return b1.length < b2.length ? -1 : b1.length > b2.length ? 1 : compare(b1, b2);
  }

  // ../../node_modules/.pnpm/cborg@4.1.3/node_modules/cborg/lib/3string.js
  function toToken2(data, pos, prefix, length3, options) {
    const totLength = prefix + length3;
    assertEnoughData(data, pos, totLength);
    const tok = new Token(Type.string, toString(data, pos + prefix, pos + totLength), totLength);
    if (options.retainStringBytes === true) {
      tok.byteValue = slice(data, pos + prefix, pos + totLength);
    }
    return tok;
  }
  function decodeStringCompact(data, pos, minor, options) {
    return toToken2(data, pos, 1, minor, options);
  }
  function decodeString8(data, pos, _minor, options) {
    return toToken2(data, pos, 2, readUint8(data, pos + 1, options), options);
  }
  function decodeString16(data, pos, _minor, options) {
    return toToken2(data, pos, 3, readUint16(data, pos + 1, options), options);
  }
  function decodeString32(data, pos, _minor, options) {
    return toToken2(data, pos, 5, readUint32(data, pos + 1, options), options);
  }
  function decodeString64(data, pos, _minor, options) {
    const l = readUint64(data, pos + 1, options);
    if (typeof l === "bigint") {
      throw new Error(`${decodeErrPrefix} 64-bit integer string lengths not supported`);
    }
    return toToken2(data, pos, 9, l, options);
  }
  var encodeString = encodeBytes;

  // ../../node_modules/.pnpm/cborg@4.1.3/node_modules/cborg/lib/4array.js
  function toToken3(_data, _pos, prefix, length3) {
    return new Token(Type.array, length3, prefix);
  }
  function decodeArrayCompact(data, pos, minor, _options) {
    return toToken3(data, pos, 1, minor);
  }
  function decodeArray8(data, pos, _minor, options) {
    return toToken3(data, pos, 2, readUint8(data, pos + 1, options));
  }
  function decodeArray16(data, pos, _minor, options) {
    return toToken3(data, pos, 3, readUint16(data, pos + 1, options));
  }
  function decodeArray32(data, pos, _minor, options) {
    return toToken3(data, pos, 5, readUint32(data, pos + 1, options));
  }
  function decodeArray64(data, pos, _minor, options) {
    const l = readUint64(data, pos + 1, options);
    if (typeof l === "bigint") {
      throw new Error(`${decodeErrPrefix} 64-bit integer array lengths not supported`);
    }
    return toToken3(data, pos, 9, l);
  }
  function decodeArrayIndefinite(data, pos, _minor, options) {
    if (options.allowIndefinite === false) {
      throw new Error(`${decodeErrPrefix} indefinite length items not allowed`);
    }
    return toToken3(data, pos, 1, Infinity);
  }
  function encodeArray(buf2, token) {
    encodeUintValue(buf2, Type.array.majorEncoded, token.value);
  }
  encodeArray.compareTokens = encodeUint.compareTokens;
  encodeArray.encodedSize = function encodedSize5(token) {
    return encodeUintValue.encodedSize(token.value);
  };

  // ../../node_modules/.pnpm/cborg@4.1.3/node_modules/cborg/lib/5map.js
  function toToken4(_data, _pos, prefix, length3) {
    return new Token(Type.map, length3, prefix);
  }
  function decodeMapCompact(data, pos, minor, _options) {
    return toToken4(data, pos, 1, minor);
  }
  function decodeMap8(data, pos, _minor, options) {
    return toToken4(data, pos, 2, readUint8(data, pos + 1, options));
  }
  function decodeMap16(data, pos, _minor, options) {
    return toToken4(data, pos, 3, readUint16(data, pos + 1, options));
  }
  function decodeMap32(data, pos, _minor, options) {
    return toToken4(data, pos, 5, readUint32(data, pos + 1, options));
  }
  function decodeMap64(data, pos, _minor, options) {
    const l = readUint64(data, pos + 1, options);
    if (typeof l === "bigint") {
      throw new Error(`${decodeErrPrefix} 64-bit integer map lengths not supported`);
    }
    return toToken4(data, pos, 9, l);
  }
  function decodeMapIndefinite(data, pos, _minor, options) {
    if (options.allowIndefinite === false) {
      throw new Error(`${decodeErrPrefix} indefinite length items not allowed`);
    }
    return toToken4(data, pos, 1, Infinity);
  }
  function encodeMap(buf2, token) {
    encodeUintValue(buf2, Type.map.majorEncoded, token.value);
  }
  encodeMap.compareTokens = encodeUint.compareTokens;
  encodeMap.encodedSize = function encodedSize6(token) {
    return encodeUintValue.encodedSize(token.value);
  };

  // ../../node_modules/.pnpm/cborg@4.1.3/node_modules/cborg/lib/6tag.js
  function decodeTagCompact(_data, _pos, minor, _options) {
    return new Token(Type.tag, minor, 1);
  }
  function decodeTag8(data, pos, _minor, options) {
    return new Token(Type.tag, readUint8(data, pos + 1, options), 2);
  }
  function decodeTag16(data, pos, _minor, options) {
    return new Token(Type.tag, readUint16(data, pos + 1, options), 3);
  }
  function decodeTag32(data, pos, _minor, options) {
    return new Token(Type.tag, readUint32(data, pos + 1, options), 5);
  }
  function decodeTag64(data, pos, _minor, options) {
    return new Token(Type.tag, readUint64(data, pos + 1, options), 9);
  }
  function encodeTag(buf2, token) {
    encodeUintValue(buf2, Type.tag.majorEncoded, token.value);
  }
  encodeTag.compareTokens = encodeUint.compareTokens;
  encodeTag.encodedSize = function encodedSize7(token) {
    return encodeUintValue.encodedSize(token.value);
  };

  // ../../node_modules/.pnpm/cborg@4.1.3/node_modules/cborg/lib/7float.js
  var MINOR_FALSE = 20;
  var MINOR_TRUE = 21;
  var MINOR_NULL = 22;
  var MINOR_UNDEFINED = 23;
  function decodeUndefined(_data, _pos, _minor, options) {
    if (options.allowUndefined === false) {
      throw new Error(`${decodeErrPrefix} undefined values are not supported`);
    } else if (options.coerceUndefinedToNull === true) {
      return new Token(Type.null, null, 1);
    }
    return new Token(Type.undefined, void 0, 1);
  }
  function decodeBreak(_data, _pos, _minor, options) {
    if (options.allowIndefinite === false) {
      throw new Error(`${decodeErrPrefix} indefinite length items not allowed`);
    }
    return new Token(Type.break, void 0, 1);
  }
  function createToken(value, bytes, options) {
    if (options) {
      if (options.allowNaN === false && Number.isNaN(value)) {
        throw new Error(`${decodeErrPrefix} NaN values are not supported`);
      }
      if (options.allowInfinity === false && (value === Infinity || value === -Infinity)) {
        throw new Error(`${decodeErrPrefix} Infinity values are not supported`);
      }
    }
    return new Token(Type.float, value, bytes);
  }
  function decodeFloat16(data, pos, _minor, options) {
    return createToken(readFloat16(data, pos + 1), 3, options);
  }
  function decodeFloat32(data, pos, _minor, options) {
    return createToken(readFloat32(data, pos + 1), 5, options);
  }
  function decodeFloat64(data, pos, _minor, options) {
    return createToken(readFloat64(data, pos + 1), 9, options);
  }
  function encodeFloat(buf2, token, options) {
    const float = token.value;
    if (float === false) {
      buf2.push([Type.float.majorEncoded | MINOR_FALSE]);
    } else if (float === true) {
      buf2.push([Type.float.majorEncoded | MINOR_TRUE]);
    } else if (float === null) {
      buf2.push([Type.float.majorEncoded | MINOR_NULL]);
    } else if (float === void 0) {
      buf2.push([Type.float.majorEncoded | MINOR_UNDEFINED]);
    } else {
      let decoded;
      let success = false;
      if (!options || options.float64 !== true) {
        encodeFloat16(float);
        decoded = readFloat16(ui8a, 1);
        if (float === decoded || Number.isNaN(float)) {
          ui8a[0] = 249;
          buf2.push(ui8a.slice(0, 3));
          success = true;
        } else {
          encodeFloat32(float);
          decoded = readFloat32(ui8a, 1);
          if (float === decoded) {
            ui8a[0] = 250;
            buf2.push(ui8a.slice(0, 5));
            success = true;
          }
        }
      }
      if (!success) {
        encodeFloat64(float);
        decoded = readFloat64(ui8a, 1);
        ui8a[0] = 251;
        buf2.push(ui8a.slice(0, 9));
      }
    }
  }
  encodeFloat.encodedSize = function encodedSize8(token, options) {
    const float = token.value;
    if (float === false || float === true || float === null || float === void 0) {
      return 1;
    }
    if (!options || options.float64 !== true) {
      encodeFloat16(float);
      let decoded = readFloat16(ui8a, 1);
      if (float === decoded || Number.isNaN(float)) {
        return 3;
      }
      encodeFloat32(float);
      decoded = readFloat32(ui8a, 1);
      if (float === decoded) {
        return 5;
      }
    }
    return 9;
  };
  var buffer = new ArrayBuffer(9);
  var dataView = new DataView(buffer, 1);
  var ui8a = new Uint8Array(buffer, 0);
  function encodeFloat16(inp) {
    if (inp === Infinity) {
      dataView.setUint16(0, 31744, false);
    } else if (inp === -Infinity) {
      dataView.setUint16(0, 64512, false);
    } else if (Number.isNaN(inp)) {
      dataView.setUint16(0, 32256, false);
    } else {
      dataView.setFloat32(0, inp);
      const valu32 = dataView.getUint32(0);
      const exponent = (valu32 & 2139095040) >> 23;
      const mantissa = valu32 & 8388607;
      if (exponent === 255) {
        dataView.setUint16(0, 31744, false);
      } else if (exponent === 0) {
        dataView.setUint16(0, (inp & 2147483648) >> 16 | mantissa >> 13, false);
      } else {
        const logicalExponent = exponent - 127;
        if (logicalExponent < -24) {
          dataView.setUint16(0, 0);
        } else if (logicalExponent < -14) {
          dataView.setUint16(0, (valu32 & 2147483648) >> 16 | /* sign bit */
          1 << 24 + logicalExponent, false);
        } else {
          dataView.setUint16(0, (valu32 & 2147483648) >> 16 | logicalExponent + 15 << 10 | mantissa >> 13, false);
        }
      }
    }
  }
  function readFloat16(ui8a2, pos) {
    if (ui8a2.length - pos < 2) {
      throw new Error(`${decodeErrPrefix} not enough data for float16`);
    }
    const half = (ui8a2[pos] << 8) + ui8a2[pos + 1];
    if (half === 31744) {
      return Infinity;
    }
    if (half === 64512) {
      return -Infinity;
    }
    if (half === 32256) {
      return NaN;
    }
    const exp = half >> 10 & 31;
    const mant = half & 1023;
    let val;
    if (exp === 0) {
      val = mant * 2 ** -24;
    } else if (exp !== 31) {
      val = (mant + 1024) * 2 ** (exp - 25);
    } else {
      val = mant === 0 ? Infinity : NaN;
    }
    return half & 32768 ? -val : val;
  }
  function encodeFloat32(inp) {
    dataView.setFloat32(0, inp, false);
  }
  function readFloat32(ui8a2, pos) {
    if (ui8a2.length - pos < 4) {
      throw new Error(`${decodeErrPrefix} not enough data for float32`);
    }
    const offset = (ui8a2.byteOffset || 0) + pos;
    return new DataView(ui8a2.buffer, offset, 4).getFloat32(0, false);
  }
  function encodeFloat64(inp) {
    dataView.setFloat64(0, inp, false);
  }
  function readFloat64(ui8a2, pos) {
    if (ui8a2.length - pos < 8) {
      throw new Error(`${decodeErrPrefix} not enough data for float64`);
    }
    const offset = (ui8a2.byteOffset || 0) + pos;
    return new DataView(ui8a2.buffer, offset, 8).getFloat64(0, false);
  }
  encodeFloat.compareTokens = encodeUint.compareTokens;

  // ../../node_modules/.pnpm/cborg@4.1.3/node_modules/cborg/lib/jump.js
  function invalidMinor(data, pos, minor) {
    throw new Error(`${decodeErrPrefix} encountered invalid minor (${minor}) for major ${data[pos] >>> 5}`);
  }
  function errorer(msg) {
    return () => {
      throw new Error(`${decodeErrPrefix} ${msg}`);
    };
  }
  var jump = [];
  for (let i = 0; i <= 23; i++) {
    jump[i] = invalidMinor;
  }
  jump[24] = decodeUint8;
  jump[25] = decodeUint16;
  jump[26] = decodeUint32;
  jump[27] = decodeUint64;
  jump[28] = invalidMinor;
  jump[29] = invalidMinor;
  jump[30] = invalidMinor;
  jump[31] = invalidMinor;
  for (let i = 32; i <= 55; i++) {
    jump[i] = invalidMinor;
  }
  jump[56] = decodeNegint8;
  jump[57] = decodeNegint16;
  jump[58] = decodeNegint32;
  jump[59] = decodeNegint64;
  jump[60] = invalidMinor;
  jump[61] = invalidMinor;
  jump[62] = invalidMinor;
  jump[63] = invalidMinor;
  for (let i = 64; i <= 87; i++) {
    jump[i] = decodeBytesCompact;
  }
  jump[88] = decodeBytes8;
  jump[89] = decodeBytes16;
  jump[90] = decodeBytes32;
  jump[91] = decodeBytes64;
  jump[92] = invalidMinor;
  jump[93] = invalidMinor;
  jump[94] = invalidMinor;
  jump[95] = errorer("indefinite length bytes/strings are not supported");
  for (let i = 96; i <= 119; i++) {
    jump[i] = decodeStringCompact;
  }
  jump[120] = decodeString8;
  jump[121] = decodeString16;
  jump[122] = decodeString32;
  jump[123] = decodeString64;
  jump[124] = invalidMinor;
  jump[125] = invalidMinor;
  jump[126] = invalidMinor;
  jump[127] = errorer("indefinite length bytes/strings are not supported");
  for (let i = 128; i <= 151; i++) {
    jump[i] = decodeArrayCompact;
  }
  jump[152] = decodeArray8;
  jump[153] = decodeArray16;
  jump[154] = decodeArray32;
  jump[155] = decodeArray64;
  jump[156] = invalidMinor;
  jump[157] = invalidMinor;
  jump[158] = invalidMinor;
  jump[159] = decodeArrayIndefinite;
  for (let i = 160; i <= 183; i++) {
    jump[i] = decodeMapCompact;
  }
  jump[184] = decodeMap8;
  jump[185] = decodeMap16;
  jump[186] = decodeMap32;
  jump[187] = decodeMap64;
  jump[188] = invalidMinor;
  jump[189] = invalidMinor;
  jump[190] = invalidMinor;
  jump[191] = decodeMapIndefinite;
  for (let i = 192; i <= 215; i++) {
    jump[i] = decodeTagCompact;
  }
  jump[216] = decodeTag8;
  jump[217] = decodeTag16;
  jump[218] = decodeTag32;
  jump[219] = decodeTag64;
  jump[220] = invalidMinor;
  jump[221] = invalidMinor;
  jump[222] = invalidMinor;
  jump[223] = invalidMinor;
  for (let i = 224; i <= 243; i++) {
    jump[i] = errorer("simple values are not supported");
  }
  jump[244] = invalidMinor;
  jump[245] = invalidMinor;
  jump[246] = invalidMinor;
  jump[247] = decodeUndefined;
  jump[248] = errorer("simple values are not supported");
  jump[249] = decodeFloat16;
  jump[250] = decodeFloat32;
  jump[251] = decodeFloat64;
  jump[252] = invalidMinor;
  jump[253] = invalidMinor;
  jump[254] = invalidMinor;
  jump[255] = decodeBreak;
  var quick = [];
  for (let i = 0; i < 24; i++) {
    quick[i] = new Token(Type.uint, i, 1);
  }
  for (let i = -1; i >= -24; i--) {
    quick[31 - i] = new Token(Type.negint, i, 1);
  }
  quick[64] = new Token(Type.bytes, new Uint8Array(0), 1);
  quick[96] = new Token(Type.string, "", 1);
  quick[128] = new Token(Type.array, 0, 1);
  quick[160] = new Token(Type.map, 0, 1);
  quick[244] = new Token(Type.false, false, 1);
  quick[245] = new Token(Type.true, true, 1);
  quick[246] = new Token(Type.null, null, 1);
  function quickEncodeToken(token) {
    switch (token.type) {
      case Type.false:
        return fromArray([244]);
      case Type.true:
        return fromArray([245]);
      case Type.null:
        return fromArray([246]);
      case Type.bytes:
        if (!token.value.length) {
          return fromArray([64]);
        }
        return;
      case Type.string:
        if (token.value === "") {
          return fromArray([96]);
        }
        return;
      case Type.array:
        if (token.value === 0) {
          return fromArray([128]);
        }
        return;
      case Type.map:
        if (token.value === 0) {
          return fromArray([160]);
        }
        return;
      case Type.uint:
        if (token.value < 24) {
          return fromArray([Number(token.value)]);
        }
        return;
      case Type.negint:
        if (token.value >= -24) {
          return fromArray([31 - Number(token.value)]);
        }
    }
  }

  // ../../node_modules/.pnpm/cborg@4.1.3/node_modules/cborg/lib/encode.js
  var defaultEncodeOptions = {
    float64: false,
    mapSorter,
    quickEncodeToken
  };
  function makeCborEncoders() {
    const encoders = [];
    encoders[Type.uint.major] = encodeUint;
    encoders[Type.negint.major] = encodeNegint;
    encoders[Type.bytes.major] = encodeBytes;
    encoders[Type.string.major] = encodeString;
    encoders[Type.array.major] = encodeArray;
    encoders[Type.map.major] = encodeMap;
    encoders[Type.tag.major] = encodeTag;
    encoders[Type.float.major] = encodeFloat;
    return encoders;
  }
  var cborEncoders = makeCborEncoders();
  var buf = new Bl();
  var Ref = class _Ref {
    /**
     * @param {object|any[]} obj
     * @param {Reference|undefined} parent
     */
    constructor(obj, parent) {
      this.obj = obj;
      this.parent = parent;
    }
    /**
     * @param {object|any[]} obj
     * @returns {boolean}
     */
    includes(obj) {
      let p = this;
      do {
        if (p.obj === obj) {
          return true;
        }
      } while (p = p.parent);
      return false;
    }
    /**
     * @param {Reference|undefined} stack
     * @param {object|any[]} obj
     * @returns {Reference}
     */
    static createCheck(stack, obj) {
      if (stack && stack.includes(obj)) {
        throw new Error(`${encodeErrPrefix} object contains circular references`);
      }
      return new _Ref(obj, stack);
    }
  };
  var simpleTokens = {
    null: new Token(Type.null, null),
    undefined: new Token(Type.undefined, void 0),
    true: new Token(Type.true, true),
    false: new Token(Type.false, false),
    emptyArray: new Token(Type.array, 0),
    emptyMap: new Token(Type.map, 0)
  };
  var typeEncoders = {
    /**
     * @param {any} obj
     * @param {string} _typ
     * @param {EncodeOptions} _options
     * @param {Reference} [_refStack]
     * @returns {TokenOrNestedTokens}
     */
    number(obj, _typ, _options, _refStack) {
      if (!Number.isInteger(obj) || !Number.isSafeInteger(obj)) {
        return new Token(Type.float, obj);
      } else if (obj >= 0) {
        return new Token(Type.uint, obj);
      } else {
        return new Token(Type.negint, obj);
      }
    },
    /**
     * @param {any} obj
     * @param {string} _typ
     * @param {EncodeOptions} _options
     * @param {Reference} [_refStack]
     * @returns {TokenOrNestedTokens}
     */
    bigint(obj, _typ, _options, _refStack) {
      if (obj >= BigInt(0)) {
        return new Token(Type.uint, obj);
      } else {
        return new Token(Type.negint, obj);
      }
    },
    /**
     * @param {any} obj
     * @param {string} _typ
     * @param {EncodeOptions} _options
     * @param {Reference} [_refStack]
     * @returns {TokenOrNestedTokens}
     */
    Uint8Array(obj, _typ, _options, _refStack) {
      return new Token(Type.bytes, obj);
    },
    /**
     * @param {any} obj
     * @param {string} _typ
     * @param {EncodeOptions} _options
     * @param {Reference} [_refStack]
     * @returns {TokenOrNestedTokens}
     */
    string(obj, _typ, _options, _refStack) {
      return new Token(Type.string, obj);
    },
    /**
     * @param {any} obj
     * @param {string} _typ
     * @param {EncodeOptions} _options
     * @param {Reference} [_refStack]
     * @returns {TokenOrNestedTokens}
     */
    boolean(obj, _typ, _options, _refStack) {
      return obj ? simpleTokens.true : simpleTokens.false;
    },
    /**
     * @param {any} _obj
     * @param {string} _typ
     * @param {EncodeOptions} _options
     * @param {Reference} [_refStack]
     * @returns {TokenOrNestedTokens}
     */
    null(_obj, _typ, _options, _refStack) {
      return simpleTokens.null;
    },
    /**
     * @param {any} _obj
     * @param {string} _typ
     * @param {EncodeOptions} _options
     * @param {Reference} [_refStack]
     * @returns {TokenOrNestedTokens}
     */
    undefined(_obj, _typ, _options, _refStack) {
      return simpleTokens.undefined;
    },
    /**
     * @param {any} obj
     * @param {string} _typ
     * @param {EncodeOptions} _options
     * @param {Reference} [_refStack]
     * @returns {TokenOrNestedTokens}
     */
    ArrayBuffer(obj, _typ, _options, _refStack) {
      return new Token(Type.bytes, new Uint8Array(obj));
    },
    /**
     * @param {any} obj
     * @param {string} _typ
     * @param {EncodeOptions} _options
     * @param {Reference} [_refStack]
     * @returns {TokenOrNestedTokens}
     */
    DataView(obj, _typ, _options, _refStack) {
      return new Token(Type.bytes, new Uint8Array(obj.buffer, obj.byteOffset, obj.byteLength));
    },
    /**
     * @param {any} obj
     * @param {string} _typ
     * @param {EncodeOptions} options
     * @param {Reference} [refStack]
     * @returns {TokenOrNestedTokens}
     */
    Array(obj, _typ, options, refStack) {
      if (!obj.length) {
        if (options.addBreakTokens === true) {
          return [simpleTokens.emptyArray, new Token(Type.break)];
        }
        return simpleTokens.emptyArray;
      }
      refStack = Ref.createCheck(refStack, obj);
      const entries = [];
      let i = 0;
      for (const e of obj) {
        entries[i++] = objectToTokens(e, options, refStack);
      }
      if (options.addBreakTokens) {
        return [new Token(Type.array, obj.length), entries, new Token(Type.break)];
      }
      return [new Token(Type.array, obj.length), entries];
    },
    /**
     * @param {any} obj
     * @param {string} typ
     * @param {EncodeOptions} options
     * @param {Reference} [refStack]
     * @returns {TokenOrNestedTokens}
     */
    Object(obj, typ, options, refStack) {
      const isMap = typ !== "Object";
      const keys = isMap ? obj.keys() : Object.keys(obj);
      const length3 = isMap ? obj.size : keys.length;
      if (!length3) {
        if (options.addBreakTokens === true) {
          return [simpleTokens.emptyMap, new Token(Type.break)];
        }
        return simpleTokens.emptyMap;
      }
      refStack = Ref.createCheck(refStack, obj);
      const entries = [];
      let i = 0;
      for (const key of keys) {
        entries[i++] = [
          objectToTokens(key, options, refStack),
          objectToTokens(isMap ? obj.get(key) : obj[key], options, refStack)
        ];
      }
      sortMapEntries(entries, options);
      if (options.addBreakTokens) {
        return [new Token(Type.map, length3), entries, new Token(Type.break)];
      }
      return [new Token(Type.map, length3), entries];
    }
  };
  typeEncoders.Map = typeEncoders.Object;
  typeEncoders.Buffer = typeEncoders.Uint8Array;
  for (const typ of "Uint8Clamped Uint16 Uint32 Int8 Int16 Int32 BigUint64 BigInt64 Float32 Float64".split(" ")) {
    typeEncoders[`${typ}Array`] = typeEncoders.DataView;
  }
  function objectToTokens(obj, options = {}, refStack) {
    const typ = is(obj);
    const customTypeEncoder = options && options.typeEncoders && /** @type {OptionalTypeEncoder} */
    options.typeEncoders[typ] || typeEncoders[typ];
    if (typeof customTypeEncoder === "function") {
      const tokens = customTypeEncoder(obj, typ, options, refStack);
      if (tokens != null) {
        return tokens;
      }
    }
    const typeEncoder = typeEncoders[typ];
    if (!typeEncoder) {
      throw new Error(`${encodeErrPrefix} unsupported type: ${typ}`);
    }
    return typeEncoder(obj, typ, options, refStack);
  }
  function sortMapEntries(entries, options) {
    if (options.mapSorter) {
      entries.sort(options.mapSorter);
    }
  }
  function mapSorter(e1, e2) {
    const keyToken1 = Array.isArray(e1[0]) ? e1[0][0] : e1[0];
    const keyToken2 = Array.isArray(e2[0]) ? e2[0][0] : e2[0];
    if (keyToken1.type !== keyToken2.type) {
      return keyToken1.type.compare(keyToken2.type);
    }
    const major = keyToken1.type.major;
    const tcmp = cborEncoders[major].compareTokens(keyToken1, keyToken2);
    if (tcmp === 0) {
      console.warn("WARNING: complex key types used, CBOR key sorting guarantees are gone");
    }
    return tcmp;
  }
  function tokensToEncoded(buf2, tokens, encoders, options) {
    if (Array.isArray(tokens)) {
      for (const token of tokens) {
        tokensToEncoded(buf2, token, encoders, options);
      }
    } else {
      encoders[tokens.type.major](buf2, tokens, options);
    }
  }
  function encodeCustom(data, encoders, options) {
    const tokens = objectToTokens(data, options);
    if (!Array.isArray(tokens) && options.quickEncodeToken) {
      const quickBytes = options.quickEncodeToken(tokens);
      if (quickBytes) {
        return quickBytes;
      }
      const encoder = encoders[tokens.type.major];
      if (encoder.encodedSize) {
        const size = encoder.encodedSize(tokens, options);
        const buf2 = new Bl(size);
        encoder(buf2, tokens, options);
        if (buf2.chunks.length !== 1) {
          throw new Error(`Unexpected error: pre-calculated length for ${tokens} was wrong`);
        }
        return asU8A(buf2.chunks[0]);
      }
    }
    buf.reset();
    tokensToEncoded(buf, tokens, encoders, options);
    return buf.toBytes(true);
  }
  function encode(data, options) {
    options = Object.assign({}, defaultEncodeOptions, options);
    return encodeCustom(data, cborEncoders, options);
  }

  // ../../node_modules/.pnpm/cborg@4.1.3/node_modules/cborg/lib/decode.js
  var defaultDecodeOptions = {
    strict: false,
    allowIndefinite: true,
    allowUndefined: true,
    allowBigInt: true
  };
  var Tokeniser = class {
    /**
     * @param {Uint8Array} data
     * @param {DecodeOptions} options
     */
    constructor(data, options = {}) {
      this._pos = 0;
      this.data = data;
      this.options = options;
    }
    pos() {
      return this._pos;
    }
    done() {
      return this._pos >= this.data.length;
    }
    next() {
      const byt = this.data[this._pos];
      let token = quick[byt];
      if (token === void 0) {
        const decoder = jump[byt];
        if (!decoder) {
          throw new Error(`${decodeErrPrefix} no decoder for major type ${byt >>> 5} (byte 0x${byt.toString(16).padStart(2, "0")})`);
        }
        const minor = byt & 31;
        token = decoder(this.data, this._pos, minor, this.options);
      }
      this._pos += token.encodedLength;
      return token;
    }
  };
  var DONE = Symbol.for("DONE");
  var BREAK = Symbol.for("BREAK");
  function tokenToArray(token, tokeniser, options) {
    const arr = [];
    for (let i = 0; i < token.value; i++) {
      const value = tokensToObject(tokeniser, options);
      if (value === BREAK) {
        if (token.value === Infinity) {
          break;
        }
        throw new Error(`${decodeErrPrefix} got unexpected break to lengthed array`);
      }
      if (value === DONE) {
        throw new Error(`${decodeErrPrefix} found array but not enough entries (got ${i}, expected ${token.value})`);
      }
      arr[i] = value;
    }
    return arr;
  }
  function tokenToMap(token, tokeniser, options) {
    const useMaps = options.useMaps === true;
    const obj = useMaps ? void 0 : {};
    const m = useMaps ? /* @__PURE__ */ new Map() : void 0;
    for (let i = 0; i < token.value; i++) {
      const key = tokensToObject(tokeniser, options);
      if (key === BREAK) {
        if (token.value === Infinity) {
          break;
        }
        throw new Error(`${decodeErrPrefix} got unexpected break to lengthed map`);
      }
      if (key === DONE) {
        throw new Error(`${decodeErrPrefix} found map but not enough entries (got ${i} [no key], expected ${token.value})`);
      }
      if (useMaps !== true && typeof key !== "string") {
        throw new Error(`${decodeErrPrefix} non-string keys not supported (got ${typeof key})`);
      }
      if (options.rejectDuplicateMapKeys === true) {
        if (useMaps && m.has(key) || !useMaps && key in obj) {
          throw new Error(`${decodeErrPrefix} found repeat map key "${key}"`);
        }
      }
      const value = tokensToObject(tokeniser, options);
      if (value === DONE) {
        throw new Error(`${decodeErrPrefix} found map but not enough entries (got ${i} [no value], expected ${token.value})`);
      }
      if (useMaps) {
        m.set(key, value);
      } else {
        obj[key] = value;
      }
    }
    return useMaps ? m : obj;
  }
  function tokensToObject(tokeniser, options) {
    if (tokeniser.done()) {
      return DONE;
    }
    const token = tokeniser.next();
    if (token.type === Type.break) {
      return BREAK;
    }
    if (token.type.terminal) {
      return token.value;
    }
    if (token.type === Type.array) {
      return tokenToArray(token, tokeniser, options);
    }
    if (token.type === Type.map) {
      return tokenToMap(token, tokeniser, options);
    }
    if (token.type === Type.tag) {
      if (options.tags && typeof options.tags[token.value] === "function") {
        const tagged = tokensToObject(tokeniser, options);
        return options.tags[token.value](tagged);
      }
      throw new Error(`${decodeErrPrefix} tag not supported (${token.value})`);
    }
    throw new Error("unsupported");
  }
  function decodeFirst(data, options) {
    if (!(data instanceof Uint8Array)) {
      throw new Error(`${decodeErrPrefix} data to decode must be a Uint8Array`);
    }
    options = Object.assign({}, defaultDecodeOptions, options);
    const tokeniser = options.tokenizer || new Tokeniser(data, options);
    const decoded = tokensToObject(tokeniser, options);
    if (decoded === DONE) {
      throw new Error(`${decodeErrPrefix} did not find any content to decode`);
    }
    if (decoded === BREAK) {
      throw new Error(`${decodeErrPrefix} got unexpected break`);
    }
    return [decoded, data.subarray(tokeniser.pos())];
  }
  function decode(data, options) {
    const [decoded, remainder] = decodeFirst(data, options);
    if (remainder.length > 0) {
      throw new Error(`${decodeErrPrefix} too many terminals, data makes no sense`);
    }
    return decoded;
  }

  // ../../node_modules/.pnpm/cborg@4.1.3/node_modules/cborg/lib/json/encode.js
  var JSONEncoder = class extends Array {
    constructor() {
      super();
      this.inRecursive = [];
    }
    /**
     * @param {Bl} buf
     */
    prefix(buf2) {
      const recurs = this.inRecursive[this.inRecursive.length - 1];
      if (recurs) {
        if (recurs.type === Type.array) {
          recurs.elements++;
          if (recurs.elements !== 1) {
            buf2.push([44]);
          }
        }
        if (recurs.type === Type.map) {
          recurs.elements++;
          if (recurs.elements !== 1) {
            if (recurs.elements % 2 === 1) {
              buf2.push([44]);
            } else {
              buf2.push([58]);
            }
          }
        }
      }
    }
    /**
     * @param {Bl} buf
     * @param {Token} token
     */
    [Type.uint.major](buf2, token) {
      this.prefix(buf2);
      const is2 = String(token.value);
      const isa = [];
      for (let i = 0; i < is2.length; i++) {
        isa[i] = is2.charCodeAt(i);
      }
      buf2.push(isa);
    }
    /**
     * @param {Bl} buf
     * @param {Token} token
     */
    [Type.negint.major](buf2, token) {
      this[Type.uint.major](buf2, token);
    }
    /**
     * @param {Bl} _buf
     * @param {Token} _token
     */
    [Type.bytes.major](_buf, _token) {
      throw new Error(`${encodeErrPrefix} unsupported type: Uint8Array`);
    }
    /**
     * @param {Bl} buf
     * @param {Token} token
     */
    [Type.string.major](buf2, token) {
      this.prefix(buf2);
      const byts = fromString(JSON.stringify(token.value));
      buf2.push(byts.length > 32 ? asU8A(byts) : byts);
    }
    /**
     * @param {Bl} buf
     * @param {Token} _token
     */
    [Type.array.major](buf2, _token) {
      this.prefix(buf2);
      this.inRecursive.push({ type: Type.array, elements: 0 });
      buf2.push([91]);
    }
    /**
     * @param {Bl} buf
     * @param {Token} _token
     */
    [Type.map.major](buf2, _token) {
      this.prefix(buf2);
      this.inRecursive.push({ type: Type.map, elements: 0 });
      buf2.push([123]);
    }
    /**
     * @param {Bl} _buf
     * @param {Token} _token
     */
    [Type.tag.major](_buf, _token) {
    }
    /**
     * @param {Bl} buf
     * @param {Token} token
     */
    [Type.float.major](buf2, token) {
      if (token.type.name === "break") {
        const recurs = this.inRecursive.pop();
        if (recurs) {
          if (recurs.type === Type.array) {
            buf2.push([93]);
          } else if (recurs.type === Type.map) {
            buf2.push([125]);
          } else {
            throw new Error("Unexpected recursive type; this should not happen!");
          }
          return;
        }
        throw new Error("Unexpected break; this should not happen!");
      }
      if (token.value === void 0) {
        throw new Error(`${encodeErrPrefix} unsupported type: undefined`);
      }
      this.prefix(buf2);
      if (token.type.name === "true") {
        buf2.push([116, 114, 117, 101]);
        return;
      } else if (token.type.name === "false") {
        buf2.push([102, 97, 108, 115, 101]);
        return;
      } else if (token.type.name === "null") {
        buf2.push([110, 117, 108, 108]);
        return;
      }
      const is2 = String(token.value);
      const isa = [];
      let dp = false;
      for (let i = 0; i < is2.length; i++) {
        isa[i] = is2.charCodeAt(i);
        if (!dp && (isa[i] === 46 || isa[i] === 101 || isa[i] === 69)) {
          dp = true;
        }
      }
      if (!dp) {
        isa.push(46);
        isa.push(48);
      }
      buf2.push(isa);
    }
  };
  function mapSorter2(e1, e2) {
    if (Array.isArray(e1[0]) || Array.isArray(e2[0])) {
      throw new Error(`${encodeErrPrefix} complex map keys are not supported`);
    }
    const keyToken1 = e1[0];
    const keyToken2 = e2[0];
    if (keyToken1.type !== Type.string || keyToken2.type !== Type.string) {
      throw new Error(`${encodeErrPrefix} non-string map keys are not supported`);
    }
    if (keyToken1 < keyToken2) {
      return -1;
    }
    if (keyToken1 > keyToken2) {
      return 1;
    }
    throw new Error(`${encodeErrPrefix} unexpected duplicate map keys, this is not supported`);
  }
  var defaultEncodeOptions2 = { addBreakTokens: true, mapSorter: mapSorter2 };
  function encode2(data, options) {
    options = Object.assign({}, defaultEncodeOptions2, options);
    return encodeCustom(data, new JSONEncoder(), options);
  }

  // ../../node_modules/.pnpm/cborg@4.1.3/node_modules/cborg/lib/json/decode.js
  var Tokenizer = class {
    /**
     * @param {Uint8Array} data
     * @param {DecodeOptions} options
     */
    constructor(data, options = {}) {
      this._pos = 0;
      this.data = data;
      this.options = options;
      this.modeStack = ["value"];
      this.lastToken = "";
    }
    pos() {
      return this._pos;
    }
    /**
     * @returns {boolean}
     */
    done() {
      return this._pos >= this.data.length;
    }
    /**
     * @returns {number}
     */
    ch() {
      return this.data[this._pos];
    }
    /**
     * @returns {string}
     */
    currentMode() {
      return this.modeStack[this.modeStack.length - 1];
    }
    skipWhitespace() {
      let c = this.ch();
      while (c === 32 || c === 9 || c === 13 || c === 10) {
        c = this.data[++this._pos];
      }
    }
    /**
     * @param {number[]} str
     */
    expect(str) {
      if (this.data.length - this._pos < str.length) {
        throw new Error(`${decodeErrPrefix} unexpected end of input at position ${this._pos}`);
      }
      for (let i = 0; i < str.length; i++) {
        if (this.data[this._pos++] !== str[i]) {
          throw new Error(`${decodeErrPrefix} unexpected token at position ${this._pos}, expected to find '${String.fromCharCode(...str)}'`);
        }
      }
    }
    parseNumber() {
      const startPos = this._pos;
      let negative = false;
      let float = false;
      const swallow = (chars) => {
        while (!this.done()) {
          const ch = this.ch();
          if (chars.includes(ch)) {
            this._pos++;
          } else {
            break;
          }
        }
      };
      if (this.ch() === 45) {
        negative = true;
        this._pos++;
      }
      if (this.ch() === 48) {
        this._pos++;
        if (this.ch() === 46) {
          this._pos++;
          float = true;
        } else {
          return new Token(Type.uint, 0, this._pos - startPos);
        }
      }
      swallow([48, 49, 50, 51, 52, 53, 54, 55, 56, 57]);
      if (negative && this._pos === startPos + 1) {
        throw new Error(`${decodeErrPrefix} unexpected token at position ${this._pos}`);
      }
      if (!this.done() && this.ch() === 46) {
        if (float) {
          throw new Error(`${decodeErrPrefix} unexpected token at position ${this._pos}`);
        }
        float = true;
        this._pos++;
        swallow([48, 49, 50, 51, 52, 53, 54, 55, 56, 57]);
      }
      if (!this.done() && (this.ch() === 101 || this.ch() === 69)) {
        float = true;
        this._pos++;
        if (!this.done() && (this.ch() === 43 || this.ch() === 45)) {
          this._pos++;
        }
        swallow([48, 49, 50, 51, 52, 53, 54, 55, 56, 57]);
      }
      const numStr = String.fromCharCode.apply(null, this.data.subarray(startPos, this._pos));
      const num = parseFloat(numStr);
      if (float) {
        return new Token(Type.float, num, this._pos - startPos);
      }
      if (this.options.allowBigInt !== true || Number.isSafeInteger(num)) {
        return new Token(num >= 0 ? Type.uint : Type.negint, num, this._pos - startPos);
      }
      return new Token(num >= 0 ? Type.uint : Type.negint, BigInt(numStr), this._pos - startPos);
    }
    /**
     * @returns {Token}
     */
    parseString() {
      if (this.ch() !== 34) {
        throw new Error(`${decodeErrPrefix} unexpected character at position ${this._pos}; this shouldn't happen`);
      }
      this._pos++;
      for (let i = this._pos, l = 0; i < this.data.length && l < 65536; i++, l++) {
        const ch = this.data[i];
        if (ch === 92 || ch < 32 || ch >= 128) {
          break;
        }
        if (ch === 34) {
          const str = String.fromCharCode.apply(null, this.data.subarray(this._pos, i));
          this._pos = i + 1;
          return new Token(Type.string, str, l);
        }
      }
      const startPos = this._pos;
      const chars = [];
      const readu4 = () => {
        if (this._pos + 4 >= this.data.length) {
          throw new Error(`${decodeErrPrefix} unexpected end of unicode escape sequence at position ${this._pos}`);
        }
        let u4 = 0;
        for (let i = 0; i < 4; i++) {
          let ch = this.ch();
          if (ch >= 48 && ch <= 57) {
            ch -= 48;
          } else if (ch >= 97 && ch <= 102) {
            ch = ch - 97 + 10;
          } else if (ch >= 65 && ch <= 70) {
            ch = ch - 65 + 10;
          } else {
            throw new Error(`${decodeErrPrefix} unexpected unicode escape character at position ${this._pos}`);
          }
          u4 = u4 * 16 + ch;
          this._pos++;
        }
        return u4;
      };
      const readUtf8Char = () => {
        const firstByte = this.ch();
        let codePoint = null;
        let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (this._pos + bytesPerSequence > this.data.length) {
          throw new Error(`${decodeErrPrefix} unexpected unicode sequence at position ${this._pos}`);
        }
        let secondByte, thirdByte, fourthByte, tempCodePoint;
        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 128) {
              codePoint = firstByte;
            }
            break;
          case 2:
            secondByte = this.data[this._pos + 1];
            if ((secondByte & 192) === 128) {
              tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
              if (tempCodePoint > 127) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 3:
            secondByte = this.data[this._pos + 1];
            thirdByte = this.data[this._pos + 2];
            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
              tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
              if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 4:
            secondByte = this.data[this._pos + 1];
            thirdByte = this.data[this._pos + 2];
            fourthByte = this.data[this._pos + 3];
            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
              tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
              if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                codePoint = tempCodePoint;
              }
            }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          chars.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        chars.push(codePoint);
        this._pos += bytesPerSequence;
      };
      while (!this.done()) {
        const ch = this.ch();
        let ch1;
        switch (ch) {
          case 92:
            this._pos++;
            if (this.done()) {
              throw new Error(`${decodeErrPrefix} unexpected string termination at position ${this._pos}`);
            }
            ch1 = this.ch();
            this._pos++;
            switch (ch1) {
              case 34:
              case 39:
              case 92:
              case 47:
                chars.push(ch1);
                break;
              case 98:
                chars.push(8);
                break;
              case 116:
                chars.push(9);
                break;
              case 110:
                chars.push(10);
                break;
              case 102:
                chars.push(12);
                break;
              case 114:
                chars.push(13);
                break;
              case 117:
                chars.push(readu4());
                break;
              default:
                throw new Error(`${decodeErrPrefix} unexpected string escape character at position ${this._pos}`);
            }
            break;
          case 34:
            this._pos++;
            return new Token(Type.string, decodeCodePointsArray(chars), this._pos - startPos);
          default:
            if (ch < 32) {
              throw new Error(`${decodeErrPrefix} invalid control character at position ${this._pos}`);
            } else if (ch < 128) {
              chars.push(ch);
              this._pos++;
            } else {
              readUtf8Char();
            }
        }
      }
      throw new Error(`${decodeErrPrefix} unexpected end of string at position ${this._pos}`);
    }
    /**
     * @returns {Token}
     */
    parseValue() {
      switch (this.ch()) {
        case 123:
          this.modeStack.push("obj-start");
          this._pos++;
          return new Token(Type.map, Infinity, 1);
        case 91:
          this.modeStack.push("array-start");
          this._pos++;
          return new Token(Type.array, Infinity, 1);
        case 34: {
          return this.parseString();
        }
        case 110:
          this.expect([110, 117, 108, 108]);
          return new Token(Type.null, null, 4);
        case 102:
          this.expect([102, 97, 108, 115, 101]);
          return new Token(Type.false, false, 5);
        case 116:
          this.expect([116, 114, 117, 101]);
          return new Token(Type.true, true, 4);
        case 45:
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          return this.parseNumber();
        default:
          throw new Error(`${decodeErrPrefix} unexpected character at position ${this._pos}`);
      }
    }
    /**
     * @returns {Token}
     */
    next() {
      this.skipWhitespace();
      switch (this.currentMode()) {
        case "value":
          this.modeStack.pop();
          return this.parseValue();
        case "array-value": {
          this.modeStack.pop();
          if (this.ch() === 93) {
            this._pos++;
            this.skipWhitespace();
            return new Token(Type.break, void 0, 1);
          }
          if (this.ch() !== 44) {
            throw new Error(`${decodeErrPrefix} unexpected character at position ${this._pos}, was expecting array delimiter but found '${String.fromCharCode(this.ch())}'`);
          }
          this._pos++;
          this.modeStack.push("array-value");
          this.skipWhitespace();
          return this.parseValue();
        }
        case "array-start": {
          this.modeStack.pop();
          if (this.ch() === 93) {
            this._pos++;
            this.skipWhitespace();
            return new Token(Type.break, void 0, 1);
          }
          this.modeStack.push("array-value");
          this.skipWhitespace();
          return this.parseValue();
        }
        case "obj-key":
          if (this.ch() === 125) {
            this.modeStack.pop();
            this._pos++;
            this.skipWhitespace();
            return new Token(Type.break, void 0, 1);
          }
          if (this.ch() !== 44) {
            throw new Error(`${decodeErrPrefix} unexpected character at position ${this._pos}, was expecting object delimiter but found '${String.fromCharCode(this.ch())}'`);
          }
          this._pos++;
          this.skipWhitespace();
        case "obj-start": {
          this.modeStack.pop();
          if (this.ch() === 125) {
            this._pos++;
            this.skipWhitespace();
            return new Token(Type.break, void 0, 1);
          }
          const token = this.parseString();
          this.skipWhitespace();
          if (this.ch() !== 58) {
            throw new Error(`${decodeErrPrefix} unexpected character at position ${this._pos}, was expecting key/value delimiter ':' but found '${String.fromCharCode(this.ch())}'`);
          }
          this._pos++;
          this.modeStack.push("obj-value");
          return token;
        }
        case "obj-value": {
          this.modeStack.pop();
          this.modeStack.push("obj-key");
          this.skipWhitespace();
          return this.parseValue();
        }
        default:
          throw new Error(`${decodeErrPrefix} unexpected parse state at position ${this._pos}; this shouldn't happen`);
      }
    }
  };
  function decode2(data, options) {
    options = Object.assign({ tokenizer: new Tokenizer(data, options) }, options);
    return decode(data, options);
  }

  // ../../node_modules/.pnpm/multiformats@13.1.0/node_modules/multiformats/dist/src/bytes.js
  var empty = new Uint8Array(0);
  function equals(aa, bb) {
    if (aa === bb)
      return true;
    if (aa.byteLength !== bb.byteLength) {
      return false;
    }
    for (let ii = 0; ii < aa.byteLength; ii++) {
      if (aa[ii] !== bb[ii]) {
        return false;
      }
    }
    return true;
  }
  function coerce(o) {
    if (o instanceof Uint8Array && o.constructor.name === "Uint8Array")
      return o;
    if (o instanceof ArrayBuffer)
      return new Uint8Array(o);
    if (ArrayBuffer.isView(o)) {
      return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
    }
    throw new Error("Unknown type, must be binary type");
  }

  // ../../node_modules/.pnpm/multiformats@13.1.0/node_modules/multiformats/dist/src/vendor/base-x.js
  function base(ALPHABET, name3) {
    if (ALPHABET.length >= 255) {
      throw new TypeError("Alphabet too long");
    }
    var BASE_MAP = new Uint8Array(256);
    for (var j = 0; j < BASE_MAP.length; j++) {
      BASE_MAP[j] = 255;
    }
    for (var i = 0; i < ALPHABET.length; i++) {
      var x = ALPHABET.charAt(i);
      var xc = x.charCodeAt(0);
      if (BASE_MAP[xc] !== 255) {
        throw new TypeError(x + " is ambiguous");
      }
      BASE_MAP[xc] = i;
    }
    var BASE = ALPHABET.length;
    var LEADER = ALPHABET.charAt(0);
    var FACTOR = Math.log(BASE) / Math.log(256);
    var iFACTOR = Math.log(256) / Math.log(BASE);
    function encode12(source) {
      if (source instanceof Uint8Array)
        ;
      else if (ArrayBuffer.isView(source)) {
        source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
      } else if (Array.isArray(source)) {
        source = Uint8Array.from(source);
      }
      if (!(source instanceof Uint8Array)) {
        throw new TypeError("Expected Uint8Array");
      }
      if (source.length === 0) {
        return "";
      }
      var zeroes = 0;
      var length3 = 0;
      var pbegin = 0;
      var pend = source.length;
      while (pbegin !== pend && source[pbegin] === 0) {
        pbegin++;
        zeroes++;
      }
      var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
      var b58 = new Uint8Array(size);
      while (pbegin !== pend) {
        var carry = source[pbegin];
        var i2 = 0;
        for (var it1 = size - 1; (carry !== 0 || i2 < length3) && it1 !== -1; it1--, i2++) {
          carry += 256 * b58[it1] >>> 0;
          b58[it1] = carry % BASE >>> 0;
          carry = carry / BASE >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length3 = i2;
        pbegin++;
      }
      var it2 = size - length3;
      while (it2 !== size && b58[it2] === 0) {
        it2++;
      }
      var str = LEADER.repeat(zeroes);
      for (; it2 < size; ++it2) {
        str += ALPHABET.charAt(b58[it2]);
      }
      return str;
    }
    function decodeUnsafe(source) {
      if (typeof source !== "string") {
        throw new TypeError("Expected String");
      }
      if (source.length === 0) {
        return new Uint8Array();
      }
      var psz = 0;
      if (source[psz] === " ") {
        return;
      }
      var zeroes = 0;
      var length3 = 0;
      while (source[psz] === LEADER) {
        zeroes++;
        psz++;
      }
      var size = (source.length - psz) * FACTOR + 1 >>> 0;
      var b256 = new Uint8Array(size);
      while (source[psz]) {
        var carry = BASE_MAP[source.charCodeAt(psz)];
        if (carry === 255) {
          return;
        }
        var i2 = 0;
        for (var it3 = size - 1; (carry !== 0 || i2 < length3) && it3 !== -1; it3--, i2++) {
          carry += BASE * b256[it3] >>> 0;
          b256[it3] = carry % 256 >>> 0;
          carry = carry / 256 >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length3 = i2;
        psz++;
      }
      if (source[psz] === " ") {
        return;
      }
      var it4 = size - length3;
      while (it4 !== size && b256[it4] === 0) {
        it4++;
      }
      var vch = new Uint8Array(zeroes + (size - it4));
      var j2 = zeroes;
      while (it4 !== size) {
        vch[j2++] = b256[it4++];
      }
      return vch;
    }
    function decode16(string) {
      var buffer2 = decodeUnsafe(string);
      if (buffer2) {
        return buffer2;
      }
      throw new Error(`Non-${name3} character`);
    }
    return {
      encode: encode12,
      decodeUnsafe,
      decode: decode16
    };
  }
  var src = base;
  var _brrp__multiformats_scope_baseX = src;
  var base_x_default = _brrp__multiformats_scope_baseX;

  // ../../node_modules/.pnpm/multiformats@13.1.0/node_modules/multiformats/dist/src/bases/base.js
  var Encoder = class {
    name;
    prefix;
    baseEncode;
    constructor(name3, prefix, baseEncode) {
      this.name = name3;
      this.prefix = prefix;
      this.baseEncode = baseEncode;
    }
    encode(bytes) {
      if (bytes instanceof Uint8Array) {
        return `${this.prefix}${this.baseEncode(bytes)}`;
      } else {
        throw Error("Unknown type, must be binary type");
      }
    }
  };
  var Decoder = class {
    name;
    prefix;
    baseDecode;
    prefixCodePoint;
    constructor(name3, prefix, baseDecode) {
      this.name = name3;
      this.prefix = prefix;
      if (prefix.codePointAt(0) === void 0) {
        throw new Error("Invalid prefix character");
      }
      this.prefixCodePoint = prefix.codePointAt(0);
      this.baseDecode = baseDecode;
    }
    decode(text) {
      if (typeof text === "string") {
        if (text.codePointAt(0) !== this.prefixCodePoint) {
          throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
        }
        return this.baseDecode(text.slice(this.prefix.length));
      } else {
        throw Error("Can only multibase decode strings");
      }
    }
    or(decoder) {
      return or(this, decoder);
    }
  };
  var ComposedDecoder = class {
    decoders;
    constructor(decoders) {
      this.decoders = decoders;
    }
    or(decoder) {
      return or(this, decoder);
    }
    decode(input) {
      const prefix = input[0];
      const decoder = this.decoders[prefix];
      if (decoder != null) {
        return decoder.decode(input);
      } else {
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
      }
    }
  };
  function or(left, right) {
    return new ComposedDecoder({
      ...left.decoders ?? { [left.prefix]: left },
      ...right.decoders ?? { [right.prefix]: right }
    });
  }
  var Codec = class {
    name;
    prefix;
    baseEncode;
    baseDecode;
    encoder;
    decoder;
    constructor(name3, prefix, baseEncode, baseDecode) {
      this.name = name3;
      this.prefix = prefix;
      this.baseEncode = baseEncode;
      this.baseDecode = baseDecode;
      this.encoder = new Encoder(name3, prefix, baseEncode);
      this.decoder = new Decoder(name3, prefix, baseDecode);
    }
    encode(input) {
      return this.encoder.encode(input);
    }
    decode(input) {
      return this.decoder.decode(input);
    }
  };
  function from({ name: name3, prefix, encode: encode12, decode: decode16 }) {
    return new Codec(name3, prefix, encode12, decode16);
  }
  function baseX({ name: name3, prefix, alphabet }) {
    const { encode: encode12, decode: decode16 } = base_x_default(alphabet, name3);
    return from({
      prefix,
      name: name3,
      encode: encode12,
      decode: (text) => coerce(decode16(text))
    });
  }
  function decode3(string, alphabet, bitsPerChar, name3) {
    const codes = {};
    for (let i = 0; i < alphabet.length; ++i) {
      codes[alphabet[i]] = i;
    }
    let end = string.length;
    while (string[end - 1] === "=") {
      --end;
    }
    const out = new Uint8Array(end * bitsPerChar / 8 | 0);
    let bits = 0;
    let buffer2 = 0;
    let written = 0;
    for (let i = 0; i < end; ++i) {
      const value = codes[string[i]];
      if (value === void 0) {
        throw new SyntaxError(`Non-${name3} character`);
      }
      buffer2 = buffer2 << bitsPerChar | value;
      bits += bitsPerChar;
      if (bits >= 8) {
        bits -= 8;
        out[written++] = 255 & buffer2 >> bits;
      }
    }
    if (bits >= bitsPerChar || (255 & buffer2 << 8 - bits) !== 0) {
      throw new SyntaxError("Unexpected end of data");
    }
    return out;
  }
  function encode3(data, alphabet, bitsPerChar) {
    const pad = alphabet[alphabet.length - 1] === "=";
    const mask = (1 << bitsPerChar) - 1;
    let out = "";
    let bits = 0;
    let buffer2 = 0;
    for (let i = 0; i < data.length; ++i) {
      buffer2 = buffer2 << 8 | data[i];
      bits += 8;
      while (bits > bitsPerChar) {
        bits -= bitsPerChar;
        out += alphabet[mask & buffer2 >> bits];
      }
    }
    if (bits !== 0) {
      out += alphabet[mask & buffer2 << bitsPerChar - bits];
    }
    if (pad) {
      while ((out.length * bitsPerChar & 7) !== 0) {
        out += "=";
      }
    }
    return out;
  }
  function rfc4648({ name: name3, prefix, bitsPerChar, alphabet }) {
    return from({
      prefix,
      name: name3,
      encode(input) {
        return encode3(input, alphabet, bitsPerChar);
      },
      decode(input) {
        return decode3(input, alphabet, bitsPerChar, name3);
      }
    });
  }

  // ../../node_modules/.pnpm/multiformats@13.1.0/node_modules/multiformats/dist/src/bases/base32.js
  var base32 = rfc4648({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
  });
  var base32upper = rfc4648({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
  });
  var base32pad = rfc4648({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
  });
  var base32padupper = rfc4648({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
  });
  var base32hex = rfc4648({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
  });
  var base32hexupper = rfc4648({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
  });
  var base32hexpad = rfc4648({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
  });
  var base32hexpadupper = rfc4648({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
  });
  var base32z = rfc4648({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
  });

  // ../../node_modules/.pnpm/multiformats@13.1.0/node_modules/multiformats/dist/src/bases/base58.js
  var base58btc = baseX({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
  });
  var base58flickr = baseX({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
  });

  // ../../node_modules/.pnpm/multiformats@13.1.0/node_modules/multiformats/dist/src/vendor/varint.js
  var encode_1 = encode4;
  var MSB = 128;
  var REST = 127;
  var MSBALL = ~REST;
  var INT = Math.pow(2, 31);
  function encode4(num, out, offset) {
    out = out || [];
    offset = offset || 0;
    var oldOffset = offset;
    while (num >= INT) {
      out[offset++] = num & 255 | MSB;
      num /= 128;
    }
    while (num & MSBALL) {
      out[offset++] = num & 255 | MSB;
      num >>>= 7;
    }
    out[offset] = num | 0;
    encode4.bytes = offset - oldOffset + 1;
    return out;
  }
  var decode4 = read;
  var MSB$1 = 128;
  var REST$1 = 127;
  function read(buf2, offset) {
    var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf2.length;
    do {
      if (counter >= l) {
        read.bytes = 0;
        throw new RangeError("Could not decode varint");
      }
      b = buf2[counter++];
      res += shift < 28 ? (b & REST$1) << shift : (b & REST$1) * Math.pow(2, shift);
      shift += 7;
    } while (b >= MSB$1);
    read.bytes = counter - offset;
    return res;
  }
  var N1 = Math.pow(2, 7);
  var N2 = Math.pow(2, 14);
  var N3 = Math.pow(2, 21);
  var N4 = Math.pow(2, 28);
  var N5 = Math.pow(2, 35);
  var N6 = Math.pow(2, 42);
  var N7 = Math.pow(2, 49);
  var N8 = Math.pow(2, 56);
  var N9 = Math.pow(2, 63);
  var length = function(value) {
    return value < N1 ? 1 : value < N2 ? 2 : value < N3 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;
  };
  var varint = {
    encode: encode_1,
    decode: decode4,
    encodingLength: length
  };
  var _brrp_varint = varint;
  var varint_default = _brrp_varint;

  // ../../node_modules/.pnpm/multiformats@13.1.0/node_modules/multiformats/dist/src/varint.js
  function decode5(data, offset = 0) {
    const code3 = varint_default.decode(data, offset);
    return [code3, varint_default.decode.bytes];
  }
  function encodeTo(int, target, offset = 0) {
    varint_default.encode(int, target, offset);
    return target;
  }
  function encodingLength(int) {
    return varint_default.encodingLength(int);
  }

  // ../../node_modules/.pnpm/multiformats@13.1.0/node_modules/multiformats/dist/src/hashes/digest.js
  function create(code3, digest) {
    const size = digest.byteLength;
    const sizeOffset = encodingLength(code3);
    const digestOffset = sizeOffset + encodingLength(size);
    const bytes = new Uint8Array(digestOffset + size);
    encodeTo(code3, bytes, 0);
    encodeTo(size, bytes, sizeOffset);
    bytes.set(digest, digestOffset);
    return new Digest(code3, size, digest, bytes);
  }
  function decode6(multihash) {
    const bytes = coerce(multihash);
    const [code3, sizeOffset] = decode5(bytes);
    const [size, digestOffset] = decode5(bytes.subarray(sizeOffset));
    const digest = bytes.subarray(sizeOffset + digestOffset);
    if (digest.byteLength !== size) {
      throw new Error("Incorrect length");
    }
    return new Digest(code3, size, digest, bytes);
  }
  function equals2(a, b) {
    if (a === b) {
      return true;
    } else {
      const data = b;
      return a.code === data.code && a.size === data.size && data.bytes instanceof Uint8Array && equals(a.bytes, data.bytes);
    }
  }
  var Digest = class {
    code;
    size;
    digest;
    bytes;
    /**
     * Creates a multihash digest.
     */
    constructor(code3, size, digest, bytes) {
      this.code = code3;
      this.size = size;
      this.digest = digest;
      this.bytes = bytes;
    }
  };

  // ../../node_modules/.pnpm/multiformats@13.1.0/node_modules/multiformats/dist/src/cid.js
  function format(link, base3) {
    const { bytes, version } = link;
    switch (version) {
      case 0:
        return toStringV0(bytes, baseCache(link), base3 ?? base58btc.encoder);
      default:
        return toStringV1(bytes, baseCache(link), base3 ?? base32.encoder);
    }
  }
  var cache = /* @__PURE__ */ new WeakMap();
  function baseCache(cid) {
    const baseCache3 = cache.get(cid);
    if (baseCache3 == null) {
      const baseCache4 = /* @__PURE__ */ new Map();
      cache.set(cid, baseCache4);
      return baseCache4;
    }
    return baseCache3;
  }
  var CID = class _CID {
    code;
    version;
    multihash;
    bytes;
    "/";
    /**
     * @param version - Version of the CID
     * @param code - Code of the codec content is encoded in, see https://github.com/multiformats/multicodec/blob/master/table.csv
     * @param multihash - (Multi)hash of the of the content.
     */
    constructor(version, code3, multihash, bytes) {
      this.code = code3;
      this.version = version;
      this.multihash = multihash;
      this.bytes = bytes;
      this["/"] = bytes;
    }
    /**
     * Signalling `cid.asCID === cid` has been replaced with `cid['/'] === cid.bytes`
     * please either use `CID.asCID(cid)` or switch to new signalling mechanism
     *
     * @deprecated
     */
    get asCID() {
      return this;
    }
    // ArrayBufferView
    get byteOffset() {
      return this.bytes.byteOffset;
    }
    // ArrayBufferView
    get byteLength() {
      return this.bytes.byteLength;
    }
    toV0() {
      switch (this.version) {
        case 0: {
          return this;
        }
        case 1: {
          const { code: code3, multihash } = this;
          if (code3 !== DAG_PB_CODE) {
            throw new Error("Cannot convert a non dag-pb CID to CIDv0");
          }
          if (multihash.code !== SHA_256_CODE) {
            throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
          }
          return _CID.createV0(multihash);
        }
        default: {
          throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`);
        }
      }
    }
    toV1() {
      switch (this.version) {
        case 0: {
          const { code: code3, digest } = this.multihash;
          const multihash = create(code3, digest);
          return _CID.createV1(this.code, multihash);
        }
        case 1: {
          return this;
        }
        default: {
          throw Error(`Can not convert CID version ${this.version} to version 1. This is a bug please report`);
        }
      }
    }
    equals(other) {
      return _CID.equals(this, other);
    }
    static equals(self2, other) {
      const unknown = other;
      return unknown != null && self2.code === unknown.code && self2.version === unknown.version && equals2(self2.multihash, unknown.multihash);
    }
    toString(base3) {
      return format(this, base3);
    }
    toJSON() {
      return { "/": format(this) };
    }
    link() {
      return this;
    }
    [Symbol.toStringTag] = "CID";
    // Legacy
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return `CID(${this.toString()})`;
    }
    /**
     * Takes any input `value` and returns a `CID` instance if it was
     * a `CID` otherwise returns `null`. If `value` is instanceof `CID`
     * it will return value back. If `value` is not instance of this CID
     * class, but is compatible CID it will return new instance of this
     * `CID` class. Otherwise returns null.
     *
     * This allows two different incompatible versions of CID library to
     * co-exist and interop as long as binary interface is compatible.
     */
    static asCID(input) {
      if (input == null) {
        return null;
      }
      const value = input;
      if (value instanceof _CID) {
        return value;
      } else if (value["/"] != null && value["/"] === value.bytes || value.asCID === value) {
        const { version, code: code3, multihash, bytes } = value;
        return new _CID(version, code3, multihash, bytes ?? encodeCID(version, code3, multihash.bytes));
      } else if (value[cidSymbol] === true) {
        const { version, multihash, code: code3 } = value;
        const digest = decode6(multihash);
        return _CID.create(version, code3, digest);
      } else {
        return null;
      }
    }
    /**
     * @param version - Version of the CID
     * @param code - Code of the codec content is encoded in, see https://github.com/multiformats/multicodec/blob/master/table.csv
     * @param digest - (Multi)hash of the of the content.
     */
    static create(version, code3, digest) {
      if (typeof code3 !== "number") {
        throw new Error("String codecs are no longer supported");
      }
      if (!(digest.bytes instanceof Uint8Array)) {
        throw new Error("Invalid digest");
      }
      switch (version) {
        case 0: {
          if (code3 !== DAG_PB_CODE) {
            throw new Error(`Version 0 CID must use dag-pb (code: ${DAG_PB_CODE}) block encoding`);
          } else {
            return new _CID(version, code3, digest, digest.bytes);
          }
        }
        case 1: {
          const bytes = encodeCID(version, code3, digest.bytes);
          return new _CID(version, code3, digest, bytes);
        }
        default: {
          throw new Error("Invalid version");
        }
      }
    }
    /**
     * Simplified version of `create` for CIDv0.
     */
    static createV0(digest) {
      return _CID.create(0, DAG_PB_CODE, digest);
    }
    /**
     * Simplified version of `create` for CIDv1.
     *
     * @param code - Content encoding format code.
     * @param digest - Multihash of the content.
     */
    static createV1(code3, digest) {
      return _CID.create(1, code3, digest);
    }
    /**
     * Decoded a CID from its binary representation. The byte array must contain
     * only the CID with no additional bytes.
     *
     * An error will be thrown if the bytes provided do not contain a valid
     * binary representation of a CID.
     */
    static decode(bytes) {
      const [cid, remainder] = _CID.decodeFirst(bytes);
      if (remainder.length !== 0) {
        throw new Error("Incorrect length");
      }
      return cid;
    }
    /**
     * Decoded a CID from its binary representation at the beginning of a byte
     * array.
     *
     * Returns an array with the first element containing the CID and the second
     * element containing the remainder of the original byte array. The remainder
     * will be a zero-length byte array if the provided bytes only contained a
     * binary CID representation.
     */
    static decodeFirst(bytes) {
      const specs = _CID.inspectBytes(bytes);
      const prefixSize = specs.size - specs.multihashSize;
      const multihashBytes = coerce(bytes.subarray(prefixSize, prefixSize + specs.multihashSize));
      if (multihashBytes.byteLength !== specs.multihashSize) {
        throw new Error("Incorrect length");
      }
      const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize);
      const digest = new Digest(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes);
      const cid = specs.version === 0 ? _CID.createV0(digest) : _CID.createV1(specs.codec, digest);
      return [cid, bytes.subarray(specs.size)];
    }
    /**
     * Inspect the initial bytes of a CID to determine its properties.
     *
     * Involves decoding up to 4 varints. Typically this will require only 4 to 6
     * bytes but for larger multicodec code values and larger multihash digest
     * lengths these varints can be quite large. It is recommended that at least
     * 10 bytes be made available in the `initialBytes` argument for a complete
     * inspection.
     */
    static inspectBytes(initialBytes) {
      let offset = 0;
      const next = () => {
        const [i, length3] = decode5(initialBytes.subarray(offset));
        offset += length3;
        return i;
      };
      let version = next();
      let codec = DAG_PB_CODE;
      if (version === 18) {
        version = 0;
        offset = 0;
      } else {
        codec = next();
      }
      if (version !== 0 && version !== 1) {
        throw new RangeError(`Invalid CID version ${version}`);
      }
      const prefixSize = offset;
      const multihashCode = next();
      const digestSize = next();
      const size = offset + digestSize;
      const multihashSize = size - prefixSize;
      return { version, codec, multihashCode, digestSize, multihashSize, size };
    }
    /**
     * Takes cid in a string representation and creates an instance. If `base`
     * decoder is not provided will use a default from the configuration. It will
     * throw an error if encoding of the CID is not compatible with supplied (or
     * a default decoder).
     */
    static parse(source, base3) {
      const [prefix, bytes] = parseCIDtoBytes(source, base3);
      const cid = _CID.decode(bytes);
      if (cid.version === 0 && source[0] !== "Q") {
        throw Error("Version 0 CID string must not include multibase prefix");
      }
      baseCache(cid).set(prefix, source);
      return cid;
    }
  };
  function parseCIDtoBytes(source, base3) {
    switch (source[0]) {
      case "Q": {
        const decoder = base3 ?? base58btc;
        return [
          base58btc.prefix,
          decoder.decode(`${base58btc.prefix}${source}`)
        ];
      }
      case base58btc.prefix: {
        const decoder = base3 ?? base58btc;
        return [base58btc.prefix, decoder.decode(source)];
      }
      case base32.prefix: {
        const decoder = base3 ?? base32;
        return [base32.prefix, decoder.decode(source)];
      }
      default: {
        if (base3 == null) {
          throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
        }
        return [source[0], base3.decode(source)];
      }
    }
  }
  function toStringV0(bytes, cache3, base3) {
    const { prefix } = base3;
    if (prefix !== base58btc.prefix) {
      throw Error(`Cannot string encode V0 in ${base3.name} encoding`);
    }
    const cid = cache3.get(prefix);
    if (cid == null) {
      const cid2 = base3.encode(bytes).slice(1);
      cache3.set(prefix, cid2);
      return cid2;
    } else {
      return cid;
    }
  }
  function toStringV1(bytes, cache3, base3) {
    const { prefix } = base3;
    const cid = cache3.get(prefix);
    if (cid == null) {
      const cid2 = base3.encode(bytes);
      cache3.set(prefix, cid2);
      return cid2;
    } else {
      return cid;
    }
  }
  var DAG_PB_CODE = 112;
  var SHA_256_CODE = 18;
  function encodeCID(version, code3, multihash) {
    const codeOffset = encodingLength(version);
    const hashOffset = codeOffset + encodingLength(code3);
    const bytes = new Uint8Array(hashOffset + multihash.byteLength);
    encodeTo(version, bytes, 0);
    encodeTo(code3, bytes, codeOffset);
    bytes.set(multihash, hashOffset);
    return bytes;
  }
  var cidSymbol = Symbol.for("@ipld/js-cid/CID");

  // ../../node_modules/.pnpm/multiformats@13.1.0/node_modules/multiformats/dist/src/hashes/hasher.js
  function from2({ name: name3, code: code3, encode: encode12 }) {
    return new Hasher(name3, code3, encode12);
  }
  var Hasher = class {
    name;
    code;
    encode;
    constructor(name3, code3, encode12) {
      this.name = name3;
      this.code = code3;
      this.encode = encode12;
    }
    digest(input) {
      if (input instanceof Uint8Array) {
        const result = this.encode(input);
        return result instanceof Uint8Array ? create(this.code, result) : result.then((digest) => create(this.code, digest));
      } else {
        throw Error("Unknown type, must be binary type");
      }
    }
  };

  // ../../node_modules/.pnpm/multiformats@13.1.0/node_modules/multiformats/dist/src/bases/base64.js
  var base64 = rfc4648({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
  });
  var base64pad = rfc4648({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
  });
  var base64url = rfc4648({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
  });
  var base64urlpad = rfc4648({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
  });

  // ../../node_modules/.pnpm/@ipld+dag-json@10.2.0/node_modules/@ipld/dag-json/src/index.js
  function toByteView(buf2) {
    if (buf2 instanceof ArrayBuffer) {
      return new Uint8Array(buf2, 0, buf2.byteLength);
    }
    return buf2;
  }
  function cidEncoder(obj) {
    if (obj.asCID !== obj && obj["/"] !== obj.bytes) {
      return null;
    }
    const cid = CID.asCID(obj);
    if (!cid) {
      return null;
    }
    const cidString = cid.toString();
    return [
      new Token(Type.map, Infinity, 1),
      new Token(Type.string, "/", 1),
      // key
      new Token(Type.string, cidString, cidString.length),
      // value
      new Token(Type.break, void 0, 1)
    ];
  }
  function bytesEncoder(bytes) {
    const bytesString = base64.encode(bytes).slice(1);
    return [
      new Token(Type.map, Infinity, 1),
      new Token(Type.string, "/", 1),
      // key
      new Token(Type.map, Infinity, 1),
      // value
      new Token(Type.string, "bytes", 5),
      // inner key
      new Token(Type.string, bytesString, bytesString.length),
      // inner value
      new Token(Type.break, void 0, 1),
      new Token(Type.break, void 0, 1)
    ];
  }
  function taBytesEncoder(obj) {
    return bytesEncoder(new Uint8Array(obj.buffer, obj.byteOffset, obj.byteLength));
  }
  function abBytesEncoder(ab) {
    return bytesEncoder(new Uint8Array(ab));
  }
  function undefinedEncoder() {
    throw new Error("`undefined` is not supported by the IPLD Data Model and cannot be encoded");
  }
  function numberEncoder(num) {
    if (Number.isNaN(num)) {
      throw new Error("`NaN` is not supported by the IPLD Data Model and cannot be encoded");
    }
    if (num === Infinity || num === -Infinity) {
      throw new Error("`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded");
    }
    return null;
  }
  var encodeOptions = {
    typeEncoders: {
      Object: cidEncoder,
      Buffer: bytesEncoder,
      Uint8Array: bytesEncoder,
      Int8Array: taBytesEncoder,
      Uint16Array: taBytesEncoder,
      Int16Array: taBytesEncoder,
      Uint32Array: taBytesEncoder,
      Int32Array: taBytesEncoder,
      Float32Array: taBytesEncoder,
      Float64Array: taBytesEncoder,
      Uint8ClampedArray: taBytesEncoder,
      BigInt64Array: taBytesEncoder,
      BigUint64Array: taBytesEncoder,
      DataView: taBytesEncoder,
      ArrayBuffer: abBytesEncoder,
      undefined: undefinedEncoder,
      number: numberEncoder
    }
  };
  var DagJsonTokenizer = class extends Tokenizer {
    /**
     * @param {Uint8Array} data
     * @param {object} [options]
     */
    constructor(data, options) {
      super(data, options);
      this.tokenBuffer = [];
    }
    /**
     * @returns {boolean}
     */
    done() {
      return this.tokenBuffer.length === 0 && super.done();
    }
    /**
     * @returns {Token}
     */
    _next() {
      if (this.tokenBuffer.length > 0) {
        return this.tokenBuffer.pop();
      }
      return super.next();
    }
    /**
     * Implements rules outlined in https://github.com/ipld/specs/pull/356
     *
     * @returns {Token}
     */
    next() {
      const token = this._next();
      if (token.type === Type.map) {
        const keyToken = this._next();
        if (keyToken.type === Type.string && keyToken.value === "/") {
          const valueToken = this._next();
          if (valueToken.type === Type.string) {
            const breakToken = this._next();
            if (breakToken.type !== Type.break) {
              throw new Error("Invalid encoded CID form");
            }
            this.tokenBuffer.push(valueToken);
            return new Token(Type.tag, 42, 0);
          }
          if (valueToken.type === Type.map) {
            const innerKeyToken = this._next();
            if (innerKeyToken.type === Type.string && innerKeyToken.value === "bytes") {
              const innerValueToken = this._next();
              if (innerValueToken.type === Type.string) {
                for (let i = 0; i < 2; i++) {
                  const breakToken = this._next();
                  if (breakToken.type !== Type.break) {
                    throw new Error("Invalid encoded Bytes form");
                  }
                }
                const bytes = base64.decode(`m${innerValueToken.value}`);
                return new Token(Type.bytes, bytes, innerValueToken.value.length);
              }
              this.tokenBuffer.push(innerValueToken);
            }
            this.tokenBuffer.push(innerKeyToken);
          }
          this.tokenBuffer.push(valueToken);
        }
        this.tokenBuffer.push(keyToken);
      }
      return token;
    }
  };
  var decodeOptions = {
    allowIndefinite: false,
    allowUndefined: false,
    allowNaN: false,
    allowInfinity: false,
    allowBigInt: true,
    // this will lead to BigInt for ints outside of
    // safe-integer range, which may surprise users
    strict: true,
    useMaps: false,
    rejectDuplicateMapKeys: true,
    /** @type {import('cborg').TagDecoder[]} */
    tags: []
  };
  decodeOptions.tags[42] = CID.parse;
  var encode5 = (node) => encode2(node, encodeOptions);
  var decode7 = (data) => {
    const buf2 = toByteView(data);
    const options = Object.assign(decodeOptions, { tokenizer: new DagJsonTokenizer(buf2, decodeOptions) });
    return decode2(buf2, options);
  };
  var format2 = (node) => utf8Decoder.decode(encode5(node));
  var utf8Decoder = new TextDecoder();
  var parse = (data) => decode7(utf8Encoder.encode(data));
  var utf8Encoder = new TextEncoder();

  // src/version.ts
  var PACKAGE_VERSION = "0.18.0";

  // src/store.ts
  var match = PACKAGE_VERSION.match(/^([^.]*\.[^.]*)/);
  if (!match)
    throw new Error("invalid version: " + PACKAGE_VERSION);
  var STORAGE_VERSION = match[0];
  var VersionedStore = class {
    STORAGE_VERSION = STORAGE_VERSION;
    name;
    constructor(name3) {
      this.name = name3;
    }
  };
  var MetaStore = class extends VersionedStore {
    tag = "header-base";
    makeHeader({ car, key }) {
      const encoded = format2({ car, key });
      return encoded;
    }
    parseHeader(headerData) {
      const got = parse(headerData);
      return got;
    }
  };
  var DataStore = class {
    tag = "car-base";
    STORAGE_VERSION = STORAGE_VERSION;
    name;
    constructor(name3) {
      this.name = name3;
    }
  };

  // ../../node_modules/.pnpm/yocto-queue@1.0.0/node_modules/yocto-queue/index.js
  var Node = class {
    value;
    next;
    constructor(value) {
      this.value = value;
    }
  };
  var Queue = class {
    #head;
    #tail;
    #size;
    constructor() {
      this.clear();
    }
    enqueue(value) {
      const node = new Node(value);
      if (this.#head) {
        this.#tail.next = node;
        this.#tail = node;
      } else {
        this.#head = node;
        this.#tail = node;
      }
      this.#size++;
    }
    dequeue() {
      const current = this.#head;
      if (!current) {
        return;
      }
      this.#head = this.#head.next;
      this.#size--;
      return current.value;
    }
    clear() {
      this.#head = void 0;
      this.#tail = void 0;
      this.#size = 0;
    }
    get size() {
      return this.#size;
    }
    *[Symbol.iterator]() {
      let current = this.#head;
      while (current) {
        yield current.value;
        current = current.next;
      }
    }
  };

  // ../../node_modules/.pnpm/p-limit@4.0.0/node_modules/p-limit/index.js
  function pLimit(concurrency) {
    if (!((Number.isInteger(concurrency) || concurrency === Number.POSITIVE_INFINITY) && concurrency > 0)) {
      throw new TypeError("Expected `concurrency` to be a number from 1 and up");
    }
    const queue = new Queue();
    let activeCount = 0;
    const next = () => {
      activeCount--;
      if (queue.size > 0) {
        queue.dequeue()();
      }
    };
    const run = async (fn, resolve, args) => {
      activeCount++;
      const result = (async () => fn(...args))();
      resolve(result);
      try {
        await result;
      } catch {
      }
      next();
    };
    const enqueue = (fn, resolve, args) => {
      queue.enqueue(run.bind(void 0, fn, resolve, args));
      (async () => {
        await Promise.resolve();
        if (activeCount < concurrency && queue.size > 0) {
          queue.dequeue()();
        }
      })();
    };
    const generator = (fn, ...args) => new Promise((resolve) => {
      enqueue(fn, resolve, args);
    });
    Object.defineProperties(generator, {
      activeCount: {
        get: () => activeCount
      },
      pendingCount: {
        get: () => queue.size
      },
      clearQueue: {
        value: () => {
          queue.clear();
        }
      }
    });
    return generator;
  }

  // ../../node_modules/.pnpm/@ipld+dag-cbor@9.2.0/node_modules/@ipld/dag-cbor/src/index.js
  var src_exports = {};
  __export(src_exports, {
    code: () => code,
    decode: () => decode8,
    decodeOptions: () => decodeOptions2,
    encode: () => encode6,
    encodeOptions: () => encodeOptions2,
    name: () => name,
    toByteView: () => toByteView2
  });
  var CID_CBOR_TAG = 42;
  function toByteView2(buf2) {
    if (buf2 instanceof ArrayBuffer) {
      return new Uint8Array(buf2, 0, buf2.byteLength);
    }
    return buf2;
  }
  function cidEncoder2(obj) {
    if (obj.asCID !== obj && obj["/"] !== obj.bytes) {
      return null;
    }
    const cid = CID.asCID(obj);
    if (!cid) {
      return null;
    }
    const bytes = new Uint8Array(cid.bytes.byteLength + 1);
    bytes.set(cid.bytes, 1);
    return [
      new Token(Type.tag, CID_CBOR_TAG),
      new Token(Type.bytes, bytes)
    ];
  }
  function undefinedEncoder2() {
    throw new Error("`undefined` is not supported by the IPLD Data Model and cannot be encoded");
  }
  function numberEncoder2(num) {
    if (Number.isNaN(num)) {
      throw new Error("`NaN` is not supported by the IPLD Data Model and cannot be encoded");
    }
    if (num === Infinity || num === -Infinity) {
      throw new Error("`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded");
    }
    return null;
  }
  var _encodeOptions = {
    float64: true,
    typeEncoders: {
      Object: cidEncoder2,
      undefined: undefinedEncoder2,
      number: numberEncoder2
    }
  };
  var encodeOptions2 = {
    ..._encodeOptions,
    typeEncoders: {
      ..._encodeOptions.typeEncoders
    }
  };
  function cidDecoder(bytes) {
    if (bytes[0] !== 0) {
      throw new Error("Invalid CID for CBOR tag 42; expected leading 0x00");
    }
    return CID.decode(bytes.subarray(1));
  }
  var _decodeOptions = {
    allowIndefinite: false,
    coerceUndefinedToNull: true,
    allowNaN: false,
    allowInfinity: false,
    allowBigInt: true,
    // this will lead to BigInt for ints outside of
    // safe-integer range, which may surprise users
    strict: true,
    useMaps: false,
    rejectDuplicateMapKeys: true,
    /** @type {import('cborg').TagDecoder[]} */
    tags: []
  };
  _decodeOptions.tags[CID_CBOR_TAG] = cidDecoder;
  var decodeOptions2 = {
    ..._decodeOptions,
    tags: _decodeOptions.tags.slice()
  };
  var name = "dag-cbor";
  var code = 113;
  var encode6 = (node) => encode(node, _encodeOptions);
  var decode8 = (data) => decode(toByteView2(data), _decodeOptions);

  // ../../node_modules/.pnpm/@ipld+car@5.3.0/node_modules/@ipld/car/src/decoder-common.js
  var import_varint2 = __toESM(require_varint(), 1);
  var CIDV0_BYTES = {
    SHA2_256: 18,
    LENGTH: 32,
    DAG_PB: 112
  };
  var V2_HEADER_LENGTH = (
    /* characteristics */
    16 + 8 + 8 + 8
  );
  function decodeVarint(bytes, seeker) {
    if (!bytes.length) {
      throw new Error("Unexpected end of data");
    }
    const i = import_varint2.default.decode(bytes);
    seeker.seek(
      /** @type {number} */
      import_varint2.default.decode.bytes
    );
    return i;
  }
  function decodeV2Header(bytes) {
    const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    let offset = 0;
    const header = {
      version: 2,
      /** @type {[bigint, bigint]} */
      characteristics: [
        dv.getBigUint64(offset, true),
        dv.getBigUint64(offset += 8, true)
      ],
      dataOffset: Number(dv.getBigUint64(offset += 8, true)),
      dataSize: Number(dv.getBigUint64(offset += 8, true)),
      indexOffset: Number(dv.getBigUint64(offset += 8, true))
    };
    return header;
  }
  function getMultihashLength(bytes) {
    import_varint2.default.decode(bytes);
    const codeLength = (
      /** @type {number} */
      import_varint2.default.decode.bytes
    );
    const length3 = import_varint2.default.decode(bytes.subarray(import_varint2.default.decode.bytes));
    const lengthLength = (
      /** @type {number} */
      import_varint2.default.decode.bytes
    );
    const mhLength = codeLength + lengthLength + length3;
    return mhLength;
  }

  // ../../node_modules/.pnpm/@ipld+car@5.3.0/node_modules/@ipld/car/src/header-validator.js
  var Kinds = {
    Null: (
      /** @returns {undefined|null} */
      (obj) => obj === null ? obj : void 0
    ),
    Int: (
      /** @returns {undefined|number} */
      (obj) => Number.isInteger(obj) ? obj : void 0
    ),
    Float: (
      /** @returns {undefined|number} */
      (obj) => typeof obj === "number" && Number.isFinite(obj) ? obj : void 0
    ),
    String: (
      /** @returns {undefined|string} */
      (obj) => typeof obj === "string" ? obj : void 0
    ),
    Bool: (
      /** @returns {undefined|boolean} */
      (obj) => typeof obj === "boolean" ? obj : void 0
    ),
    Bytes: (
      /** @returns {undefined|Uint8Array} */
      (obj) => obj instanceof Uint8Array ? obj : void 0
    ),
    Link: (
      /** @returns {undefined|object} */
      (obj) => obj !== null && typeof obj === "object" && obj.asCID === obj ? obj : void 0
    ),
    List: (
      /** @returns {undefined|Array<any>} */
      (obj) => Array.isArray(obj) ? obj : void 0
    ),
    Map: (
      /** @returns {undefined|object} */
      (obj) => obj !== null && typeof obj === "object" && obj.asCID !== obj && !Array.isArray(obj) && !(obj instanceof Uint8Array) ? obj : void 0
    )
  };
  var Types = {
    "CarV1HeaderOrV2Pragma > roots (anon) > valueType (anon)": Kinds.Link,
    "CarV1HeaderOrV2Pragma > roots (anon)": (
      /** @returns {undefined|any} */
      (obj) => {
        if (Kinds.List(obj) === void 0) {
          return void 0;
        }
        for (let i = 0; i < obj.length; i++) {
          let v = obj[i];
          v = Types["CarV1HeaderOrV2Pragma > roots (anon) > valueType (anon)"](v);
          if (v === void 0) {
            return void 0;
          }
          if (v !== obj[i]) {
            const ret = obj.slice(0, i);
            for (let j = i; j < obj.length; j++) {
              let v2 = obj[j];
              v2 = Types["CarV1HeaderOrV2Pragma > roots (anon) > valueType (anon)"](v2);
              if (v2 === void 0) {
                return void 0;
              }
              ret.push(v2);
            }
            return ret;
          }
        }
        return obj;
      }
    ),
    Int: Kinds.Int,
    CarV1HeaderOrV2Pragma: (
      /** @returns {undefined|any} */
      (obj) => {
        if (Kinds.Map(obj) === void 0) {
          return void 0;
        }
        const entries = Object.entries(obj);
        let ret = obj;
        let requiredCount = 1;
        for (let i = 0; i < entries.length; i++) {
          const [key, value] = entries[i];
          switch (key) {
            case "roots":
              {
                const v = Types["CarV1HeaderOrV2Pragma > roots (anon)"](obj[key]);
                if (v === void 0) {
                  return void 0;
                }
                if (v !== value || ret !== obj) {
                  if (ret === obj) {
                    ret = {};
                    for (let j = 0; j < i; j++) {
                      ret[entries[j][0]] = entries[j][1];
                    }
                  }
                  ret.roots = v;
                }
              }
              break;
            case "version":
              {
                requiredCount--;
                const v = Types.Int(obj[key]);
                if (v === void 0) {
                  return void 0;
                }
                if (v !== value || ret !== obj) {
                  if (ret === obj) {
                    ret = {};
                    for (let j = 0; j < i; j++) {
                      ret[entries[j][0]] = entries[j][1];
                    }
                  }
                  ret.version = v;
                }
              }
              break;
            default:
              return void 0;
          }
        }
        if (requiredCount > 0) {
          return void 0;
        }
        return ret;
      }
    )
  };
  var Reprs = {
    "CarV1HeaderOrV2Pragma > roots (anon) > valueType (anon)": Kinds.Link,
    "CarV1HeaderOrV2Pragma > roots (anon)": (
      /** @returns {undefined|any} */
      (obj) => {
        if (Kinds.List(obj) === void 0) {
          return void 0;
        }
        for (let i = 0; i < obj.length; i++) {
          let v = obj[i];
          v = Reprs["CarV1HeaderOrV2Pragma > roots (anon) > valueType (anon)"](v);
          if (v === void 0) {
            return void 0;
          }
          if (v !== obj[i]) {
            const ret = obj.slice(0, i);
            for (let j = i; j < obj.length; j++) {
              let v2 = obj[j];
              v2 = Reprs["CarV1HeaderOrV2Pragma > roots (anon) > valueType (anon)"](v2);
              if (v2 === void 0) {
                return void 0;
              }
              ret.push(v2);
            }
            return ret;
          }
        }
        return obj;
      }
    ),
    Int: Kinds.Int,
    CarV1HeaderOrV2Pragma: (
      /** @returns {undefined|any} */
      (obj) => {
        if (Kinds.Map(obj) === void 0) {
          return void 0;
        }
        const entries = Object.entries(obj);
        let ret = obj;
        let requiredCount = 1;
        for (let i = 0; i < entries.length; i++) {
          const [key, value] = entries[i];
          switch (key) {
            case "roots":
              {
                const v = Reprs["CarV1HeaderOrV2Pragma > roots (anon)"](value);
                if (v === void 0) {
                  return void 0;
                }
                if (v !== value || ret !== obj) {
                  if (ret === obj) {
                    ret = {};
                    for (let j = 0; j < i; j++) {
                      ret[entries[j][0]] = entries[j][1];
                    }
                  }
                  ret.roots = v;
                }
              }
              break;
            case "version":
              {
                requiredCount--;
                const v = Reprs.Int(value);
                if (v === void 0) {
                  return void 0;
                }
                if (v !== value || ret !== obj) {
                  if (ret === obj) {
                    ret = {};
                    for (let j = 0; j < i; j++) {
                      ret[entries[j][0]] = entries[j][1];
                    }
                  }
                  ret.version = v;
                }
              }
              break;
            default:
              return void 0;
          }
        }
        if (requiredCount > 0) {
          return void 0;
        }
        return ret;
      }
    )
  };
  var CarV1HeaderOrV2Pragma = {
    toTyped: Types.CarV1HeaderOrV2Pragma,
    toRepresentation: Reprs.CarV1HeaderOrV2Pragma
  };

  // ../../node_modules/.pnpm/cborg@4.1.3/node_modules/cborg/lib/length.js
  var cborEncoders2 = makeCborEncoders();
  var defaultEncodeOptions3 = {
    float64: false,
    quickEncodeToken
  };
  function tokensToLength(tokens, encoders = cborEncoders2, options = defaultEncodeOptions3) {
    if (Array.isArray(tokens)) {
      let len = 0;
      for (const token of tokens) {
        len += tokensToLength(token, encoders, options);
      }
      return len;
    } else {
      const encoder = encoders[tokens.type.major];
      if (encoder.encodedSize === void 0 || typeof encoder.encodedSize !== "function") {
        throw new Error(`Encoder for ${tokens.type.name} does not have an encodedSize()`);
      }
      return encoder.encodedSize(tokens, options);
    }
  }

  // ../../node_modules/.pnpm/@ipld+car@5.3.0/node_modules/@ipld/car/src/buffer-writer.js
  var import_varint3 = __toESM(require_varint(), 1);
  var CarBufferWriter = class {
    /**
     * @param {Uint8Array} bytes
     * @param {number} headerSize
     */
    constructor(bytes, headerSize) {
      this.bytes = bytes;
      this.byteOffset = headerSize;
      this.roots = [];
      this.headerSize = headerSize;
    }
    /**
     * Add a root to this writer, to be used to create a header when the CAR is
     * finalized with {@link CarBufferWriter.close `close()`}
     *
     * @param {CID} root
     * @param {{resize?:boolean}} [options]
     * @returns {CarBufferWriter}
     */
    addRoot(root, options) {
      addRoot(this, root, options);
      return this;
    }
    /**
     * Write a `Block` (a `{ cid:CID, bytes:Uint8Array }` pair) to the archive.
     * Throws if there is not enough capacity.
     *
     * @param {Block} block - A `{ cid:CID, bytes:Uint8Array }` pair.
     * @returns {CarBufferWriter}
     */
    write(block) {
      addBlock(this, block);
      return this;
    }
    /**
     * Finalize the CAR and return it as a `Uint8Array`.
     *
     * @param {object} [options]
     * @param {boolean} [options.resize]
     * @returns {Uint8Array}
     */
    close(options) {
      return close(this, options);
    }
  };
  var addRoot = (writer, root, options = {}) => {
    const { resize = false } = options;
    const { bytes, headerSize, byteOffset, roots } = writer;
    writer.roots.push(root);
    const size = headerLength(writer);
    if (size > headerSize) {
      if (size - headerSize + byteOffset < bytes.byteLength) {
        if (resize) {
          resizeHeader(writer, size);
        } else {
          roots.pop();
          throw new RangeError(`Header of size ${headerSize} has no capacity for new root ${root}.
  However there is a space in the buffer and you could call addRoot(root, { resize: root }) to resize header to make a space for this root.`);
        }
      } else {
        roots.pop();
        throw new RangeError(`Buffer has no capacity for a new root ${root}`);
      }
    }
  };
  var blockLength = ({ cid, bytes }) => {
    const size = cid.bytes.byteLength + bytes.byteLength;
    return import_varint3.default.encodingLength(size) + size;
  };
  var addBlock = (writer, { cid, bytes }) => {
    const byteLength = cid.bytes.byteLength + bytes.byteLength;
    const size = import_varint3.default.encode(byteLength);
    if (writer.byteOffset + size.length + byteLength > writer.bytes.byteLength) {
      throw new RangeError("Buffer has no capacity for this block");
    } else {
      writeBytes(writer, size);
      writeBytes(writer, cid.bytes);
      writeBytes(writer, bytes);
    }
  };
  var close = (writer, options = {}) => {
    const { resize = false } = options;
    const { roots, bytes, byteOffset, headerSize } = writer;
    const headerBytes = encode6({ version: 1, roots });
    const varintBytes = import_varint3.default.encode(headerBytes.length);
    const size = varintBytes.length + headerBytes.byteLength;
    const offset = headerSize - size;
    if (offset === 0) {
      writeHeader(writer, varintBytes, headerBytes);
      return bytes.subarray(0, byteOffset);
    } else if (resize) {
      resizeHeader(writer, size);
      writeHeader(writer, varintBytes, headerBytes);
      return bytes.subarray(0, writer.byteOffset);
    } else {
      throw new RangeError(`Header size was overestimated.
You can use close({ resize: true }) to resize header`);
    }
  };
  var resizeHeader = (writer, byteLength) => {
    const { bytes, headerSize } = writer;
    bytes.set(bytes.subarray(headerSize, writer.byteOffset), byteLength);
    writer.byteOffset += byteLength - headerSize;
    writer.headerSize = byteLength;
  };
  var writeBytes = (writer, bytes) => {
    writer.bytes.set(bytes, writer.byteOffset);
    writer.byteOffset += bytes.length;
  };
  var writeHeader = ({ bytes }, varint6, header) => {
    bytes.set(varint6);
    bytes.set(header, varint6.length);
  };
  var headerPreludeTokens = [
    new Token(Type.map, 2),
    new Token(Type.string, "version"),
    new Token(Type.uint, 1),
    new Token(Type.string, "roots")
  ];
  var CID_TAG = new Token(Type.tag, 42);
  var calculateHeaderLength = (rootLengths) => {
    const tokens = [...headerPreludeTokens];
    tokens.push(new Token(Type.array, rootLengths.length));
    for (const rootLength of rootLengths) {
      tokens.push(CID_TAG);
      tokens.push(new Token(Type.bytes, { length: rootLength + 1 }));
    }
    const length3 = tokensToLength(tokens);
    return import_varint3.default.encodingLength(length3) + length3;
  };
  var headerLength = ({ roots }) => calculateHeaderLength(roots.map((cid) => cid.bytes.byteLength));
  var createWriter = (buffer2, options = {}) => {
    const {
      roots = [],
      byteOffset = 0,
      byteLength = buffer2.byteLength,
      headerSize = headerLength({ roots })
    } = options;
    const bytes = new Uint8Array(buffer2, byteOffset, byteLength);
    const writer = new CarBufferWriter(bytes, headerSize);
    for (const root of roots) {
      writer.addRoot(root);
    }
    return writer;
  };

  // ../../node_modules/.pnpm/@ipld+car@5.3.0/node_modules/@ipld/car/src/decoder.js
  async function readHeader(reader, strictVersion) {
    const length3 = decodeVarint(await reader.upTo(8), reader);
    if (length3 === 0) {
      throw new Error("Invalid CAR header (zero length)");
    }
    const header = await reader.exactly(length3, true);
    const block = decode8(header);
    if (CarV1HeaderOrV2Pragma.toTyped(block) === void 0) {
      throw new Error("Invalid CAR header format");
    }
    if (block.version !== 1 && block.version !== 2 || strictVersion !== void 0 && block.version !== strictVersion) {
      throw new Error(`Invalid CAR version: ${block.version}${strictVersion !== void 0 ? ` (expected ${strictVersion})` : ""}`);
    }
    if (block.version === 1) {
      if (!Array.isArray(block.roots)) {
        throw new Error("Invalid CAR header format");
      }
      return block;
    }
    if (block.roots !== void 0) {
      throw new Error("Invalid CAR header format");
    }
    const v2Header = decodeV2Header(await reader.exactly(V2_HEADER_LENGTH, true));
    reader.seek(v2Header.dataOffset - reader.pos);
    const v1Header = await readHeader(reader, 1);
    return Object.assign(v1Header, v2Header);
  }
  async function readCid(reader) {
    const first = await reader.exactly(2, false);
    if (first[0] === CIDV0_BYTES.SHA2_256 && first[1] === CIDV0_BYTES.LENGTH) {
      const bytes2 = await reader.exactly(34, true);
      const multihash2 = decode6(bytes2);
      return CID.create(0, CIDV0_BYTES.DAG_PB, multihash2);
    }
    const version = decodeVarint(await reader.upTo(8), reader);
    if (version !== 1) {
      throw new Error(`Unexpected CID version (${version})`);
    }
    const codec = decodeVarint(await reader.upTo(8), reader);
    const bytes = await reader.exactly(getMultihashLength(await reader.upTo(8)), true);
    const multihash = decode6(bytes);
    return CID.create(version, codec, multihash);
  }
  async function readBlockHead(reader) {
    const start = reader.pos;
    let length3 = decodeVarint(await reader.upTo(8), reader);
    if (length3 === 0) {
      throw new Error("Invalid CAR section (zero length)");
    }
    length3 += reader.pos - start;
    const cid = await readCid(reader);
    const blockLength2 = length3 - Number(reader.pos - start);
    return { cid, length: length3, blockLength: blockLength2 };
  }
  async function readBlock(reader) {
    const { cid, blockLength: blockLength2 } = await readBlockHead(reader);
    const bytes = await reader.exactly(blockLength2, true);
    return { bytes, cid };
  }
  async function readBlockIndex(reader) {
    const offset = reader.pos;
    const { cid, length: length3, blockLength: blockLength2 } = await readBlockHead(reader);
    const index = { cid, length: length3, blockLength: blockLength2, offset, blockOffset: reader.pos };
    reader.seek(index.blockLength);
    return index;
  }
  function createDecoder(reader) {
    const headerPromise = (async () => {
      const header = await readHeader(reader);
      if (header.version === 2) {
        const v1length = reader.pos - header.dataOffset;
        reader = limitReader(reader, header.dataSize - v1length);
      }
      return header;
    })();
    return {
      header: () => headerPromise,
      async *blocks() {
        await headerPromise;
        while ((await reader.upTo(8)).length > 0) {
          yield await readBlock(reader);
        }
      },
      async *blocksIndex() {
        await headerPromise;
        while ((await reader.upTo(8)).length > 0) {
          yield await readBlockIndex(reader);
        }
      }
    };
  }
  function bytesReader(bytes) {
    let pos = 0;
    return {
      async upTo(length3) {
        const out = bytes.subarray(pos, pos + Math.min(length3, bytes.length - pos));
        return out;
      },
      async exactly(length3, seek = false) {
        if (length3 > bytes.length - pos) {
          throw new Error("Unexpected end of data");
        }
        const out = bytes.subarray(pos, pos + length3);
        if (seek) {
          pos += length3;
        }
        return out;
      },
      seek(length3) {
        pos += length3;
      },
      get pos() {
        return pos;
      }
    };
  }
  function chunkReader(readChunk) {
    let pos = 0;
    let have = 0;
    let offset = 0;
    let currentChunk = new Uint8Array(0);
    const read3 = async (length3) => {
      have = currentChunk.length - offset;
      const bufa = [currentChunk.subarray(offset)];
      while (have < length3) {
        const chunk = await readChunk();
        if (chunk == null) {
          break;
        }
        if (have < 0) {
          if (chunk.length > have) {
            bufa.push(chunk.subarray(-have));
          }
        } else {
          bufa.push(chunk);
        }
        have += chunk.length;
      }
      currentChunk = new Uint8Array(bufa.reduce((p, c) => p + c.length, 0));
      let off = 0;
      for (const b of bufa) {
        currentChunk.set(b, off);
        off += b.length;
      }
      offset = 0;
    };
    return {
      async upTo(length3) {
        if (currentChunk.length - offset < length3) {
          await read3(length3);
        }
        return currentChunk.subarray(offset, offset + Math.min(currentChunk.length - offset, length3));
      },
      async exactly(length3, seek = false) {
        if (currentChunk.length - offset < length3) {
          await read3(length3);
        }
        if (currentChunk.length - offset < length3) {
          throw new Error("Unexpected end of data");
        }
        const out = currentChunk.subarray(offset, offset + length3);
        if (seek) {
          pos += length3;
          offset += length3;
        }
        return out;
      },
      seek(length3) {
        pos += length3;
        offset += length3;
      },
      get pos() {
        return pos;
      }
    };
  }
  function asyncIterableReader(asyncIterable) {
    const iterator = asyncIterable[Symbol.asyncIterator]();
    async function readChunk() {
      const next = await iterator.next();
      if (next.done) {
        return null;
      }
      return next.value;
    }
    return chunkReader(readChunk);
  }
  function limitReader(reader, byteLimit) {
    let bytesRead = 0;
    return {
      async upTo(length3) {
        let bytes = await reader.upTo(length3);
        if (bytes.length + bytesRead > byteLimit) {
          bytes = bytes.subarray(0, byteLimit - bytesRead);
        }
        return bytes;
      },
      async exactly(length3, seek = false) {
        const bytes = await reader.exactly(length3, seek);
        if (bytes.length + bytesRead > byteLimit) {
          throw new Error("Unexpected end of data");
        }
        if (seek) {
          bytesRead += length3;
        }
        return bytes;
      },
      seek(length3) {
        bytesRead += length3;
        reader.seek(length3);
      },
      get pos() {
        return reader.pos;
      }
    };
  }

  // ../../node_modules/.pnpm/@ipld+car@5.3.0/node_modules/@ipld/car/src/reader-browser.js
  var CarReader = class {
    /**
     * @constructs CarReader
     * @param {CarHeader|CarV2Header} header
     * @param {Block[]} blocks
     */
    constructor(header, blocks) {
      this._header = header;
      this._blocks = blocks;
      this._keys = blocks.map((b) => b.cid.toString());
    }
    /**
     * @property
     * @memberof CarReader
     * @instance
     */
    get version() {
      return this._header.version;
    }
    /**
     * Get the list of roots defined by the CAR referenced by this reader. May be
     * zero or more `CID`s.
     *
     * @function
     * @memberof CarReader
     * @instance
     * @async
     * @returns {Promise<CID[]>}
     */
    async getRoots() {
      return this._header.roots;
    }
    /**
     * Check whether a given `CID` exists within the CAR referenced by this
     * reader.
     *
     * @function
     * @memberof CarReader
     * @instance
     * @async
     * @param {CID} key
     * @returns {Promise<boolean>}
     */
    async has(key) {
      return this._keys.indexOf(key.toString()) > -1;
    }
    /**
     * Fetch a `Block` (a `{ cid:CID, bytes:Uint8Array }` pair) from the CAR
     * referenced by this reader matching the provided `CID`. In the case where
     * the provided `CID` doesn't exist within the CAR, `undefined` will be
     * returned.
     *
     * @function
     * @memberof CarReader
     * @instance
     * @async
     * @param {CID} key
     * @returns {Promise<Block | undefined>}
     */
    async get(key) {
      const index = this._keys.indexOf(key.toString());
      return index > -1 ? this._blocks[index] : void 0;
    }
    /**
     * Returns a `BlockIterator` (`AsyncIterable<Block>`) that iterates over all
     * of the `Block`s (`{ cid:CID, bytes:Uint8Array }` pairs) contained within
     * the CAR referenced by this reader.
     *
     * @function
     * @memberof CarReader
     * @instance
     * @async
     * @generator
     * @returns {AsyncGenerator<Block>}
     */
    async *blocks() {
      for (const block of this._blocks) {
        yield block;
      }
    }
    /**
     * Returns a `CIDIterator` (`AsyncIterable<CID>`) that iterates over all of
     * the `CID`s contained within the CAR referenced by this reader.
     *
     * @function
     * @memberof CarReader
     * @instance
     * @async
     * @generator
     * @returns {AsyncGenerator<CID>}
     */
    async *cids() {
      for (const block of this._blocks) {
        yield block.cid;
      }
    }
    /**
     * Instantiate a {@link CarReader} from a `Uint8Array` blob. This performs a
     * decode fully in memory and maintains the decoded state in memory for full
     * access to the data via the `CarReader` API.
     *
     * @async
     * @static
     * @memberof CarReader
     * @param {Uint8Array} bytes
     * @returns {Promise<CarReader>}
     */
    static async fromBytes(bytes) {
      if (!(bytes instanceof Uint8Array)) {
        throw new TypeError("fromBytes() requires a Uint8Array");
      }
      return decodeReaderComplete(bytesReader(bytes));
    }
    /**
     * Instantiate a {@link CarReader} from a `AsyncIterable<Uint8Array>`, such as
     * a [modern Node.js stream](https://nodejs.org/api/stream.html#stream_streams_compatibility_with_async_generators_and_async_iterators).
     * This performs a decode fully in memory and maintains the decoded state in
     * memory for full access to the data via the `CarReader` API.
     *
     * Care should be taken for large archives; this API may not be appropriate
     * where memory is a concern or the archive is potentially larger than the
     * amount of memory that the runtime can handle.
     *
     * @async
     * @static
     * @memberof CarReader
     * @param {AsyncIterable<Uint8Array>} asyncIterable
     * @returns {Promise<CarReader>}
     */
    static async fromIterable(asyncIterable) {
      if (!asyncIterable || !(typeof asyncIterable[Symbol.asyncIterator] === "function")) {
        throw new TypeError("fromIterable() requires an async iterable");
      }
      return decodeReaderComplete(asyncIterableReader(asyncIterable));
    }
  };
  async function decodeReaderComplete(reader) {
    const decoder = createDecoder(reader);
    const header = await decoder.header();
    const blocks = [];
    for await (const block of decoder.blocks()) {
      blocks.push(block);
    }
    return new CarReader(header, blocks);
  }

  // ../../node_modules/.pnpm/@ipld+car@5.3.0/node_modules/@ipld/car/src/encoder.js
  var import_varint4 = __toESM(require_varint(), 1);

  // ../../node_modules/.pnpm/multiformats@12.1.3/node_modules/multiformats/src/bytes.js
  var bytes_exports3 = {};
  __export(bytes_exports3, {
    coerce: () => coerce2,
    empty: () => empty2,
    equals: () => equals3,
    fromHex: () => fromHex,
    fromString: () => fromString2,
    isBinary: () => isBinary,
    toHex: () => toHex,
    toString: () => toString2
  });
  var empty2 = new Uint8Array(0);
  var toHex = (d) => d.reduce((hex, byte) => hex + byte.toString(16).padStart(2, "0"), "");
  var fromHex = (hex) => {
    const hexes = hex.match(/../g);
    return hexes ? new Uint8Array(hexes.map((b) => parseInt(b, 16))) : empty2;
  };
  var equals3 = (aa, bb) => {
    if (aa === bb)
      return true;
    if (aa.byteLength !== bb.byteLength) {
      return false;
    }
    for (let ii = 0; ii < aa.byteLength; ii++) {
      if (aa[ii] !== bb[ii]) {
        return false;
      }
    }
    return true;
  };
  var coerce2 = (o) => {
    if (o instanceof Uint8Array && o.constructor.name === "Uint8Array")
      return o;
    if (o instanceof ArrayBuffer)
      return new Uint8Array(o);
    if (ArrayBuffer.isView(o)) {
      return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
    }
    throw new Error("Unknown type, must be binary type");
  };
  var isBinary = (o) => o instanceof ArrayBuffer || ArrayBuffer.isView(o);
  var fromString2 = (str) => new TextEncoder().encode(str);
  var toString2 = (b) => new TextDecoder().decode(b);

  // ../../node_modules/.pnpm/multiformats@12.1.3/node_modules/multiformats/vendor/base-x.js
  function base2(ALPHABET, name3) {
    if (ALPHABET.length >= 255) {
      throw new TypeError("Alphabet too long");
    }
    var BASE_MAP = new Uint8Array(256);
    for (var j = 0; j < BASE_MAP.length; j++) {
      BASE_MAP[j] = 255;
    }
    for (var i = 0; i < ALPHABET.length; i++) {
      var x = ALPHABET.charAt(i);
      var xc = x.charCodeAt(0);
      if (BASE_MAP[xc] !== 255) {
        throw new TypeError(x + " is ambiguous");
      }
      BASE_MAP[xc] = i;
    }
    var BASE = ALPHABET.length;
    var LEADER = ALPHABET.charAt(0);
    var FACTOR = Math.log(BASE) / Math.log(256);
    var iFACTOR = Math.log(256) / Math.log(BASE);
    function encode12(source) {
      if (source instanceof Uint8Array)
        ;
      else if (ArrayBuffer.isView(source)) {
        source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
      } else if (Array.isArray(source)) {
        source = Uint8Array.from(source);
      }
      if (!(source instanceof Uint8Array)) {
        throw new TypeError("Expected Uint8Array");
      }
      if (source.length === 0) {
        return "";
      }
      var zeroes = 0;
      var length3 = 0;
      var pbegin = 0;
      var pend = source.length;
      while (pbegin !== pend && source[pbegin] === 0) {
        pbegin++;
        zeroes++;
      }
      var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
      var b58 = new Uint8Array(size);
      while (pbegin !== pend) {
        var carry = source[pbegin];
        var i2 = 0;
        for (var it1 = size - 1; (carry !== 0 || i2 < length3) && it1 !== -1; it1--, i2++) {
          carry += 256 * b58[it1] >>> 0;
          b58[it1] = carry % BASE >>> 0;
          carry = carry / BASE >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length3 = i2;
        pbegin++;
      }
      var it2 = size - length3;
      while (it2 !== size && b58[it2] === 0) {
        it2++;
      }
      var str = LEADER.repeat(zeroes);
      for (; it2 < size; ++it2) {
        str += ALPHABET.charAt(b58[it2]);
      }
      return str;
    }
    function decodeUnsafe(source) {
      if (typeof source !== "string") {
        throw new TypeError("Expected String");
      }
      if (source.length === 0) {
        return new Uint8Array();
      }
      var psz = 0;
      if (source[psz] === " ") {
        return;
      }
      var zeroes = 0;
      var length3 = 0;
      while (source[psz] === LEADER) {
        zeroes++;
        psz++;
      }
      var size = (source.length - psz) * FACTOR + 1 >>> 0;
      var b256 = new Uint8Array(size);
      while (source[psz]) {
        var carry = BASE_MAP[source.charCodeAt(psz)];
        if (carry === 255) {
          return;
        }
        var i2 = 0;
        for (var it3 = size - 1; (carry !== 0 || i2 < length3) && it3 !== -1; it3--, i2++) {
          carry += BASE * b256[it3] >>> 0;
          b256[it3] = carry % 256 >>> 0;
          carry = carry / 256 >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length3 = i2;
        psz++;
      }
      if (source[psz] === " ") {
        return;
      }
      var it4 = size - length3;
      while (it4 !== size && b256[it4] === 0) {
        it4++;
      }
      var vch = new Uint8Array(zeroes + (size - it4));
      var j2 = zeroes;
      while (it4 !== size) {
        vch[j2++] = b256[it4++];
      }
      return vch;
    }
    function decode16(string) {
      var buffer2 = decodeUnsafe(string);
      if (buffer2) {
        return buffer2;
      }
      throw new Error(`Non-${name3} character`);
    }
    return {
      encode: encode12,
      decodeUnsafe,
      decode: decode16
    };
  }
  var src2 = base2;
  var _brrp__multiformats_scope_baseX2 = src2;
  var base_x_default2 = _brrp__multiformats_scope_baseX2;

  // ../../node_modules/.pnpm/multiformats@12.1.3/node_modules/multiformats/src/bases/base.js
  var Encoder2 = class {
    /**
     * @param {Base} name
     * @param {Prefix} prefix
     * @param {(bytes:Uint8Array) => string} baseEncode
     */
    constructor(name3, prefix, baseEncode) {
      this.name = name3;
      this.prefix = prefix;
      this.baseEncode = baseEncode;
    }
    /**
     * @param {Uint8Array} bytes
     * @returns {API.Multibase<Prefix>}
     */
    encode(bytes) {
      if (bytes instanceof Uint8Array) {
        return `${this.prefix}${this.baseEncode(bytes)}`;
      } else {
        throw Error("Unknown type, must be binary type");
      }
    }
  };
  var Decoder2 = class {
    /**
     * @param {Base} name
     * @param {Prefix} prefix
     * @param {(text:string) => Uint8Array} baseDecode
     */
    constructor(name3, prefix, baseDecode) {
      this.name = name3;
      this.prefix = prefix;
      if (prefix.codePointAt(0) === void 0) {
        throw new Error("Invalid prefix character");
      }
      this.prefixCodePoint = /** @type {number} */
      prefix.codePointAt(0);
      this.baseDecode = baseDecode;
    }
    /**
     * @param {string} text
     */
    decode(text) {
      if (typeof text === "string") {
        if (text.codePointAt(0) !== this.prefixCodePoint) {
          throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
        }
        return this.baseDecode(text.slice(this.prefix.length));
      } else {
        throw Error("Can only multibase decode strings");
      }
    }
    /**
     * @template {string} OtherPrefix
     * @param {API.UnibaseDecoder<OtherPrefix>|ComposedDecoder<OtherPrefix>} decoder
     * @returns {ComposedDecoder<Prefix|OtherPrefix>}
     */
    or(decoder) {
      return or2(this, decoder);
    }
  };
  var ComposedDecoder2 = class {
    /**
     * @param {Decoders<Prefix>} decoders
     */
    constructor(decoders) {
      this.decoders = decoders;
    }
    /**
     * @template {string} OtherPrefix
     * @param {API.UnibaseDecoder<OtherPrefix>|ComposedDecoder<OtherPrefix>} decoder
     * @returns {ComposedDecoder<Prefix|OtherPrefix>}
     */
    or(decoder) {
      return or2(this, decoder);
    }
    /**
     * @param {string} input
     * @returns {Uint8Array}
     */
    decode(input) {
      const prefix = (
        /** @type {Prefix} */
        input[0]
      );
      const decoder = this.decoders[prefix];
      if (decoder) {
        return decoder.decode(input);
      } else {
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
      }
    }
  };
  var or2 = (left, right) => new ComposedDecoder2(
    /** @type {Decoders<L|R>} */
    {
      ...left.decoders || { [
        /** @type API.UnibaseDecoder<L> */
        left.prefix
      ]: left },
      ...right.decoders || { [
        /** @type API.UnibaseDecoder<R> */
        right.prefix
      ]: right }
    }
  );
  var Codec2 = class {
    /**
     * @param {Base} name
     * @param {Prefix} prefix
     * @param {(bytes:Uint8Array) => string} baseEncode
     * @param {(text:string) => Uint8Array} baseDecode
     */
    constructor(name3, prefix, baseEncode, baseDecode) {
      this.name = name3;
      this.prefix = prefix;
      this.baseEncode = baseEncode;
      this.baseDecode = baseDecode;
      this.encoder = new Encoder2(name3, prefix, baseEncode);
      this.decoder = new Decoder2(name3, prefix, baseDecode);
    }
    /**
     * @param {Uint8Array} input
     */
    encode(input) {
      return this.encoder.encode(input);
    }
    /**
     * @param {string} input
     */
    decode(input) {
      return this.decoder.decode(input);
    }
  };
  var from3 = ({ name: name3, prefix, encode: encode12, decode: decode16 }) => new Codec2(name3, prefix, encode12, decode16);
  var baseX2 = ({ prefix, name: name3, alphabet }) => {
    const { encode: encode12, decode: decode16 } = base_x_default2(alphabet, name3);
    return from3({
      prefix,
      name: name3,
      encode: encode12,
      /**
       * @param {string} text
       */
      decode: (text) => coerce2(decode16(text))
    });
  };
  var decode9 = (string, alphabet, bitsPerChar, name3) => {
    const codes = {};
    for (let i = 0; i < alphabet.length; ++i) {
      codes[alphabet[i]] = i;
    }
    let end = string.length;
    while (string[end - 1] === "=") {
      --end;
    }
    const out = new Uint8Array(end * bitsPerChar / 8 | 0);
    let bits = 0;
    let buffer2 = 0;
    let written = 0;
    for (let i = 0; i < end; ++i) {
      const value = codes[string[i]];
      if (value === void 0) {
        throw new SyntaxError(`Non-${name3} character`);
      }
      buffer2 = buffer2 << bitsPerChar | value;
      bits += bitsPerChar;
      if (bits >= 8) {
        bits -= 8;
        out[written++] = 255 & buffer2 >> bits;
      }
    }
    if (bits >= bitsPerChar || 255 & buffer2 << 8 - bits) {
      throw new SyntaxError("Unexpected end of data");
    }
    return out;
  };
  var encode7 = (data, alphabet, bitsPerChar) => {
    const pad = alphabet[alphabet.length - 1] === "=";
    const mask = (1 << bitsPerChar) - 1;
    let out = "";
    let bits = 0;
    let buffer2 = 0;
    for (let i = 0; i < data.length; ++i) {
      buffer2 = buffer2 << 8 | data[i];
      bits += 8;
      while (bits > bitsPerChar) {
        bits -= bitsPerChar;
        out += alphabet[mask & buffer2 >> bits];
      }
    }
    if (bits) {
      out += alphabet[mask & buffer2 << bitsPerChar - bits];
    }
    if (pad) {
      while (out.length * bitsPerChar & 7) {
        out += "=";
      }
    }
    return out;
  };
  var rfc46482 = ({ name: name3, prefix, bitsPerChar, alphabet }) => {
    return from3({
      prefix,
      name: name3,
      encode(input) {
        return encode7(input, alphabet, bitsPerChar);
      },
      decode(input) {
        return decode9(input, alphabet, bitsPerChar, name3);
      }
    });
  };

  // ../../node_modules/.pnpm/multiformats@12.1.3/node_modules/multiformats/src/bases/base32.js
  var base322 = rfc46482({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
  });
  var base32upper2 = rfc46482({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
  });
  var base32pad2 = rfc46482({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
  });
  var base32padupper2 = rfc46482({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
  });
  var base32hex2 = rfc46482({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
  });
  var base32hexupper2 = rfc46482({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
  });
  var base32hexpad2 = rfc46482({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
  });
  var base32hexpadupper2 = rfc46482({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
  });
  var base32z2 = rfc46482({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
  });

  // ../../node_modules/.pnpm/multiformats@12.1.3/node_modules/multiformats/src/bases/base58.js
  var base58btc2 = baseX2({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
  });
  var base58flickr2 = baseX2({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
  });

  // ../../node_modules/.pnpm/multiformats@12.1.3/node_modules/multiformats/vendor/varint.js
  var encode_12 = encode8;
  var MSB2 = 128;
  var REST2 = 127;
  var MSBALL2 = ~REST2;
  var INT2 = Math.pow(2, 31);
  function encode8(num, out, offset) {
    out = out || [];
    offset = offset || 0;
    var oldOffset = offset;
    while (num >= INT2) {
      out[offset++] = num & 255 | MSB2;
      num /= 128;
    }
    while (num & MSBALL2) {
      out[offset++] = num & 255 | MSB2;
      num >>>= 7;
    }
    out[offset] = num | 0;
    encode8.bytes = offset - oldOffset + 1;
    return out;
  }
  var decode10 = read2;
  var MSB$12 = 128;
  var REST$12 = 127;
  function read2(buf2, offset) {
    var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf2.length;
    do {
      if (counter >= l) {
        read2.bytes = 0;
        throw new RangeError("Could not decode varint");
      }
      b = buf2[counter++];
      res += shift < 28 ? (b & REST$12) << shift : (b & REST$12) * Math.pow(2, shift);
      shift += 7;
    } while (b >= MSB$12);
    read2.bytes = counter - offset;
    return res;
  }
  var N12 = Math.pow(2, 7);
  var N22 = Math.pow(2, 14);
  var N32 = Math.pow(2, 21);
  var N42 = Math.pow(2, 28);
  var N52 = Math.pow(2, 35);
  var N62 = Math.pow(2, 42);
  var N72 = Math.pow(2, 49);
  var N82 = Math.pow(2, 56);
  var N92 = Math.pow(2, 63);
  var length2 = function(value) {
    return value < N12 ? 1 : value < N22 ? 2 : value < N32 ? 3 : value < N42 ? 4 : value < N52 ? 5 : value < N62 ? 6 : value < N72 ? 7 : value < N82 ? 8 : value < N92 ? 9 : 10;
  };
  var varint5 = {
    encode: encode_12,
    decode: decode10,
    encodingLength: length2
  };
  var _brrp_varint2 = varint5;
  var varint_default2 = _brrp_varint2;

  // ../../node_modules/.pnpm/multiformats@12.1.3/node_modules/multiformats/src/varint.js
  var decode11 = (data, offset = 0) => {
    const code3 = varint_default2.decode(data, offset);
    return [code3, varint_default2.decode.bytes];
  };
  var encodeTo2 = (int, target, offset = 0) => {
    varint_default2.encode(int, target, offset);
    return target;
  };
  var encodingLength2 = (int) => {
    return varint_default2.encodingLength(int);
  };

  // ../../node_modules/.pnpm/multiformats@12.1.3/node_modules/multiformats/src/hashes/digest.js
  var create3 = (code3, digest) => {
    const size = digest.byteLength;
    const sizeOffset = encodingLength2(code3);
    const digestOffset = sizeOffset + encodingLength2(size);
    const bytes = new Uint8Array(digestOffset + size);
    encodeTo2(code3, bytes, 0);
    encodeTo2(size, bytes, sizeOffset);
    bytes.set(digest, digestOffset);
    return new Digest2(code3, size, digest, bytes);
  };
  var decode12 = (multihash) => {
    const bytes = coerce2(multihash);
    const [code3, sizeOffset] = decode11(bytes);
    const [size, digestOffset] = decode11(bytes.subarray(sizeOffset));
    const digest = bytes.subarray(sizeOffset + digestOffset);
    if (digest.byteLength !== size) {
      throw new Error("Incorrect length");
    }
    return new Digest2(code3, size, digest, bytes);
  };
  var equals4 = (a, b) => {
    if (a === b) {
      return true;
    } else {
      const data = (
        /** @type {{code?:unknown, size?:unknown, bytes?:unknown}} */
        b
      );
      return a.code === data.code && a.size === data.size && data.bytes instanceof Uint8Array && equals3(a.bytes, data.bytes);
    }
  };
  var Digest2 = class {
    /**
     * Creates a multihash digest.
     *
     * @param {Code} code
     * @param {Size} size
     * @param {Uint8Array} digest
     * @param {Uint8Array} bytes
     */
    constructor(code3, size, digest, bytes) {
      this.code = code3;
      this.size = size;
      this.digest = digest;
      this.bytes = bytes;
    }
  };

  // ../../node_modules/.pnpm/multiformats@12.1.3/node_modules/multiformats/src/cid.js
  var format3 = (link, base3) => {
    const { bytes, version } = link;
    switch (version) {
      case 0:
        return toStringV02(
          bytes,
          baseCache2(link),
          /** @type {API.MultibaseEncoder<"z">} */
          base3 || base58btc2.encoder
        );
      default:
        return toStringV12(
          bytes,
          baseCache2(link),
          /** @type {API.MultibaseEncoder<Prefix>} */
          base3 || base322.encoder
        );
    }
  };
  var cache2 = /* @__PURE__ */ new WeakMap();
  var baseCache2 = (cid) => {
    const baseCache3 = cache2.get(cid);
    if (baseCache3 == null) {
      const baseCache4 = /* @__PURE__ */ new Map();
      cache2.set(cid, baseCache4);
      return baseCache4;
    }
    return baseCache3;
  };
  var CID2 = class _CID {
    /**
     * @param {Version} version - Version of the CID
     * @param {Format} code - Code of the codec content is encoded in, see https://github.com/multiformats/multicodec/blob/master/table.csv
     * @param {API.MultihashDigest<Alg>} multihash - (Multi)hash of the of the content.
     * @param {Uint8Array} bytes
     */
    constructor(version, code3, multihash, bytes) {
      this.code = code3;
      this.version = version;
      this.multihash = multihash;
      this.bytes = bytes;
      this["/"] = bytes;
    }
    /**
     * Signalling `cid.asCID === cid` has been replaced with `cid['/'] === cid.bytes`
     * please either use `CID.asCID(cid)` or switch to new signalling mechanism
     *
     * @deprecated
     */
    get asCID() {
      return this;
    }
    // ArrayBufferView
    get byteOffset() {
      return this.bytes.byteOffset;
    }
    // ArrayBufferView
    get byteLength() {
      return this.bytes.byteLength;
    }
    /**
     * @returns {CID<Data, API.DAG_PB, API.SHA_256, 0>}
     */
    toV0() {
      switch (this.version) {
        case 0: {
          return (
            /** @type {CID<Data, API.DAG_PB, API.SHA_256, 0>} */
            this
          );
        }
        case 1: {
          const { code: code3, multihash } = this;
          if (code3 !== DAG_PB_CODE2) {
            throw new Error("Cannot convert a non dag-pb CID to CIDv0");
          }
          if (multihash.code !== SHA_256_CODE2) {
            throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
          }
          return (
            /** @type {CID<Data, API.DAG_PB, API.SHA_256, 0>} */
            _CID.createV0(
              /** @type {API.MultihashDigest<API.SHA_256>} */
              multihash
            )
          );
        }
        default: {
          throw Error(
            `Can not convert CID version ${this.version} to version 0. This is a bug please report`
          );
        }
      }
    }
    /**
     * @returns {CID<Data, Format, Alg, 1>}
     */
    toV1() {
      switch (this.version) {
        case 0: {
          const { code: code3, digest } = this.multihash;
          const multihash = create3(code3, digest);
          return (
            /** @type {CID<Data, Format, Alg, 1>} */
            _CID.createV1(this.code, multihash)
          );
        }
        case 1: {
          return (
            /** @type {CID<Data, Format, Alg, 1>} */
            this
          );
        }
        default: {
          throw Error(
            `Can not convert CID version ${this.version} to version 1. This is a bug please report`
          );
        }
      }
    }
    /**
     * @param {unknown} other
     * @returns {other is CID<Data, Format, Alg, Version>}
     */
    equals(other) {
      return _CID.equals(this, other);
    }
    /**
     * @template {unknown} Data
     * @template {number} Format
     * @template {number} Alg
     * @template {API.Version} Version
     * @param {API.Link<Data, Format, Alg, Version>} self
     * @param {unknown} other
     * @returns {other is CID}
     */
    static equals(self2, other) {
      const unknown = (
        /** @type {{code?:unknown, version?:unknown, multihash?:unknown}} */
        other
      );
      return unknown && self2.code === unknown.code && self2.version === unknown.version && equals4(self2.multihash, unknown.multihash);
    }
    /**
     * @param {API.MultibaseEncoder<string>} [base]
     * @returns {string}
     */
    toString(base3) {
      return format3(this, base3);
    }
    /**
     * @returns {API.LinkJSON<this>}
     */
    toJSON() {
      return { "/": format3(this) };
    }
    link() {
      return this;
    }
    get [Symbol.toStringTag]() {
      return "CID";
    }
    // Legacy
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return `CID(${this.toString()})`;
    }
    /**
     * Takes any input `value` and returns a `CID` instance if it was
     * a `CID` otherwise returns `null`. If `value` is instanceof `CID`
     * it will return value back. If `value` is not instance of this CID
     * class, but is compatible CID it will return new instance of this
     * `CID` class. Otherwise returns null.
     *
     * This allows two different incompatible versions of CID library to
     * co-exist and interop as long as binary interface is compatible.
     *
     * @template {unknown} Data
     * @template {number} Format
     * @template {number} Alg
     * @template {API.Version} Version
     * @template {unknown} U
     * @param {API.Link<Data, Format, Alg, Version>|U} input
     * @returns {CID<Data, Format, Alg, Version>|null}
     */
    static asCID(input) {
      if (input == null) {
        return null;
      }
      const value = (
        /** @type {any} */
        input
      );
      if (value instanceof _CID) {
        return value;
      } else if (value["/"] != null && value["/"] === value.bytes || value.asCID === value) {
        const { version, code: code3, multihash, bytes } = value;
        return new _CID(
          version,
          code3,
          /** @type {API.MultihashDigest<Alg>} */
          multihash,
          bytes || encodeCID2(version, code3, multihash.bytes)
        );
      } else if (value[cidSymbol2] === true) {
        const { version, multihash, code: code3 } = value;
        const digest = (
          /** @type {API.MultihashDigest<Alg>} */
          decode12(multihash)
        );
        return _CID.create(version, code3, digest);
      } else {
        return null;
      }
    }
    /**
     *
     * @template {unknown} Data
     * @template {number} Format
     * @template {number} Alg
     * @template {API.Version} Version
     * @param {Version} version - Version of the CID
     * @param {Format} code - Code of the codec content is encoded in, see https://github.com/multiformats/multicodec/blob/master/table.csv
     * @param {API.MultihashDigest<Alg>} digest - (Multi)hash of the of the content.
     * @returns {CID<Data, Format, Alg, Version>}
     */
    static create(version, code3, digest) {
      if (typeof code3 !== "number") {
        throw new Error("String codecs are no longer supported");
      }
      if (!(digest.bytes instanceof Uint8Array)) {
        throw new Error("Invalid digest");
      }
      switch (version) {
        case 0: {
          if (code3 !== DAG_PB_CODE2) {
            throw new Error(
              `Version 0 CID must use dag-pb (code: ${DAG_PB_CODE2}) block encoding`
            );
          } else {
            return new _CID(version, code3, digest, digest.bytes);
          }
        }
        case 1: {
          const bytes = encodeCID2(version, code3, digest.bytes);
          return new _CID(version, code3, digest, bytes);
        }
        default: {
          throw new Error("Invalid version");
        }
      }
    }
    /**
     * Simplified version of `create` for CIDv0.
     *
     * @template {unknown} [T=unknown]
     * @param {API.MultihashDigest<typeof SHA_256_CODE>} digest - Multihash.
     * @returns {CID<T, typeof DAG_PB_CODE, typeof SHA_256_CODE, 0>}
     */
    static createV0(digest) {
      return _CID.create(0, DAG_PB_CODE2, digest);
    }
    /**
     * Simplified version of `create` for CIDv1.
     *
     * @template {unknown} Data
     * @template {number} Code
     * @template {number} Alg
     * @param {Code} code - Content encoding format code.
     * @param {API.MultihashDigest<Alg>} digest - Miltihash of the content.
     * @returns {CID<Data, Code, Alg, 1>}
     */
    static createV1(code3, digest) {
      return _CID.create(1, code3, digest);
    }
    /**
     * Decoded a CID from its binary representation. The byte array must contain
     * only the CID with no additional bytes.
     *
     * An error will be thrown if the bytes provided do not contain a valid
     * binary representation of a CID.
     *
     * @template {unknown} Data
     * @template {number} Code
     * @template {number} Alg
     * @template {API.Version} Ver
     * @param {API.ByteView<API.Link<Data, Code, Alg, Ver>>} bytes
     * @returns {CID<Data, Code, Alg, Ver>}
     */
    static decode(bytes) {
      const [cid, remainder] = _CID.decodeFirst(bytes);
      if (remainder.length) {
        throw new Error("Incorrect length");
      }
      return cid;
    }
    /**
     * Decoded a CID from its binary representation at the beginning of a byte
     * array.
     *
     * Returns an array with the first element containing the CID and the second
     * element containing the remainder of the original byte array. The remainder
     * will be a zero-length byte array if the provided bytes only contained a
     * binary CID representation.
     *
     * @template {unknown} T
     * @template {number} C
     * @template {number} A
     * @template {API.Version} V
     * @param {API.ByteView<API.Link<T, C, A, V>>} bytes
     * @returns {[CID<T, C, A, V>, Uint8Array]}
     */
    static decodeFirst(bytes) {
      const specs = _CID.inspectBytes(bytes);
      const prefixSize = specs.size - specs.multihashSize;
      const multihashBytes = coerce2(
        bytes.subarray(prefixSize, prefixSize + specs.multihashSize)
      );
      if (multihashBytes.byteLength !== specs.multihashSize) {
        throw new Error("Incorrect length");
      }
      const digestBytes = multihashBytes.subarray(
        specs.multihashSize - specs.digestSize
      );
      const digest = new Digest2(
        specs.multihashCode,
        specs.digestSize,
        digestBytes,
        multihashBytes
      );
      const cid = specs.version === 0 ? _CID.createV0(
        /** @type {API.MultihashDigest<API.SHA_256>} */
        digest
      ) : _CID.createV1(specs.codec, digest);
      return [
        /** @type {CID<T, C, A, V>} */
        cid,
        bytes.subarray(specs.size)
      ];
    }
    /**
     * Inspect the initial bytes of a CID to determine its properties.
     *
     * Involves decoding up to 4 varints. Typically this will require only 4 to 6
     * bytes but for larger multicodec code values and larger multihash digest
     * lengths these varints can be quite large. It is recommended that at least
     * 10 bytes be made available in the `initialBytes` argument for a complete
     * inspection.
     *
     * @template {unknown} T
     * @template {number} C
     * @template {number} A
     * @template {API.Version} V
     * @param {API.ByteView<API.Link<T, C, A, V>>} initialBytes
     * @returns {{ version:V, codec:C, multihashCode:A, digestSize:number, multihashSize:number, size:number }}
     */
    static inspectBytes(initialBytes) {
      let offset = 0;
      const next = () => {
        const [i, length3] = decode11(initialBytes.subarray(offset));
        offset += length3;
        return i;
      };
      let version = (
        /** @type {V} */
        next()
      );
      let codec = (
        /** @type {C} */
        DAG_PB_CODE2
      );
      if (
        /** @type {number} */
        version === 18
      ) {
        version = /** @type {V} */
        0;
        offset = 0;
      } else {
        codec = /** @type {C} */
        next();
      }
      if (version !== 0 && version !== 1) {
        throw new RangeError(`Invalid CID version ${version}`);
      }
      const prefixSize = offset;
      const multihashCode = (
        /** @type {A} */
        next()
      );
      const digestSize = next();
      const size = offset + digestSize;
      const multihashSize = size - prefixSize;
      return { version, codec, multihashCode, digestSize, multihashSize, size };
    }
    /**
     * Takes cid in a string representation and creates an instance. If `base`
     * decoder is not provided will use a default from the configuration. It will
     * throw an error if encoding of the CID is not compatible with supplied (or
     * a default decoder).
     *
     * @template {string} Prefix
     * @template {unknown} Data
     * @template {number} Code
     * @template {number} Alg
     * @template {API.Version} Ver
     * @param {API.ToString<API.Link<Data, Code, Alg, Ver>, Prefix>} source
     * @param {API.MultibaseDecoder<Prefix>} [base]
     * @returns {CID<Data, Code, Alg, Ver>}
     */
    static parse(source, base3) {
      const [prefix, bytes] = parseCIDtoBytes2(source, base3);
      const cid = _CID.decode(bytes);
      if (cid.version === 0 && source[0] !== "Q") {
        throw Error("Version 0 CID string must not include multibase prefix");
      }
      baseCache2(cid).set(prefix, source);
      return cid;
    }
  };
  var parseCIDtoBytes2 = (source, base3) => {
    switch (source[0]) {
      case "Q": {
        const decoder = base3 || base58btc2;
        return [
          /** @type {Prefix} */
          base58btc2.prefix,
          decoder.decode(`${base58btc2.prefix}${source}`)
        ];
      }
      case base58btc2.prefix: {
        const decoder = base3 || base58btc2;
        return [
          /** @type {Prefix} */
          base58btc2.prefix,
          decoder.decode(source)
        ];
      }
      case base322.prefix: {
        const decoder = base3 || base322;
        return [
          /** @type {Prefix} */
          base322.prefix,
          decoder.decode(source)
        ];
      }
      default: {
        if (base3 == null) {
          throw Error(
            "To parse non base32 or base58btc encoded CID multibase decoder must be provided"
          );
        }
        return [
          /** @type {Prefix} */
          source[0],
          base3.decode(source)
        ];
      }
    }
  };
  var toStringV02 = (bytes, cache3, base3) => {
    const { prefix } = base3;
    if (prefix !== base58btc2.prefix) {
      throw Error(`Cannot string encode V0 in ${base3.name} encoding`);
    }
    const cid = cache3.get(prefix);
    if (cid == null) {
      const cid2 = base3.encode(bytes).slice(1);
      cache3.set(prefix, cid2);
      return cid2;
    } else {
      return cid;
    }
  };
  var toStringV12 = (bytes, cache3, base3) => {
    const { prefix } = base3;
    const cid = cache3.get(prefix);
    if (cid == null) {
      const cid2 = base3.encode(bytes);
      cache3.set(prefix, cid2);
      return cid2;
    } else {
      return cid;
    }
  };
  var DAG_PB_CODE2 = 112;
  var SHA_256_CODE2 = 18;
  var encodeCID2 = (version, code3, multihash) => {
    const codeOffset = encodingLength2(version);
    const hashOffset = codeOffset + encodingLength2(code3);
    const bytes = new Uint8Array(hashOffset + multihash.byteLength);
    encodeTo2(version, bytes, 0);
    encodeTo2(code3, bytes, codeOffset);
    bytes.set(multihash, hashOffset);
    return bytes;
  };
  var cidSymbol2 = Symbol.for("@ipld/js-cid/CID");

  // ../../node_modules/.pnpm/multiformats@12.1.3/node_modules/multiformats/src/hashes/hasher.js
  var from4 = ({ name: name3, code: code3, encode: encode12 }) => new Hasher2(name3, code3, encode12);
  var Hasher2 = class {
    /**
     *
     * @param {Name} name
     * @param {Code} code
     * @param {(input: Uint8Array) => Await<Uint8Array>} encode
     */
    constructor(name3, code3, encode12) {
      this.name = name3;
      this.code = code3;
      this.encode = encode12;
    }
    /**
     * @param {Uint8Array} input
     * @returns {Await<Digest.Digest<Code, number>>}
     */
    digest(input) {
      if (input instanceof Uint8Array) {
        const result = this.encode(input);
        return result instanceof Uint8Array ? create3(this.code, result) : result.then((digest) => create3(this.code, digest));
      } else {
        throw Error("Unknown type, must be binary type");
      }
    }
  };

  // ../../node_modules/.pnpm/multiformats@12.1.3/node_modules/multiformats/src/block.js
  function readonly({ enumerable = true, configurable = false } = {}) {
    return { enumerable, configurable, writable: false };
  }
  function* linksWithin(path, value) {
    if (value != null && typeof value === "object") {
      if (Array.isArray(value)) {
        for (const [index, element] of value.entries()) {
          const elementPath = [...path, index];
          const cid = CID2.asCID(element);
          if (cid) {
            yield [elementPath.join("/"), cid];
          } else if (typeof element === "object") {
            yield* links(element, elementPath);
          }
        }
      } else {
        const cid = CID2.asCID(value);
        if (cid) {
          yield [path.join("/"), cid];
        } else {
          yield* links(value, path);
        }
      }
    }
  }
  function* links(source, base3) {
    if (source == null || source instanceof Uint8Array) {
      return;
    }
    const cid = CID2.asCID(source);
    if (cid) {
      yield [base3.join("/"), cid];
    }
    for (const [key, value] of Object.entries(source)) {
      const path = (
        /** @type {[string|number, string]} */
        [...base3, key]
      );
      yield* linksWithin(path, value);
    }
  }
  function* treeWithin(path, value) {
    if (Array.isArray(value)) {
      for (const [index, element] of value.entries()) {
        const elementPath = [...path, index];
        yield elementPath.join("/");
        if (typeof element === "object" && !CID2.asCID(element)) {
          yield* tree(element, elementPath);
        }
      }
    } else {
      yield* tree(value, path);
    }
  }
  function* tree(source, base3) {
    if (source == null || typeof source !== "object") {
      return;
    }
    for (const [key, value] of Object.entries(source)) {
      const path = (
        /** @type {[string|number, string]} */
        [...base3, key]
      );
      yield path.join("/");
      if (value != null && !(value instanceof Uint8Array) && typeof value === "object" && !CID2.asCID(value)) {
        yield* treeWithin(path, value);
      }
    }
  }
  function get(source, path) {
    let node = (
      /** @type {Record<string, any>} */
      source
    );
    for (const [index, key] of path.entries()) {
      node = node[key];
      if (node == null) {
        throw new Error(`Object has no property at ${path.slice(0, index + 1).map((part) => `[${JSON.stringify(part)}]`).join("")}`);
      }
      const cid = CID2.asCID(node);
      if (cid) {
        return { value: cid, remaining: path.slice(index + 1).join("/") };
      }
    }
    return { value: node };
  }
  var Block = class {
    /**
     * @param {object} options
     * @param {CID<T, C, A, V>} options.cid
     * @param {API.ByteView<T>} options.bytes
     * @param {T} options.value
     */
    constructor({ cid, bytes, value }) {
      if (!cid || !bytes || typeof value === "undefined") {
        throw new Error("Missing required argument");
      }
      this.cid = cid;
      this.bytes = bytes;
      this.value = value;
      this.asBlock = this;
      Object.defineProperties(this, {
        cid: readonly(),
        bytes: readonly(),
        value: readonly(),
        asBlock: readonly()
      });
    }
    links() {
      return links(this.value, []);
    }
    tree() {
      return tree(this.value, []);
    }
    /**
     *
     * @param {string} [path]
     * @returns {API.BlockCursorView<unknown>}
     */
    get(path = "/") {
      return get(this.value, path.split("/").filter(Boolean));
    }
  };
  async function encode9({ value, codec, hasher }) {
    if (typeof value === "undefined")
      throw new Error('Missing required argument "value"');
    if (!codec || !hasher)
      throw new Error("Missing required argument: codec or hasher");
    const bytes = codec.encode(value);
    const hash = await hasher.digest(bytes);
    const cid = CID2.create(
      1,
      codec.code,
      hash
    );
    return new Block({ value, bytes, cid });
  }
  async function decode13({ bytes, codec, hasher }) {
    if (!bytes)
      throw new Error('Missing required argument "bytes"');
    if (!codec || !hasher)
      throw new Error("Missing required argument: codec or hasher");
    const value = codec.decode(bytes);
    const hash = await hasher.digest(bytes);
    const cid = CID2.create(1, codec.code, hash);
    return new Block({ value, bytes, cid });
  }
  function createUnsafe({ bytes, cid, value: maybeValue, codec }) {
    const value = maybeValue !== void 0 ? maybeValue : codec && codec.decode(bytes);
    if (value === void 0)
      throw new Error('Missing required argument, must either provide "value" or "codec"');
    return new Block({
      // eslint-disable-next-line object-shorthand
      cid: (
        /** @type {CID<T, Code, Alg, V>} */
        cid
      ),
      bytes,
      value
    });
  }
  async function create4({ bytes, cid, hasher, codec }) {
    if (!bytes)
      throw new Error('Missing required argument "bytes"');
    if (!hasher)
      throw new Error('Missing required argument "hasher"');
    const value = codec.decode(bytes);
    const hash = await hasher.digest(bytes);
    if (!bytes_exports3.equals(cid.multihash.bytes, hash.bytes)) {
      throw new Error("CID hash does not match bytes");
    }
    return createUnsafe({
      bytes,
      cid,
      value,
      codec
    });
  }

  // ../../node_modules/.pnpm/multiformats@12.1.3/node_modules/multiformats/src/hashes/sha2-browser.js
  var sha = (name3) => (
    /**
     * @param {Uint8Array} data
     */
    async (data) => new Uint8Array(await crypto.subtle.digest(name3, data))
  );
  var sha256 = from4({
    name: "sha2-256",
    code: 18,
    encode: sha("SHA-256")
  });
  var sha512 = from4({
    name: "sha2-512",
    code: 19,
    encode: sha("SHA-512")
  });

  // ../../node_modules/.pnpm/multiformats@12.1.3/node_modules/multiformats/src/codecs/raw.js
  var raw_exports = {};
  __export(raw_exports, {
    code: () => code2,
    decode: () => decode14,
    encode: () => encode10,
    name: () => name2
  });
  var name2 = "raw";
  var code2 = 85;
  var encode10 = (node) => coerce2(node);
  var decode14 = (data) => coerce2(data);

  // src/loader-helpers.ts
  async function encodeCarFile(roots, t) {
    let size = 0;
    const headerSize = headerLength({ roots });
    size += headerSize;
    for (const { cid, bytes } of t.entries()) {
      size += blockLength({ cid, bytes });
    }
    const buffer2 = new Uint8Array(size);
    const writer = createWriter(buffer2, { headerSize });
    for (const r of roots) {
      writer.addRoot(r);
    }
    for (const { cid, bytes } of t.entries()) {
      writer.write({ cid, bytes });
    }
    writer.close();
    return await encode9({ value: writer.bytes, hasher: sha256, codec: raw_exports });
  }
  async function encodeCarHeader(fp) {
    return await encode9({
      value: { fp },
      hasher: sha256,
      codec: src_exports
    });
  }
  async function parseCarFile(reader) {
    const roots = await reader.getRoots();
    const header = await reader.get(roots[0]);
    if (!header)
      throw new Error("missing header block");
    const { value } = await decode13({ bytes: header.bytes, hasher: sha256, codec: src_exports });
    if (value && value.fp === void 0)
      throw new Error("missing fp");
    const { fp } = value;
    return fp;
  }

  // ../../node_modules/.pnpm/multiformats@13.1.0/node_modules/multiformats/dist/src/link.js
  function parse2(source, base3) {
    return CID.parse(source, base3);
  }

  // ../../node_modules/.pnpm/@web3-storage+pail@0.6.0/node_modules/@web3-storage/pail/src/block.js
  var MemoryBlockstore = class {
    /** @type {Map<string, Uint8Array>} */
    #blocks = /* @__PURE__ */ new Map();
    /**
     * @param {Array<import('multiformats').Block>} [blocks]
     */
    constructor(blocks) {
      if (blocks) {
        this.#blocks = new Map(blocks.map((b) => [b.cid.toString(), b.bytes]));
      }
    }
    /** @type {API.BlockFetcher['get']} */
    async get(cid) {
      const bytes = this.#blocks.get(cid.toString());
      if (!bytes)
        return;
      return { cid, bytes };
    }
    /**
     * @param {API.UnknownLink} cid
     * @param {Uint8Array} bytes
     */
    async put(cid, bytes) {
      this.#blocks.set(cid.toString(), bytes);
    }
    /**
     * @param {API.UnknownLink} cid
     * @param {Uint8Array} bytes
     */
    putSync(cid, bytes) {
      this.#blocks.set(cid.toString(), bytes);
    }
    /** @param {API.UnknownLink} cid */
    async delete(cid) {
      this.#blocks.delete(cid.toString());
    }
    /** @param {API.UnknownLink} cid */
    deleteSync(cid) {
      this.#blocks.delete(cid.toString());
    }
    *entries() {
      for (const [str, bytes] of this.#blocks) {
        yield { cid: parse2(str), bytes };
      }
    }
  };

  // ../../node_modules/.pnpm/prolly-trees@1.0.4/node_modules/prolly-trees/esm/src/utils.js
  var readUInt32LE = (buffer2) => {
    const offset = buffer2.byteLength - 4;
    return (buffer2[offset] | buffer2[offset + 1] << 8 | buffer2[offset + 2] << 16) + buffer2[offset + 3] * 16777216;
  };
  var MAX_UINT32 = 4294967295;
  var bf = (factor) => {
    const threshold = Math.floor(MAX_UINT32 / factor);
    return async (entry) => {
      const identity = await entry.identity();
      if (typeof identity !== "number") {
        throw new Error("Identity must be a number");
      }
      if (identity <= threshold) {
        return true;
      }
      return false;
    };
  };
  var binaryCompare = (b1, b2) => {
    for (let i = 0; i < b1.byteLength; i++) {
      if (b2.byteLength === i)
        return 1;
      const c1 = b1[i];
      const c2 = b2[i];
      if (c1 === c2)
        continue;
      if (c1 > c2)
        return 1;
      else
        return -1;
    }
    if (b2.byteLength > b1.byteLength)
      return -1;
    return 0;
  };
  var CIDCounter = class {
    constructor() {
      this._cids = /* @__PURE__ */ new Set();
    }
    add(node) {
      if (!node.address) {
        throw new Error("Cannot add node without address");
      }
      if (node.address.then) {
        const p = node.address.then((cid) => this._cids.add(cid.toString()));
        this._cids.add(p);
        p.then(() => this._cids.delete(p));
      } else {
        this._cids.add(node.address.toString());
      }
    }
    async all() {
      await Promise.all([...this._cids]);
      return this._cids;
    }
  };

  // ../../node_modules/.pnpm/prolly-trees@1.0.4/node_modules/prolly-trees/esm/src/cache.js
  var nocache = {
    has: () => false,
    get: () => {
      throw new Error("Cannot ask for entries from nocache");
    },
    set: () => {
    }
  };

  // ../../node_modules/.pnpm/multiformats@13.1.0/node_modules/multiformats/dist/src/block.js
  function readonly2({ enumerable = true, configurable = false } = {}) {
    return { enumerable, configurable, writable: false };
  }
  function* linksWithin2(path, value) {
    if (value != null && typeof value === "object") {
      if (Array.isArray(value)) {
        for (const [index, element] of value.entries()) {
          const elementPath = [...path, index];
          const cid = CID.asCID(element);
          if (cid != null) {
            yield [elementPath.join("/"), cid];
          } else if (typeof element === "object") {
            yield* links2(element, elementPath);
          }
        }
      } else {
        const cid = CID.asCID(value);
        if (cid != null) {
          yield [path.join("/"), cid];
        } else {
          yield* links2(value, path);
        }
      }
    }
  }
  function* links2(source, base3) {
    if (source == null || source instanceof Uint8Array) {
      return;
    }
    const cid = CID.asCID(source);
    if (cid != null) {
      yield [base3.join("/"), cid];
    }
    for (const [key, value] of Object.entries(source)) {
      const path = [...base3, key];
      yield* linksWithin2(path, value);
    }
  }
  function* treeWithin2(path, value) {
    if (Array.isArray(value)) {
      for (const [index, element] of value.entries()) {
        const elementPath = [...path, index];
        yield elementPath.join("/");
        if (typeof element === "object" && CID.asCID(element) == null) {
          yield* tree2(element, elementPath);
        }
      }
    } else {
      yield* tree2(value, path);
    }
  }
  function* tree2(source, base3) {
    if (source == null || typeof source !== "object") {
      return;
    }
    for (const [key, value] of Object.entries(source)) {
      const path = [...base3, key];
      yield path.join("/");
      if (value != null && !(value instanceof Uint8Array) && typeof value === "object" && CID.asCID(value) == null) {
        yield* treeWithin2(path, value);
      }
    }
  }
  function get2(source, path) {
    let node = source;
    for (const [index, key] of path.entries()) {
      node = node[key];
      if (node == null) {
        throw new Error(`Object has no property at ${path.slice(0, index + 1).map((part) => `[${JSON.stringify(part)}]`).join("")}`);
      }
      const cid = CID.asCID(node);
      if (cid != null) {
        return { value: cid, remaining: path.slice(index + 1).join("/") };
      }
    }
    return { value: node };
  }
  var Block3 = class {
    cid;
    bytes;
    value;
    asBlock;
    constructor({ cid, bytes, value }) {
      if (cid == null || bytes == null || typeof value === "undefined") {
        throw new Error("Missing required argument");
      }
      this.cid = cid;
      this.bytes = bytes;
      this.value = value;
      this.asBlock = this;
      Object.defineProperties(this, {
        cid: readonly2(),
        bytes: readonly2(),
        value: readonly2(),
        asBlock: readonly2()
      });
    }
    links() {
      return links2(this.value, []);
    }
    tree() {
      return tree2(this.value, []);
    }
    get(path = "/") {
      return get2(this.value, path.split("/").filter(Boolean));
    }
  };
  async function encode11({ value, codec, hasher }) {
    if (typeof value === "undefined")
      throw new Error('Missing required argument "value"');
    if (codec == null || hasher == null)
      throw new Error("Missing required argument: codec or hasher");
    const bytes = codec.encode(value);
    const hash = await hasher.digest(bytes);
    const cid = CID.create(1, codec.code, hash);
    return new Block3({ value, bytes, cid });
  }
  async function decode15({ bytes, codec, hasher }) {
    if (bytes == null)
      throw new Error('Missing required argument "bytes"');
    if (codec == null || hasher == null)
      throw new Error("Missing required argument: codec or hasher");
    const value = codec.decode(bytes);
    const hash = await hasher.digest(bytes);
    const cid = CID.create(1, codec.code, hash);
    return new Block3({ value, bytes, cid });
  }

  // ../../node_modules/.pnpm/prolly-trees@1.0.4/node_modules/prolly-trees/esm/src/base.js
  var Entry = class {
    constructor({ key, address }, opts = {}) {
      this.key = key;
      this.address = address;
      this.codec = opts.codec;
      this.hasher = opts.hasher;
    }
    get isEntry() {
      return true;
    }
  };
  var EntryList = class {
    constructor({ entries, closed }) {
      if (typeof closed !== "boolean")
        throw new Error('Missing required argument "closed"');
      this.entries = entries;
      this.closed = closed;
      this.startKey = entries[0].key;
    }
    find(key, compare3) {
      const { entries } = this;
      for (let i = entries.length - 1; i > -1; i--) {
        const entry = entries[i];
        const comp = compare3(key, entry.key);
        if (comp > -1) {
          return [
            i,
            entry
          ];
        }
      }
      return null;
    }
    findMany(keys, compare3, sorted = false, strict = false) {
      const { entries } = this;
      const results = /* @__PURE__ */ new Map();
      if (!sorted) {
        keys = keys.sort(compare3);
      } else {
        keys = [...keys];
      }
      for (let i = entries.length - 1; i > -1; i--) {
        if (!keys.length)
          break;
        const entry = entries[i];
        const found = [];
        while (keys.length) {
          let key = keys[keys.length - 1];
          key = key.key ? key.key : key;
          const comp = compare3(key, entry.key);
          if (!strict) {
            if (comp > -1) {
              found.push(keys.pop());
            } else {
              break;
            }
          } else {
            if (comp === 0) {
              found.push(keys.pop());
            } else if (comp > 0) {
              keys.pop();
            } else {
              break;
            }
          }
        }
        if (found.length) {
          results.set(i, [
            entry,
            found
          ]);
        }
      }
      return results;
    }
    findRange(start, end, compare3) {
      const { entries } = this;
      let last;
      let first = 0;
      for (let i = entries.length - 1; i > -1; i--) {
        const entry = entries[i];
        const comp = compare3(end, entry.key);
        if (comp > 0) {
          last = i;
          break;
        }
      }
      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        const comp = compare3(start, entry.key);
        if (comp === 0) {
          first = i;
          break;
        } else if (comp < 0) {
          break;
        }
        first = i;
      }
      return {
        first,
        last,
        entries: entries.slice(first, last + 1)
      };
    }
  };
  var stringKey = (key) => typeof key === "string" ? key : JSON.stringify(key);
  function sortBulk(bulk, opts) {
    return bulk.sort(({ key: a }, { key: b }) => opts.compare(a, b));
  }
  async function filterLeftmostInserts(first, bulk, compare3) {
    const inserts = [];
    for (const b of bulk) {
      const { key, del } = b;
      if (compare3(key, first) < 0) {
        if (!del)
          inserts.push(b);
      } else {
        break;
      }
    }
    return inserts;
  }
  async function generateNewLeaves(inserts, opts, { chunker: chunker2, compare: compare3 }) {
    return await Node2.from({
      entries: inserts.map((insert) => new opts.LeafEntryClass(insert, opts)).sort((a, b) => compare3(a.key, b.key)),
      chunker: chunker2,
      NodeClass: opts.LeafClass,
      distance: 0,
      opts
    });
  }
  async function generateBranchEntries(that, newLeaves, results, opts) {
    return await Promise.all(newLeaves.map(async (node) => {
      const block = await node.encode();
      results.blocks.push({
        block,
        node
      });
      that.cache.set(node);
      const newBranchEntry = new opts.BranchEntryClass({
        key: node.key,
        address: await node.address
      }, opts);
      return newBranchEntry;
    }));
  }
  async function processRoot(that, results, bulk, nodeOptions) {
    const root = results.root;
    results.blocks.push({
      block: await root.encode(),
      node: root
    });
    that.cache.set(root);
    const opts = nodeOptions.opts;
    const distance = root.distance;
    const first = root.entryList.startKey;
    const inserts = await filterLeftmostInserts(first, bulk, that.compare);
    if (inserts.length) {
      const newLeaves = await generateNewLeaves(inserts, opts, that);
      const branchEntries = await generateBranchEntries(that, newLeaves, results, opts);
      const firstRootEntry = new opts.BranchEntryClass({
        key: root.entryList.startKey,
        address: await root.address
      }, opts);
      const newBranchEntries = [
        firstRootEntry,
        ...branchEntries
      ].sort(({ key: a }, { key: b }) => opts.compare(a, b));
      let newBranches = await Node2.from({
        ...nodeOptions,
        entries: newBranchEntries,
        chunker: that.chunker,
        NodeClass: opts.BranchClass,
        distance: distance + 1
      });
      let allBranches = [...newBranches];
      while (newBranches.length > 1) {
        const newBranchEntries2 = await Promise.all(newBranches.map(async (l) => new opts.BranchEntryClass({
          key: l.key,
          address: await l.address
        }, opts)));
        newBranches = await Node2.from({
          ...nodeOptions,
          entries: newBranchEntries2.sort(({ key: a }, { key: b }) => opts.compare(a, b)),
          chunker: that.chunker,
          NodeClass: opts.BranchClass,
          distance: distance + 1
        });
        allBranches = [
          ...allBranches,
          ...newBranches
        ];
      }
      await Promise.all(allBranches.map(async (m) => {
        const block = await m.encode();
        that.cache.set(m);
        results.blocks.push({
          block,
          node: m
        });
      }));
      results.root = newBranches[0];
      results.nodes = [
        ...results.nodes,
        ...allBranches
      ];
    }
  }
  var Node2 = class _Node {
    constructor({ entryList, chunker: chunker2, distance, getNode, compare: compare3, cache: cache3 }) {
      this.entryList = entryList;
      this.chunker = chunker2;
      this.distance = distance;
      this.getNode = getNode;
      this.compare = compare3;
      this.cache = cache3;
    }
    get closed() {
      return this.entryList.closed;
    }
    get key() {
      return this.entryList.startKey;
    }
    async getEntry(key, cids = new CIDCounter()) {
      const result = await this._getEntry(key, cids);
      return {
        result,
        cids
      };
    }
    async _getEntry(key, cids) {
      cids.add(this);
      let node = this;
      while (!node.isLeaf) {
        const result2 = node.entryList.find(key, this.compare);
        if (result2 === null)
          throw new Error("Not found");
        const [, entry2] = result2;
        node = await this.getNode(await entry2.address);
        cids.add(node);
      }
      const result = node.entryList.find(key, this.compare);
      if (result === null || result[1].key.toString() !== key.toString())
        throw new Error("Not found");
      const [, entry] = result;
      return entry;
    }
    async getAllEntries(cids = new CIDCounter()) {
      const result = await this._getAllEntries(cids);
      return {
        result,
        cids
      };
    }
    _getAllEntries(cids) {
      cids.add(this);
      if (this.isLeaf) {
        return this.entryList.entries;
      } else {
        const { entries } = this.entryList;
        const mapper = async (entry) => this.getNode(await entry.address).then((node) => node._getAllEntries(cids)).catch(async (err) => {
          throw err;
        });
        return Promise.all(entries.map(mapper)).then((results) => results.flat());
      }
    }
    async *vis(cids = /* @__PURE__ */ new Set()) {
      const renderNodeLabel = async (node) => {
        if (node.isLeaf) {
          const entries = node.entryList.entries.map((e) => `[${e.key},${JSON.stringify(e.value).replace(/"/g, "'")}]`).join(", ");
          return `Leaf [${entries}]`;
        } else {
          const entries = node.entryList.entries.map((e) => `[${e.key}]`).join(", ");
          return `Branch [${entries}]`;
        }
      };
      const shortCid = (cid) => cid.toString().slice(0, 4) + cid.toString().slice(-4);
      const visit = async function* (node, parentId, cids2) {
        const nodeId = await node.address;
        if (!cids2.has(nodeId)) {
          cids2.add(nodeId);
          const nodeLabel = await renderNodeLabel(node);
          yield `  node [shape=ellipse fontname="Courier"]; ${shortCid(nodeId)} [label="${nodeLabel}"];`;
          yield `  ${shortCid(parentId)} -> ${shortCid(nodeId)};`;
          for (const entry of node.entryList.entries) {
            if (entry.address) {
              const entryId = await entry.address;
              try {
                const childNode = await node.getNode(entryId);
                yield* await visit(childNode, nodeId, cids2);
              } catch (err) {
                yield `  ${shortCid(nodeId)} -> ${shortCid(entryId)};`;
                yield `  node [shape=ellipse fontname="Courier"]; ${shortCid(entryId)} [label="Error: ${err.message}"];`;
              }
            }
          }
        }
      };
      yield "digraph tree {";
      yield '  node [shape=ellipse fontname="Courier"]; rootnode;';
      for await (const line of visit(this, "rootnode", cids)) {
        yield line;
      }
      yield "}";
    }
    async getEntries(keys, sorted = false, cids = new CIDCounter()) {
      const result = await this._getEntries(keys, sorted, cids);
      return {
        result,
        cids
      };
    }
    async _getEntries(keys, sorted, cids) {
      cids.add(this);
      if (!sorted)
        keys = keys.sort(this.compare);
      const results = this.entryList.findMany(keys, this.compare, true, this.isLeaf);
      if (this.isLeaf) {
        return [...results.values()].map(([entry]) => entry);
      }
      let entries = [];
      for (const [entry, keys2] of [...results.values()].reverse()) {
        const p = this.getNode(await entry.address);
        entries.push(p.then((node) => node._getEntries(keys2.reverse(), true, cids)));
      }
      entries = await Promise.all(entries);
      return entries.flat();
    }
    async getRangeEntries(start, end, cids = new CIDCounter()) {
      const result = await this._getRangeEntries(start, end, cids);
      return {
        result,
        cids
      };
    }
    _getRangeEntries(start, end, cids) {
      cids.add(this);
      const { entries } = this.entryList.findRange(start, end, this.compare);
      if (this.isLeaf) {
        return entries.filter((entry) => {
          const s = this.compare(start, entry.key);
          const e = this.compare(end, entry.key);
          if (s <= 0 && e >= 0)
            return true;
          return false;
        });
      }
      if (!entries.length)
        return [];
      const thenRange = async (entry) => this.getNode(await entry.address).then((node) => node._getRangeEntries(start, end, cids));
      const results = [thenRange(entries.shift())];
      if (!entries.length)
        return results[0];
      const last = thenRange(entries.pop());
      while (entries.length) {
        const thenAll = async (entry) => this.getNode(await entry.address).then(async (node) => node._getAllEntries(cids));
        results.push(thenAll(entries.shift()));
      }
      results.push(last);
      return Promise.all(results).then((results2) => results2.flat());
    }
    async transaction(bulk, opts = {}) {
      opts = {
        codec: this.codec,
        hasher: this.hasher,
        getNode: this.getNode,
        compare: this.compare,
        cache: this.cache,
        ...opts
      };
      const nodeOptions = {
        chunker: this.chunker,
        opts
      };
      const results = this.entryList.findMany(bulk, opts.compare, true, this.isLeaf);
      if (this.isLeaf) {
        return await this.transactionLeaf(bulk, opts, nodeOptions, results);
      } else {
        return await this.transactionBranch(bulk, opts, nodeOptions, results);
      }
    }
    async transactionLeaf(bulk, opts, nodeOptions, results) {
      const { LeafClass, LeafEntryClass } = opts;
      const { entries, previous } = this.processLeafEntries(bulk, results, LeafEntryClass, opts);
      const _opts = {
        ...nodeOptions,
        entries,
        NodeClass: LeafClass,
        distance: 0
      };
      const nodes = await _Node.from(_opts);
      return {
        nodes,
        previous,
        blocks: await Promise.all(nodes.map(async (n) => {
          const block = await n.encode();
          this.cache.set(n);
          return {
            block,
            node: n
          };
        })),
        distance: 0
      };
    }
    processLeafEntries(bulk, results, LeafEntryClass, opts) {
      const previous = [];
      let entries = [];
      const changes = {};
      const deletes = /* @__PURE__ */ new Map();
      for (const { key, del, value } of bulk) {
        const skey = stringKey(key);
        if (del) {
          if (typeof changes[skey] === "undefined")
            deletes.set(skey, null);
        } else {
          changes[skey] = {
            key,
            value
          };
          deletes.delete(skey);
        }
      }
      entries = [...this.entryList.entries];
      for (const [i, [entry]] of results) {
        previous.push(entry);
        const skey = stringKey(entry.key);
        if (deletes.has(skey)) {
          deletes.set(skey, i);
        } else {
          entries[i] = new LeafEntryClass(changes[skey], opts);
          delete changes[skey];
        }
      }
      let count = 0;
      for (const [, i] of deletes) {
        if (i !== null)
          entries.splice(i - count++, 1);
      }
      const appends = Object.values(changes).map((obj) => new LeafEntryClass(obj, opts));
      entries = entries.concat(appends).sort(({ key: a }, { key: b }) => opts.compare(a, b));
      return {
        entries,
        previous
      };
    }
    async transactionBranch(bulk, opts, nodeOptions, results) {
      const { BranchClass, BranchEntryClass } = opts;
      let distance = 0;
      for (const [i, [entry, keys]] of results) {
        const p = this.getNode(await entry.address).then((node) => node.transaction(keys.reverse(), {
          ...opts,
          sorted: true
        })).then((r) => ({
          entry,
          keys,
          distance,
          ...r
        }));
        results.set(i, p);
      }
      let entries = [...this.entryList.entries];
      const final = {
        previous: [],
        blocks: [],
        nodes: []
      };
      for (const [i, p] of results) {
        const {
          nodes,
          previous,
          blocks,
          distance: _distance
        } = await p;
        distance = _distance;
        entries[i] = nodes;
        if (previous.length)
          final.previous = final.previous.concat(previous);
        if (blocks.length)
          final.blocks = final.blocks.concat(blocks);
        if (nodes.length)
          final.nodes = final.nodes.concat(nodes);
      }
      entries = entries.flat();
      const newEntries = await this.handlePrepend(entries, opts, nodeOptions, final, distance);
      distance++;
      const toEntry = async (branch) => {
        if (branch.isEntry)
          return branch;
        const block = await branch.encode();
        final.blocks.push({
          block,
          node: branch
        });
        this.cache.set(branch);
        return new BranchEntryClass(branch, opts);
      };
      entries = await Promise.all(newEntries.map(toEntry));
      const _opts = {
        ...nodeOptions,
        entries,
        NodeClass: BranchClass,
        distance
      };
      const newNodes = await _Node.from(_opts);
      await Promise.all(newNodes.map(async (n) => {
        const block = await n.encode();
        final.blocks.push({
          block,
          node: n
        });
        this.cache.set(n);
      }));
      final.nodes = newNodes;
      return {
        ...final,
        distance
      };
    }
    async handlePrepend(entries, opts, nodeOptions, final, distance) {
      const { BranchClass, LeafClass } = opts;
      let newEntries = [];
      let prepend = null;
      for (const entry of entries) {
        if (prepend) {
          const mergeEntries = await this.mergeFirstLeftEntries(entry, prepend, nodeOptions, final, distance);
          prepend = null;
          const NodeClass = !mergeEntries[0].address ? LeafClass : BranchClass;
          const _opts = {
            ...nodeOptions,
            entries: mergeEntries.sort(({ key: a }, { key: b }) => opts.compare(a, b)),
            NodeClass,
            distance
          };
          const nodes = await _Node.from(_opts);
          if (!nodes[nodes.length - 1].closed) {
            prepend = nodes.pop();
          }
          if (nodes.length) {
            newEntries = newEntries.concat(nodes);
          }
        } else {
          if (!entry.isEntry && !entry.closed) {
            prepend = entry;
          } else {
            newEntries.push(entry);
          }
        }
      }
      if (prepend) {
        newEntries.push(prepend);
      }
      return newEntries;
    }
    async getNodeFirstFromBlocks(blocks, addr) {
      for (const { block, node } of blocks) {
        if (await block.cid === addr)
          return node;
      }
      return await this.getNode(addr);
    }
    async mergeFirstLeftEntries(entry, prepend, nodeOptions, final, distance) {
      const opts = nodeOptions.opts;
      const { LeafClass, BranchClass, BranchEntryClass } = opts;
      if (entry.isEntry) {
        const addr = await entry.address;
        entry = await this.getNodeFirstFromBlocks(final.blocks, addr);
      }
      const es = entry.entryList.entries;
      if (!es.length)
        throw new Error("unreachable no entries");
      const basicMerge = (entries1, entries2) => {
        return entries1.concat(entries2);
      };
      const processNodesAndCreateEntries = async (nodes, final2, opts2) => {
        return await Promise.all(nodes.map(async (l) => {
          final2.blocks.push({
            block: await l.encode(),
            node: l
          });
          this.cache.set(l);
          return new BranchEntryClass({
            key: l.key,
            address: await l.address
          }, opts2);
        }));
      };
      if (es[0].constructor.name === prepend.entryList.entries[0].constructor.name) {
        return await basicMerge(prepend.entryList.entries, es);
      } else {
        const leftEntry = es.shift();
        if (!leftEntry)
          throw new Error("unreachable no left entry");
        if (!leftEntry.address)
          throw new Error("unreachable existing leaf, no leftEntry.address");
        const mergeLeftEntries = await this.mergeFirstLeftEntries(leftEntry, prepend, nodeOptions, final, distance - 1);
        const esf = es.shift();
        if (!esf) {
          return mergeLeftEntries;
        }
        if (!esf.address)
          throw new Error("unreachable existing leaf, no esf.address");
        const oldFront = await this.getNodeFirstFromBlocks(final.blocks, await esf.address);
        if (!oldFront.entryList.entries[0].address) {
          const leftLeafEntries = await basicMerge(mergeLeftEntries, oldFront.entryList.entries);
          const leftLeafNodes = await _Node.from({
            ...nodeOptions,
            entries: leftLeafEntries.sort(({ key: a }, { key: b }) => opts.compare(a, b)),
            NodeClass: LeafClass,
            distance
          });
          const leftBranches = await processNodesAndCreateEntries(leftLeafNodes, final, opts);
          return await basicMerge(leftBranches, es);
        } else {
          if (mergeLeftEntries[0].address) {
            return mergeLeftEntries.concat(oldFront.entryList.entries);
          } else {
            const mergeLeftNodes = await _Node.from({
              ...nodeOptions,
              entries: mergeLeftEntries.sort(({ key: a }, { key: b }) => opts.compare(a, b)),
              NodeClass: LeafClass,
              distance
            });
            const mergeLeftBranchEntries = await processNodesAndCreateEntries(mergeLeftNodes, final, opts);
            const newFirstNodes = await _Node.from({
              ...nodeOptions,
              entries: [
                ...oldFront.entryList.entries,
                ...mergeLeftBranchEntries,
                ...es
              ].sort(({ key: a }, { key: b }) => opts.compare(a, b)),
              NodeClass: BranchClass,
              distance
            });
            const newBranchEntries = await processNodesAndCreateEntries(newFirstNodes, final, opts);
            return newBranchEntries;
          }
        }
      }
    }
    async bulk(bulk, opts = {}, isRoot = true) {
      const { BranchClass } = opts;
      opts = {
        codec: this.codec,
        hasher: this.hasher,
        getNode: this.getNode,
        compare: this.compare,
        cache: this.cache,
        ...opts
      };
      if (!opts.sorted) {
        bulk = sortBulk(bulk, opts);
        opts.sorted = true;
      }
      const nodeOptions = {
        chunker: this.chunker,
        opts
      };
      const results = await this.transaction(bulk, opts);
      while (results.nodes.length > 1) {
        const newDistance = results.nodes[0].distance + 1;
        const branchEntries = await Promise.all(results.nodes.map(async (node) => {
          const block = await node.encode();
          results.blocks.push({
            block,
            node
          });
          this.cache.set(node);
          return new opts.BranchEntryClass(node, opts);
        }));
        const newNodes = await _Node.from({
          ...nodeOptions,
          entries: branchEntries,
          NodeClass: BranchClass,
          distance: newDistance
        });
        await Promise.all(newNodes.map(async (node) => {
          const block = await node.encode();
          this.cache.set(node);
          results.blocks.push({
            block,
            node
          });
        }));
        results.nodes = newNodes;
      }
      results.root = results.nodes[0];
      if (isRoot && results.root) {
        await processRoot(this, results, bulk, nodeOptions);
      }
      results.blocks = results.blocks.map(({ block }) => block);
      return results;
    }
    static async from({ entries, chunker: chunker2, NodeClass, distance, opts }) {
      if (!entries.every((entry) => entry.constructor.name === entries[0].constructor.name))
        throw new Error("all entries must be of the same type");
      const parts = [];
      let chunk = [];
      for (const entry of entries) {
        chunk.push(entry);
        if (await chunker2(entry, distance)) {
          parts.push(new EntryList({
            entries: chunk,
            closed: true
          }));
          chunk = [];
        }
      }
      if (chunk.length) {
        parts.push(new EntryList({
          entries: chunk,
          closed: false
        }));
      }
      return parts.map((entryList) => new NodeClass({
        entryList,
        chunker: chunker2,
        distance,
        ...opts
      }));
    }
  };
  var IPLDNode = class extends Node2 {
    constructor({ codec, hasher, block, ...opts }) {
      super(opts);
      this.codec = codec;
      this.hasher = hasher;
      if (!block) {
        this.block = this.encode();
        this.address = this.block.then((block2) => block2.cid);
      } else {
        this.block = block;
        this.address = block.cid;
      }
    }
    async get(key) {
      const {
        result: entry,
        cids
      } = await this.getEntry(key);
      return {
        result: entry.key,
        cids
      };
    }
    async encode() {
      if (this.block)
        return this.block;
      const value = await this.encodeNode();
      const opts = {
        codec: this.codec,
        hasher: this.hasher,
        value
      };
      this.block = await encode11(opts);
      return this.block;
    }
  };
  var IPLDBranch = class extends IPLDNode {
    async encodeNode() {
      const { entries } = this.entryList;
      const mapper = async (entry) => {
        if (!entry.address)
          throw new Error("entry.address required");
        return [
          entry.key,
          await entry.address
        ];
      };
      const list = await Promise.all(entries.map(mapper));
      return {
        branch: [
          this.distance,
          list
        ],
        closed: this.closed
      };
    }
    get isBranch() {
      return true;
    }
  };
  var IPLDLeaf = class extends IPLDNode {
    async encodeNode() {
      const list = await Promise.all(this.entryList.entries.map(async (entry) => await entry.encodeNode()));
      return {
        leaf: list,
        closed: this.closed
      };
    }
    get isLeaf() {
      return true;
    }
  };
  var create5 = async function* (obj) {
    let { LeafClass, LeafEntryClass, BranchClass, BranchEntryClass, list, chunker: chunker2, compare: compare3, ...opts } = obj;
    list = list.map((value) => new LeafEntryClass(value, opts));
    opts.compare = compare3;
    let nodes = await Node2.from({
      entries: list,
      chunker: chunker2,
      NodeClass: LeafClass,
      distance: 0,
      opts
    });
    yield* nodes;
    let distance = 1;
    while (nodes.length > 1) {
      const mapper = async (node) => new BranchEntryClass({
        key: node.key,
        address: await node.address
      }, opts);
      const entries = await Promise.all(nodes.map(mapper));
      nodes = await Node2.from({
        entries,
        chunker: chunker2,
        NodeClass: BranchClass,
        distance,
        opts
      });
      yield* nodes;
      distance++;
    }
  };

  // ../../node_modules/.pnpm/prolly-trees@1.0.4/node_modules/prolly-trees/esm/src/cid-set.js
  var compare2 = ({ bytes: a }, { bytes: b }) => binaryCompare(a, b);
  var CIDEntry = class extends Entry {
    constructor(cid) {
      super({
        address: cid,
        key: cid
      });
      this.cid = cid;
    }
    encodeNode() {
      return this.cid;
    }
    identity() {
      const buffer2 = this.cid.multihash.bytes;
      return readUInt32LE(buffer2);
    }
  };
  var CIDNodeEntry = class extends Entry {
    async identity() {
      const {
        multihash: { bytes }
      } = await this.address;
      return readUInt32LE(bytes);
    }
  };
  var CIDSetBranch = class extends IPLDBranch {
  };
  var CIDSetLeaf = class extends IPLDLeaf {
  };
  var createGetNode = (get3, cache3, chunker2, codec, hasher) => {
    const decoder = (block) => {
      const { value } = block;
      const opts = {
        chunker: chunker2,
        cache: cache3,
        block,
        getNode,
        codec,
        hasher,
        compare: compare2
      };
      let entries;
      let CLS;
      if (value.leaf) {
        entries = value.leaf.map((cid) => new CIDEntry(cid));
        CLS = CIDSetLeaf;
      } else if (value.branch) {
        const [distance, _entries] = value.branch;
        opts.distance = distance;
        entries = _entries.map(([key, address]) => new CIDNodeEntry({
          key,
          address
        }));
        CLS = CIDSetBranch;
      } else {
        throw new Error("Unknown block data, does not match schema");
      }
      const entryList = new EntryList({
        entries,
        closed: value.closed
      });
      const node = new CLS({
        entryList,
        ...opts
      });
      cache3.set(node);
      return node;
    };
    const getNode = (cid) => {
      if (cache3.has(cid))
        return cache3.get(cid);
      return get3(cid).then((block) => decoder(block));
    };
    return getNode;
  };
  var create6 = ({ get: get3, cache: cache3, chunker: chunker2, list, codec, hasher, sorted }) => {
    if (!sorted)
      list = list.sort(compare2);
    const getNode = createGetNode(get3, cache3, chunker2, codec, hasher);
    const opts = {
      list,
      codec,
      hasher,
      chunker: chunker2,
      getNode,
      sorted,
      compare: compare2,
      cache: cache3,
      LeafClass: CIDSetLeaf,
      LeafEntryClass: CIDEntry,
      BranchClass: CIDSetBranch,
      BranchEntryClass: CIDNodeEntry
    };
    return create5(opts);
  };
  var load = ({ cid, get: get3, cache: cache3, chunker: chunker2, codec, hasher, ...opts }) => {
    const getNode = createGetNode(get3, cache3, chunker2, codec, hasher, opts);
    return getNode(cid);
  };

  // src/encrypt-codec.ts
  function makeCodec(crypto2, randomBytes2) {
    const enc32 = (value) => {
      value = +value;
      const buff = new Uint8Array(4);
      buff[3] = value >>> 24;
      buff[2] = value >>> 16;
      buff[1] = value >>> 8;
      buff[0] = value & 255;
      return buff;
    };
    const readUInt32LE2 = (buffer2) => {
      const offset = buffer2.byteLength - 4;
      return (buffer2[offset] | buffer2[offset + 1] << 8 | buffer2[offset + 2] << 16) + buffer2[offset + 3] * 16777216;
    };
    const concat2 = (buffers) => {
      const uint8Arrays = buffers.map((b) => b instanceof ArrayBuffer ? new Uint8Array(b) : b);
      const totalLength = uint8Arrays.reduce((sum, arr) => sum + arr.length, 0);
      const result = new Uint8Array(totalLength);
      let offset = 0;
      for (const arr of uint8Arrays) {
        result.set(arr, offset);
        offset += arr.length;
      }
      return result;
    };
    const encode12 = ({ iv, bytes }) => concat2([iv, bytes]);
    const decode16 = (bytes) => {
      const iv = bytes.subarray(0, 12);
      bytes = bytes.slice(12);
      return { iv, bytes };
    };
    const code3 = 3145728 + 1337;
    async function subtleKey(key) {
      return await crypto2.subtle.importKey(
        "raw",
        // raw or jwk
        key,
        // raw data
        "AES-GCM",
        false,
        // extractable
        ["encrypt", "decrypt"]
      );
    }
    const decrypt = async ({
      key,
      value
    }) => {
      let { bytes, iv } = value;
      const cryKey = await subtleKey(key);
      const deBytes = await crypto2.subtle.decrypt(
        {
          name: "AES-GCM",
          iv,
          tagLength: 128
        },
        cryKey,
        bytes
      );
      bytes = new Uint8Array(deBytes);
      const len = readUInt32LE2(bytes.subarray(0, 4));
      const cid = CID2.decode(bytes.subarray(4, 4 + len));
      bytes = bytes.subarray(4 + len);
      return { cid, bytes };
    };
    const encrypt = async ({
      key,
      cid,
      bytes
    }) => {
      const len = enc32(cid.bytes.byteLength);
      const iv = randomBytes2(12);
      const msg = concat2([len, cid.bytes, bytes]);
      try {
        const cryKey = await subtleKey(key);
        const deBytes = await crypto2.subtle.encrypt(
          {
            name: "AES-GCM",
            iv,
            tagLength: 128
          },
          cryKey,
          msg
        );
        bytes = new Uint8Array(deBytes);
      } catch (e) {
        console.log("ee", e);
        throw e;
      }
      return { value: { bytes, iv } };
    };
    const cryptoFn = (key) => {
      return { encrypt: (opts) => encrypt({ key, ...opts }), decrypt: (opts) => decrypt({ key, ...opts }) };
    };
    const name3 = "jchris@encrypted-block:aes-gcm";
    return { encode: encode12, decode: decode16, code: code3, name: name3, encrypt, decrypt, crypto: cryptoFn };
  }

  // src/encrypt-helpers.ts
  function makeEncDec(crypto2, randomBytes2) {
    const codec = makeCodec(crypto2, randomBytes2);
    const encrypt = async function* ({
      get: get3,
      cids,
      hasher,
      key,
      cache: cache3,
      chunker: chunker2,
      root
    }) {
      const set = /* @__PURE__ */ new Set();
      let eroot;
      for (const cid of cids) {
        const unencrypted = await get3(cid);
        if (!unencrypted)
          throw new Error("missing cid: " + cid.toString());
        const encrypted = await codec.encrypt({ ...unencrypted, key });
        const block2 = await encode9({ ...encrypted, codec, hasher });
        yield block2;
        set.add(block2.cid.toString());
        if (unencrypted.cid.equals(root))
          eroot = block2.cid;
      }
      if (!eroot)
        throw new Error("cids does not include root");
      const list = [...set].map((s) => CID2.parse(s));
      let last;
      for await (const node of create6({ list, get: get3, cache: cache3, chunker: chunker2, hasher, codec: src_exports })) {
        const block2 = await node.block;
        yield block2;
        last = block2;
      }
      if (!last)
        throw new Error("missing last block");
      const head = [eroot, last.cid];
      const block = await encode9({ value: head, codec: src_exports, hasher });
      yield block;
    };
    const decrypt = async function* ({
      root,
      get: get3,
      key,
      cache: cache3,
      chunker: chunker2,
      hasher
    }) {
      const getWithDecode = async (cid) => get3(cid).then(async (block) => {
        if (!block)
          return;
        const decoded = await decode13({ ...block, codec: src_exports, hasher });
        return decoded;
      });
      const getWithDecrypt = async (cid) => get3(cid).then(async (block) => {
        if (!block)
          return;
        const decoded = await decode13({ ...block, codec, hasher });
        return decoded;
      });
      const decodedRoot = await getWithDecode(root);
      if (!decodedRoot)
        throw new Error("missing root");
      if (!decodedRoot.bytes)
        throw new Error("missing bytes");
      const {
        value: [eroot, tree3]
      } = decodedRoot;
      const rootBlock = await get3(eroot);
      if (!rootBlock)
        throw new Error("missing root block");
      const cidset = await load({ cid: tree3, get: getWithDecode, cache: cache3, chunker: chunker2, codec, hasher });
      const { result: nodes } = await cidset.getAllEntries();
      const unwrap = async (eblock) => {
        if (!eblock)
          throw new Error("missing block");
        if (!eblock.value) {
          eblock = await decode13({ ...eblock, codec, hasher });
        }
        const { bytes, cid } = await codec.decrypt({ ...eblock, key }).catch((e) => {
          throw e;
        });
        const block = await create4({ cid, bytes, hasher, codec });
        return block;
      };
      const promises = [];
      for (const { cid } of nodes) {
        if (!rootBlock.cid.equals(cid))
          promises.push(getWithDecrypt(cid).then(unwrap));
      }
      yield* promises;
      yield unwrap(rootBlock);
    };
    return { encrypt, decrypt };
  }
  var chunker = bf(30);
  function hexStringToUint8Array(hexString) {
    const length3 = hexString.length;
    const uint8Array = new Uint8Array(length3 / 2);
    for (let i = 0; i < length3; i += 2) {
      uint8Array[i / 2] = parseInt(hexString.substring(i, i + 2), 16);
    }
    return uint8Array;
  }
  async function encryptedEncodeCarFile(crypto2, key, rootCid, t) {
    const encryptionKey = hexStringToUint8Array(key);
    const encryptedBlocks = new MemoryBlockstore();
    const cidsToEncrypt = [];
    for (const { cid } of t.entries()) {
      cidsToEncrypt.push(cid);
      const g = await t.get(cid);
      if (!g)
        throw new Error("missing cid block");
    }
    let last = null;
    const { encrypt } = makeEncDec(crypto2.crypto, crypto2.randomBytes);
    for await (const block of encrypt({
      cids: cidsToEncrypt,
      get: t.get.bind(t),
      key: encryptionKey,
      hasher: sha256,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      chunker,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      cache: nocache,
      root: rootCid
    })) {
      await encryptedBlocks.put(block.cid, block.bytes);
      last = block;
    }
    if (!last)
      throw new Error("no blocks encrypted");
    const encryptedCar = await encodeCarFile([last.cid], encryptedBlocks);
    return encryptedCar;
  }
  async function decodeEncryptedCar(crypto2, key, reader) {
    const roots = await reader.getRoots();
    const root = roots[0];
    return await decodeCarBlocks(crypto2, root, reader.get.bind(reader), key);
  }
  async function decodeCarBlocks(crypto2, root, get3, keyMaterial) {
    const decryptionKeyUint8 = hexStringToUint8Array(keyMaterial);
    const decryptionKey = decryptionKeyUint8.buffer.slice(0, decryptionKeyUint8.byteLength);
    const decryptedBlocks = new MemoryBlockstore();
    let last = null;
    const { decrypt } = makeEncDec(crypto2.crypto, crypto2.randomBytes);
    for await (const block of decrypt({
      root,
      get: get3,
      key: decryptionKey,
      hasher: sha256,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      chunker,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      cache: nocache
    })) {
      await decryptedBlocks.put(block.cid, block.bytes);
      last = block;
    }
    if (!last)
      throw new Error("no blocks decrypted");
    return { blocks: decryptedBlocks, root: last.cid };
  }

  // src/crypto-web.ts
  function getCrypto() {
    try {
      if (crypto && crypto.subtle) {
        return crypto;
      } else {
        return new Crypto();
      }
    } catch (e) {
      return null;
    }
  }
  var gotCrypto = getCrypto();
  function randomBytes(size) {
    const bytes = new Uint8Array(size);
    if (size > 0) {
      crypto.getRandomValues(bytes);
    }
    return bytes;
  }

  // src/commit-queue.ts
  var CommitQueue = class {
    queue = [];
    processing = false;
    async enqueue(fn) {
      return new Promise((resolve, reject) => {
        const queueFn = async () => {
          try {
            resolve(await fn());
          } catch (e) {
            reject(e);
          } finally {
            this.processing = false;
            this.processNext();
          }
        };
        this.queue.push(queueFn);
        if (!this.processing) {
          this.processNext();
        }
      });
    }
    processNext() {
      if (this.queue.length > 0 && !this.processing) {
        this.processing = true;
        const queueFn = this.queue.shift();
        if (queueFn) {
          queueFn();
        }
      }
    }
  };

  // src/loader.ts
  function cidListIncludes(list, cid) {
    return list.some((c) => c.equals(cid));
  }
  function uniqueCids(list, remove = /* @__PURE__ */ new Set()) {
    const byString = /* @__PURE__ */ new Map();
    for (const cid of list) {
      if (remove.has(cid.toString()))
        continue;
      byString.set(cid.toString(), cid);
    }
    return [...byString.values()];
  }
  function toHexString(byteArray) {
    return Array.from(byteArray).map((byte) => byte.toString(16).padStart(2, "0")).join("");
  }
  var Loadable = class {
    name = "";
    remoteCarStore;
    carStore;
    carLog = [];
    remoteMetaStore;
    remoteFileStore;
    fileStore;
  };
  var Loader = class {
    name;
    ebOpts;
    commitQueue = new CommitQueue();
    isCompacting = false;
    isWriting = false;
    remoteMetaStore;
    remoteCarStore;
    fileStore;
    remoteFileStore;
    remoteWAL;
    metaStore;
    carStore;
    carLog = [];
    carReaders = /* @__PURE__ */ new Map();
    ready;
    key;
    keyId;
    seenCompacted = /* @__PURE__ */ new Set();
    processedCars = /* @__PURE__ */ new Set();
    writing = Promise.resolve();
    getBlockCache = /* @__PURE__ */ new Map();
    seenMeta = /* @__PURE__ */ new Set();
    constructor(name3, ebOpts) {
      this.name = name3;
      this.ebOpts = ebOpts;
      this.carStore = ebOpts.store.makeDataStore(this.name);
      this.fileStore = ebOpts.store.makeDataStore(this.name);
      this.remoteWAL = ebOpts.store.makeRemoteWAL(this);
      this.ready = Promise.resolve().then(async () => {
        this.metaStore = ebOpts.store.makeMetaStore(this);
        if (!this.metaStore || !this.carStore || !this.remoteWAL)
          throw new Error("stores not initialized");
        const metas = this.ebOpts.meta ? [this.ebOpts.meta] : await this.metaStore.load("main");
        if (metas) {
          await this.handleDbMetasFromStore(metas);
        }
      });
    }
    // async snapToCar(carCid: AnyLink | string) {
    //   await this.ready
    //   if (typeof carCid === 'string') {
    //     carCid = CID.parse(carCid)
    //   }
    //   const carHeader = await this.loadCarHeaderFromMeta({ car: carCid, key: this.key || null })
    //   this.carLog = [carCid, ...carHeader.cars]
    //   await this.getMoreReaders(carHeader.cars)
    //   await this._applyCarHeader(carHeader, true)
    // }
    async handleDbMetasFromStore(metas) {
      for (const meta of metas) {
        const writingFn = async () => {
          this.isWriting = true;
          await this.mergeDbMetaIntoClock(meta);
          this.isWriting = false;
        };
        this._setWaitForWrite(writingFn);
        await writingFn();
      }
    }
    async mergeDbMetaIntoClock(meta) {
      if (this.isCompacting) {
        throw new Error("cannot merge while compacting");
      }
      if (this.seenMeta.has(meta.car.toString()))
        return;
      this.seenMeta.add(meta.car.toString());
      if (meta.key) {
        await this.setKey(meta.key);
      }
      if (cidListIncludes(this.carLog, meta.car)) {
        return;
      }
      const carHeader = await this.loadCarHeaderFromMeta(meta);
      carHeader.compact.map((c) => c.toString()).forEach(this.seenCompacted.add, this.seenCompacted);
      await this.getMoreReaders(carHeader.cars);
      this.carLog = [...uniqueCids([meta.car, ...this.carLog, ...carHeader.cars], this.seenCompacted)];
      await this.ebOpts.applyMeta(carHeader.meta);
    }
    async ingestKeyFromMeta(meta) {
      const { key } = meta;
      if (key) {
        await this.setKey(key);
      }
    }
    async loadCarHeaderFromMeta({ car: cid }) {
      const reader = await this.loadCar(cid);
      return await parseCarFile(reader);
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async _getKey() {
      if (this.key)
        return this.key;
      if (!this.ebOpts.public) {
        if (getCrypto()) {
          await this.setKey(toHexString(randomBytes(32)));
        } else {
          console.warn("missing crypto module, using public mode");
        }
      }
      return this.key;
    }
    async commitFiles(t, done, opts = { noLoader: false, compact: false }) {
      return this.commitQueue.enqueue(() => this._commitInternalFiles(t, done, opts));
    }
    // can these skip the queue? or have a file queue?
    async _commitInternalFiles(t, done, opts = { noLoader: false, compact: false }) {
      await this.ready;
      const { files: roots } = this.makeFileCarHeader(done);
      const { cid, bytes } = await this.prepareCarFile(roots[0], t, !!opts.public);
      await this.fileStore.save({ cid, bytes });
      await this.remoteWAL.enqueueFile(cid, !!opts.public);
      return cid;
    }
    async loadFileCar(cid, isPublic = false) {
      return await this.storesLoadCar(cid, this.fileStore, this.remoteFileStore, isPublic);
    }
    async commit(t, done, opts = { noLoader: false, compact: false }) {
      return this.commitQueue.enqueue(() => this._commitInternal(t, done, opts));
    }
    async cacheTransaction(t) {
      for await (const block of t.entries()) {
        const sBlock = block.cid.toString();
        if (!this.getBlockCache.has(sBlock)) {
          this.getBlockCache.set(sBlock, block);
        }
      }
    }
    async cacheCarReader(carCidStr, reader) {
      if (this.processedCars.has(carCidStr))
        return;
      this.processedCars.add(carCidStr);
      for await (const block of reader.blocks()) {
        const sBlock = block.cid.toString();
        if (!this.getBlockCache.has(sBlock)) {
          this.getBlockCache.set(sBlock, block);
        }
      }
    }
    async _commitInternal(t, done, opts = { noLoader: false, compact: false }) {
      await this.ready;
      const fp = this.makeCarHeader(done, this.carLog, !!opts.compact);
      let roots = await this.prepareRoots(fp, t);
      const { cid, bytes } = await this.prepareCarFile(roots[0], t, !!opts.public);
      await this.carStore.save({ cid, bytes });
      await this.cacheTransaction(t);
      const newDbMeta = { car: cid, key: this.key || null };
      await this.remoteWAL.enqueue(newDbMeta, opts);
      await this.metaStore.save(newDbMeta);
      await this.updateCarLog(cid, fp, !!opts.compact);
      return cid;
    }
    async prepareRoots(fp, t) {
      const header = await encodeCarHeader(fp);
      await t.put(header.cid, header.bytes);
      return [header.cid];
    }
    async prepareCarFile(root, t, isPublic) {
      const theKey = isPublic ? null : await this._getKey();
      return theKey && this.ebOpts.crypto ? await encryptedEncodeCarFile(this.ebOpts.crypto, theKey, root, t) : await encodeCarFile([root], t);
    }
    makeFileCarHeader(result) {
      const files = [];
      for (const [, meta] of Object.entries(result.files)) {
        if (meta && typeof meta === "object" && "cid" in meta && meta !== null) {
          files.push(meta.cid);
        }
      }
      return { files };
    }
    async updateCarLog(cid, fp, compact) {
      if (compact) {
        const previousCompactCid = fp.compact[fp.compact.length - 1];
        fp.compact.map((c) => c.toString()).forEach(this.seenCompacted.add, this.seenCompacted);
        this.carLog = [...uniqueCids([...this.carLog, ...fp.cars, cid], this.seenCompacted)];
        void this.removeCidsForCompact(previousCompactCid);
      } else {
        this.carLog.unshift(cid);
      }
    }
    async removeCidsForCompact(cid) {
      const carHeader = await this.loadCarHeaderFromMeta({
        car: cid
      });
      for (const cid2 of carHeader.compact) {
        await this.carStore.remove(cid2);
      }
    }
    // async flushCars() {
    //   await this.ready
    //   // for each cid in car log, make a dbMeta
    //   for (const cid of this.carLog) {
    //     const dbMeta = { car: cid, key: this.key || null } as DbMeta
    //     await this.remoteWAL!.enqueue(dbMeta, { public: false })
    //   }
    // }
    async *entries(cache3 = true) {
      await this.ready;
      if (cache3) {
        for (const [, block] of this.getBlockCache) {
          yield block;
        }
      } else {
        for (const [, block] of this.getBlockCache) {
          yield block;
        }
        for (const cid of this.carLog) {
          const reader = await this.loadCar(cid);
          if (!reader)
            throw new Error(`missing car reader ${cid.toString()}`);
          for await (const block of reader.blocks()) {
            const sCid = block.cid.toString();
            if (!this.getBlockCache.has(sCid)) {
              yield block;
            }
          }
        }
      }
    }
    async getBlock(cid) {
      await this.ready;
      const sCid = cid.toString();
      if (this.getBlockCache.has(sCid))
        return this.getBlockCache.get(sCid);
      const getCarCid = async (carCid) => {
        const reader = await this.loadCar(carCid);
        if (!reader) {
          throw new Error(`missing car reader ${carCid.toString()}`);
        }
        await this.cacheCarReader(carCid.toString(), reader).catch((e) => {
        });
        if (this.getBlockCache.has(sCid))
          return this.getBlockCache.get(sCid);
        throw new Error(`block not in reader: ${cid.toString()}`);
      };
      const getCompactCarCids = async (carCid) => {
        const reader = await this.loadCar(carCid);
        if (!reader) {
          throw new Error(`missing car reader ${carCid.toString()}`);
        }
        const header = await parseCarFile(reader);
        const compacts = header.compact;
        let got2;
        const batchSize2 = 5;
        for (let i = 0; i < compacts.length; i += batchSize2) {
          const promises = [];
          for (let j = i; j < Math.min(i + batchSize2, compacts.length); j++) {
            promises.push(getCarCid(compacts[j]));
          }
          try {
            got2 = await Promise.any(promises);
          } catch {
          }
          if (got2)
            break;
        }
        if (this.getBlockCache.has(sCid))
          return this.getBlockCache.get(sCid);
        throw new Error(`block not in compact reader: ${cid.toString()}`);
      };
      let got;
      const batchSize = 5;
      for (let i = 0; i < this.carLog.length; i += batchSize) {
        const promises = [];
        for (let j = i; j < Math.min(i + batchSize, this.carLog.length); j++) {
          promises.push(getCarCid(this.carLog[j]));
        }
        try {
          got = await Promise.any(promises);
        } catch {
        }
        if (got)
          break;
      }
      if (!got) {
        for (let i = 0; i < this.carLog.length; i += batchSize) {
          const promises = [];
          for (let j = i; j < Math.min(i + batchSize, this.carLog.length); j++) {
            promises.push(getCompactCarCids(this.carLog[j]));
          }
          try {
            got = await Promise.any(promises);
          } catch {
          }
          if (got)
            break;
        }
      }
      return got;
    }
    makeCarHeader(result, cars, compact = false) {
      const coreHeader = compact ? { cars: [], compact: cars } : { cars, compact: [] };
      return { ...coreHeader, meta: result };
    }
    async loadCar(cid) {
      if (!this.carStore)
        throw new Error("car store not initialized");
      const loaded = await this.storesLoadCar(cid, this.carStore, this.remoteCarStore);
      return loaded;
    }
    async storesLoadCar(cid, local, remote, publicFiles) {
      const cidString = cid.toString();
      if (!this.carReaders.has(cidString)) {
        this.carReaders.set(
          cidString,
          (async () => {
            let loadedCar = null;
            try {
              loadedCar = await local.load(cid);
            } catch (e) {
              if (remote) {
                const remoteCar = await remote.load(cid);
                if (remoteCar) {
                  await local.save(remoteCar);
                  loadedCar = remoteCar;
                }
              }
            }
            if (!loadedCar)
              throw new Error(`missing car file ${cidString}`);
            const rawReader = await CarReader.fromBytes(loadedCar.bytes);
            const readerP = publicFiles ? Promise.resolve(rawReader) : this.ensureDecryptedReader(rawReader);
            this.carReaders.set(cidString, readerP);
            return readerP;
          })().catch((e) => {
            this.carReaders.delete(cidString);
            throw e;
          })
        );
      }
      return this.carReaders.get(cidString);
    }
    async ensureDecryptedReader(reader) {
      const theKey = await this._getKey();
      if (this.ebOpts.public || !(theKey && this.ebOpts.crypto))
        return reader;
      const { blocks, root } = await decodeEncryptedCar(this.ebOpts.crypto, theKey, reader);
      return {
        getRoots: () => [root],
        get: blocks.get.bind(blocks),
        blocks: blocks.entries.bind(blocks)
      };
    }
    async setKey(key) {
      if (this.key && this.key !== key)
        throw new Error("key mismatch");
      this.key = key;
      const crypto2 = getCrypto();
      if (!crypto2)
        throw new Error("missing crypto module");
      const subtle = crypto2.subtle;
      const encoder = new TextEncoder();
      const data = encoder.encode(key);
      const hashBuffer = await subtle.digest("SHA-256", data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      this.keyId = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    }
    async getMoreReaders(cids) {
      const limit = pLimit(5);
      const missing = cids.filter((cid) => !this.carReaders.has(cid.toString()));
      await Promise.all(missing.map((cid) => limit(() => this.loadCar(cid))));
    }
    async _setWaitForWrite(_writingFn) {
      const wr = this.writing;
      this.writing = wr.then(async () => {
        await _writingFn();
        return wr;
      });
      return this.writing.then(() => {
      });
    }
  };

  // src/remote-wal.ts
  var RemoteWAL = class {
    tag = "rwal-base";
    STORAGE_VERSION = STORAGE_VERSION;
    loader;
    ready;
    walState = { operations: [], noLoaderOps: [], fileOperations: [] };
    processing = void 0;
    processQueue = new CommitQueue();
    constructor(loader) {
      this.loader = loader;
      this.ready = Promise.resolve().then(async () => {
        const walState = await this.load().catch((e) => {
          console.error("error loading wal", e);
          return null;
        });
        this.walState.operations = walState?.operations || [];
        this.walState.fileOperations = walState?.fileOperations || [];
      });
    }
    async enqueue(dbMeta, opts) {
      await this.ready;
      if (opts.noLoader) {
        this.walState.noLoaderOps.push(dbMeta);
      } else {
        this.walState.operations.push(dbMeta);
      }
      await this.save(this.walState);
      void this._process();
    }
    async enqueueFile(fileCid, publicFile = false) {
      await this.ready;
      this.walState.fileOperations.push({ cid: fileCid, public: publicFile });
    }
    async _process() {
      await this.ready;
      if (!this.loader.remoteCarStore)
        return;
      await this.processQueue.enqueue(async () => {
        await this._doProcess();
        if (this.walState.operations.length || this.walState.fileOperations.length || this.walState.noLoaderOps.length) {
          setTimeout(() => void this._process(), 0);
        }
      });
    }
    async _doProcess() {
      if (!this.loader.remoteCarStore)
        return;
      const rmlp = (async () => {
        const operations = [...this.walState.operations];
        const fileOperations = [...this.walState.fileOperations];
        const uploads = [];
        const noLoaderOps = [...this.walState.noLoaderOps];
        const limit = pLimit(5);
        if (operations.length + fileOperations.length + noLoaderOps.length === 0)
          return;
        for (const dbMeta of noLoaderOps) {
          const uploadP = limit(async () => {
            const car = await this.loader.carStore.load(dbMeta.car).catch(() => null);
            if (!car) {
              if (cidListIncludes(this.loader.carLog, dbMeta.car))
                throw new Error(`missing local car ${dbMeta.car.toString()}`);
            } else {
              await this.loader.remoteCarStore.save(car);
            }
            this.walState.noLoaderOps = this.walState.noLoaderOps.filter((op) => op !== dbMeta);
          });
          uploads.push(uploadP);
        }
        for (const dbMeta of operations) {
          const uploadP = limit(async () => {
            const car = await this.loader.carStore.load(dbMeta.car).catch(() => null);
            if (!car) {
              if (cidListIncludes(this.loader.carLog, dbMeta.car))
                throw new Error(`missing local car ${dbMeta.car.toString()}`);
            } else {
              await this.loader.remoteCarStore.save(car);
            }
            this.walState.operations = this.walState.operations.filter((op) => op !== dbMeta);
          });
          uploads.push(uploadP);
        }
        if (fileOperations.length) {
          const dbLoader = this.loader;
          for (const { cid: fileCid, public: publicFile } of fileOperations) {
            const uploadP = limit(async () => {
              const fileBlock = await dbLoader.fileStore.load(fileCid);
              await dbLoader.remoteFileStore?.save(fileBlock, { public: publicFile });
              this.walState.fileOperations = this.walState.fileOperations.filter(
                (op) => op.cid !== fileCid
              );
            });
            uploads.push(uploadP);
          }
        }
        try {
          const res = await Promise.allSettled(uploads);
          const errors = res.filter((r) => r.status === "rejected");
          if (errors.length) {
            console.error("error uploading", JSON.stringify(errors.map((e) => e.reason)));
            throw errors[0].reason;
          }
          if (operations.length) {
            const lastOp = operations[operations.length - 1];
            await this.loader.remoteMetaStore?.save(lastOp).catch((e) => {
              console.error("error saving remote meta", e);
              this.walState.operations.push(lastOp);
              throw e;
            });
          }
        } finally {
          await this.save(this.walState);
        }
      })();
      await rmlp;
    }
  };

  // src/store-remote.ts
  function makeStores(storage, meta) {
    return {
      makeDataStore: (name3) => new RemoteDataStore(name3, storage),
      makeMetaStore: (loader) => {
        meta.connectMeta({ loader });
        return loader.remoteMetaStore;
      },
      makeRemoteWAL: (loader) => new RemoteWAL2(loader)
    };
  }
  var RemoteDataStore = class extends DataStore {
    tag = "remote-data";
    connection;
    type;
    constructor(name3, connection, type = "data") {
      super(name3);
      this.connection = connection;
      this.type = type;
    }
    prefix() {
      return `fp.${this.name}`;
    }
    async load(carCid) {
      const params = {
        type: this.type,
        name: this.prefix(),
        car: carCid.toString()
      };
      validateDataParams(params);
      const bytes = await this.connection.dataDownload(params);
      if (!bytes)
        throw new Error(`missing remote car ${carCid.toString()}`);
      return { cid: carCid, bytes };
    }
    async save(car, opts) {
      const uploadParams = {
        type: this.type,
        name: this.prefix(),
        car: car.cid.toString(),
        size: car.bytes.length.toString()
      };
      validateDataParams(uploadParams);
      return await this.connection.dataUpload(car.bytes, uploadParams, opts);
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async remove(_cid) {
      throw new Error("not implemented");
    }
  };
  var RemoteMetaStore = class extends MetaStore {
    tag = "remote-meta";
    connection;
    subscribers = /* @__PURE__ */ new Map();
    constructor(name3, connection) {
      super(name3);
      this.connection = connection;
    }
    onLoad(branch, loadHandler) {
      const subscribers = this.subscribers.get(branch) || [];
      subscribers.push(loadHandler);
      this.subscribers.set(branch, subscribers);
      return () => {
        const subscribers2 = this.subscribers.get(branch) || [];
        const idx = subscribers2.indexOf(loadHandler);
        if (idx > -1)
          subscribers2.splice(idx, 1);
      };
    }
    prefix() {
      return `fp.${this.name}.${this.STORAGE_VERSION}`;
    }
    async handleByteHeads(byteHeads, branch = "main") {
      const dbMetas = this.dbMetasForByteHeads(byteHeads);
      const subscribers = this.subscribers.get(branch) || [];
      for (const subscriber of subscribers) {
        await subscriber(dbMetas);
      }
      return dbMetas;
    }
    async load(branch = "main") {
      const params = {
        name: this.prefix(),
        branch
      };
      validateMetaParams(params);
      const byteHeads = await this.connection.metaDownload(params);
      if (!byteHeads)
        return null;
      return this.handleByteHeads(byteHeads, branch);
    }
    async save(meta, branch = "main") {
      const bytes = new TextEncoder().encode(this.makeHeader(meta));
      const params = { name: this.prefix(), branch };
      validateMetaParams(params);
      const byteHeads = await this.connection.metaUpload(bytes, params);
      if (!byteHeads)
        return null;
      return this.handleByteHeads(byteHeads, branch);
    }
    dbMetasForByteHeads(byteHeads) {
      return byteHeads.map((bytes) => {
        const txt = new TextDecoder().decode(bytes);
        return this.parseHeader(txt);
      });
    }
  };
  var RemoteWAL2 = class extends RemoteWAL {
    tag = "wal-mem";
    store;
    constructor(loader) {
      super(loader);
      this.store = /* @__PURE__ */ new Map();
    }
    headerKey(branch) {
      return `fp.${this.STORAGE_VERSION}.wal.${this.loader.name}.${branch}`;
    }
    async load(branch = "main") {
      const bytesString = this.store.get(this.headerKey(branch));
      if (!bytesString)
        return null;
      return parse(bytesString);
    }
    async save(state, branch = "main") {
      const encoded = format2(state);
      this.store.set(this.headerKey(branch), encoded);
    }
  };

  // ../../node_modules/.pnpm/multiformats@13.1.0/node_modules/multiformats/dist/src/hashes/sha2-browser.js
  function sha2(name3) {
    return async (data) => new Uint8Array(await crypto.subtle.digest(name3, data));
  }
  var sha2562 = from2({
    name: "sha2-256",
    code: 18,
    encode: sha2("SHA-256")
  });
  var sha5122 = from2({
    name: "sha2-512",
    code: 19,
    encode: sha2("SHA-512")
  });

  // ../../node_modules/.pnpm/@web3-storage+pail@0.6.0/node_modules/@web3-storage/pail/src/clock/index.js
  var EventBlock = class extends Block3 {
    /**
     * @param {object} config
     * @param {API.EventLink<T>} config.cid
     * @param {Event} config.value
     * @param {Uint8Array} config.bytes
     * @param {string} config.prefix
     */
    constructor({ cid, value, bytes, prefix }) {
      super({ cid, value, bytes });
      this.prefix = prefix;
    }
    /**
     * @template T
     * @param {T} data
     * @param {API.EventLink<T>[]} [parents]
     */
    static create(data, parents) {
      return encodeEventBlock({ data, parents: parents ?? [] });
    }
  };
  var encodeEventBlock = async (value) => {
    const { cid, bytes } = await encode11({ value, codec: src_exports, hasher: sha2562 });
    return new Block3({ cid, value, bytes });
  };
  var decodeEventBlock = async (bytes) => {
    const { cid, value } = await decode15({ bytes, codec: src_exports, hasher: sha2562 });
    return new Block3({ cid, value, bytes });
  };

  // src/task-manager.ts
  var TaskManager = class {
    eventsWeHandled = /* @__PURE__ */ new Set();
    queue = [];
    isProcessing = false;
    loader;
    constructor(loader) {
      this.loader = loader;
    }
    async handleEvent(eventBlock) {
      const cid = eventBlock.cid.toString();
      const parents = eventBlock.value.parents.map((cid2) => cid2.toString());
      for (const parent of parents) {
        this.eventsWeHandled.add(parent);
      }
      this.queue.push({ cid, eventBlock, retries: 0 });
      this.queue = this.queue.filter(({ cid: cid2 }) => !this.eventsWeHandled.has(cid2));
      void this.processQueue();
    }
    async processQueue() {
      if (this.isProcessing)
        return;
      this.isProcessing = true;
      const filteredQueue = this.queue.filter(({ cid }) => !this.eventsWeHandled.has(cid));
      const first = filteredQueue[0];
      if (!first) {
        return;
      }
      try {
        this.loader?.remoteMetaStore?.handleByteHeads([first.eventBlock.value.data.dbMeta]);
        this.eventsWeHandled.add(first.cid);
        this.queue = this.queue.filter(({ cid }) => !this.eventsWeHandled.has(cid));
      } catch (err) {
        if (first.retries++ > 3) {
          console.error("failed to process event block after 3 retries:" + first.cid);
          this.queue = this.queue.filter(({ cid }) => cid !== first.cid);
        }
        await new Promise((resolve) => setTimeout(resolve, 50));
        console.error(JSON.stringify(err));
        throw err;
      } finally {
        this.isProcessing = false;
        if (this.queue.length > 0) {
          void this.processQueue();
        }
      }
    }
  };

  // src/connection.ts
  var Connection = class {
    ready;
    loaded;
    // todo move to LRU blockstore https://github.com/web3-storage/w3clock/blob/main/src/worker/block.js
    eventBlocks = new MemoryBlockstore();
    parents = [];
    loader;
    taskManager;
    constructor() {
      this.ready = Promise.resolve();
      this.loaded = Promise.resolve();
    }
    async refresh() {
      await this.loader.remoteMetaStore.load("main");
      await this.loader.remoteWAL?._process();
    }
    connect({ loader }) {
      if (!loader)
        throw new Error("loader is required");
      this.connectMeta({ loader });
      this.connectStorage({ loader });
    }
    connectMeta({ loader }) {
      if (!loader)
        throw new Error("loader is required");
      this.loader = loader;
      this.taskManager = new TaskManager(loader);
      this.onConnect();
      const remote = new RemoteMetaStore(this.loader.name, this);
      remote.onLoad("main", async (metas) => {
        if (metas) {
          await this.loader.handleDbMetasFromStore(metas);
        }
      });
      this.loader.remoteMetaStore = remote;
      this.loaded = this.loader.ready.then(async () => {
        remote.load("main").then(() => {
          void this.loader.remoteWAL?._process();
        });
      });
    }
    async onConnect() {
    }
    connectStorage({ loader }) {
      if (!loader)
        throw new Error("loader is required");
      this.loader = loader;
      loader.remoteCarStore = new RemoteDataStore(this.loader.name, this);
      loader.remoteFileStore = new RemoteDataStore(this.loader.name, this);
    }
    async createEventBlock(bytes) {
      const data = {
        dbMeta: bytes
      };
      const event = await EventBlock.create(
        data,
        this.parents
      );
      await this.eventBlocks.put(event.cid, event.bytes);
      return event;
    }
    async decodeEventBlock(bytes) {
      const event = await decodeEventBlock(bytes);
      return event;
    }
    // move this stuff to connect
    // async getDashboardURL(compact = true) {
    //   const baseUrl = 'https://dashboard.fireproof.storage/'
    //   if (!this.loader?.remoteCarStore) return new URL('/howto', baseUrl)
    //   // if (compact) {
    //   //   await this.compact()
    //   // }
    //   const currents = await this.loader?.metaStore?.load()
    //   if (!currents) throw new Error("Can't sync empty database: save data first")
    //   if (currents.length > 1)
    //     throw new Error("Can't sync database with split heads: make an update first")
    //   const current = currents[0]
    //   const params = {
    //     car: current.car.toString()
    //   }
    //   if (current.key) {
    //     // @ts-ignore
    //     params.key = current.key.toString()
    //   }
    //   // @ts-ignore
    //   if (this.name) {
    //     // @ts-ignore
    //     params.name = this.name
    //   }
    //   const url = new URL('/import#' + new URLSearchParams(params).toString(), baseUrl)
    //   console.log('Import to dashboard: ' + url.toString())
    //   return url
    // }
    // openDashboard() {
    //   void this.getDashboardURL().then(url => {
    //     if (url) window.open(url.toString(), '_blank')
    //   })
    // }
  };

  // src/connect-rest.ts
  var import_cross_fetch = __toESM(require_browser_ponyfill(), 1);
  var ConnectREST = class extends Connection {
    baseUrl;
    constructor(base3) {
      super();
      this.baseUrl = new URL(base3);
    }
    async dataUpload(bytes, params) {
      const carCid = params.car.toString();
      const uploadURL = new URL(`/cars/${carCid}.car`, this.baseUrl);
      const done = await (0, import_cross_fetch.default)(uploadURL, { method: "PUT", body: bytes });
      if (!done.ok)
        throw new Error("failed to upload data " + done.statusText);
    }
    async dataDownload(params) {
      const { type, name: name3, car } = params;
      const fetchFromUrl = new URL(`/cars/${car.toString()}.car`, this.baseUrl);
      const response = await (0, import_cross_fetch.default)(fetchFromUrl);
      if (!response.ok)
        return null;
      const bytes = new Uint8Array(await response.arrayBuffer());
      return bytes;
    }
    async metaUpload(bytes, params) {
      return null;
    }
    async metaDownload(params) {
      return [];
    }
  };

  // src/transaction.ts
  var CarTransaction = class extends MemoryBlockstore {
    parent;
    constructor(parent) {
      super();
      parent.transactions.add(this);
      this.parent = parent;
    }
    async get(cid) {
      return this.parent.get(cid);
    }
    async superGet(cid) {
      return super.get(cid);
    }
  };
  var EncryptedBlockstore = class {
    ready;
    name = null;
    loader = null;
    compacting = false;
    ebOpts;
    transactions = /* @__PURE__ */ new Set();
    lastTxMeta = null;
    constructor(ebOpts) {
      this.ebOpts = ebOpts;
      const { name: name3 } = ebOpts;
      if (name3) {
        this.name = name3;
        this.loader = new Loader(name3, this.ebOpts);
        this.ready = this.loader.ready;
      } else {
        this.ready = Promise.resolve();
      }
    }
    async transaction(fn, opts = { noLoader: false }) {
      const t = new CarTransaction(this);
      const done = await fn(t);
      this.lastTxMeta = done;
      if (this.loader) {
        const car = await this.loader.commit(t, done, opts);
        if (this.ebOpts.autoCompact && this.loader.carLog.length > this.ebOpts.autoCompact) {
          setTimeout(() => void this.compact(), 10);
        }
        if (car) {
          this.transactions.delete(t);
          return { ...done, car };
        }
        throw new Error("failed to commit car");
      }
      return done;
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async put() {
      throw new Error("use a transaction to put");
    }
    async get(cid) {
      if (!cid)
        throw new Error("required cid");
      for (const f of this.transactions) {
        const v = await f.superGet(cid);
        if (v)
          return v;
      }
      if (!this.loader)
        return;
      return await this.loader.getBlock(cid);
    }
    async getFile(car, cid, isPublic = false) {
      await this.ready;
      if (!this.loader)
        throw new Error("loader required to get file");
      const reader = await this.loader.loadFileCar(car, isPublic);
      const block = await reader.get(cid);
      if (!block)
        throw new Error(`Missing block ${cid.toString()}`);
      return block.bytes;
    }
    async compact() {
      await this.ready;
      if (!this.loader)
        throw new Error("loader required to compact");
      if (this.loader.carLog.length < 2)
        return;
      const compactFn = this.ebOpts.compact || ((blocks) => this.defaultCompact(blocks));
      if (!compactFn || this.compacting)
        return;
      const blockLog = new CompactionFetcher(this);
      this.compacting = true;
      const meta = await compactFn(blockLog);
      await this.loader.commit(blockLog.loggedBlocks, meta, {
        compact: true,
        noLoader: true
      });
      this.compacting = false;
    }
    async defaultCompact(blocks) {
      if (!this.loader) {
        throw new Error("no loader");
      }
      if (!this.lastTxMeta) {
        throw new Error("no lastTxMeta");
      }
      for await (const blk of this.loader.entries(false)) {
        blocks.loggedBlocks.putSync(blk.cid, blk.bytes);
      }
      for (const t of this.transactions) {
        for await (const blk of t.entries()) {
          blocks.loggedBlocks.putSync(blk.cid, blk.bytes);
        }
      }
      return this.lastTxMeta;
    }
    async *entries() {
      const seen = /* @__PURE__ */ new Set();
      if (this.loader) {
        for await (const blk of this.loader.entries()) {
          yield blk;
        }
      } else {
        for (const t of this.transactions) {
          for await (const blk of t.entries()) {
            if (seen.has(blk.cid.toString()))
              continue;
            seen.add(blk.cid.toString());
            yield blk;
          }
        }
      }
    }
  };
  var CompactionFetcher = class {
    blockstore;
    // loader: Loader | null = null
    loggedBlocks;
    constructor(blocks) {
      this.blockstore = blocks;
      this.loggedBlocks = new CarTransaction(blocks);
    }
    async get(cid) {
      const block = await this.blockstore.get(cid);
      if (block)
        this.loggedBlocks.putSync(cid, block.bytes);
      return block;
    }
  };

  // src/index.ts
  var ConnectRaw = class extends Connection {
    constructor({ metaUpload, metaDownload, dataUpload, dataDownload }) {
      super();
      this.metaUpload = metaUpload;
      this.metaDownload = metaDownload;
      this.dataUpload = dataUpload;
      this.dataDownload = dataDownload;
    }
  };
  var connect = {
    raw: ({ blockstore }, params) => {
      const connection = new ConnectRaw(params);
      connection.connect(blockstore);
      return connection;
    }
  };
  function validateDataParams(params) {
    const { type, name: name3, car } = params;
    if (!name3)
      throw new Error("name is required");
    if (!car) {
      throw new Error("car is required");
    }
    if (type !== "file" && type !== "data") {
      throw new Error("type must be file or data");
    }
  }
  function validateMetaParams(params) {
    const { name: name3, branch } = params;
    if (!name3)
      throw new Error("name is required");
    if (!branch) {
      throw new Error("branch is required");
    }
  }
  return __toCommonJS(src_exports2);
})();
//# sourceMappingURL=index.global.js.map