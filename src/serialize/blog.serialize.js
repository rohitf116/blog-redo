export const serializeBlog = (blog, message) => {
  const {
    _id,
    title,
    body,
    authorId,
    tags,
    category,
    subcategory,
    isPublished,
    publishedAt,
  } = blog;
  return {
    status: true,
    message: `Blog ${message} successful`,
    data: {
      _id,
      title,
      body,
      authorId,
      tags,
      category,
      subcategory,
      isPublished,
      publishedAt,
    },
  };
};

export const serializeBlogCreate = (blog) => {
  const result = serializeBlog(blog, "registration");
  return result;
};
export const serializeBlogUpdate = (blog) => {
  const result = serializeBlog(blog, "update");
  return result;
};
