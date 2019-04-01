/**
 * MerakiDashboardAPINFOFeb21Lib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

"use strict";

const HttpContext = require("./HttpContext");
const HttpResponse = require("../Response/HttpResponse");
//const request = require("request");
const APIHelper = require("../../APIHelper");

// CUSTOM Meraki Big ID numbers
const JSONbig = require("json-bigint")({ storeAsString: true });

// CUSTOM GOOGLE APPS REQUEST HANDLER - BY CORY
var request;
if (process.env.VUE_APP_SERVICE == "dev") {
  request = require("request");
} else {
  request = require("./request-gas");
}

// -- end custom

// convert to request's version of http request
const convertHttpRequest = function convertHttpRequest(req) {
  const options = {
    url: req.queryUrl,
    method: req.method,
    headers: req.headers
  };
  if (req.username) {
    options.auth = { user: req.username, pass: req.password };
  }
  if (req.body) {
    options.body = req.body;
  }
  if (req.formData) {
    // need to add to request's formdata object directly
    // options.formData = APIHelper.formDataEncodeObject(req.formData);
  }
  if (req.form) {
    options.form = APIHelper.urlEncodeObject(req.form);
    options.headers["content-type"] = "application/x-www-form-urlencoded";
  }
  return options;
};

const appendFormdata = function appendFormdata(form, data) {
  const dataArray = APIHelper.formDataEncodeObject(data);
  for (let index = 0; index < dataArray.length; index += 1) {
    if (Object.prototype.hasOwnProperty.call(dataArray, index)) {
      const key = dataArray[index].key;
      const value = dataArray[index].value;
      form.append(key, value);
    }
  }
};

const convertHttpResponse = function convertHttpResponse(resp) {
  console.log("convertHttpResponse, resp", resp);
  const response = new HttpResponse();

  // ADDED BY CORY -- To fix incorrect organizationId type (should be a string, but being sent as number, which then is parsed incorrectly by JS)
  if (resp) {
    //response.body = resp.body;
    if (resp.body) {
      try {
        response.body = JSON.stringify(JSONbig.parse(resp.body)); // WORKS!
      } catch (error) {
        console.log("unable to parse body, returning default body");
        response.body = resp.body;
      }
    }

    response.headers = resp.headers;
    response.statusCode = resp.statusCode;
  }
  console.log("convertHttpResponse, response (after JSONBig)", response);
  return response;
};

//

/**
 * Execute a given HttpRequest to get string response back
 * @param    {HttpRequest | HttpBodyRequest}  req    The query string builder to replace the
 *                                                   template parameters
 * @param   {function}    callback   Callback function to execute when request completes or fails
 * @param   {Array} parameters    The parameters to replace in the queryBuilder
 * @returns {void}                Does not return anything
 */
const executeRequest = function executeRequest(req, callback) {
  console.log("sdk executeRequest req", req);
  // convert abstracted request to request's http request
  const convertedRequest = convertHttpRequest(req);
  const context = new HttpContext();
  context.request = req;
  console.log("sdk executeRequest context", context);
  // make a temp callback
  const internalCallback = function cb(error, res) {
    console.log("sdk executeRequest internalCallback error, res", error, res);
    const response = convertHttpResponse(res);
    context.response = res;
    console.log(
      "sdk executeRequest internalCallback error,response,context",
      error,
      res,
      context
    );
    callback(error, response, context);
  };

  // make the request
  console.log(
    "sdk executeRequest request(convertedRequest, internalCallback",
    convertedRequest,
    internalCallback
  );
  const rq = request(convertedRequest, internalCallback);
  // add formdata directly.
  if (req.formData) {
    const form = rq.form();
    appendFormdata(form, req.formData);
  }
};
module.exports = executeRequest;