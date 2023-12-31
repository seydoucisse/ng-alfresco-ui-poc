/**
 * Alfresco Content Services REST API
 * **Core API**  Provides access to the core features of Alfresco Content Services. 
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface Pagination { 
    /**
     * The number of objects in the entries array. 
     */
    count?: number;
    /**
     * A boolean value which is **true** if there are more entities in the collection beyond those in this response. A true value means a request with a larger value for the **skipCount** or the **maxItems** parameter will return more entities. 
     */
    hasMoreItems?: boolean;
    /**
     * An integer describing the total number of entities in the collection. The API might not be able to determine this value, in which case this property will not be present. 
     */
    totalItems?: number;
    /**
     * An integer describing how many entities exist in the collection before those included in this list. If there was no **skipCount** parameter then the default value is 0. 
     */
    skipCount?: number;
    /**
     * The value of the **maxItems** parameter used to generate this list. If there was no **maxItems** parameter then the default value is 100. 
     */
    maxItems?: number;
}

