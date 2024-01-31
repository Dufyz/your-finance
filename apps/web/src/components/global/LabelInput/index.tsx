const LabelInput = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex flex-col items-start justify-center gap-[8px] w-full">
      <label htmlFor="" className="text-[16px] text-gray-900 font-semibold">
        {label}
      </label>
      <input
        type="text"
        placeholder="First name"
        className="w-full h-[48px] py-[12px] px-[16px] rounded-[8px] border-[1px] border-solid border-[#ced4da] bg-transparent text-[16px] text-gray-700 font-bold"
        value={value}
      />
    </div>
  );
};

export default LabelInput;
