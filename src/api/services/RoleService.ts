/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Role } from '../models/Role';
import type { RoleForCreate } from '../models/RoleForCreate';
import type { RoleForPut } from '../models/RoleForPut';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RoleService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * API create role
     * @param requestBody
     * @returns Role create a role successfully
     * @throws ApiError
     */
    public roleControllerCreateRole(
        requestBody: RoleForCreate,
    ): CancelablePromise<Role> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/roles/create',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * api update role by idRole
     * @param idRole permission by admin
     * @param requestBody
     * @returns Role update a role successfully
     * @throws ApiError
     */
    public putRolesUpdate(
        idRole: string,
        requestBody: RoleForPut,
    ): CancelablePromise<Role> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/roles/{idRole}/update',
            path: {
                'idRole': idRole,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API delete a role by idRole
     * @param idRole permission by admin
     * @returns any delete succesfully
     * @throws ApiError
     */
    public deleteRolesDelete(
        idRole: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/roles/{idRole}/delete',
            path: {
                'idRole': idRole,
            },
        });
    }
    /**
     * api get all role
     * @returns Role list all role
     * @throws ApiError
     */
    public getRoles(): CancelablePromise<Array<Role>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/roles',
        });
    }
    /**
     * api get detail role by idRole
     * @param idRole
     * @returns Role detail role of id
     * @throws ApiError
     */
    public getRoles1(
        idRole: string,
    ): CancelablePromise<Role> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/roles/{idRole}',
            path: {
                'idRole': idRole,
            },
        });
    }
}
