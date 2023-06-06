import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "What is the EBIT growth of each of our competitors?",
        value: "What is the EBIT growth of each of our competitors?"
    },
    { text: "What are the most recent acquisitions of our competitors?", value: "What are the most recent acquisitions of our competitors?" },
    { text: "What are the financial targets of our competitors?", value: "What are the financial targets of our competitors?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
