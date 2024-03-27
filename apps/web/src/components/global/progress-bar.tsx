const ProgressBar = ({ progress }: {
    progress: number;
}) => {
    return (
    <div className={`flex w-[360px] h-1 flex-col items-start gap-3 rounded-md bg-gray-100 relative after:content-[""] after:w-[${progress}%] after:h-full after:bg-green-700 after:rounded-md after:absolute after:transition`} />
    );
    }

export default ProgressBar;