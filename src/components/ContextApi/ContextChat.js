import {
    createContext,
    useContext,
    useReducer,
  } from "react";
import { ContextAuth } from "./ContextAuth";
  
  export const ContextChat = createContext();
  
  export const ContextChatProvider = ({ children }) => {
    const { currentUser } = useContext(ContextAuth);
    const INITIAL_STATE = {
      chatId: "null",
      user: {},
    };
  
    const chatReducer = (state, action) => {
      switch (action.type) {
        case "CHANGE_USER":
          return {
            user: action.payload,
            chatId:
              currentUser.uid > action.payload.uid
                ? currentUser.uid + action.payload.uid
                : action.payload.uid + currentUser.uid,
          };
  
        default:
          return state;
        }
    };
  
    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);
  
    return (
      <ContextChat.Provider value={{ data:state, dispatch }}>
        {children}
      </ContextChat.Provider>
    );
  };  