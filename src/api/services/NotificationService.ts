/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Notification } from '../models/Notification';
import type { Pagination } from '../models/Pagination';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class NotificationService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get notification
     * @param limit page number
     * @param sortBy key word to sort
     * @param orderBy orderBy desc or asc
     * @param idUser The name of the post author
     * @param date current date to create a post
     * @param content filter list by topic
     * @param pageNo current page
     * @returns any A list of notifications
     * @throws ApiError
     */
    public getNotifications(
        limit?: number,
        sortBy?: number,
        orderBy?: number,
        idUser?: string,
        date?: string,
        content?: string,
        pageNo?: string,
    ): CancelablePromise<{
        data?: Array<Notification>;
        pagination?: Pagination;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/notifications',
            query: {
                'limit': limit,
                'sortBy': sortBy,
                'orderBy': orderBy,
                'idUser': idUser,
                'date': date,
                'content': content,
                'page_no': pageNo,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
}
