import React from "react";
import ButtonIcon from "./ButtonIcon";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { bookmarkPostApi } from "@/services/postServices";

function BookMarkIcon({ post }) {
  const router = useRouter();
  const bookmarkHandler = async (postId) => {
    try {
      const { message } = await bookmarkPostApi(postId);
      toast.success(message);
      router.refresh();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <ButtonIcon variant="primary" onClick={() => bookmarkHandler(post._id)}>
      {post.isBookmarked ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21 11.0975V16.0909C21 19.1875 21 20.7358 20.2659 21.4123C19.9158 21.735 19.4739 21.9377 19.0031 21.9915C18.016 22.1045 16.8633 21.0849 14.5578 19.0458C13.5388 18.1445 13.0292 17.6938 12.4397 17.5751C12.1494 17.5166 11.8506 17.5166 11.5603 17.5751C10.9708 17.6938 10.4612 18.1445 9.44216 19.0458C7.13673 21.0849 5.98402 22.1045 4.99692 21.9915C4.52615 21.9377 4.08421 21.735 3.73411 21.4123C3 20.7358 3 19.1875 3 16.0909V11.0975C3 6.80891 3 4.6646 4.31802 3.3323C5.63604 2 7.75736 2 12 2C16.2426 2 18.364 2 19.682 3.3323C21 4.6646 21 6.80891 21 11.0975ZM8.25 6C8.25 5.58579 8.58579 5.25 9 5.25H15C15.4142 5.25 15.75 5.58579 15.75 6C15.75 6.41421 15.4142 6.75 15 6.75H9C8.58579 6.75 8.25 6.41421 8.25 6Z"
          />
        </svg>
      ) : (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5 13.4091V9.24795C17.5 5.67411 17.5 3.88719 16.4017 2.77694C15.3033 1.66669 13.5355 1.66669 10 1.66669C6.46447 1.66669 4.6967 1.66669 3.59835 2.77694C2.5 3.88719 2.5 5.67411 2.5 9.24795V13.4091C2.5 15.9896 2.5 17.2798 3.11176 17.8436C3.40351 18.1125 3.77179 18.2814 4.1641 18.3263C4.98668 18.4204 5.94728 17.5708 7.86847 15.8715C8.71768 15.1204 9.14229 14.7449 9.63356 14.6459C9.87548 14.5972 10.1245 14.5972 10.3664 14.6459C10.8577 14.7449 11.2823 15.1204 12.1315 15.8715C14.0527 17.5708 15.0133 18.4204 15.8359 18.3263C16.2282 18.2814 16.5965 18.1125 16.8882 17.8436C17.5 17.2798 17.5 15.9896 17.5 13.4091Z"
            strokeWidth="1.5"
          />
          <path d="M12.5 5H7.5" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )}
    </ButtonIcon>
  );
}

export default BookMarkIcon;
