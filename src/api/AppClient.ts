/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { AuthService } from './services/AuthService';
import { CommentService } from './services/CommentService';
import { ImagesService } from './services/ImagesService';
import { NotificationService } from './services/NotificationService';
import { PostService } from './services/PostService';
import { ReactionService } from './services/ReactionService';
import { ReupPostService } from './services/ReupPostService';
import { RoleService } from './services/RoleService';
import { TypeImageService } from './services/TypeImageService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class AppClient {
    public readonly auth: AuthService;
    public readonly comment: CommentService;
    public readonly images: ImagesService;
    public readonly notification: NotificationService;
    public readonly post: PostService;
    public readonly reaction: ReactionService;
    public readonly reupPost: ReupPostService;
    public readonly role: RoleService;
    public readonly typeImage: TypeImageService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'http://locahost:3000/api',
            VERSION: config?.VERSION ?? '1.0.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.auth = new AuthService(this.request);
        this.comment = new CommentService(this.request);
        this.images = new ImagesService(this.request);
        this.notification = new NotificationService(this.request);
        this.post = new PostService(this.request);
        this.reaction = new ReactionService(this.request);
        this.reupPost = new ReupPostService(this.request);
        this.role = new RoleService(this.request);
        this.typeImage = new TypeImageService(this.request);
    }
}

