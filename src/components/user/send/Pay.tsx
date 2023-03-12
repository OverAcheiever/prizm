import { connection } from "@/constants";
import { api } from "@/utils/api";
import { magic } from "@/utils/magic";
import { Transaction } from "@solana/web3.js";
import { toast } from "react-hot-toast";

const Pay = ({
  username,
  amount,
  isLoading,
  setIsLoading,
}: {
  username?: string;
  amount: number;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}) => {
  const { mutateAsync } = api.users.send.useMutation();

  const pay = async () => {
    if (!username || isLoading) return;

    try {
      setIsLoading(true);

      const tx = await mutateAsync({
        recipient: username,
        amount,
      });

      const signedTx = await magic?.solana.signTransaction(
        Transaction.from(Buffer.from(tx, "base64")),
        {
          requireAllSignatures: false,
          verifySignatures: true,
        }
      );

      console.log(
        Transaction.from(signedTx.rawTransaction).serialize().toString("base64")
      );

      const rawTx = Transaction.from(signedTx.rawTransaction);
      await connection.sendRawTransaction(rawTx.serialize(), {
        skipPreflight: true,
      });

      setIsLoading(false);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full items-center justify-center">
      <button
        className="m-5 flex h-16 w-full items-center justify-center rounded-md bg-black font-aeonik text-xl"
        onClick={pay}
      >
        {!isLoading ? (
          "PAY"
        ) : (
          <div className="bg flex h-6 w-6 animate-spin items-center justify-center rounded-full p-1">
            <div className="h-full w-full rounded-full bg-black"></div>
          </div>
        )}
      </button>
    </div>
  );
};

export default Pay;
