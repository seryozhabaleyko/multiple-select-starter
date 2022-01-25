export type SelectElement = HTMLSelectElement | null;

export interface SelectOptions {
    onChange: (selectedOptions: string[]) => void;
}
