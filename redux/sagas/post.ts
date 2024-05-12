import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import { PostForCard, likePost } from "@/service/postService";
import {
  addPostValid,
  addPostValidSuccess,
  clearPostValid,
  clearPostValidSuccess,
  setCommentPost,
  setCommentPostSuccess,
  setLikePost,
  setLikePostSuccess,
} from "../actions/post";

function* handleAddPostValid(action: PayloadAction<PostForCard[]>) {
  yield put(addPostValidSuccess(action.payload));
}

function* handleSetLikePost(action: PayloadAction<string>) {
  yield put(setLikePostSuccess(action.payload));
}

function* handleClearPostValid() {
  yield put(clearPostValidSuccess());
}

function* handleSetCommentPost(
  action: PayloadAction<{
    postId: string;
    comment: string;
    user: {
      id: string;
      full_name: string;
      nick_name: string;
      avata: string;
    };
  }>,
) {
  yield put(setCommentPostSuccess(action.payload));
}

export default function* post() {
  yield takeEvery(addPostValid.type, handleAddPostValid);
  yield takeEvery(setLikePost.type, handleSetLikePost);
  yield takeEvery(setCommentPost.type, handleSetCommentPost);
  yield takeEvery(clearPostValid.type, handleClearPostValid);
}
