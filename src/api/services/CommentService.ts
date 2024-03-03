/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Comment } from '../models/Comment';
import type { CommentForCreate } from '../models/CommentForCreate';
import type { CommentForEdit } from '../models/CommentForEdit';
import type { Pagination } from '../models/Pagination';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CommentService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param requestBody
     * @returns Comment create a comment successfully
     * @throws ApiError
     */
    public commentControllerCreateComment(
        requestBody: CommentForCreate,
    ): CancelablePromise<Comment> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/comments/create',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `create a comment failed`,
            },
        });
    }
    /**
     * @param idComment id of comment
     * @param requestBody
     * @returns Comment edit a comment successfully
     * @throws ApiError
     */
    public commentControllerEditComment(
        idComment: string,
        requestBody: CommentForEdit,
    ): CancelablePromise<Comment> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/comments/{idComment}/edit',
            path: {
                'idComment': idComment,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `edit a comment failed`,
            },
        });
    }
    /**
     * @param idComment
     * @returns any delete a comment successfully
     * @throws ApiError
     */
    public commentControllerDeleteComment(
        idComment: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/comments/{idComment}/delete',
            path: {
                'idComment': idComment,
            },
            errors: {
                400: `delete a comment failed`,
            },
        });
    }
    /**
     * api get all comment
     * @param limit The maximum number of images to return
     * @param pageNo current page
     * @param create date create image
     * @param idUser image of a specific user
     * @param sortBy key to sort
     * @param orderBy key to order
     * @returns any A list of comment
     * @throws ApiError
     */
    public getComments(
        limit?: number,
        pageNo?: number,
        create?: string,
        idUser?: string,
        sortBy?: string,
        orderBy?: string,
    ): CancelablePromise<{
        data?: Array<Comment>;
        pagination?: Pagination;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/comments',
            query: {
                'limit': limit,
                'pageNo': pageNo,
                'create': create,
                'idUser': idUser,
                'sort_by': sortBy,
                'order_by': orderBy,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
}
