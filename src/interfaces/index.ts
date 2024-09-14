import { ChangeEvent } from 'react';

export interface InputReturn<T> {
  value: T;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
