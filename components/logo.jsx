import { fontSans } from "@/config/fonts";
import clsx from "clsx";

export function Logo() {
    return (
        <svg
            width="96"
            height="96"
            viewBox="0 0 96 96"
            xmlns="http://www.w3.org/2000/svg"
            className={clsx("font-sans", fontSans.variable)}
        >
            <rect width="96" height="96" fill="#FBF7EE" />
            <text
                x="50%"
                y="50%"
                fill="#131722"
                fontSize="55"
                fontWeight="bold"
                textAnchor="middle"
                dominantBaseline="central"
                className={clsx("font-sans", fontSans.variable)}
            >
                B
            </text>
        </svg>
    );
}
