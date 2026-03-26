import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";
import toast from "react-hot-toast";

const Home = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Welcome to InterviewX</h1>

      <button
        className="btn btn-primary"
        onClick={() => toast.error("This is a success toast")}
      >
        Click Me
      </button>
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
export default Home;
