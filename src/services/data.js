const { default: setCookieOnReq } = require("@/utils/setCookieOnReq");
const { cookies } = require("next/headers");
const { getAllCommentsApi } = require("./commentService");
const { getAllUserApi } = require("./authService");
const { getPostsApi } = require("./postServices");

export async function fetchCardData() {
  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);

  try {
    const data = await Promise.all([
      getAllCommentsApi(options),
      getAllUserApi(options),
      getPostsApi(options),
    ]);

    const numOfPosts = Number(data[2].posts.length ?? "0");
    const numOfUsers = Number(data[1].users.lenght ?? "0");
    const numOfComments = Number(data[0].commentsCount ?? "0");

    return { numOfComments, numOfPosts, numOfUsers };
  } catch (error) {
    console.log(error.response.data.message);
    throw new Error("خطا در بارگذاری اطلاعات");
  }
}
