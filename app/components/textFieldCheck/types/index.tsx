type TextfieldCheckProps = {
    label: string;
    value: string
    onChange: (value: string) => void;
    checked: boolean | null;
    onCheckChange: (checked: boolean) => void;
    disabled?: boolean;
}