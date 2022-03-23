import Pagination from "components/Kits/Pagination/Pagination";
import User from "./User/User";
import Button from "components/Kits/Buttons/Button/Button";

const UsersList = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const usersElements = props.users.map((item) => {
    const disabled = props.followingInProgress.some((id) => id === item.id);

    return (
      <User
        user={item}
        followText={props.followText}
        unfollowText={props.unfollowText}
        followUserSuccess={props.followUserSuccess}
        unfollowUserSuccess={props.unfollowUserSuccess}
        followingInProgress={disabled}
        key={item.id}
      />
    );
  });

  return (
    <div>
      {usersElements}
      <Pagination
        pages={pages}
        onPageChaned={(pageNumber) => {
          props.onPageChaned(pageNumber);
        }}
        currentPage={props.currentPage}
      />
      <Button buttonText={props.showMoreBtnText} />
    </div>
  );
};

export default UsersList;
