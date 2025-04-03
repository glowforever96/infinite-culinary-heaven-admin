import useContestForm from "@/hooks/useContestForm";
import ProgressBar from "./progress-bar";

export default function ContestForm() {
  const { currentStep, nextStep, prevStep, renderCurrentStep } =
    useContestForm();

  return (
    <div>
      <ProgressBar currentStep={currentStep} />
      <div>
        <button onClick={prevStep}>이전</button>
        <button onClick={nextStep}>다음</button>
      </div>
      {renderCurrentStep()}
    </div>
  );
}
