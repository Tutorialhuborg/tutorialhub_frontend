import Approved from "./approved";
import Declined from "./decline";
import Pending from "./pending";

export default function Status({ status }: { status: string }) {
  return (
    <div>
      {status.toLocaleLowerCase() === "pending" ? (
        <Pending />
      ) : status.toLocaleLowerCase() === "declined" ? (
        <Declined />
      ) : (
        <Approved />
      )}
    </div>
  );
}
