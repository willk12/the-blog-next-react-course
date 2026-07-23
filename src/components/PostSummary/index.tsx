import { formarDistanceToNow, formatDateTime } from "@/utils/format-datetime";
import { PostHeading } from "../PostHeading";

type PostSummaryProps = {
  postHeading: 'h1' | 'h2';
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;

}
export function PostSummary({ postHeading, postLink , createdAt, title, excerpt }: PostSummaryProps) {
  return(
    <div className="flex flex-col gap-4 sm:justify-center">
                  <time
                    dateTime={createdAt}
                    className="text-sm/tight  block text-slate-600"
                    title={formarDistanceToNow(createdAt)}
                  >
                    {formatDateTime(createdAt)}
                  </time>
    
                  <PostHeading as="h1" url={postLink}>
                    {title}
                  </PostHeading>
    
                  <p>{excerpt}</p>
                </div>
  )
}