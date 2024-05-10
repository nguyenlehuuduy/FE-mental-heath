import { PostForCard } from "@/service/postService";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PostValid {
  posts: PostForCard[];
}

const initialState: PostValid = {
  posts: [],
};

const post = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPostValid: (state, action) => {},
    addPostValidSuccess: (state, action: PayloadAction<PostForCard[]>) => {
      state.posts = [...state.posts, ...action.payload];
    },

    setLikePost: (state, action) => {},
    setLikePostSuccess: (state, action: PayloadAction<string>) => {
      const updatedPosts = state.posts.map((post) => {
        if (post.post_id === action.payload) {
          if (!post.is_like) {
            return {
              ...post,
              is_like: true,
              total_reaction: post.total_reaction + 1,
            };
          } else {
            return {
              ...post,
              is_like: false,
              total_reaction: post.total_reaction - 1,
            };
          }
        }
        return post;
      });
      state.posts = updatedPosts;
    },
    setCommentPost: (state, action) => {},
    setCommentPostSuccess: (
      state,
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
    ) => {
      const { postId, comment, user } = action.payload;
      const commentArray = {
        account: {
          id: user.id,
          name: user.full_name,
          nick_name: user.nick_name,
          avata: user.avata,
        },
        created_at: new Date().toISOString(),
        content: comment,
      };
      const updatedPosts = state.posts.map((post) => {
        if (post.post_id === postId) {
          return {
            ...post,
            comment_recent: [commentArray, ...post.comment_recent],
            total_comment: post.total_comment + 1,
          };
        }
        return post;
      });
      state.posts = updatedPosts;
    },
  },
});

export const {
  addPostValid,
  addPostValidSuccess,
  setLikePost,
  setLikePostSuccess,
  setCommentPost,
  setCommentPostSuccess,
} = post.actions;
export default post.reducer;
