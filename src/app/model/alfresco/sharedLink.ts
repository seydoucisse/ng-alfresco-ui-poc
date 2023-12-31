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
import { ContentInfo } from './contentInfo';
import { PathInfo } from './pathInfo';
import { UserInfo } from './userInfo';


export interface SharedLink { 
    id?: string;
    expiresAt?: string;
    nodeId?: string;
    /**
     * The name must not contain spaces or the following special characters: * \" < > \\ / ? : and |. The character . must not be used at the end of the name. 
     */
    name?: string;
    title?: string;
    description?: string;
    modifiedAt?: string;
    modifiedByUser?: UserInfo;
    sharedByUser?: UserInfo;
    content?: ContentInfo;
    /**
     * The allowable operations for the Quickshare link itself. See allowableOperationsOnTarget for the allowable operations pertaining to the linked content node. 
     */
    allowableOperations?: Array<string>;
    /**
     * The allowable operations for the content node being shared. 
     */
    allowableOperationsOnTarget?: Array<string>;
    isFavorite?: boolean;
    /**
     * A subset of the target node\'s properties, system properties and properties already available in the SharedLink are excluded. 
     */
    properties?: object;
    aspectNames?: Array<string>;
    path?: PathInfo;
}

