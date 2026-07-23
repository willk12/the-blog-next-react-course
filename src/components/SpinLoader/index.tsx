
type SpinLoaderProps = {
  className?: string;

}

export function SpinLoader({ className = '', }: SpinLoaderProps) {
  const classes = `flex items-center justify-center ${className}`;
return (
<div className={classes}>
  <div className="w-10 h-10 border-5 border-t-transparent rounded-full border-slate-900 animate-spin">
    
  </div>
</div>
);




}
