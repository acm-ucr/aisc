const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-aisc-pink flex w-2/3 flex-col items-center gap-9 rounded-2xl p-10 text-2xl">
      <div className="bg-aisc-lightgray w-1/2 p-5 text-center">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-5">
        <div className="bg-aisc-gray text-aisc-lightgray w-full rounded-full p-5 text-center">
          {props.text2}
        </div>
        <div className="bg-aisc-gray text-aisc-lightgray w-full rounded-full p-5 text-center">
          {props.text2}
        </div>
      </div>
      <div className="bg-aisc-black w-1/2 p-5 text-center text-white">
        {props.text3}
      </div>
    </div>
  );
};
export default Example;
