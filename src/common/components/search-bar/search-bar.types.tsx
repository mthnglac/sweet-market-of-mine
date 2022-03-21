import { ChangeEvent } from 'react'

export type SearchBarProps = {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
