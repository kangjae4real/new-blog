export interface Post {
  id: number;
  title: string;
  content: string;
  writer: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePost {
  title: string;
  content: string;
  writer: string;
}

export interface UpdatePost {
  title: string;
  content: string;
}
