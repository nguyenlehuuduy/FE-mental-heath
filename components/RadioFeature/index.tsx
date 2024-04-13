import Image from "next/image"; 

const listRadio = [
  {
    id: 1,
    image: "/images.jpg",
  },
  {
    id: 2,
    image: "/images.jpg",
  },
  {
    id: 3,
    image: "/images.jpg",
  },
  {
    id: 4,
    image: "/images.jpg",
  },
];

const RadioFeatures = () => {
  return (
    <div className="w-full px-4">
      <span className="text-[#0F52BA] text-lg font-bold cursor-pointer">
        Radio
      </span>
      <div className="grid grid-cols-2 gap-6 pt-4 px-6">
        {listRadio.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <Image
              src={item.image}
              width={80}
              height={80}
              alt="logo"
              className="rounded-[10px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioFeatures; 
