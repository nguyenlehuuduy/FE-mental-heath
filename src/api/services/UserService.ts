/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminAccountForPut } from '../models/AdminAccountForPut';
import type { AdminAccountForResponse } from '../models/AdminAccountForResponse';
import type { UserForResponse } from '../models/UserForResponse';
import type { UserForUpdate } from '../models/UserForUpdate';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UserService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param id
     * @param requestBody
     * @returns UserForResponse
     * @throws ApiError
     */
    public userControllerUpdateUser(
        id: string,
        requestBody: UserForUpdate,
    ): CancelablePromise<UserForResponse> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/user',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns AdminAccountForResponse
     * @throws ApiError
     */
    public userControllerUpdateAdministratorAccount(
        requestBody: AdminAccountForPut,
    ): CancelablePromise<AdminAccountForResponse> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/user/update-account-admin',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public userControllerSuggestFollowForAccount(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/user/suggestFollow',
        });
    }
}
