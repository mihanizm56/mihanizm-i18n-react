type ParamsType = {
  dictionary: Record<string, any>;
  tKey: string;
};

export const findText = ({ dictionary, tKey }: ParamsType) =>
  dictionary && dictionary[tKey] ? dictionary[tKey].text : tKey;
