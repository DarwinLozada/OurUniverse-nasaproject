import Modal from "./Modal";
import { useState } from "react";
import FirstTutorialSection from "../TutorialSections/FirstTutorialSection";
import SecondTutorialSection from "../TutorialSections/SecondTutorialSection";
import ThirdTutorialSection from "../TutorialSections/ThirdTutorialSection";
import FourthTutorialSection from "../TutorialSections/FourthTutorialSection";

export default function TutorialModal({ setShowTutorial }) {
  const [tutorialSection, setTutorialSection] = useState("first");

  return (
    <Modal toggleModal={setShowTutorial}>
      <div className="flex flex-col h-full z-20 items-center pt-12 px-8">
        {/* //This is an IIFE, a function that executes inmediatily after its
        //declaration */}
        {(() => {
          switch (tutorialSection) {
            case "first":
              return (
                <FirstTutorialSection setTutorialSection={setTutorialSection} />
              );
            case "second":
              return (
                <SecondTutorialSection
                  setTutorialSection={setTutorialSection}
                />
              );
            case "third":
              return (
                <ThirdTutorialSection setTutorialSection={setTutorialSection} />
              );

            case "fourth":
              return (
                <FourthTutorialSection setShowTutorial={setShowTutorial} />
              );
            default:
              return (
                <FourthTutorialSection setShowTutorial={setShowTutorial} />
              );
          }
        })()}
      </div>
    </Modal>
  );
}
