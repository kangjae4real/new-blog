export const INDEX_PAGE = "/";

export const RESUME_PAGE = "/resume";

export const POSTS_PAGE = "/posts";
export const getPostDetailPage = (id: number) => `${POSTS_PAGE}/${id}`;
export const POSTS_ADD_PAGE = `${POSTS_PAGE}/add`;

export const SIGN_IN_PAGE = "/sign-in";

const PAGES = [INDEX_PAGE, RESUME_PAGE, POSTS_PAGE, POSTS_ADD_PAGE, SIGN_IN_PAGE] as const;

export type Pages = (typeof PAGES)[number];
