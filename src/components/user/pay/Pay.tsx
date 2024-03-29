import { connection, USDC_MINT } from "@/constants";
import { api } from "@/utils/api";
import { magic } from "@/utils/magic";
import { getBalance } from "@/utils/solana/getBalance";
import { send } from "@/utils/solana/send";
import { getAssociatedTokenAddressSync } from "@solana/spl-token";
import { PublicKey, Transaction } from "@solana/web3.js";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

const Pay = ({
  username,
  amount,
  sender,
  recipient,
  isLoading,
  setIsLoading,
}: {
  username?: string;
  amount: number;
  sender?: string;
  recipient?: string;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}) => {
  const router = useRouter();
  const redirectUrl = `/${router.query.user}`;

  const { mutateAsync } = api.users.transfers.transfer.useMutation();

  const pay = async () => {
    if (!username || !sender || !recipient || isLoading) return;

    try {
      setIsLoading(true);

      const ATA = getAssociatedTokenAddressSync(
        USDC_MINT,
        new PublicKey(sender)
      );

      const _balance = await connection.getTokenAccountBalance(ATA);

      const balance =
        parseInt(_balance.value.amount) / 10 ** _balance.value.decimals;

      if (balance < amount) {
        toast.error("Insufficient balance");
        setIsLoading(false);
        return;
      }

      const signedTx = await magic?.solana.signTransaction(
        await send({
          amount,
          sender: new PublicKey(sender),
          recipient: new PublicKey(recipient),
        }),
        {
          requireAllSignatures: false,
          verifySignatures: false,
        }
      );

      await mutateAsync({
        amount,
        recipient: username,
        tx: Transaction.from(signedTx.rawTransaction)
          .serialize({
            requireAllSignatures: false,
            verifySignatures: false,
          })
          .toString("base64"),
      });

      router.push(redirectUrl);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full items-center justify-center">
      <button
        className="m-5 flex h-14 w-full items-center justify-center rounded-lg bg-black text-lg font-bold"
        onClick={pay}
        disabled={isLoading || !username || !sender || !recipient}
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
