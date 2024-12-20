type ImageProps = {
  src: string;
  elementClasses?: string;
  alt?: string;
};
export const Image = ({
    src, 
    elementClasses="",
    alt=""
}: ImageProps) => {
  return <img src={src} className={elementClasses} alt={alt} />;
};
