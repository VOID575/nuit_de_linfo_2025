import './Button.css';  



export default function Button({type, label, onClick }: {type : string, label: string; onClick: () => void }) {
    return (
        <button onClick={onClick} className={`button-${type}`}>
            {label}
        </button>
    );
}