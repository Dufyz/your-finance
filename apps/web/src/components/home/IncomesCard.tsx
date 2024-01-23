const IncomesCard = () => {
  return (
    <div className="w-full flex flex-col items-center max-w-[400px] bg-white rounded-[16px] p-[16px] gap-[16px]">
      <div className="w-full flex flex-col gap-[12px]">
        <div className="w-full flex items-start justify-between border-b-solid border-b-[1px] pb-[12px]">
          <h1>Income</h1>
          <span>All Incomes</span>
        </div>
        <div className="w-full p-[20px] bg-[#099268] text-[#fff] text-[32px] font-semibold rounded-[8px] flex items-center justify-center">
          <span>R$</span>
          <span>240,399</span>
        </div>
      </div>
      <div className="w-full flex item justify-between">
        <span>{"<"} previous</span>
        <span>next {">"}</span>
      </div>
    </div>
  );
};

export default IncomesCard;
