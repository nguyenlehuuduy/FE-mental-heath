export const COOKIE_ACCESS_TOKEN_KEY = "access_token";
export const MAX_FILE_SIZE = 5000000;

export const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const ID_CHAT_BOT = "0308051202024GZMTH";

export const EVENTS = {
  connection: "connection",
  CLIENT: {
    CREATE_ROOM: "CREATE_ROOM",
    SEND_ROOM_MESSAGE: "SEND_MESSAGE",
    JOIN_ROOM: "JOIN_ROOM",
    JOIN_NOTIFICATION_IDENTIFY: "JOIN_NOTIFICATION",
  },
  SERVER: {
    ROOMS: "ROOMS",
    JOINED_ROOM: "JOINED_ROOM",
    ROOM_MESSAGE: "ROOM_MESSAGE",
  },
};


export const PERMISSION_POST = {
  PUBLIC: 'genzmth@pms_p_345432',
  PRIVATE: 'genzmth@pms_p_887123',
  FOLLOW: 'genzmth@pms_p_6673892',
}