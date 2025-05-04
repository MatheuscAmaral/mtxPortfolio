export interface IHeader {
  isOpen: boolean;
  section: string;
  setIsOpen: (open: boolean) => void;
  setSection: (section: string) => void;
}