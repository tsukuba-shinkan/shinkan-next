export const activityType: {
  [key: string]: {
    screenName: string;
    name: string;
  };
} = {
  "3": { screenName: "体育系", name: "sports" },
  "4": { screenName: "文化系", name: "culture" },
  "5": { screenName: "芸術系", name: "art" },
  "6": { screenName: "その他", name: "other" }, // js側はotherで決め打ちしてしまったので
};
export const organizationType: {
  [key: string]: {
    screenName: string;
    name: string;
  };
} = {
  "7": { screenName: "一般学生団体", name: "ippan" },
  "8": { screenName: "課外活動団体", name: "kagai" },
  "9": { screenName: "その他", name: "other" }, // js側はotherで決め打ちしてしまったので
};
