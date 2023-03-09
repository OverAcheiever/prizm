const Solana = () => {
  return (
    <button className="flex h-14 w-full items-center justify-center rounded bg-white text-black">
      <div className="-mr-2 flex items-center">
        <img
          src="/images/logos/phantom.png"
          alt=""
          className="h-[2.35rem] w-[2.35rem] rounded-full"
        />
        <img
          src="https://glow.app/landing/app-icons/barney.png"
          alt=""
          className="-ml-3 h-8 w-8 rounded-full"
        />
      </div>
      <img
        src="/images/logos/solana.png"
        className="z-10 h-[2.2rem] w-[2.2rem] rounded-full border-[3px] border-black bg-white p-1"
        alt=""
      />
      <div className="-ml-2 flex items-center">
        <img
          src="https://304015554-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-Mgv3_8586v0mVL4zZax%2Ficon%2FWvDTo0Kodwa4awPEQrsO%2Fflarelogo.png?alt=media&token=b115a1f0-a543-4a49-828a-e3ede684055e"
          alt=""
          className="h-[2rem] w-[2rem] rounded-full"
        />
        <img
          src="https://pbs.twimg.com/profile_images/1593111895195762690/1fS4-upH_400x400.jpg"
          alt=""
          className="-ml-3 h-[2rem] w-[2rem] rounded-full"
        />
      </div>
    </button>
  );
};

export default Solana;
