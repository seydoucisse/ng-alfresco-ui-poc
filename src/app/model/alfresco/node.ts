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
import { PermissionsInfo } from './permissionsInfo';
import { ContentInfo } from './contentInfo';
import { Definition } from './definition';
import { PathInfo } from './pathInfo';
import { UserInfo } from './userInfo';


export interface Node { 
    id: string;
    /**
     * The name must not contain spaces or the following special characters: * \" < > \\ / ? : and |. The character . must not be used at the end of the name. 
     */
    name: string;
    nodeType: string;
    isFolder: boolean;
    isFile: boolean;
    isLocked?: boolean;
    modifiedAt: string;
    modifiedByUser: UserInfo;
    createdAt: string;
    createdByUser: UserInfo;
    parentId?: string;
    isLink?: boolean;
    isFavorite?: boolean;
    isDirectLinkEnabled?: boolean;
    content?: ContentInfo;
    aspectNames?: Array<string>;
    properties?: object;
    allowableOperations?: Array<string>;
    path?: PathInfo;
    permissions?: PermissionsInfo;
    definition?: Definition;
}

