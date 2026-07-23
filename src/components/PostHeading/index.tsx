import Link from "next/link";

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function PostHeading({ children, url, as: Tag = 'h2' }: PostHeadingProps) {
  const headingClassesMap = {
    h1: 'text-2xl/tight sm:text-4xl font-extrabold',
    h2: 'text-2xl/tight font-bold',
    h3: 'text-xl/tight sm:text-2xl',
    h4: 'text-lg/tight sm:text-xl',
    h5: 'text-base/tight sm:text-lg',
    h6: 'text-sm/tight sm:text-base',
  }

  const commonClasses = ''


  return (

    <Tag className={headingClassesMap[Tag] + commonClasses}>
        <Link className="group-hover:text-slate-500 transition" href={url} >{children}</Link>
      </Tag>
  )
}