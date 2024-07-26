const Page = () => {
  return (
    <>
      <div className="min-h-screen relative">
        <video
          src={require("../../../public/heroVideo.mp4")}
          autoPlay
          loop
          muted
          className="absolute top-0 -z-10 w-full h-full object-cover"
        />
      </div>
    </>
  );
};

export default Page;
