import profileReducer, { deletePost_ac } from "./profile_reducer";

let state = {
  myPosts: [
    { id: 1, text: "Hello!" },
    { id: 2, text: "How are you?" },
    { id: 3, text: "Thanks, fine!" },
  ],
  profile: null,
  status: "",
};

test("Length of posts should be decremented after deliting", () => {
  let action = deletePost_ac(1);

  let newState = profileReducer(state, action);

  expect(newState.myPosts.length).toBe(2);
});

test("Length of posts shouldn't be decremented after deliting with incorrect post id", () => {
  let action = deletePost_ac(1000);

  let newState = profileReducer(state, action);

  expect(newState.myPosts.length).toBe(3);
});
