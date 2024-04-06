const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div
      className={`relative flex h-1 w-[360px] flex-col items-start gap-3 rounded-md bg-gray-100 after:content-[""] after:w-[${progress}%] after:absolute after:h-full after:rounded-md after:bg-green-700 after:transition`}
    />
  );
};

export default ProgressBar;
