type Post = {
  slug: string
  title: string
  excerpt: string
  updatedAt: string
}

interface PostPreviewProps {
  post: {
    slug: string
    title: string
    content: string
    updatedAt: string
  }
}

interface PostProps {
  post: {
    slug: string
    title: string
    content: string
    updatedAt: string
  }
}

interface PostsProps {
  posts: Post[]
}