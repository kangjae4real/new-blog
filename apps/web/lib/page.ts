const INDEX_PAGE = "/";
const RESUME_PAGE = "/resume";
const POSTS_PAGE = "/posts";
const POSTS_ADD_PAGE = `${POSTS_PAGE}/add`;
const SIGN_IN_PAGE = "/sign-in";

const PAGES = [INDEX_PAGE, RESUME_PAGE, POSTS_PAGE, POSTS_ADD_PAGE, SIGN_IN_PAGE] as const;

export type Pages = (typeof PAGES)[number];
