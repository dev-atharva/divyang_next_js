"use client";

import "regenerator-runtime/runtime";

import { useRouter } from "next/navigation";
import {HiOutlineMicrophone} from "react-icons/hi"
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Voicenavigation_button = () => {
  const router = useRouter();
  const all = ["home", "blog", "schemes", "community", "about"];
  const urls = {
    home: "/",
    blog: "/blog",
    schemes: "/schemes",
    community: "/community",
    about: "/about",
  };
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }
  const commands = [
    {
      command: ["Go to * page", "Go to *", "Open * page", "Open *"],
      callback: (redirectPage) => handlecommand(redirectPage),
    },
  ];

  const { transcript } = useSpeechRecognition({ commands });
  const handlecommand = (command) => {
    console.log(command);
    if (command) {
      if (all.includes(command)) {
        router.push(urls[command]);
      } else {
        alert("No page found");
      }
    }
  };

  return (
    <div className="fixed bottom-4 right-4 ">
      <button
        className="bg-violet-950 rounded-lg text-white hover:text-black p-3 border-2 border-white cursor-pointer  "
        onClick={SpeechRecognition.startListening}
      >
        <HiOutlineMicrophone color="white" size={25}/>
      </button>
    </div>
  );
};

export default Voicenavigation_button;
