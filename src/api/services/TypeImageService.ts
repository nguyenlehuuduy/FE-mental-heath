/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TypeImage } from '../models/TypeImage';
import type { TypeImagesForCreate } from '../models/TypeImagesForCreate';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TypeImageService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * api to create type image
     * @param requestBody
     * @returns TypeImage create an images post successfully
     * @throws ApiError
     */
    public postTypeImagesCreate(
        requestBody: TypeImagesForCreate,
    ): CancelablePromise<TypeImage> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/typeImages/create',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * api get detail type image
     * @param idTypeImage
     * @returns TypeImage detail of type image
     * @throws ApiError
     */
    public getTypeImages(
        idTypeImage: string,
    ): CancelablePromise<TypeImage> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/typeImages/{idTypeImage}',
            path: {
                'idTypeImage': idTypeImage,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * api get list type image
     * @returns TypeImage list type of image
     * @throws ApiError
     */
    public getTypeImages1(): CancelablePromise<Array<TypeImage>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/typeImages',
        });
    }
    /**
     * api delete type image by idType
     * @param idTypeImage
     * @returns any delete type image successfully
     * @throws ApiError
     */
    public deleteTypeImagesDelete(
        idTypeImage: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/typeImages/{idTypeImage}/delete',
            path: {
                'idTypeImage': idTypeImage,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * api for update typeimage by id type
     * @param idTypeImage
     * @returns TypeImage update type image successfully
     * @throws ApiError
     */
    public putTypeImagesUpdate(
        idTypeImage: string,
    ): CancelablePromise<TypeImage> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/typeImages/{idTypeImage}/update',
            path: {
                'idTypeImage': idTypeImage,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
}
