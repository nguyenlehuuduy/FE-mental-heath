"use client"
import { CoverPhoto, AvatarProfile, PostProfile,RecentInteractions, VideoProfile, ListPhotoProfile} from "../../../../components";
import { useState } from "react";
export default function ProfilePage() {
  const [showImages, setShowImages] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleImageIconClick = () => {
    setShowImages(!showImages);
    setShowVideo(false);
  };

  const handleVideoIconClick = () => {
    setShowVideo(!showVideo);
    setShowImages(false);
  };

  return (
    <div className="flex flex-col max-w-[1200px] h-screen mx-auto ">
      <div className="px-2 mx-auto">
        <CoverPhoto />
      </div>
      <div className="flex">
        <AvatarProfile onImageIconClick={handleImageIconClick} onVideoIconClick={handleVideoIconClick} />

      </div>
      <div className="flex flex-row">
      <div className="flex flex-col max-w-[750px] px-2 ">
      <p className="px-2">Chào các bạn nhé! Mình là Hữu Duy đây. Đây chỉnh là profile của mình các bạn đi tham quan nhà của mình nhé!!!!</p>
        <PostProfile />
      </div>
      <div>
      <div className="flex  max-h-screen overflow-y-scroll">
      {showImages ? <ListPhotoProfile /> : showVideo ? <VideoProfile /> : <RecentInteractions />}
      </div>
      </div>
      </div>
    </div>
  );
}
