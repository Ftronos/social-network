import Pagination from "components/Kits/Pagination/Pagination";
import User from "./User/User";
import Button from "components/Kits/Buttons/Button/Button";

const UsersList = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const usersElements = props.users.map((item) => (
    <User
      user={item}
      followText={props.followText}
      unfollowText={props.unfollowText}
      followUser={props.followUser}
      unfollowUser={props.unfollowUser}
      key={item.id}
    />
  ));

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
