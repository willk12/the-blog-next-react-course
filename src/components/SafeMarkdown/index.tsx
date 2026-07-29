import ReactMarkdown from "react-markdown";
import type { PluggableList } from "unified";

type SafeMarckDownProps = {
  markdown: string;
  remarkPlugins?: PluggableList;
  rehypePlugins?: PluggableList;
};

export function SafeMarkdown({
  markdown,
  remarkPlugins,
  rehypePlugins,
}: SafeMarckDownProps) {
  return (
    <div className="prose prose-slate w-full max-w-none prose-a:text-blue-500 prose-a:hover:text-blue-700 prose-a:transition prose-a:no-underline prose-a:hover:underline prose-img:mx-auto lg:prose-lg">
      <ReactMarkdown
        remarkPlugins={remarkPlugins}
        rehypePlugins={rehypePlugins}
        components={
          {
            table:({node, ...props}) =>{
              if(!node?.children) return ''

              return (
                <div className='overflow-x-auto'>
                  <table className="w-full min-w-150" {...props}/>
                    
                </div>
              )

            }
          }
        }
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
