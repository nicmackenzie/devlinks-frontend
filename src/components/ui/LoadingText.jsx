import Spinner from './Spinner';

function LoadingButtonText({ text }) {
  return (
    <>
      <Spinner size="small" />
      <span>{text}</span>
    </>
  );
}

export default LoadingButtonText;
