interface props {
  dataset: {
    id: string;
    user: string;
    profile: string;
  }[];
}

export default function UsersCount({ dataset }: props) {
  return (
    <div className="relative flex items-center">
      {dataset.slice(0, 3).map((user, index) => {
        return (
          <div
            key={user?.id}
            className="absolute top-0 h-6 w-6 flex items-center justify-center aspect-square overflow-hidden rounded-full border border-white"
            style={{ left: `${index * 15}px` }}
          >
            <img src={user?.profile} alt="Profile" className="w-full" />
          </div>
        );
      })}
      {dataset?.length - 3 > 0 && (
        <div
          style={{ left: `${dataset?.slice(0, 3).length * 15}px` }}
          className="absolute top-0 h-6 w-6 flex items-center justify-center aspect-square overflow-hidden border border-white bg-blue-100 rounded-full"
        >
          <span className=" text-primary">+{dataset?.length - 3}</span>
        </div>
      )}
    </div>
  );
}
