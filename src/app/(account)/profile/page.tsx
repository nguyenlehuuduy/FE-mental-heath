import { CoverPhoto, AvatarProfile, PostProfile,RecentInteractions } from "../../../../components";
export default function ProfilePage() {
  return (
    <div className="flex flex-col max-w-[1200px] h-screen">
      <div className="px-2 mx-auto">
        <CoverPhoto />
      </div>
      <div className="flex">
        <AvatarProfile />
      </div>
      <div className="flex flex-row">
      <div className="flex flex-col max-w-[750px] px-2 ">
      <p className="px-2">Chào các bạn nhé! Mình là Hữu Duy đây. Đây chỉnh là profile của mình các bạn đi tham quan nhà của mình nhé!!!!</p>
        <PostProfile />
      </div>
      <div>
      <div className="flex max-h-screen overflow-y-scroll">
        <RecentInteractions/>
      </div>
      </div>
      </div>
    </div>
  );
}
