import Datepicker from "@/components/datepicker";

export default function Step3({
  errorState,
}: {
  errorState: { step: number; message: string } | null;
}) {
  console.log(errorState);
  return (
    <div>
      dd
      <Datepicker />
    </div>
  );
}
