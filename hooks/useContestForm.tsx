import Step1 from "@/components/form/contest-form/steps/step1";
import Step2 from "@/components/form/contest-form/steps/step2";
import Step3 from "@/components/form/contest-form/steps/step3";
import { getAllTopics } from "@/lib/getAllTopics";
import { Topic } from "@/models/topic";
import useContestState from "@/store/useContestState";
import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";

const useContestForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState<null | { step: number; message: string }>(
    null
  );
  const { topicIngredientId, name, description } = useContestState();

  const formValidations = [
    {
      step: 0,
      condition: !topicIngredientId,
      message: "재료를 선택해주세요!",
    },
    {
      step: 1,
      condition: !name.trim() && !description.trim(),
      message: "대회 설명, 이름을 입력해주세요!",
    },
    {
      step: 1,
      condition: !name.trim(),
      message: "대회 이름을 입력해주세요!",
    },
    {
      step: 1,
      condition: !description.trim(),
      message: "대회 설명을 입력해주세요!",
    },
  ];

  const { data: allTopics } = useQuery<Topic[]>({
    queryFn: getAllTopics,
    queryKey: ["topics", "all"],
  });

  const displayedTopics = searchInput.trim()
    ? allTopics?.filter(({ name }) =>
        name.toLowerCase().includes(searchInput.toLowerCase())
      )
    : allTopics;

  const selectedTopic = displayedTopics?.find(
    ({ id }) => id === topicIngredientId
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return <Step1 errorState={error} />;
      case 1:
        return <Step2 errorState={error} />;
      case 2:
        return <Step3 errorState={error} />;
      default:
        return null;
    }
  };

  const nextStep = () => {
    if (currentStep === 2) return;

    const errorValidation = formValidations.find(
      (v) => v.step === currentStep && v.condition
    );

    if (errorValidation) {
      setError({
        step: errorValidation.step,
        message: errorValidation.message,
      });
      return;
    }

    setCurrentStep((prev) => prev + 1);
    setError(null);
  };
  const prevStep = () => {
    if (currentStep === 0) return;
    setCurrentStep((prev) => prev - 1);
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return {
    currentStep,
    searchInput,
    onChangeInput,
    nextStep,
    prevStep,
    renderCurrentStep,
    displayedTopics,
    selectedTopic,
  };
};

export default useContestForm;
