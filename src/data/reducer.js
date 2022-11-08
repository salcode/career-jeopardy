export default function reducer(state, action) {
  switch (action.type) {
    case 'markRead': {
      return {
        ...state,
        boardData: {
          ...state.boardData,
          categories: (state?.boardData?.categories ?? []).map(
            (category) => {
              return {
                ...category,
                questions: (category?.questions ?? []).map(
                  (question) => {
                    if (action.value === question.text) {
                      return {
                        ...question,
                        isRead: true,
                      }
                    }
                    return question;
                  }
                )
              };
            }
          ),
        },
      };
    }
    case 'setQuestion': {
      return {
        ...state,
        question: action.value,
      };
    }
    default: {
      return state;
    }
  }
}
