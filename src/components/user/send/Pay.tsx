import { connection } from "@/constants";
import { api } from "@/utils/api";
import { magic } from "@/utils/magic";
import { Transaction } from "@solana/web3.js";

const Pay = ({ username, amount }: { username?: string; amount: number }) => {
  const { mutateAsync } = api.users.send.useMutation();

  const pay = async () => {
    if (!username) return;

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

    console.log("Transaction sent");
  };

  return (
    <div className="flex w-full items-center justify-center">
      <button
        className="m-5 h-16 w-full rounded-md bg-black font-aeonik text-xl"
        onClick={pay}
      >
        PAY
      </button>
    </div>
  );
};

export default Pay;
