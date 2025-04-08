
interface IProps {
    btnText?: string;
    btnStyle?: React.CSSProperties;
    btnIcons?: React.ReactNode;
    onClick?: () => void;
}
const ResizeButton = (props: IProps) => {
    const { btnIcons, btnStyle, btnText, onClick } = props;

    return (
        <button
            onClick={onClick}
            className="resize-button"
            style={btnStyle}
        >
            <span style={{ textTransform: "uppercase" }}>{btnText}</span>
            <>{btnIcons}</>
        </button>
    )
}

export default ResizeButton;