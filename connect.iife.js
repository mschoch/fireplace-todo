
console.log('eb web/es2015 build');

"use strict";
var FireproofConnect = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name2 in all)
      __defProp(target, name2, { get: all[name2], enumerable: true });
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
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var __accessCheck = (obj, member, msg) => {
    if (!member.has(obj))
      throw TypeError("Cannot " + msg);
  };
  var __privateGet = (obj, member, getter) => {
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
  };
  var __privateAdd = (obj, member, value) => {
    if (member.has(obj))
      throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  };
  var __privateSet = (obj, member, value, setter) => {
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
  };
  var __privateWrapper = (obj, member, setter, getter) => ({
    set _(value) {
      __privateSet(obj, member, value, setter);
    },
    get _() {
      return __privateGet(obj, member, getter);
    }
  });

  // ../../node_modules/.pnpm/varint@6.0.0/node_modules/varint/encode.js
  var require_encode = __commonJS({
    "../../node_modules/.pnpm/varint@6.0.0/node_modules/varint/encode.js"(exports, module) {
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
          function normalizeName(name2) {
            if (typeof name2 !== "string") {
              name2 = String(name2);
            }
            if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name2) || name2 === "") {
              throw new TypeError('Invalid character in header field name: "' + name2 + '"');
            }
            return name2.toLowerCase();
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
              headers.forEach(function(value, name2) {
                this.append(name2, value);
              }, this);
            } else if (Array.isArray(headers)) {
              headers.forEach(function(header) {
                this.append(header[0], header[1]);
              }, this);
            } else if (headers) {
              Object.getOwnPropertyNames(headers).forEach(function(name2) {
                this.append(name2, headers[name2]);
              }, this);
            }
          }
          Headers.prototype.append = function(name2, value) {
            name2 = normalizeName(name2);
            value = normalizeValue(value);
            var oldValue = this.map[name2];
            this.map[name2] = oldValue ? oldValue + ", " + value : value;
          };
          Headers.prototype["delete"] = function(name2) {
            delete this.map[normalizeName(name2)];
          };
          Headers.prototype.get = function(name2) {
            name2 = normalizeName(name2);
            return this.has(name2) ? this.map[name2] : null;
          };
          Headers.prototype.has = function(name2) {
            return this.map.hasOwnProperty(normalizeName(name2));
          };
          Headers.prototype.set = function(name2, value) {
            this.map[normalizeName(name2)] = normalizeValue(value);
          };
          Headers.prototype.forEach = function(callback, thisArg) {
            for (var name2 in this.map) {
              if (this.map.hasOwnProperty(name2)) {
                callback.call(thisArg, this.map[name2], name2, this);
              }
            }
          };
          Headers.prototype.keys = function() {
            var items = [];
            this.forEach(function(value, name2) {
              items.push(name2);
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
            this.forEach(function(value, name2) {
              items.push([name2, value]);
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
                var name2 = split.shift().replace(/\+/g, " ");
                var value = split.join("=").replace(/\+/g, " ");
                form.append(decodeURIComponent(name2), decodeURIComponent(value));
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
            exports2.DOMException = function(message, name2) {
              this.message = message;
              this.name = name2;
              var error = Error(message);
              this.stack = error.stack;
            };
            exports2.DOMException.prototype = Object.create(Error.prototype);
            exports2.DOMException.prototype.constructor = exports2.DOMException;
          }
          function fetch3(input, init) {
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
                Object.getOwnPropertyNames(init.headers).forEach(function(name2) {
                  xhr.setRequestHeader(name2, normalizeValue(init.headers[name2]));
                });
              } else {
                request.headers.forEach(function(value, name2) {
                  xhr.setRequestHeader(name2, value);
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
          fetch3.polyfill = true;
          if (!global2.fetch) {
            global2.fetch = fetch3;
            global2.Headers = Headers;
            global2.Request = Request;
            global2.Response = Response;
          }
          exports2.Headers = Headers;
          exports2.Request = Request;
          exports2.Response = Response;
          exports2.fetch = fetch3;
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
    ConnectS3: () => ConnectS3,
    connect: () => connect,
    validateDataParams: () => validateDataParams2,
    validateMetaParams: () => validateMetaParams2
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
    constructor(major, name2, terminal) {
      this.major = major;
      this.majorEncoded = major << 5;
      this.name = name2;
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
  function base(ALPHABET, name2) {
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
      throw new Error(`Non-${name2} character`);
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
    constructor(name2, prefix, baseEncode) {
      __publicField(this, "name");
      __publicField(this, "prefix");
      __publicField(this, "baseEncode");
      this.name = name2;
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
    constructor(name2, prefix, baseDecode) {
      __publicField(this, "name");
      __publicField(this, "prefix");
      __publicField(this, "baseDecode");
      __publicField(this, "prefixCodePoint");
      this.name = name2;
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
    constructor(decoders) {
      __publicField(this, "decoders");
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
    constructor(name2, prefix, baseEncode, baseDecode) {
      __publicField(this, "name");
      __publicField(this, "prefix");
      __publicField(this, "baseEncode");
      __publicField(this, "baseDecode");
      __publicField(this, "encoder");
      __publicField(this, "decoder");
      this.name = name2;
      this.prefix = prefix;
      this.baseEncode = baseEncode;
      this.baseDecode = baseDecode;
      this.encoder = new Encoder(name2, prefix, baseEncode);
      this.decoder = new Decoder(name2, prefix, baseDecode);
    }
    encode(input) {
      return this.encoder.encode(input);
    }
    decode(input) {
      return this.decoder.decode(input);
    }
  };
  function from({ name: name2, prefix, encode: encode12, decode: decode16 }) {
    return new Codec(name2, prefix, encode12, decode16);
  }
  function baseX({ name: name2, prefix, alphabet }) {
    const { encode: encode12, decode: decode16 } = base_x_default(alphabet, name2);
    return from({
      prefix,
      name: name2,
      encode: encode12,
      decode: (text) => coerce(decode16(text))
    });
  }
  function decode3(string, alphabet, bitsPerChar, name2) {
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
        throw new SyntaxError(`Non-${name2} character`);
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
  function rfc4648({ name: name2, prefix, bitsPerChar, alphabet }) {
    return from({
      prefix,
      name: name2,
      encode(input) {
        return encode3(input, alphabet, bitsPerChar);
      },
      decode(input) {
        return decode3(input, alphabet, bitsPerChar, name2);
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
    const code2 = varint_default.decode(data, offset);
    return [code2, varint_default.decode.bytes];
  }
  function encodeTo(int, target, offset = 0) {
    varint_default.encode(int, target, offset);
    return target;
  }
  function encodingLength(int) {
    return varint_default.encodingLength(int);
  }

  // ../../node_modules/.pnpm/multiformats@13.1.0/node_modules/multiformats/dist/src/hashes/digest.js
  function create(code2, digest) {
    const size = digest.byteLength;
    const sizeOffset = encodingLength(code2);
    const digestOffset = sizeOffset + encodingLength(size);
    const bytes = new Uint8Array(digestOffset + size);
    encodeTo(code2, bytes, 0);
    encodeTo(size, bytes, sizeOffset);
    bytes.set(digest, digestOffset);
    return new Digest(code2, size, digest, bytes);
  }
  function decode6(multihash) {
    const bytes = coerce(multihash);
    const [code2, sizeOffset] = decode5(bytes);
    const [size, digestOffset] = decode5(bytes.subarray(sizeOffset));
    const digest = bytes.subarray(sizeOffset + digestOffset);
    if (digest.byteLength !== size) {
      throw new Error("Incorrect length");
    }
    return new Digest(code2, size, digest, bytes);
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
    /**
     * Creates a multihash digest.
     */
    constructor(code2, size, digest, bytes) {
      __publicField(this, "code");
      __publicField(this, "size");
      __publicField(this, "digest");
      __publicField(this, "bytes");
      this.code = code2;
      this.size = size;
      this.digest = digest;
      this.bytes = bytes;
    }
  };

  // ../../node_modules/.pnpm/multiformats@13.1.0/node_modules/multiformats/dist/src/cid.js
  function format(link, base3) {
    const { bytes, version: version2 } = link;
    switch (version2) {
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
  var _a;
  var CID = class _CID {
    /**
     * @param version - Version of the CID
     * @param code - Code of the codec content is encoded in, see https://github.com/multiformats/multicodec/blob/master/table.csv
     * @param multihash - (Multi)hash of the of the content.
     */
    constructor(version2, code2, multihash, bytes) {
      __publicField(this, "code");
      __publicField(this, "version");
      __publicField(this, "multihash");
      __publicField(this, "bytes");
      __publicField(this, "/");
      __publicField(this, _a, "CID");
      this.code = code2;
      this.version = version2;
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
          const { code: code2, multihash } = this;
          if (code2 !== DAG_PB_CODE) {
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
          const { code: code2, digest } = this.multihash;
          const multihash = create(code2, digest);
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
    // Legacy
    [(_a = Symbol.toStringTag, Symbol.for("nodejs.util.inspect.custom"))]() {
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
        const { version: version2, code: code2, multihash, bytes } = value;
        return new _CID(version2, code2, multihash, bytes ?? encodeCID(version2, code2, multihash.bytes));
      } else if (value[cidSymbol] === true) {
        const { version: version2, multihash, code: code2 } = value;
        const digest = decode6(multihash);
        return _CID.create(version2, code2, digest);
      } else {
        return null;
      }
    }
    /**
     * @param version - Version of the CID
     * @param code - Code of the codec content is encoded in, see https://github.com/multiformats/multicodec/blob/master/table.csv
     * @param digest - (Multi)hash of the of the content.
     */
    static create(version2, code2, digest) {
      if (typeof code2 !== "number") {
        throw new Error("String codecs are no longer supported");
      }
      if (!(digest.bytes instanceof Uint8Array)) {
        throw new Error("Invalid digest");
      }
      switch (version2) {
        case 0: {
          if (code2 !== DAG_PB_CODE) {
            throw new Error(`Version 0 CID must use dag-pb (code: ${DAG_PB_CODE}) block encoding`);
          } else {
            return new _CID(version2, code2, digest, digest.bytes);
          }
        }
        case 1: {
          const bytes = encodeCID(version2, code2, digest.bytes);
          return new _CID(version2, code2, digest, bytes);
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
    static createV1(code2, digest) {
      return _CID.create(1, code2, digest);
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
      let version2 = next();
      let codec = DAG_PB_CODE;
      if (version2 === 18) {
        version2 = 0;
        offset = 0;
      } else {
        codec = next();
      }
      if (version2 !== 0 && version2 !== 1) {
        throw new RangeError(`Invalid CID version ${version2}`);
      }
      const prefixSize = offset;
      const multihashCode = next();
      const digestSize = next();
      const size = offset + digestSize;
      const multihashSize = size - prefixSize;
      return { version: version2, codec, multihashCode, digestSize, multihashSize, size };
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
  function encodeCID(version2, code2, multihash) {
    const codeOffset = encodingLength(version2);
    const hashOffset = codeOffset + encodingLength(code2);
    const bytes = new Uint8Array(hashOffset + multihash.byteLength);
    encodeTo(version2, bytes, 0);
    encodeTo(code2, bytes, codeOffset);
    bytes.set(multihash, hashOffset);
    return bytes;
  }
  var cidSymbol = Symbol.for("@ipld/js-cid/CID");

  // ../../node_modules/.pnpm/multiformats@13.1.0/node_modules/multiformats/dist/src/hashes/hasher.js
  function from2({ name: name2, code: code2, encode: encode12 }) {
    return new Hasher(name2, code2, encode12);
  }
  var Hasher = class {
    constructor(name2, code2, encode12) {
      __publicField(this, "name");
      __publicField(this, "code");
      __publicField(this, "encode");
      this.name = name2;
      this.code = code2;
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

  // ../../node_modules/.pnpm/yocto-queue@1.0.0/node_modules/yocto-queue/index.js
  var Node = class {
    constructor(value) {
      __publicField(this, "value");
      __publicField(this, "next");
      this.value = value;
    }
  };
  var _head, _tail, _size;
  var Queue = class {
    constructor() {
      __privateAdd(this, _head, void 0);
      __privateAdd(this, _tail, void 0);
      __privateAdd(this, _size, void 0);
      this.clear();
    }
    enqueue(value) {
      const node = new Node(value);
      if (__privateGet(this, _head)) {
        __privateGet(this, _tail).next = node;
        __privateSet(this, _tail, node);
      } else {
        __privateSet(this, _head, node);
        __privateSet(this, _tail, node);
      }
      __privateWrapper(this, _size)._++;
    }
    dequeue() {
      const current = __privateGet(this, _head);
      if (!current) {
        return;
      }
      __privateSet(this, _head, __privateGet(this, _head).next);
      __privateWrapper(this, _size)._--;
      return current.value;
    }
    clear() {
      __privateSet(this, _head, void 0);
      __privateSet(this, _tail, void 0);
      __privateSet(this, _size, 0);
    }
    get size() {
      return __privateGet(this, _size);
    }
    *[Symbol.iterator]() {
      let current = __privateGet(this, _head);
      while (current) {
        yield current.value;
        current = current.next;
      }
    }
  };
  _head = new WeakMap();
  _tail = new WeakMap();
  _size = new WeakMap();

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

  // ../../node_modules/.pnpm/@ipld+car@5.3.0/node_modules/@ipld/car/src/buffer-writer.js
  var import_varint3 = __toESM(require_varint(), 1);
  var headerPreludeTokens = [
    new Token(Type.map, 2),
    new Token(Type.string, "version"),
    new Token(Type.uint, 1),
    new Token(Type.string, "roots")
  ];
  var CID_TAG = new Token(Type.tag, 42);

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
    const version2 = decodeVarint(await reader.upTo(8), reader);
    if (version2 !== 1) {
      throw new Error(`Unexpected CID version (${version2})`);
    }
    const codec = decodeVarint(await reader.upTo(8), reader);
    const bytes = await reader.exactly(getMultihashLength(await reader.upTo(8)), true);
    const multihash = decode6(bytes);
    return CID.create(version2, codec, multihash);
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

  // ../../node_modules/.pnpm/@ipld+car@5.3.0/node_modules/@ipld/car/src/indexer.js
  var CarIndexer = class {
    /**
     * @param {number} version
     * @param {CID[]} roots
     * @param {AsyncGenerator<BlockIndex>} iterator
     */
    constructor(version2, roots, iterator) {
      this._version = version2;
      this._roots = roots;
      this._iterator = iterator;
    }
    get version() {
      return this._version;
    }
    /**
     * Get the list of roots defined by the CAR referenced by this indexer. May be
     * zero or more `CID`s.
     *
     * @function
     * @memberof CarIndexer
     * @instance
     * @async
     * @returns {Promise<CID[]>}
     */
    async getRoots() {
      return this._roots;
    }
    /**
     * @returns {AsyncIterator<BlockIndex>}
     */
    [Symbol.asyncIterator]() {
      return this._iterator;
    }
    /**
     * Instantiate a {@link CarIndexer} from a `Uint8Array` blob. Only the header
     * is decoded initially, the remainder is processed and emitted via the
     * iterator as it is consumed.
     *
     * @async
     * @static
     * @memberof CarIndexer
     * @param {Uint8Array} bytes
     * @returns {Promise<CarIndexer>}
     */
    static async fromBytes(bytes) {
      if (!(bytes instanceof Uint8Array)) {
        throw new TypeError("fromBytes() requires a Uint8Array");
      }
      return decodeIndexerComplete(bytesReader(bytes));
    }
    /**
     * Instantiate a {@link CarIndexer} from a `AsyncIterable<Uint8Array>`,
     * such as a [modern Node.js stream](https://nodejs.org/api/stream.html#stream_streams_compatibility_with_async_generators_and_async_iterators).
     * is decoded initially, the remainder is processed and emitted via the
     * iterator as it is consumed.
     *
     * @async
     * @static
     * @memberof CarIndexer
     * @param {AsyncIterable<Uint8Array>} asyncIterable
     * @returns {Promise<CarIndexer>}
     */
    static async fromIterable(asyncIterable) {
      if (!asyncIterable || !(typeof asyncIterable[Symbol.asyncIterator] === "function")) {
        throw new TypeError("fromIterable() requires an async iterable");
      }
      return decodeIndexerComplete(asyncIterableReader(asyncIterable));
    }
  };
  async function decodeIndexerComplete(reader) {
    const decoder = createDecoder(reader);
    const { version: version2, roots } = await decoder.header();
    return new CarIndexer(version2, roots, decoder.blocksIndex());
  }

  // ../../node_modules/.pnpm/@ipld+car@5.3.0/node_modules/@ipld/car/src/iterator.js
  var CarIteratorBase = class {
    /**
     * @param {number} version
     * @param {CID[]} roots
     * @param {AsyncIterable<Block>|void} iterable
     */
    constructor(version2, roots, iterable) {
      this._version = version2;
      this._roots = roots;
      this._iterable = iterable;
      this._decoded = false;
    }
    get version() {
      return this._version;
    }
    /**
     * @returns {Promise<CID[]>}
     */
    async getRoots() {
      return this._roots;
    }
  };
  var CarBlockIterator = class _CarBlockIterator extends CarIteratorBase {
    // inherited method
    /**
     * Get the list of roots defined by the CAR referenced by this iterator. May be
     * zero or more `CID`s.
     *
     * @function getRoots
     * @memberof CarBlockIterator
     * @instance
     * @async
     * @returns {Promise<CID[]>}
     */
    /**
     * @returns {AsyncIterator<Block>}
     */
    [Symbol.asyncIterator]() {
      if (this._decoded) {
        throw new Error("Cannot decode more than once");
      }
      if (!this._iterable) {
        throw new Error("Block iterable not found");
      }
      this._decoded = true;
      return this._iterable[Symbol.asyncIterator]();
    }
    /**
     * Instantiate a {@link CarBlockIterator} from a `Uint8Array` blob. Rather
     * than decoding the entire byte array prior to returning the iterator, as in
     * {@link CarReader.fromBytes}, only the header is decoded and the remainder
     * of the CAR is parsed as the `Block`s as yielded.
     *
     * @async
     * @static
     * @memberof CarBlockIterator
     * @param {Uint8Array} bytes
     * @returns {Promise<CarBlockIterator>}
     */
    static async fromBytes(bytes) {
      const { version: version2, roots, iterator } = await fromBytes2(bytes);
      return new _CarBlockIterator(version2, roots, iterator);
    }
    /**
     * Instantiate a {@link CarBlockIterator} from a `AsyncIterable<Uint8Array>`,
     * such as a [modern Node.js stream](https://nodejs.org/api/stream.html#stream_streams_compatibility_with_async_generators_and_async_iterators).
     * Rather than decoding the entire byte array prior to returning the iterator,
     * as in {@link CarReader.fromIterable}, only the header is decoded and the
     * remainder of the CAR is parsed as the `Block`s as yielded.
     *
     * @async
     * @static
     * @param {AsyncIterable<Uint8Array>} asyncIterable
     * @returns {Promise<CarBlockIterator>}
     */
    static async fromIterable(asyncIterable) {
      const { version: version2, roots, iterator } = await fromIterable(asyncIterable);
      return new _CarBlockIterator(version2, roots, iterator);
    }
  };
  var CarCIDIterator = class _CarCIDIterator extends CarIteratorBase {
    // inherited method
    /**
     * Get the list of roots defined by the CAR referenced by this iterator. May be
     * zero or more `CID`s.
     *
     * @function getRoots
     * @memberof CarCIDIterator
     * @instance
     * @async
     * @returns {Promise<CID[]>}
     */
    /**
     * @returns {AsyncIterator<CID>}
     */
    [Symbol.asyncIterator]() {
      if (this._decoded) {
        throw new Error("Cannot decode more than once");
      }
      if (!this._iterable) {
        throw new Error("Block iterable not found");
      }
      this._decoded = true;
      const iterable = this._iterable[Symbol.asyncIterator]();
      return {
        async next() {
          const next = await iterable.next();
          if (next.done) {
            return next;
          }
          return { done: false, value: next.value.cid };
        }
      };
    }
    /**
     * Instantiate a {@link CarCIDIterator} from a `Uint8Array` blob. Rather
     * than decoding the entire byte array prior to returning the iterator, as in
     * {@link CarReader.fromBytes}, only the header is decoded and the remainder
     * of the CAR is parsed as the `CID`s as yielded.
     *
     * @async
     * @static
     * @memberof CarCIDIterator
     * @param {Uint8Array} bytes
     * @returns {Promise<CarCIDIterator>}
     */
    static async fromBytes(bytes) {
      const { version: version2, roots, iterator } = await fromBytes2(bytes);
      return new _CarCIDIterator(version2, roots, iterator);
    }
    /**
     * Instantiate a {@link CarCIDIterator} from a `AsyncIterable<Uint8Array>`,
     * such as a [modern Node.js stream](https://nodejs.org/api/stream.html#stream_streams_compatibility_with_async_generators_and_async_iterators).
     * Rather than decoding the entire byte array prior to returning the iterator,
     * as in {@link CarReader.fromIterable}, only the header is decoded and the
     * remainder of the CAR is parsed as the `CID`s as yielded.
     *
     * @async
     * @static
     * @memberof CarCIDIterator
     * @param {AsyncIterable<Uint8Array>} asyncIterable
     * @returns {Promise<CarCIDIterator>}
     */
    static async fromIterable(asyncIterable) {
      const { version: version2, roots, iterator } = await fromIterable(asyncIterable);
      return new _CarCIDIterator(version2, roots, iterator);
    }
  };
  async function fromBytes2(bytes) {
    if (!(bytes instanceof Uint8Array)) {
      throw new TypeError("fromBytes() requires a Uint8Array");
    }
    return decodeIterator(bytesReader(bytes));
  }
  async function fromIterable(asyncIterable) {
    if (!asyncIterable || !(typeof asyncIterable[Symbol.asyncIterator] === "function")) {
      throw new TypeError("fromIterable() requires an async iterable");
    }
    return decodeIterator(asyncIterableReader(asyncIterable));
  }
  async function decodeIterator(reader) {
    const decoder = createDecoder(reader);
    const { version: version2, roots } = await decoder.header();
    return { version: version2, roots, iterator: decoder.blocks() };
  }

  // ../../node_modules/.pnpm/@ipld+car@5.3.0/node_modules/@ipld/car/src/encoder.js
  var import_varint4 = __toESM(require_varint(), 1);

  // ../../node_modules/.pnpm/@ipld+car@5.3.0/node_modules/@ipld/car/src/writer-browser.js
  var CarWriterOut = class {
    /**
     * @param {AsyncIterator<Uint8Array>} iterator
     */
    constructor(iterator) {
      this._iterator = iterator;
    }
    [Symbol.asyncIterator]() {
      if (this._iterating) {
        throw new Error("Multiple iterator not supported");
      }
      this._iterating = true;
      return this._iterator;
    }
  };

  // ../../node_modules/.pnpm/multiformats@12.1.3/node_modules/multiformats/src/bytes.js
  var empty2 = new Uint8Array(0);
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

  // ../../node_modules/.pnpm/multiformats@12.1.3/node_modules/multiformats/vendor/base-x.js
  function base2(ALPHABET, name2) {
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
      throw new Error(`Non-${name2} character`);
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
    constructor(name2, prefix, baseEncode) {
      this.name = name2;
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
    constructor(name2, prefix, baseDecode) {
      this.name = name2;
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
    constructor(name2, prefix, baseEncode, baseDecode) {
      this.name = name2;
      this.prefix = prefix;
      this.baseEncode = baseEncode;
      this.baseDecode = baseDecode;
      this.encoder = new Encoder2(name2, prefix, baseEncode);
      this.decoder = new Decoder2(name2, prefix, baseDecode);
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
  var from3 = ({ name: name2, prefix, encode: encode12, decode: decode16 }) => new Codec2(name2, prefix, encode12, decode16);
  var baseX2 = ({ prefix, name: name2, alphabet }) => {
    const { encode: encode12, decode: decode16 } = base_x_default2(alphabet, name2);
    return from3({
      prefix,
      name: name2,
      encode: encode12,
      /**
       * @param {string} text
       */
      decode: (text) => coerce2(decode16(text))
    });
  };
  var decode9 = (string, alphabet, bitsPerChar, name2) => {
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
        throw new SyntaxError(`Non-${name2} character`);
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
  var rfc46482 = ({ name: name2, prefix, bitsPerChar, alphabet }) => {
    return from3({
      prefix,
      name: name2,
      encode(input) {
        return encode7(input, alphabet, bitsPerChar);
      },
      decode(input) {
        return decode9(input, alphabet, bitsPerChar, name2);
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
    const code2 = varint_default2.decode(data, offset);
    return [code2, varint_default2.decode.bytes];
  };
  var encodeTo2 = (int, target, offset = 0) => {
    varint_default2.encode(int, target, offset);
    return target;
  };
  var encodingLength2 = (int) => {
    return varint_default2.encodingLength(int);
  };

  // ../../node_modules/.pnpm/multiformats@12.1.3/node_modules/multiformats/src/hashes/digest.js
  var create3 = (code2, digest) => {
    const size = digest.byteLength;
    const sizeOffset = encodingLength2(code2);
    const digestOffset = sizeOffset + encodingLength2(size);
    const bytes = new Uint8Array(digestOffset + size);
    encodeTo2(code2, bytes, 0);
    encodeTo2(size, bytes, sizeOffset);
    bytes.set(digest, digestOffset);
    return new Digest2(code2, size, digest, bytes);
  };
  var decode12 = (multihash) => {
    const bytes = coerce2(multihash);
    const [code2, sizeOffset] = decode11(bytes);
    const [size, digestOffset] = decode11(bytes.subarray(sizeOffset));
    const digest = bytes.subarray(sizeOffset + digestOffset);
    if (digest.byteLength !== size) {
      throw new Error("Incorrect length");
    }
    return new Digest2(code2, size, digest, bytes);
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
    constructor(code2, size, digest, bytes) {
      this.code = code2;
      this.size = size;
      this.digest = digest;
      this.bytes = bytes;
    }
  };

  // ../../node_modules/.pnpm/multiformats@12.1.3/node_modules/multiformats/src/cid.js
  var format3 = (link, base3) => {
    const { bytes, version: version2 } = link;
    switch (version2) {
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
    constructor(version2, code2, multihash, bytes) {
      this.code = code2;
      this.version = version2;
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
          const { code: code2, multihash } = this;
          if (code2 !== DAG_PB_CODE2) {
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
          const { code: code2, digest } = this.multihash;
          const multihash = create3(code2, digest);
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
        const { version: version2, code: code2, multihash, bytes } = value;
        return new _CID(
          version2,
          code2,
          /** @type {API.MultihashDigest<Alg>} */
          multihash,
          bytes || encodeCID2(version2, code2, multihash.bytes)
        );
      } else if (value[cidSymbol2] === true) {
        const { version: version2, multihash, code: code2 } = value;
        const digest = (
          /** @type {API.MultihashDigest<Alg>} */
          decode12(multihash)
        );
        return _CID.create(version2, code2, digest);
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
    static create(version2, code2, digest) {
      if (typeof code2 !== "number") {
        throw new Error("String codecs are no longer supported");
      }
      if (!(digest.bytes instanceof Uint8Array)) {
        throw new Error("Invalid digest");
      }
      switch (version2) {
        case 0: {
          if (code2 !== DAG_PB_CODE2) {
            throw new Error(
              `Version 0 CID must use dag-pb (code: ${DAG_PB_CODE2}) block encoding`
            );
          } else {
            return new _CID(version2, code2, digest, digest.bytes);
          }
        }
        case 1: {
          const bytes = encodeCID2(version2, code2, digest.bytes);
          return new _CID(version2, code2, digest, bytes);
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
    static createV1(code2, digest) {
      return _CID.create(1, code2, digest);
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
      let version2 = (
        /** @type {V} */
        next()
      );
      let codec = (
        /** @type {C} */
        DAG_PB_CODE2
      );
      if (
        /** @type {number} */
        version2 === 18
      ) {
        version2 = /** @type {V} */
        0;
        offset = 0;
      } else {
        codec = /** @type {C} */
        next();
      }
      if (version2 !== 0 && version2 !== 1) {
        throw new RangeError(`Invalid CID version ${version2}`);
      }
      const prefixSize = offset;
      const multihashCode = (
        /** @type {A} */
        next()
      );
      const digestSize = next();
      const size = offset + digestSize;
      const multihashSize = size - prefixSize;
      return { version: version2, codec, multihashCode, digestSize, multihashSize, size };
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
  var encodeCID2 = (version2, code2, multihash) => {
    const codeOffset = encodingLength2(version2);
    const hashOffset = codeOffset + encodingLength2(code2);
    const bytes = new Uint8Array(hashOffset + multihash.byteLength);
    encodeTo2(version2, bytes, 0);
    encodeTo2(code2, bytes, codeOffset);
    bytes.set(multihash, hashOffset);
    return bytes;
  };
  var cidSymbol2 = Symbol.for("@ipld/js-cid/CID");

  // ../../node_modules/.pnpm/multiformats@12.1.3/node_modules/multiformats/src/hashes/hasher.js
  var from4 = ({ name: name2, code: code2, encode: encode12 }) => new Hasher2(name2, code2, encode12);
  var Hasher2 = class {
    /**
     *
     * @param {Name} name
     * @param {Code} code
     * @param {(input: Uint8Array) => Await<Uint8Array>} encode
     */
    constructor(name2, code2, encode12) {
      this.name = name2;
      this.code = code2;
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

  // ../../node_modules/.pnpm/multiformats@12.1.3/node_modules/multiformats/src/hashes/sha2-browser.js
  var sha = (name2) => (
    /**
     * @param {Uint8Array} data
     */
    async (data) => new Uint8Array(await crypto.subtle.digest(name2, data))
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

  // ../../node_modules/.pnpm/multiformats@13.1.0/node_modules/multiformats/dist/src/link.js
  function parse2(source, base3) {
    return CID.parse(source, base3);
  }

  // ../../node_modules/.pnpm/@web3-storage+pail@0.6.0/node_modules/@web3-storage/pail/src/block.js
  var _blocks;
  var MemoryBlockstore = class {
    /**
     * @param {Array<import('multiformats').Block>} [blocks]
     */
    constructor(blocks) {
      /** @type {Map<string, Uint8Array>} */
      __privateAdd(this, _blocks, /* @__PURE__ */ new Map());
      if (blocks) {
        __privateSet(this, _blocks, new Map(blocks.map((b) => [b.cid.toString(), b.bytes])));
      }
    }
    /** @type {API.BlockFetcher['get']} */
    async get(cid) {
      const bytes = __privateGet(this, _blocks).get(cid.toString());
      if (!bytes)
        return;
      return { cid, bytes };
    }
    /**
     * @param {API.UnknownLink} cid
     * @param {Uint8Array} bytes
     */
    async put(cid, bytes) {
      __privateGet(this, _blocks).set(cid.toString(), bytes);
    }
    /**
     * @param {API.UnknownLink} cid
     * @param {Uint8Array} bytes
     */
    putSync(cid, bytes) {
      __privateGet(this, _blocks).set(cid.toString(), bytes);
    }
    /** @param {API.UnknownLink} cid */
    async delete(cid) {
      __privateGet(this, _blocks).delete(cid.toString());
    }
    /** @param {API.UnknownLink} cid */
    deleteSync(cid) {
      __privateGet(this, _blocks).delete(cid.toString());
    }
    *entries() {
      for (const [str, bytes] of __privateGet(this, _blocks)) {
        yield { cid: parse2(str), bytes };
      }
    }
  };
  _blocks = new WeakMap();

  // ../../node_modules/.pnpm/prolly-trees@1.0.4/node_modules/prolly-trees/esm/src/utils.js
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

  // ../../node_modules/.pnpm/multiformats@13.1.0/node_modules/multiformats/dist/src/block.js
  function readonly({ enumerable = true, configurable = false } = {}) {
    return { enumerable, configurable, writable: false };
  }
  function* linksWithin(path, value) {
    if (value != null && typeof value === "object") {
      if (Array.isArray(value)) {
        for (const [index, element] of value.entries()) {
          const elementPath = [...path, index];
          const cid = CID.asCID(element);
          if (cid != null) {
            yield [elementPath.join("/"), cid];
          } else if (typeof element === "object") {
            yield* links(element, elementPath);
          }
        }
      } else {
        const cid = CID.asCID(value);
        if (cid != null) {
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
    const cid = CID.asCID(source);
    if (cid != null) {
      yield [base3.join("/"), cid];
    }
    for (const [key, value] of Object.entries(source)) {
      const path = [...base3, key];
      yield* linksWithin(path, value);
    }
  }
  function* treeWithin(path, value) {
    if (Array.isArray(value)) {
      for (const [index, element] of value.entries()) {
        const elementPath = [...path, index];
        yield elementPath.join("/");
        if (typeof element === "object" && CID.asCID(element) == null) {
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
      const path = [...base3, key];
      yield path.join("/");
      if (value != null && !(value instanceof Uint8Array) && typeof value === "object" && CID.asCID(value) == null) {
        yield* treeWithin(path, value);
      }
    }
  }
  function get(source, path) {
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
  var Block = class {
    constructor({ cid, bytes, value }) {
      __publicField(this, "cid");
      __publicField(this, "bytes");
      __publicField(this, "value");
      __publicField(this, "asBlock");
      if (cid == null || bytes == null || typeof value === "undefined") {
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
    get(path = "/") {
      return get(this.value, path.split("/").filter(Boolean));
    }
  };
  async function encode9({ value, codec, hasher }) {
    if (typeof value === "undefined")
      throw new Error('Missing required argument "value"');
    if (codec == null || hasher == null)
      throw new Error("Missing required argument: codec or hasher");
    const bytes = codec.encode(value);
    const hash = await hasher.digest(bytes);
    const cid = CID.create(1, codec.code, hash);
    return new Block({ value, bytes, cid });
  }
  async function decode13({ bytes, codec, hasher }) {
    if (bytes == null)
      throw new Error('Missing required argument "bytes"');
    if (codec == null || hasher == null)
      throw new Error("Missing required argument: codec or hasher");
    const value = codec.decode(bytes);
    const hash = await hasher.digest(bytes);
    const cid = CID.create(1, codec.code, hash);
    return new Block({ value, bytes, cid });
  }

  // ../../node_modules/.pnpm/multiformats@13.1.0/node_modules/multiformats/dist/src/hashes/sha2-browser.js
  function sha2(name2) {
    return async (data) => new Uint8Array(await crypto.subtle.digest(name2, data));
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
  var EventBlock = class extends Block {
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
    const { cid, bytes } = await encode9({ value, codec: src_exports, hasher: sha2562 });
    return new Block({ cid, value, bytes });
  };
  var decodeEventBlock = async (bytes) => {
    const { cid, value } = await decode13({ bytes, codec: src_exports, hasher: sha2562 });
    return new Block({ cid, value, bytes });
  };

  // ../encrypted-blockstore/dist/lib/index.js
  var import_cross_fetch = __toESM(require_browser_ponyfill(), 1);
  var PACKAGE_VERSION = "0.18.0";
  var match = PACKAGE_VERSION.match(/^([^.]*\.[^.]*)/);
  if (!match)
    throw new Error("invalid version: " + PACKAGE_VERSION);
  var STORAGE_VERSION = match[0];
  var VersionedStore = class {
    constructor(name2) {
      __publicField(this, "STORAGE_VERSION", STORAGE_VERSION);
      __publicField(this, "name");
      this.name = name2;
    }
  };
  var MetaStore = class extends VersionedStore {
    constructor() {
      super(...arguments);
      __publicField(this, "tag", "header-base");
    }
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
    constructor(name2) {
      __publicField(this, "tag", "car-base");
      __publicField(this, "STORAGE_VERSION", STORAGE_VERSION);
      __publicField(this, "name");
      this.name = name2;
    }
  };
  var chunker = bf(30);
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
  var RemoteDataStore = class extends DataStore {
    constructor(name2, connection, type = "data") {
      super(name2);
      __publicField(this, "tag", "remote-data");
      __publicField(this, "connection");
      __publicField(this, "type");
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
    constructor(name2, connection) {
      super(name2);
      __publicField(this, "tag", "remote-meta");
      __publicField(this, "connection");
      __publicField(this, "subscribers", /* @__PURE__ */ new Map());
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
  var TaskManager = class {
    constructor(loader) {
      __publicField(this, "eventsWeHandled", /* @__PURE__ */ new Set());
      __publicField(this, "queue", []);
      __publicField(this, "isProcessing", false);
      __publicField(this, "loader");
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
  var Connection = class {
    constructor() {
      __publicField(this, "ready");
      __publicField(this, "loaded");
      // todo move to LRU blockstore https://github.com/web3-storage/w3clock/blob/main/src/worker/block.js
      __publicField(this, "eventBlocks", new MemoryBlockstore());
      __publicField(this, "parents", []);
      __publicField(this, "loader");
      __publicField(this, "taskManager");
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
  function validateDataParams(params) {
    const { type, name: name2, car } = params;
    if (!name2)
      throw new Error("name is required");
    if (!car) {
      throw new Error("car is required");
    }
    if (type !== "file" && type !== "data") {
      throw new Error("type must be file or data");
    }
  }
  function validateMetaParams(params) {
    const { name: name2, branch } = params;
    if (!name2)
      throw new Error("name is required");
    if (!branch) {
      throw new Error("branch is required");
    }
  }

  // src/connect-s3.ts
  var import_cross_fetch2 = __toESM(require_browser_ponyfill(), 1);

  // ../../node_modules/.pnpm/js-base64@3.7.5/node_modules/js-base64/base64.mjs
  var version = "3.7.5";
  var VERSION = version;
  var _hasatob = typeof atob === "function";
  var _hasbtoa = typeof btoa === "function";
  var _hasBuffer = typeof Buffer === "function";
  var _TD = typeof TextDecoder === "function" ? new TextDecoder() : void 0;
  var _TE = typeof TextEncoder === "function" ? new TextEncoder() : void 0;
  var b64ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var b64chs = Array.prototype.slice.call(b64ch);
  var b64tab = ((a) => {
    let tab = {};
    a.forEach((c, i) => tab[c] = i);
    return tab;
  })(b64chs);
  var b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
  var _fromCC = String.fromCharCode.bind(String);
  var _U8Afrom = typeof Uint8Array.from === "function" ? Uint8Array.from.bind(Uint8Array) : (it) => new Uint8Array(Array.prototype.slice.call(it, 0));
  var _mkUriSafe = (src3) => src3.replace(/=/g, "").replace(/[+\/]/g, (m0) => m0 == "+" ? "-" : "_");
  var _tidyB64 = (s) => s.replace(/[^A-Za-z0-9\+\/]/g, "");
  var btoaPolyfill = (bin) => {
    let u32, c0, c1, c2, asc = "";
    const pad = bin.length % 3;
    for (let i = 0; i < bin.length; ) {
      if ((c0 = bin.charCodeAt(i++)) > 255 || (c1 = bin.charCodeAt(i++)) > 255 || (c2 = bin.charCodeAt(i++)) > 255)
        throw new TypeError("invalid character found");
      u32 = c0 << 16 | c1 << 8 | c2;
      asc += b64chs[u32 >> 18 & 63] + b64chs[u32 >> 12 & 63] + b64chs[u32 >> 6 & 63] + b64chs[u32 & 63];
    }
    return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
  };
  var _btoa = _hasbtoa ? (bin) => btoa(bin) : _hasBuffer ? (bin) => Buffer.from(bin, "binary").toString("base64") : btoaPolyfill;
  var _fromUint8Array = _hasBuffer ? (u8a) => Buffer.from(u8a).toString("base64") : (u8a) => {
    const maxargs = 4096;
    let strs = [];
    for (let i = 0, l = u8a.length; i < l; i += maxargs) {
      strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
    }
    return _btoa(strs.join(""));
  };
  var fromUint8Array = (u8a, urlsafe = false) => urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
  var cb_utob = (c) => {
    if (c.length < 2) {
      var cc = c.charCodeAt(0);
      return cc < 128 ? c : cc < 2048 ? _fromCC(192 | cc >>> 6) + _fromCC(128 | cc & 63) : _fromCC(224 | cc >>> 12 & 15) + _fromCC(128 | cc >>> 6 & 63) + _fromCC(128 | cc & 63);
    } else {
      var cc = 65536 + (c.charCodeAt(0) - 55296) * 1024 + (c.charCodeAt(1) - 56320);
      return _fromCC(240 | cc >>> 18 & 7) + _fromCC(128 | cc >>> 12 & 63) + _fromCC(128 | cc >>> 6 & 63) + _fromCC(128 | cc & 63);
    }
  };
  var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
  var utob = (u) => u.replace(re_utob, cb_utob);
  var _encode = _hasBuffer ? (s) => Buffer.from(s, "utf8").toString("base64") : _TE ? (s) => _fromUint8Array(_TE.encode(s)) : (s) => _btoa(utob(s));
  var encode11 = (src3, urlsafe = false) => urlsafe ? _mkUriSafe(_encode(src3)) : _encode(src3);
  var encodeURI = (src3) => encode11(src3, true);
  var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
  var cb_btou = (cccc) => {
    switch (cccc.length) {
      case 4:
        var cp = (7 & cccc.charCodeAt(0)) << 18 | (63 & cccc.charCodeAt(1)) << 12 | (63 & cccc.charCodeAt(2)) << 6 | 63 & cccc.charCodeAt(3), offset = cp - 65536;
        return _fromCC((offset >>> 10) + 55296) + _fromCC((offset & 1023) + 56320);
      case 3:
        return _fromCC((15 & cccc.charCodeAt(0)) << 12 | (63 & cccc.charCodeAt(1)) << 6 | 63 & cccc.charCodeAt(2));
      default:
        return _fromCC((31 & cccc.charCodeAt(0)) << 6 | 63 & cccc.charCodeAt(1));
    }
  };
  var btou = (b) => b.replace(re_btou, cb_btou);
  var atobPolyfill = (asc) => {
    asc = asc.replace(/\s+/g, "");
    if (!b64re.test(asc))
      throw new TypeError("malformed base64.");
    asc += "==".slice(2 - (asc.length & 3));
    let u24, bin = "", r1, r2;
    for (let i = 0; i < asc.length; ) {
      u24 = b64tab[asc.charAt(i++)] << 18 | b64tab[asc.charAt(i++)] << 12 | (r1 = b64tab[asc.charAt(i++)]) << 6 | (r2 = b64tab[asc.charAt(i++)]);
      bin += r1 === 64 ? _fromCC(u24 >> 16 & 255) : r2 === 64 ? _fromCC(u24 >> 16 & 255, u24 >> 8 & 255) : _fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255);
    }
    return bin;
  };
  var _atob = _hasatob ? (asc) => atob(_tidyB64(asc)) : _hasBuffer ? (asc) => Buffer.from(asc, "base64").toString("binary") : atobPolyfill;
  var _toUint8Array = _hasBuffer ? (a) => _U8Afrom(Buffer.from(a, "base64")) : (a) => _U8Afrom(_atob(a).split("").map((c) => c.charCodeAt(0)));
  var toUint8Array = (a) => _toUint8Array(_unURI(a));
  var _decode = _hasBuffer ? (a) => Buffer.from(a, "base64").toString("utf8") : _TD ? (a) => _TD.decode(_toUint8Array(a)) : (a) => btou(_atob(a));
  var _unURI = (a) => _tidyB64(a.replace(/[-_]/g, (m0) => m0 == "-" ? "+" : "/"));
  var decode15 = (src3) => _decode(_unURI(src3));
  var isValid = (src3) => {
    if (typeof src3 !== "string")
      return false;
    const s = src3.replace(/\s+/g, "").replace(/={0,2}$/, "");
    return !/[^\s0-9a-zA-Z\+/]/.test(s) || !/[^\s0-9a-zA-Z\-_]/.test(s);
  };
  var _noEnum = (v) => {
    return {
      value: v,
      enumerable: false,
      writable: true,
      configurable: true
    };
  };
  var extendString = function() {
    const _add = (name2, body) => Object.defineProperty(String.prototype, name2, _noEnum(body));
    _add("fromBase64", function() {
      return decode15(this);
    });
    _add("toBase64", function(urlsafe) {
      return encode11(this, urlsafe);
    });
    _add("toBase64URI", function() {
      return encode11(this, true);
    });
    _add("toBase64URL", function() {
      return encode11(this, true);
    });
    _add("toUint8Array", function() {
      return toUint8Array(this);
    });
  };
  var extendUint8Array = function() {
    const _add = (name2, body) => Object.defineProperty(Uint8Array.prototype, name2, _noEnum(body));
    _add("toBase64", function(urlsafe) {
      return fromUint8Array(this, urlsafe);
    });
    _add("toBase64URI", function() {
      return fromUint8Array(this, true);
    });
    _add("toBase64URL", function() {
      return fromUint8Array(this, true);
    });
  };
  var extendBuiltins = () => {
    extendString();
    extendUint8Array();
  };
  var gBase64 = {
    version,
    VERSION,
    atob: _atob,
    atobPolyfill,
    btoa: _btoa,
    btoaPolyfill,
    fromBase64: decode15,
    toBase64: encode11,
    encode: encode11,
    encodeURI,
    encodeURL: encodeURI,
    utob,
    btou,
    decode: decode15,
    isValid,
    fromUint8Array,
    toUint8Array,
    extendString,
    extendUint8Array,
    extendBuiltins
  };

  // src/connect-s3.ts
  var ConnectS3 = class extends Connection {
    constructor(upload, download, websocket) {
      super();
      __publicField(this, "uploadUrl");
      __publicField(this, "downloadUrl");
      __publicField(this, "ws");
      __publicField(this, "messagePromise");
      __publicField(this, "messageResolve");
      this.uploadUrl = new URL(upload);
      this.downloadUrl = new URL(download);
      if (websocket?.length != 0) {
        this.ws = new WebSocket(websocket);
      } else {
        this.ws = void 0;
      }
      this.messagePromise = new Promise((resolve, reject) => {
        this.messageResolve = resolve;
      });
    }
    async dataUpload(bytes, params) {
      const fetchUploadUrl = new URL(
        `?${new URLSearchParams({ cache: Math.random().toString(), ...params }).toString()}`,
        this.uploadUrl
      );
      const response = await (0, import_cross_fetch2.default)(fetchUploadUrl);
      if (!response.ok) {
        throw new Error(
          "failed to get upload url for data " + (/* @__PURE__ */ new Date()).toISOString() + " " + response.statusText
        );
      }
      const { uploadURL } = await response.json();
      const done = await (0, import_cross_fetch2.default)(uploadURL, { method: "PUT", body: bytes });
      if (!done.ok)
        throw new Error("failed to upload data " + done.statusText);
    }
    async metaUpload(bytes, params) {
      const event = await this.createEventBlock(bytes);
      const base64String = gBase64.fromUint8Array(bytes);
      const crdtEntry = {
        cid: event.cid.toString(),
        data: base64String,
        parents: this.parents.map((p) => p.toString())
      };
      const fetchUploadUrl = new URL(
        `?${new URLSearchParams({ type: "meta", ...params }).toString()}`,
        this.uploadUrl
      );
      const done = await (0, import_cross_fetch2.default)(fetchUploadUrl, {
        method: "PUT",
        body: JSON.stringify(crdtEntry)
      });
      const result = await done.json();
      if (result.status != 201) {
        throw new Error("failed to upload data " + JSON.parse(result.body).message);
      }
      this.parents = [event.cid];
      return null;
    }
    async dataDownload(params) {
      const { type, name: name2, car } = params;
      const fetchFromUrl = new URL(`${type}/${name2}/${car}.car`, this.downloadUrl);
      const response = await (0, import_cross_fetch2.default)(fetchFromUrl);
      if (!response.ok)
        return null;
      const bytes = new Uint8Array(await response.arrayBuffer());
      return bytes;
    }
    async onConnect() {
      if (!this.loader || !this.taskManager) {
        throw new Error("loader and taskManager must be set");
      }
      if (this.ws == void 0) {
        return;
      }
      this.ws.addEventListener("message", async (event) => {
        const data = JSON.parse(event.data);
        const bytes = gBase64.toUint8Array(data.items[0].data);
        const afn = async () => {
          const uint8ArrayBuffer = bytes;
          const eventBlock = await this.createEventBlock(uint8ArrayBuffer);
          await this.taskManager.handleEvent(eventBlock);
          this.messageResolve?.([eventBlock.value.data.dbMeta]);
          this.parents.push(eventBlock.cid);
          setTimeout(() => {
            this.messagePromise = new Promise((resolve, reject) => {
              this.messageResolve = resolve;
            });
          }, 0);
        };
        void afn();
      });
    }
    /**
     * metaDownload Function
     *
     * This function downloads metadata for a specific name and branch.
     *
     * Proposed Algorithm for Efficient Reads:
     *
     * 1. Read the Directory:
     *    - Fetch the list of keys in the directory, sorted by their timestamp in descending order—newest to oldest.
     *
     * 2. Initialize a Skip List:
     *    - Create an empty set data structure to keep track of the parent nodes that can be skipped.
     *
     * 3. Iterate through Keys:
     *    - Start from the newest key and move towards the oldest.
     *    - If the key is in the skip list, skip the read and continue.
     *    - Read the node and add its parents to the skip list.
     *
     * 4. Idempotent Application:
     *    - Apply the nodes to your DAG. Given that your application is idempotent, there's no harm in reapplying nodes,
     *      but the skip list should minimize this.
     *
     * 5. State Tracking:
     *    - Keep track of the oldest key you've successfully processed. This becomes the starting point for your next read,
     *      adjusted for the safety window.
     *
     * 6. Retry Logic:
     *    - If a key is missing, you could either skip it (since the system is designed to be eventually consistent) or
     *      implement some kind of retry logic.
     *
     * By implementing this algorithm, we aim to minimize the number of reads and work with the most current snapshot
     * of the data. It also avoids the need to delete keys, thereby averting the read-modify-write race condition.
     *
     * Writes: https://chat.openai.com/share/5dd42b0e-cbb8-4006-823b-7269df05e9eb
     *
     * @param params - The parameters for the download, including the name and branch.
     * @returns - Returns the metadata bytes as a Uint8Array or null if the fetch is unsuccessful.
     */
    async metaDownload(params) {
      const { name: name2, branch } = params;
      const fetchUploadUrl = new URL(
        `?${new URLSearchParams({ type: "meta", ...params }).toString()}`,
        this.uploadUrl
      );
      const data = await (0, import_cross_fetch2.default)(fetchUploadUrl);
      let response = await data.json();
      if (response.status != 200)
        throw new Error("Failed to download data");
      response = JSON.parse(response.body).items;
      const events = await Promise.all(
        response.map(async (element) => {
          const base64String = element.data;
          const bytes = gBase64.toUint8Array(base64String);
          return { cid: element.cid, bytes };
        })
      );
      const cids = events.map((e) => e.cid);
      const uniqueParentsMap = new Map([...this.parents, ...cids].map((p) => [p.toString(), p]));
      this.parents = Array.from(uniqueParentsMap.values());
      return events.map((e) => e.bytes);
    }
  };

  // src/index.ts
  var connect = {
    s3free: ({ blockstore }) => {
      const upload = "https://udvtu5wy39.execute-api.us-east-2.amazonaws.com/uploads";
      const download = "https://crdt-s3uploadbucket-dcjyurxwxmba.s3.us-east-2.amazonaws.com";
      const websocket = "";
      const connection = new ConnectS3(upload, download, websocket);
      connection.connect(blockstore);
      return connection;
    },
    awsFree: ({ blockstore, name: name2 }) => {
      const upload = "https://udvtu5wy39.execute-api.us-east-2.amazonaws.com/uploads";
      const download = "https://crdt-s3uploadbucket-dcjyurxwxmba.s3.us-east-2.amazonaws.com";
      const websocket = `wss://v7eax67rm6.execute-api.us-east-2.amazonaws.com/Prod?database=${name2}`;
      const connection = new ConnectS3(upload, download, websocket);
      connection.connect(blockstore);
      return connection;
    },
    aws: ({ blockstore, name: name2 }, { upload, download, websocket }) => {
      const updatedwebsocket = `${websocket}?database=${name2}`;
      const connection = new ConnectS3(upload, download, updatedwebsocket);
      connection.connect(blockstore);
      return connection;
    }
  };
  function validateDataParams2(params) {
    const { type, name: name2, car } = params;
    if (!name2)
      throw new Error("name is required");
    if (!car) {
      throw new Error("car is required");
    }
    if (type !== "file" && type !== "data") {
      throw new Error("type must be file or data");
    }
  }
  function validateMetaParams2(params) {
    const { name: name2, branch } = params;
    if (!name2)
      throw new Error("name is required");
    if (!branch) {
      throw new Error("branch is required");
    }
  }
  return __toCommonJS(src_exports2);
})();
//# sourceMappingURL=index.iife.js.map
