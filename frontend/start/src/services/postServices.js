import http from "./httpService";

export async function getPostBySlug(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`
  );
  const { data } = await res.json();
  const { post } = data || {};
  return post;
}
export async function getPostsApi(queries, options) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?${queries}`,
    options
  );
  const { data } = await res.json();
  const { posts, totalPages } = data || {};
  return { posts, totalPages };
}
export async function likePostApi(postId) {
  return await http.post(`/post/like/${postId}`).then(({ data }) => data.data);
}
export async function bookmarkPostApi(postId) {
  return await http
    .post(`/post/bookmark/${postId}`)
    .then(({ data }) => data.data);
}
export async function createPostApi(data) {
  return await http.post(`/post/create/`, data).then(({ data }) => data.data);
}
export async function editPostApi({ postId, data }) {
  return await http
    .patch(`/post/update/${postId}`, data)
    .then(({ data }) => data.data);
}
export async function getPostById(id) {
  return await http.get(`/post/${id}`).then(({ data }) => data.data);
}
export async function deletePostApi(id) {
  return await http.delete(`/post/remove/${id}`).then(({ data }) => data.data);
}
