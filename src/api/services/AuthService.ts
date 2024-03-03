/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Account } from '../models/Account';
import type { AccountForLogin } from '../models/AccountForLogin';
import type { AccountForPost } from '../models/AccountForPost';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AuthService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param requestBody
     * @returns Account
     * @throws ApiError
     */
    public authControllerRegister(
        requestBody: AccountForPost,
    ): CancelablePromise<Account> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/register',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any return access token to authentication
     * @throws ApiError
     */
    public authControllerLogin(
        requestBody: AccountForLogin,
    ): CancelablePromise<{
        accessToken?: string;
        refreshToken?: string;
        expired?: string;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns Account
     * @throws ApiError
     */
    public authControllerGetProfile(): CancelablePromise<Account> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/auth/profile',
        });
    }
}
