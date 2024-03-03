/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Pagination } from '../models/Pagination';
import type { ReupPost } from '../models/ReupPost';
import type { ReupPostForCreate } from '../models/ReupPostForCreate';
import type { ReupPostForPut } from '../models/ReupPostForPut';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ReupPostService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a new reup post
     * @param requestBody
     * @returns ReupPost create a reup post successfully
     * @throws ApiError
     */
    public postReuppostCreate(
        requestBody: ReupPostForCreate,
    ): CancelablePromise<ReupPost> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/reuppost/create',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * List all reup post
     * @param limit The maximum number of posts to return
     * @param sortBy key word to sort
     * @param orderBy orderBy desc or asc
     * @param pageNo current_page
     * @param idUser The name of the post author
     * @param date current date to create a post
     * @param topic filter list by topic
     * @param react filter list by react
     * @param favorite filter list by favorite
     * @returns any list of reup post
     * @throws ApiError
     */
    public getReuppost(
        limit?: number,
        sortBy?: number,
        orderBy?: number,
        pageNo?: number,
        idUser?: string,
        date?: string,
        topic?: string,
        react?: string,
        favorite?: string,
    ): CancelablePromise<{
        data?: ReupPost;
        pagination?: Pagination;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reuppost',
            query: {
                'limit': limit,
                'sortBy': sortBy,
                'orderBy': orderBy,
                'page_no': pageNo,
                'idUser': idUser,
                'date': date,
                'topic': topic,
                'react': react,
                'favorite': favorite,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Update a reup post by idReupPost
     * @param idReupPost
     * @param requestBody
     * @returns ReupPost update succesfully
     * @throws ApiError
     */
    public putReuppostUpdate(
        idReupPost: string,
        requestBody: ReupPostForPut,
    ): CancelablePromise<ReupPost> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/reuppost/{idReupPost}/update',
            path: {
                'idReupPost': idReupPost,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Delete a reup post by idReupPost
     * @param idReupPost
     * @returns any delete succesfully
     * @throws ApiError
     */
    public deleteReuppostDelete(
        idReupPost: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/reuppost/{idReupPost}/delete',
            path: {
                'idReupPost': idReupPost,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * api get detail reup post
     * @param idReupPost
     * @returns ReupPost reuppost by id user
     * @throws ApiError
     */
    public getReuppost1(
        idReupPost: string,
    ): CancelablePromise<ReupPost> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reuppost/{idReupPost}',
            path: {
                'idReupPost': idReupPost,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
}
