import { revalidateTag } from "next/cache";
import {
  callGetRequest,

} from "./apiService";
import { formatDate } from "@/lib/utils";

interface NotificationForReponse {
  id: string;
  messageNotifications: string;
  typeNotificationId: string;
  typeNotification: {
      id: string,
      thumbnailNoti: string,
      typeName: string,
      description: string,
    };
  accountId: string;
  postId: string;
  postShareId: string;
  commentId: string;
  followerId: string;
  created_at: string;
  updated_at: string;
}

export type NotificationForCard = {
  id: string;
  message_notifications: string;
  type_notification_id: string;
  type_Notification: {
    id: string,
    thumbnail_Noti: string,
    type_Name: string,
    description: string,
  };
  account_id: string;
  post_id: string;
  post_share_id: string;
  comment_id: string;
  follower_id: string;
  created_at: string;
  updated_at: string;
}
export async function getListNotification(): Promise<Array<NotificationForCard> | undefined> {
  const res = await callGetRequest(
    `/notifications`,
    "get-valid-post-cache",
  );
  if (res.status === 200) {
    const data: Array<NotificationForReponse> = res.response;
    const result: Array<NotificationForCard> = [];
    for (const item of data) {
      result.push({
        account_id: item.accountId,
        comment_id: item.commentId,
        message_notifications: item.messageNotifications,
        type_notification_id: item.typeNotificationId,
        type_Notification: {
          id: item.typeNotification.id,
          // thumbnail_Noti: item.typeNotification.thumbnailNoti ,
          thumbnail_Noti: "https://cdn.dummyjson.com/cache/100x100/bitter-16/cccccc-black/2535838d9d0ccf91d287ae796ce1a914.webp",
          type_Name: item.typeNotification.typeName ,
          description: item.typeNotification.description ,
        },
        id: item.id,
        post_id: item.postId,
        post_share_id: item.postShareId,
        follower_id: item.followerId,
        created_at: formatDate(item.created_at, "DD/MM/YYYY HH:mm"),
        updated_at: formatDate(item.updated_at, "DD/MM/YYYY HH:mm"),
      })
    }
    return result
  }
}
