import {
  DialogObj,
  dialogsReducer,
  InitialStateType,
  MessagesObj,
} from "../reducers/dialogs-reducer";

let testState: InitialStateType;

beforeEach(() => {
  testState = {
    dialogs: [
      { _id: "1", name: "Maxim" },
      { _id: "2", name: "Olga" },
      { _id: "3", name: "Pavel" },
      { _id: "4", name: "Karina" },
    ] as Array<DialogObj>,
    messages: [
      { _id: "1", message: "Hello" },
      { _id: "2", message: "How are you?" },
      { _id: "3", message: "I'm fine! And you?" },
    ] as Array<MessagesObj>,
  };
});

test("message should be add successfully", () => {
  let newState = dialogsReducer(testState, {
    type: "DIALOGS/add-new-message",
    newMessage: "New message",
  });

  expect(newState.messages.length).toBe(4);
  expect(newState.messages[3].message).toBe("New message");
});
