const Page = () => {
  return (
    <>
      <div className="min-h-screen relative">
        <video
          src="https://videos.pexels.com/video-files/3209298/3209298-uhd_2560_1440_25fps.mp4"
          autoPlay
          muted
          loop
          className="absolute top-0 -z-10 w-full h-full object-cover"
        />
      </div>
    </>
  );
};

export default Page;
