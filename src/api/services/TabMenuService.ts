/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TabMenuForGet } from '../models/TabMenuForGet';
import type { TabMenuForPost } from '../models/TabMenuForPost';
import type { TabMenuForUpdate } from '../models/TabMenuForUpdate';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TabMenuService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param requestBody
     * @returns TabMenuForGet
     * @throws ApiError
     */
    public tabMenuControllerCreateNewFeature(
        requestBody: TabMenuForPost,
    ): CancelablePromise<TabMenuForGet> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/tab-menu',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns TabMenuForGet
     * @throws ApiError
     */
    public tabMenuControllerGetAllFeature(): CancelablePromise<Array<TabMenuForGet>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/tab-menu',
        });
    }
    /**
     * @param id id of hot tab menu
     * @param requestBody
     * @returns TabMenuForGet
     * @throws ApiError
     */
    public tabMenuControllerUpdateFeature(
        id: string,
        requestBody: TabMenuForUpdate,
    ): CancelablePromise<TabMenuForGet> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/tab-menu/{id}',
            query: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id id of hot tab menu
     * @returns TabMenuForGet
     * @throws ApiError
     */
    public tabMenuControllerDeleteFeature(
        id: string,
    ): CancelablePromise<TabMenuForGet> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/tab-menu/{id}',
            query: {
                'id': id,
            },
        });
    }
}
