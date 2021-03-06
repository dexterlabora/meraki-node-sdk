/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of ClaimOrganizationModel
 */
class ClaimOrganizationModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.order = this.constructor.getValue(obj.order);
        this.serial = this.constructor.getValue(obj.serial);
        this.licenseKey = this.constructor.getValue(obj.licenseKey);
        this.licenseMode = this.constructor.getValue(obj.licenseMode);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'order', realName: 'order' },
            { name: 'serial', realName: 'serial' },
            { name: 'licenseKey', realName: 'licenseKey' },
            { name: 'licenseMode', realName: 'licenseMode' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = ClaimOrganizationModel;
