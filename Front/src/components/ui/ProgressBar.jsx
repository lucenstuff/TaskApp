function ProgressBar({ progress }) {
  return (
    <div className="w-full h-2 border-2 border-neutral-200 rounded-lg">
      <div
        className="h-full bg-neutral-200 rounded-lg"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
