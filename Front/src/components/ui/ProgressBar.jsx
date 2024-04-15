function ProgressBar({ progress }) {
  return (
    <div className="w-full h-2 border-2 border-neutral-300 rounded-lg">
      <div
        className="h-full bg-neutral-300 rounded-lg"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
