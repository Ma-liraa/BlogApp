import http from "./httpService";

export async function getCategoriesApi(options = {}) {
  return http.get("/category/list", options).then(({ data }) => data.data);
}
export async function editCategoryApi({ categoryId, data }) {
  return await http
    .patch(`/category/update/${categoryId}`, data)
    .then(({ data }) => data.data);
}
export async function createCategoryApi(data) {
  return await http.post(`/category/add`, data).then(({ data }) => data.data);
}
export async function deleteCategoryApi(categoryId) {
  return await http
    .delete(`/category/remove/${categoryId}`)
    .then(({ data }) => data.data);
}
