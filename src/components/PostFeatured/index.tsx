import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";
import { PostSummary } from "../PostSummary";

export function PostFeatured() {
 const slug = 'qualquer coisa';
  const postLink = `/post/${slug}`;

  return(
    <section className = 'grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 lg:grid-cols-3 group'>
        <PostCoverImage linkProps={{ href: postLink }} imageProps={{ src: '/images/bryen_9.png', width: 1200, height: 720, alt: 'Blog Image', priority: true }}  />
        
        <PostSummary  postHeading="h2" postLink={postLink} createdAt={'2023-06-01T12:00:00Z'} title={'Blog Post Title'} excerpt={'This is a summary of the blog post.'} />
      </section>
  )
}