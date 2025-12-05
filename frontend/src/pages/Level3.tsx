import React from 'react';
import FillInTheBlanks from '../components/Game/FillInTheBlanks';

const Level3: React.FC = () => {
    return (
        <div className="level3-page" style={{ minHeight: '100vh', backgroundColor: '#f0f0f0', padding: '20px' }}>
            <div style={{ marginTop: '80px', display: 'flex', justifyContent: 'center' }}>
                <FillInTheBlanks />
            </div>
        </div>
    );
};

export default Level3;
