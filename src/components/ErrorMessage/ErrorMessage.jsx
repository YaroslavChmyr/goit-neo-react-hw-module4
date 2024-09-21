import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ error }) => {
  return <p className={css.errorMessage}>Error fetching images: {error.message}</p>;
};

export default ErrorMessage;