import { FC } from 'react';
import EnIcon from '../assets/svg/en.svg';
import RuIcon from '../assets/svg/ru.svg';
import { Language } from '../types';

import * as s from './LanguageSwitcherItem.css';

interface Props {
  isActive: boolean;
  language: Language;
  onClick: () => void;
  onLanguageChange: (language: Language) => void;
}

const iconByCode = {
  en: <EnIcon />,
  ru: <RuIcon />,
};

export const LanguageSwitcherItem: FC<Props> = ({
  children,
  isActive,
  language,
  onClick,
  onLanguageChange,
}) => {
  const handleClick = () => {
    onClick();
    onLanguageChange(language);
  };

  return (
    <button
      className={`${s.item}${isActive ? ` ${s.itemActive}` : ''}`}
      type="button"
      tabIndex={-1}
      onClick={handleClick}
    >
      <span className={s.icon}>{iconByCode[language]}</span>
      {children}
    </button>
  );
};
