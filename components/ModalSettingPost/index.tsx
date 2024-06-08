"use client";
import React from "react";
import {
  IconAboutus,
  IconAccount,
  IconContact,
  IconOnMode,
  IconPolicy,
  IconPrivate,
  IconSupport,
  ToggleIcon,
} from "../../icons";

export default function PopupSettingPost() {
  return (
    <div className="flex flex-col">
      <div className="text-base font-semibold">Tác vụ</div>
      <div className="flex flex-row">
        <div className="px-2 py-2">
          <div className="flex flex-row py-2">
            <IconPrivate width={25} height={25} />
            <span className="px-4">Sao chép liên kết</span>
          </div>
          <div className="flex flex-row py-2">
            <IconPrivate width={25} height={25} />
            <span className="px-4">Chia sẻ</span>
          </div>
          <div className="flex flex-row py-2">
            <IconPrivate width={25} height={25} />
            <span className="px-4">Lưu</span>
          </div>
          <div className="flex flex-row py-2">
            <IconPrivate width={25} height={25} />
            <span className="px-4">Báo cáo vi phạm</span>
          </div>
        </div>
      </div>

      <div className="text-base font-semibold">Quyền người sở hữu</div>
      <div className="px-2 py-2">
        <div className="flex flex-row py-2">
          <IconPolicy width={25} height={25} />
          <span className="px-4">Chỉnh sửa bài viết</span>
        </div>
        <div className="flex flex-row py-2">
          <IconAccount width={25} height={25} />
          <span className="px-4">Chỉnh sửa quyền xem</span>
        </div>
        <div className="flex flex-row py-2">
          <IconAccount width={25} height={25} />
          <span className="px-4">Xóa bài viết này</span>
        </div>
      </div>
    </div>
  );
}
