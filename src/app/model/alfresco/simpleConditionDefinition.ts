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


export interface SimpleConditionDefinition { 
    /**
     * The name of the property to compare.  This should be either a property (e.g. \"cm:name\") or one of the keywords from this list: * size (the size of the content for a node) * mimetype (the mimetype of the content for a node) * encoding (the encoding of the content for a node) * category (a category for the node) * tag (a tag that the node has) * aspect (an aspect that the node has)  For multi-valued properties the condition is satisfied if any of the values match the condition. 
     */
    field: string;
    /**
     * The method to compare the property against the parameter.  Depending on the type of the property then different comparators are available: * All types: equals * text: contains, startsWith, endsWith * int/long/float/double/date: greaterThan, lessThan, greaterThanOrEqual, lessThanOrEqual * type: instanceOf  Where a property is multivalued then the condition is true if it is satisfied by any of the values. 
     */
    comparator: string;
    /**
     * The value to compare the field against
     */
    parameter: string;
}

