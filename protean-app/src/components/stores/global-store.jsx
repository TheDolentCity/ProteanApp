import React, { createContext, useContext, useReducer } from 'react';

const TEST_PAGE_1 = {
  uuid: "01",
  type: "PAGE",
  title: "PAGE 1 - Health System",
  props: {
    
  },
  content: [
    {
      uuid: "01",
      nested: false,
      component: "Header1",
      children: "PAGE 1"
    },
    {
      uuid: "02",
      nested: false,
      component: "Paragraph",
      children: "Every scene must start and end and grip is the mechanic that controls this. Every actor in a scene has a unique grip value. As your grip declines, so to does your control over the scene. When you run out of grip, you fall out of the scene entirely."
    },
    {
      uuid: "03",
      nested: false,
      component: "Header2",
      children: "Grip System"
    },
    {
      uuid: "04",
      nested: false,
      component: "Paragraph",
      children: "TODO"
    },
    {
      uuid: "05",
      nested: false,
      component: "Header3",
      children: "Grip Dice"
    },
    {
      uuid: "06",
      nested: false,
      component: "Paragraph",
      children: "These are the dice that you roll at the start of a scene. The sum of the dice is your grip for that scene. This means that your starting grip fluctuates from scene to scene. The Advocate may grant bonus grip (up to your maximum) based on your character's actions, planning, or other circumstances."
    },
    {
      uuid: "07",
      nested: false,
      component: "Header3",
      children: "Grip Risk"
    },
    {
      uuid: "08",
      nested: false,
      component: "Paragraph",
      children: "If at any point you are below half of your maximum grip then you are considered at risk. In this state you may choose to leave the scene. How you leave the scene is up to you, but your character is unable to affect the scene or other actors in this scene after leaving.",
      props: {
        spaceAfter: "0"
      }
    },
    {
      uuid: "10",
      nested: true,
      component: "ListBulleted",
      children: [
        {
          uuid: "11",
          nested: false,
          component: "ListItem",
          children: "If a young, fire-breathing dragon engulfs you in flame and your grip is exhausted as a result, then your armor could become ruined, your skin scarred, and you could fall unconscious."
        },
        {
          uuid: "12",
          nested: false,
          component: "ListItem",
          children: "If an elder, fire-breathing dragon engulfs you in flame and your grip is exhausted as a result, then your possessions could be destroyed and you could be on the brink of death without lifesaving medicine or magic."
        },
        {
          uuid: "13",
          nested: false,
          component: "ListItem",
          children: "If Gorgomund, the King of Evil and the first fire-breathing dragon engulfs you in flame and your grip is exhausted as a result, then you could be killed instantly."
        },
      ]
    },
    {
      uuid: "09",
      nested: false,
      component: "Dragon",
      children: "This component does not exist"
    },
  ]
}

const TEST_PAGE_2 = {
  uuid: "02",
  type: "PAGE",
  title: "PAGE 2 - Luck System",
  props: {
    
  },
  content: [
    {
      uuid: "01",
      nested: false,
      component: "Header1",
      children: "PAGE 2"
    },
    {
      uuid: "02",
      nested: false,
      component: "Paragraph",
      children: "Every scene must start and end and grip is the mechanic that controls this. Every actor in a scene has a unique grip value. As your grip declines, so to does your control over the scene. When you run out of grip, you fall out of the scene entirely."
    },
    {
      uuid: "03",
      nested: false,
      component: "Header2",
      children: "Grip System"
    },
    {
      uuid: "04",
      nested: false,
      component: "Paragraph",
      children: "TODO"
    },
    {
      uuid: "05",
      nested: false,
      component: "Header3",
      children: "Grip Dice"
    },
    {
      uuid: "06",
      nested: false,
      component: "Paragraph",
      children: "These are the dice that you roll at the start of a scene. The sum of the dice is your grip for that scene. This means that your starting grip fluctuates from scene to scene. The Advocate may grant bonus grip (up to your maximum) based on your character's actions, planning, or other circumstances."
    },
    {
      uuid: "07",
      nested: false,
      component: "Header3",
      children: "Grip Risk"
    },
    {
      uuid: "08",
      nested: false,
      component: "Paragraph",
      children: "If at any point you are below half of your maximum grip then you are considered at risk. In this state you may choose to leave the scene. How you leave the scene is up to you, but your character is unable to affect the scene or other actors in this scene after leaving.",
      props: {
        spaceAfter: "0"
      }
    },
    {
      uuid: "10",
      nested: true,
      component: "ListBulleted",
      children: [
        {
          uuid: "11",
          nested: false,
          component: "ListItem",
          children: "If a young, fire-breathing dragon engulfs you in flame and your grip is exhausted as a result, then your armor could become ruined, your skin scarred, and you could fall unconscious."
        },
        {
          uuid: "12",
          nested: false,
          component: "ListItem",
          children: "If an elder, fire-breathing dragon engulfs you in flame and your grip is exhausted as a result, then your possessions could be destroyed and you could be on the brink of death without lifesaving medicine or magic."
        },
        {
          uuid: "13",
          nested: false,
          component: "ListItem",
          children: "If Gorgomund, the King of Evil and the first fire-breathing dragon engulfs you in flame and your grip is exhausted as a result, then you could be killed instantly."
        },
      ]
    },
    {
      uuid: "09",
      nested: false,
      component: "Dragon",
      children: "This component does not exist"
    },
  ]
}

const TEST_PAGE_3 = {
  uuid: "03",
  type: "PAGE",
  title: "PAGE 3 - Weapon System",
  props: {
    
  },
  content: [
    {
      uuid: "01",
      nested: false,
      component: "Header1",
      children: "PAGE 3"
    },
    {
      uuid: "02",
      nested: false,
      component: "Paragraph",
      children: "Every scene must start and end and grip is the mechanic that controls this. Every actor in a scene has a unique grip value. As your grip declines, so to does your control over the scene. When you run out of grip, you fall out of the scene entirely."
    },
    {
      uuid: "03",
      nested: false,
      component: "Header2",
      children: "Grip System"
    },
    {
      uuid: "04",
      nested: false,
      component: "Paragraph",
      children: "TODO"
    },
    {
      uuid: "05",
      nested: false,
      component: "Header3",
      children: "Grip Dice"
    },
    {
      uuid: "06",
      nested: false,
      component: "Paragraph",
      children: "These are the dice that you roll at the start of a scene. The sum of the dice is your grip for that scene. This means that your starting grip fluctuates from scene to scene. The Advocate may grant bonus grip (up to your maximum) based on your character's actions, planning, or other circumstances."
    },
    {
      uuid: "07",
      nested: false,
      component: "Header3",
      children: "Grip Risk"
    },
    {
      uuid: "08",
      nested: false,
      component: "Paragraph",
      children: "If at any point you are below half of your maximum grip then you are considered at risk. In this state you may choose to leave the scene. How you leave the scene is up to you, but your character is unable to affect the scene or other actors in this scene after leaving.",
      props: {
        spaceAfter: "0"
      }
    },
    {
      uuid: "10",
      nested: true,
      component: "ListBulleted",
      children: [
        {
          uuid: "11",
          nested: false,
          component: "ListItem",
          children: "If a young, fire-breathing dragon engulfs you in flame and your grip is exhausted as a result, then your armor could become ruined, your skin scarred, and you could fall unconscious."
        },
        {
          uuid: "12",
          nested: false,
          component: "ListItem",
          children: "If an elder, fire-breathing dragon engulfs you in flame and your grip is exhausted as a result, then your possessions could be destroyed and you could be on the brink of death without lifesaving medicine or magic."
        },
        {
          uuid: "13",
          nested: false,
          component: "ListItem",
          children: "If Gorgomund, the King of Evil and the first fire-breathing dragon engulfs you in flame and your grip is exhausted as a result, then you could be killed instantly."
        },
      ]
    },
    {
      uuid: "09",
      nested: false,
      component: "Dragon",
      children: "This component does not exist"
    },
  ]
}

const TEST_PAGE_4 = {
  uuid: "04",
  type: "PAGE",
  type: "PAGE",
  title: "PAGE 4 - Luck System",
  content: [
    {
      uuid: "01",
      nested: false,
      component: "Header1",
      children: "PAGE 4"
    },
    {
      uuid: "02",
      nested: false,
      component: "Paragraph",
      children: "Every scene must start and end and grip is the mechanic that controls this. Every actor in a scene has a unique grip value. As your grip declines, so to does your control over the scene. When you run out of grip, you fall out of the scene entirely."
    },
    {
      uuid: "03",
      nested: false,
      component: "Header2",
      children: "Grip System"
    },
    {
      uuid: "04",
      nested: false,
      component: "Paragraph",
      children: "TODO"
    },
    {
      uuid: "05",
      nested: false,
      component: "Header3",
      children: "Grip Dice"
    },
    {
      uuid: "06",
      nested: false,
      component: "Paragraph",
      children: "These are the dice that you roll at the start of a scene. The sum of the dice is your grip for that scene. This means that your starting grip fluctuates from scene to scene. The Advocate may grant bonus grip (up to your maximum) based on your character's actions, planning, or other circumstances."
    },
    {
      uuid: "07",
      nested: false,
      component: "Header3",
      children: "Grip Risk"
    },
    {
      uuid: "08",
      nested: false,
      component: "Paragraph",
      children: "If at any point you are below half of your maximum grip then you are considered at risk. In this state you may choose to leave the scene. How you leave the scene is up to you, but your character is unable to affect the scene or other actors in this scene after leaving.",
      props: {
        spaceAfter: "0"
      }
    },
    {
      uuid: "10",
      nested: true,
      component: "ListBulleted",
      children: [
        {
          uuid: "11",
          nested: false,
          component: "ListItem",
          children: "If a young, fire-breathing dragon engulfs you in flame and your grip is exhausted as a result, then your armor could become ruined, your skin scarred, and you could fall unconscious."
        },
        {
          uuid: "12",
          nested: false,
          component: "ListItem",
          children: "If an elder, fire-breathing dragon engulfs you in flame and your grip is exhausted as a result, then your possessions could be destroyed and you could be on the brink of death without lifesaving medicine or magic."
        },
        {
          uuid: "13",
          nested: false,
          component: "ListItem",
          children: "If Gorgomund, the King of Evil and the first fire-breathing dragon engulfs you in flame and your grip is exhausted as a result, then you could be killed instantly."
        },
      ]
    },
    {
      uuid: "09",
      nested: false,
      component: "Dragon",
      children: "This component does not exist"
    },
  ]
}

const TEST_BOOK_1 = {
  uuid: "01",
  type: "BOOK",
  title: "Protean RPG // 1",
  content: [
    {
      uuid: "01",
      type: "PAGES",
      title: "Chapter 1",
      content: [
        TEST_PAGE_1,
        TEST_PAGE_2
      ]
    },
    {
      uuid: "02",
      type: "PAGES",
      title: "Chapter 2",
      content: [
        TEST_PAGE_3,
        TEST_PAGE_4
      ]
    },
  ]
}

const TEST_BOOK_2 = {
  uuid: "02",
  type: "BOOK",
  title: "Protean RPG // 2",
  content: [
    {
      uuid: "01",
      type: "SECTION",
      title: "Section 1: Actors",
      content: [
        {
          uuid: "01",
          type: "PAGES",
          title: "Chapter 1",
          content: [
            TEST_PAGE_1,
            TEST_PAGE_2
          ]
        },
        {
          uuid: "02",
          type: "PAGES",
          title: "Chapter 2",
          content: [
            TEST_PAGE_3,
            TEST_PAGE_4
          ]
        },
      ]
    },
    {
      uuid: "02",
      type: "SECTION",
      title: "Secton 2: Advocates",
      content: [
        {
          uuid: "01",
          type: "PAGES",
          title: "Chapter 1",
          content: [
            TEST_PAGE_1,
            TEST_PAGE_2
          ]
        },
        {
          uuid: "02",
          type: "PAGES",
          title: "Chapter 2",
          content: [
            TEST_PAGE_3,
            TEST_PAGE_4
          ]
        },
      ]
    },
  ]
}

const GlobalStoreContext = createContext();
const initialGlobalState = {
  files: [
    TEST_BOOK_1,
    TEST_BOOK_2
  ],
  activeFile: TEST_PAGE_1,
};

const reducer = (globalState, action) => {
  switch (action.type) {
    case "addFile": 
      return {
        ...globalState,
        files: globalState.files.push(action.payload.file)
      }
    case "setActiveFile":
      return {
        ...globalState,
        activeFile: action.payload.activeFile
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const GlobalStoreProvider = ({ children }) => {
  const [globalState, dispatch] = useReducer(reducer, initialGlobalState);

  return (
    <GlobalStoreContext.Provider value={{ globalState, dispatch }}>
      {children}
    </GlobalStoreContext.Provider>
  )
}

export const useGlobalStore = () => useContext(GlobalStoreContext);