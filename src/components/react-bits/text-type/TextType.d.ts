import { CSSProperties, ReactNode } from 'react';

type VariableSpeed = {
  min: number;
  max: number;
};

type TextTypeProps = {
  text: string | string[];
  as?: keyof JSX.IntrinsicElements;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string;
  cursorClassName?: string;
  cursorBlinkDuration?: number;
  textColors?: string[];
  variableSpeed?: VariableSpeed;
  onSentenceComplete?: (sentence: string, index: number) => void;
  startOnVisible?: boolean;
  reverseMode?: boolean;
  renderText?: (text: string) => ReactNode;
  style?: CSSProperties;
  [key: string]: unknown;
};

declare const TextType: (props: TextTypeProps) => ReactNode;

export default TextType;
