interface Props {
  user_image?: string;
  user_name?: string;
  phone: number | string;
}

const UserProfile = ({ user_name, phone }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <img
        className="w-16 h-16 rounded-full"
        src={
          "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1710355494~exp=1710356094~hmac=1aecc80dfe1c21debe81ea108033aa7364b74754ba4214f7943ecb98da383591"
        }
        alt=""
      />
      <div className="font-medium ">
        <div className="sm:text-sm text-xs">{user_name}</div>
        <div className="sm:text-sm text-xs text-gray-500 dark:text-gray-400">
          {phone}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
