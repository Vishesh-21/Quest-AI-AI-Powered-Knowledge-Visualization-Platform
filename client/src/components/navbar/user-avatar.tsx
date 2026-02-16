type UserAvatarProps = {
  name?: string;
  imageURL?: string;
};

export const UserAvatar = ({ name, imageURL }: UserAvatarProps) => {
  const fallback = name?.charAt(0).toUpperCase() || "U";

  return (
    <div
      className="
        h-9 w-9
        rounded-full
        overflow-hidden
        bg-linear-to-br
        from-primary/80
        to-primary/50
        flex items-center justify-center
        text-white
        font-semibold
        cursor-pointer
        hover:opacity-80
        transition-all
        hover:scale-105
        border-muted-foreground
      "
    >
      {imageURL ? (
        <img src={imageURL} alt="User" className="h-full w-full object-cover" />
      ) : (
        <span>{fallback}</span>
      )}
    </div>
  );
};
