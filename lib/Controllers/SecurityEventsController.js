/**
 * MerakiDashboardAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _apiHelper = require('../APIHelper');
const _baseController = require('./BaseController');

class SecurityEventsController {
    /**
     * List the security events for an organization
     * ## SAMPLE REQUEST
     * ```
     * curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET
     * 'https://api.meraki.com/api/v0/organizations/{organizationId}/securityEvents'
     * ```
     *
     * @param {string} organizationId TODO: type description here
     * @param {int} perPage The number of entries per page returned. Acceptable range is 3 - 1000.
     * @param {string} t0 (optional) The beginning of the timespan for the data. The maximum
     * lookback period is 365 days from today.
     * @param {string} t1 (optional) The end of the timespan for the data. t1 can be a maximum of
     * 365 days after t0.
     * @param {int} timespan (optional) The timespan for which the information will be fetched. If
     * specifying timespan, do not specify parameters t0 and t1. The value
     * must be in seconds and be less than or equal to 365 days. The default
     * is 31 days.
     * @param {string} startingAfter (optional) A token used by the server to indicate the start of
     * the page. Often this is a timestamp or an ID but it is not
     * limited to those. This parameter should not be defined by
     * client applications. The link for the first, last, prev, or
     * next page in the HTTP Link header should define it.
     * @param {string} endingBefore (optional) A token used by the server to indicate the end of
     * the page. Often this is a timestamp or an ID but it is not
     * limited to those. This parameter should not be defined by
     * client applications. The link for the first, last, prev, or
     * next page in the HTTP Link header should define it.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getOrganizationSecurityEvents(organizationId,
        perPage,
        t0,
        t1,
        timespan,
        startingAfter,
        endingBefore,
        callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _pathUrl = '/organizations/{organizationId}/securityEvents';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            organizationId,
        });

        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            perPage,
            t0,
            t1,
            timespan,
            startingAfter,
            endingBefore,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'X-Cisco-Meraki-API-Key': _configuration.xCiscoMerakiAPIKey,
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    const parsed = JSON.parse(_response.body);
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * List the security events for a network
     * ## SAMPLE REQUEST
     * ```
     * curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET
     * 'https://api.meraki.com/api/v0/networks/{networkId}/securityEvents'
     * ```
     *
     * @param {string} networkId TODO: type description here
     * @param {int} perPage The number of entries per page returned. Acceptable range is 3 - 1000.
     * @param {string} t0 (optional) The beginning of the timespan for the data. The maximum
     * lookback period is 365 days from today.
     * @param {string} t1 (optional) The end of the timespan for the data. t1 can be a maximum of
     * 365 days after t0.
     * @param {int} timespan (optional) The timespan for which the information will be fetched. If
     * specifying timespan, do not specify parameters t0 and t1. The value
     * must be in seconds and be less than or equal to 365 days. The default
     * is 31 days.
     * @param {string} startingAfter (optional) A token used by the server to indicate the start of
     * the page. Often this is a timestamp or an ID but it is not
     * limited to those. This parameter should not be defined by
     * client applications. The link for the first, last, prev, or
     * next page in the HTTP Link header should define it.
     * @param {string} endingBefore (optional) A token used by the server to indicate the end of
     * the page. Often this is a timestamp or an ID but it is not
     * limited to those. This parameter should not be defined by
     * client applications. The link for the first, last, prev, or
     * next page in the HTTP Link header should define it.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getNetworkSecurityEvents(networkId,
        perPage,
        t0,
        t1,
        timespan,
        startingAfter,
        endingBefore,
        callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _pathUrl = '/networks/{networkId}/securityEvents';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            networkId,
        });

        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            perPage,
            t0,
            t1,
            timespan,
            startingAfter,
            endingBefore,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'X-Cisco-Meraki-API-Key': _configuration.xCiscoMerakiAPIKey,
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    const parsed = JSON.parse(_response.body);
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
}
module.exports = SecurityEventsController;