/// <reference types="react" />
interface ITitle {
    hasBorder: boolean;
}
declare const Title: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & ITitle, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {}>;
export default Title;
