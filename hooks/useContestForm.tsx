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
  const { topicIngredientId } = useContestState();

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
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
      default:
        return null;
    }
  };

  const nextStep = () => {
    if (currentStep === 2) return;
    setCurrentStep((prev) => prev + 1);
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
