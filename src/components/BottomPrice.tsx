import { Button } from "./ui/button";

const BottomPrice = ({ price }: { price: number | string }) => {
  return (
    <div className="h-[80px]  flex justify-between items-center z-[1000]">
      <div>
        <div className="font-medium ">
          <p className="text-lg font-semibold">Price</p>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            ${price}
          </div>
        </div>
      </div>
      <div>
        <Button>Reserve</Button>
      </div>
    </div>
  );
};

export default BottomPrice;
