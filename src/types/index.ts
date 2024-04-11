export type User = {
  id?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  image?: string;
  gender?: string;
};

export type PostsType = {
  id: string;
  title: string;
  userId?: string;
  body: string;
  image?: string;
};
