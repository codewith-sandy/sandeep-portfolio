function WaveDivider() {
  return (
    <div className="overflow-hidden leading-none rotate-180">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-24 animate-wave"
      >
        <path
          d="M0,0V46.29c47.79,22,103.59,29,158,17C230,52,284,12,339,6.29c54-5.71,108,20,162,35,54,15,108,21,162,8C717,36,771,6,825,0c54-6,108,12,162,28,54,16,108,30,162,23,54-7,108-35,162-51V0Z"
          fill="#1e293b"
        ></path>
      </svg>
    </div>
  );
}

export default WaveDivider;