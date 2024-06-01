"use client";
import { Input, Popover } from "antd";
import Image from "next/image";
import Link from "next/link";
import { MessageIcon, NotifyIcon, SearchIcon, SettingIcon } from "../../icons";
import NotifyPopup from "../NotifyPopup";
import { MyselfForCard } from "@/service/accountService";
import ProfilePopup from "../ProfilePopup";
import ModalSetting from "../ModalSetting";
import React, { useState, useEffect } from "react";
import { RootState } from "../../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../redux/actions/auth";
import useDebounce from "../UseDebounce";
import SearchWrapper from "../SearchWrapper";
import { getAccountsByName, getPostsByName } from "../SearchWrapper/action";
import AvatarAccount from "../Avata";
import {
  SearchAccountForCard,
  SearchPostTypeForCard,
} from "@/service/searchService";

export default function Header({ profile }: { profile: MyselfForCard }) {
  const dispatch = useDispatch();
  dispatch(getCurrentUser(profile));
  const user = useSelector((state: RootState) => state.auth.user);

  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [open, setOpen] = useState(false);

  const [searchAccountResult, setSearchAccountResult] = useState<
    SearchAccountForCard[]
  >([]);
  const [searchPostResult, setSearchPostResult] = useState<
    SearchPostTypeForCard[]
  >([]);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const debounced = useDebounce(searchValue, 800);

  useEffect(() => {
    if (!debounced) {
      setOpen(false);
      setSearchAccountResult([]);
      return;
    }

    const fetchApi = async () => {
      const resultAccounts = await getAccountsByName(debounced);
      const resultPosts = await getPostsByName(debounced);
      setSearchAccountResult(resultAccounts ?? []);
      setSearchPostResult(resultPosts ?? []);
      setOpen(true);
    };
    fetchApi();
  }, [debounced]);

  const handleVisibleChange = (visible: boolean) => {
    setOpen(visible);
  };

  const handleInputOpen = () => {
    if (searchValue) {
      setOpen(true);
    }
  };

  return (
    <header className="border-b w-full z-10 bg-white px-4">
      <div className="max-w-[1440px] h-[60px] mx-auto flex justify-evenly items-center py-3">
        <div className="max-w-[300px] w-full flex ">
          <Link
            href="/home"
            className="flex justify-start items-start max-md:w-[108px] max-md:h-[28px] grow"
          >
            <Image
              src="/logo_mental_health.png"
              alt="logo mental health"
              width={110}
              height={20}
              className="object-contain"
            />
          </Link>
        </div>
        <Popover
          trigger="contextMenu"
          className="w-[500px]"
          content={
            <SearchWrapper
              listAccounts={searchAccountResult}
              listPosts={searchPostResult}
              onItemSelect={() => setOpen(false)}
            />
          }
          open={open}
          onOpenChange={handleVisibleChange}
        >
          <Input
            className="max-w-[500px] h-[40px] text-[#00000066]"
            value={searchValue}
            onChange={onSearchChange}
            onFocus={handleInputOpen}
            onClick={handleInputOpen}
            size="middle"
            placeholder="tìm kiếm bài viết, tài khoản"
            prefix={<SearchIcon />}
            style={{ paddingLeft: "24px", paddingRight: "24px" }}
          />
        </Popover>
        <div className="flex flex-row gap-3 max-w-[300px] w-full h-full justify-end items-center">
          <div className="p-2 rounded-full border flex justify-center items-center">
            <MessageIcon width={20} height={20} />
          </div>
          <NotifyPopup listNotifi={[]}>
            <div className="p-2 rounded-full border flex justify-center items-center cursor-pointer">
              <NotifyIcon width={20} height={20} />
            </div>
          </NotifyPopup>
          <div
            className="p-2 rounded-full border flex justify-center items-center"
            onClick={() => setIsOpen(true)}
          >
            <SettingIcon width={20} height={20} />
          </div>
          <ProfilePopup>
            <div className="relative cursor-pointer">
              <AvatarAccount
                filePath={user?.avata}
                name={user?.full_name ?? "D"}
              />
            </div>
          </ProfilePopup>
        </div>
        <ModalSetting isOpen={isOpen} closeModal={() => setIsOpen(false)} />
      </div>
    </header>
  );
}
