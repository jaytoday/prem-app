import { useNavigate, useParams, useRoutes } from "react-router-dom";
import usePremChatStore from "../../shared/store/prem-chat";
import { useEffect, useState } from "react";
import { PremChatHistory, PremChatHistoryNavigator } from "../../shared/types";
import { orderBy } from "lodash";

const HistoryNavigator = () => {
  const { chatId } = useParams();
  const [chatHistory, setChatHistory] = useState<
    Map<string, PremChatHistoryNavigator>
  >(new Map());
  const history = usePremChatStore((state) => state.history);
  const navigate = useNavigate();

  useEffect(() => {
    const newChatHistory = new Map();
    if (history.length === 0) {
      setChatHistory(newChatHistory);
      return;
    }
    const orderedChatHistory = orderBy(history, "timestamp", "desc");
    orderedChatHistory.forEach((_history, index) => {
      newChatHistory.set(_history.id, {
        ..._history,
        next: orderedChatHistory[index + 1],
        prev: orderedChatHistory[index - 1],
      });
    });

    setChatHistory(newChatHistory);
  }, [history]);

  if (!chatId) {
    return null;
  }

  const navigateToHistory = (history: PremChatHistory | undefined) => {
    console.log({ history });
    if (history) {
      navigate(`/prem-chat/${history.id}`);
    }
  };

  const currentChatHistory = chatHistory.get(chatId);

  return (
    <div className="w-full flex justify-center">
      <button
        className="w-[40px] flex justify-center items-center"
        onClick={() => navigateToHistory(currentChatHistory?.prev)}
        disabled={!currentChatHistory?.prev}
      >
        <svg
          width="18"
          height="15"
          viewBox="0 0 18 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.000725432 7.65148C0.00666677 8.29382 0.265479 8.90794 0.721076 9.36078L5.95887 14.6108C6.18762 14.8382 6.49707 14.9658 6.81962 14.9658C7.14217 14.9658 7.45162 14.8382 7.68038 14.6108C7.79481 14.4973 7.88564 14.3622 7.94763 14.2135C8.00961 14.0647 8.04153 13.9051 8.04153 13.7439C8.04153 13.5827 8.00961 13.4232 7.94763 13.2744C7.88564 13.1256 7.79481 12.9906 7.68038 12.8771L3.66352 8.87241L15.8728 8.87241C16.1966 8.87241 16.5072 8.74378 16.7361 8.51481C16.9651 8.28584 17.0938 7.97529 17.0938 7.65148C17.0938 7.32767 16.9651 7.01712 16.7361 6.78815C16.5072 6.55918 16.1966 6.43055 15.8728 6.43055L3.66352 6.43055L7.68038 2.41369C7.91028 2.1854 8.04009 1.87514 8.04123 1.55115C8.04238 1.22715 7.91477 0.915978 7.68648 0.686072C7.4582 0.456166 7.14793 0.326363 6.82394 0.325217C6.49995 0.324073 6.18877 0.451682 5.95887 0.679969L0.721076 5.92997C0.262509 6.3858 0.003453 7.0049 0.000725432 7.65148Z"
            fill="#A0A1A5"
          />
        </svg>
      </button>
      <h1 className="flex items-center text-white text-xl font-proximaNova-regular mx-[20px]">
        {currentChatHistory?.title}
      </h1>
      <button
        className="w-[40px] flex justify-center items-center"
        onClick={() => navigateToHistory(currentChatHistory?.next)}
        disabled={!currentChatHistory?.next}
      >
        <svg
          width="18"
          height="15"
          viewBox="0 0 18 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.7669 7.31434C17.7609 6.67201 17.5021 6.05788 17.0465 5.60504L11.8087 0.35504C11.58 0.12764 11.2705 1.85278e-06 10.948 1.79639e-06C10.6254 1.73999e-06 10.316 0.12764 10.0872 0.35504C9.97277 0.468541 9.88194 0.603577 9.81995 0.752359C9.75796 0.90114 9.72605 1.06072 9.72605 1.2219C9.72605 1.38308 9.75796 1.54266 9.81995 1.69144C9.88193 1.84022 9.97276 1.97526 10.0872 2.08876L14.1041 6.09341L1.89476 6.09341C1.57095 6.09341 1.2604 6.22204 1.03143 6.45101C0.802461 6.67998 0.673827 6.99053 0.673827 7.31434C0.673827 7.63815 0.80246 7.9487 1.03143 8.17767C1.2604 8.40664 1.57095 8.53527 1.89476 8.53527L14.1041 8.53527L10.0872 12.5521C9.85729 12.7804 9.72749 13.0907 9.72635 13.4147C9.7252 13.7387 9.85281 14.0498 10.0811 14.2797C10.3094 14.5097 10.6196 14.6395 10.9436 14.6406C11.2676 14.6417 11.5788 14.5141 11.8087 14.2859L17.0465 9.03585C17.5051 8.58002 17.7641 7.96092 17.7669 7.31434Z"
            fill="#6D6B6D"
          />
        </svg>
      </button>
    </div>
  );
};
export default HistoryNavigator;
