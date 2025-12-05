import './LevelNumber.css';  



export default function LevelNumber({number }: { number: number }) {
    return (
        <div className="level-number">
            {number}
        </div>
    );
}