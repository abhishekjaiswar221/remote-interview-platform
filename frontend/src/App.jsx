import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";

const App = () => {
  return (
    <div>
      <h1>Welcome to InterviewX</h1>

      <Show when="signed-out">
        <SignInButton mode="modal" />
      </Show>
      <Show when="signed-in">
        <SignUpButton />
      </Show>
      <UserButton />
    </div>
  );
};

export default App;
