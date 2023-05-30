import Pagination from "components/Kits/Pagination/Pagination";
import User from "./User/User";
import Button from "components/Kits/Buttons/Button/Button";
import { user_type } from "types/types";

type Props_type = {
  totalUsersCount: number;
  pageSize: number;
  users: Array<user_type>;
  followingInProgress: Array<number>;
  followText: string;
  unfollowText: string;
  followUserSuccess: (userId: number) => void;
  unfollowUserSuccess: (userId: number) => void;
  onPageChaned: (pageNumber: number) => void;
  currentPage: number;
  showMoreBtnText: string;
};

const UsersList: React.FC<Props_type> = ({
  totalUsersCount,
  pageSize,
  users,
  followingInProgress,
  followText,
  unfollowText,
  followUserSuccess,
  unfollowUserSuccess,
  onPageChaned,
  currentPage,
  showMoreBtnText,
  ...props
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages: Array<number> = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const usersElements = users.map((item) => {
    const disabled = followingInProgress.some((id) => id === item.id);

    return (
      <User
        user={item}
        followText={followText}
        unfollowText={unfollowText}
        followUserSuccess={followUserSuccess}
        unfollowUserSuccess={unfollowUserSuccess}
        followingInProgress={disabled}
        key={item.id}
      />
    );
  });

  return (
    <div>
      {usersElements}
      <Pagination
        pagesArr={pages}
        onPageChaned={(pageNumber) => {
          onPageChaned(pageNumber);
        }}
        currentPage={currentPage}
      />
      <Button buttonText={showMoreBtnText} />
    </div>
  );
};

export default UsersList;
