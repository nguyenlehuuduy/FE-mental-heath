/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Pagination } from '../models/Pagination';
import type { Post } from '../models/Post';
import type { PostForCreate } from '../models/PostForCreate';
import type { PostForPut } from '../models/PostForPut';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PostService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a new post
     * @param requestBody
     * @returns Post create a post successfully
     * @throws ApiError
     */
    public postPostCreate(
        requestBody: PostForCreate,
    ): CancelablePromise<Post> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/post/create',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Get all post
     * @param limit The maximum number of posts to return
     * @param sortBy key word to sort
     * @param orderBy orderBy desc or asc
     * @param idUser The name of the post author
     * @param date current date to create a post
     * @param topic filter list by topic
     * @param react filter list by react
     * @param favorite filter list by favorite
     * @returns any list of post
     * @throws ApiError
     */
    public getPost(
        limit?: number,
        sortBy?: number,
        orderBy?: number,
        idUser?: string,
        date?: string,
        topic?: string,
        react?: string,
        favorite?: string,
    ): CancelablePromise<{
        data?: Post;
        pagination?: Pagination;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/post',
            query: {
                'limit': limit,
                'sortBy': sortBy,
                'orderBy': orderBy,
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
     * Update a post by idPost
     * @param idPost
     * @param requestBody
     * @returns Post update succesfully
     * @throws ApiError
     */
    public putPostUpdate(
        idPost: string,
        requestBody: PostForPut,
    ): CancelablePromise<Post> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/post/{idPost}/update',
            path: {
                'idPost': idPost,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Delete a post by idPost
     * @param idPost
     * @returns any delete succesfully
     * @throws ApiError
     */
    public deletePostDelete(
        idPost: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/post/{idPost}/delete',
            path: {
                'idPost': idPost,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * api get post detail by id post
     * @param idPost id of post
     * @returns Post create a post successfully
     * @throws ApiError
     */
    public getPost1(
        idPost: string,
    ): CancelablePromise<Post> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/post/{idPost}',
            path: {
                'idPost': idPost,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
}
