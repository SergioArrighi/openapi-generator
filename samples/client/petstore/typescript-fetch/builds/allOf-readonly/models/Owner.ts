/* tslint:disable */
/* eslint-disable */
/**
 * Example
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Owner
 */
export interface Owner {
    /**
     * 
     * @type {string}
     * @memberof Owner
     */
    name?: string;
}

/**
 * Check if a given object implements the Owner interface.
 */
export function instanceOfOwner(value: object): boolean {
    return true;
}

export function OwnerFromJSON(json: any): Owner {
    return OwnerFromJSONTyped(json, false);
}

export function OwnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Owner {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function OwnerToJSON(value?: Owner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value['name'],
    };
}

