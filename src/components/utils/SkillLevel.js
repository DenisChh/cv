import './SkillLevel.css'

const SkillLevel = ({ n }) => {
    switch (n) {
        case (1):
            return (
                <div className="Percentage">
                    <div className='Greenquartile' />
                    <div className='Whitequartile' />
                    <div className='Whitequartile' />
                    <div className='Whitequartile' />
                    <div className="Whitequartile" />
                </div>
            )
        case (2):
            return (
                <div className="Percentage">
                    <div className='Greenquartile' />
                    <div className='Greenquartile' />
                    <div className='Whitequartile' />
                    <div className='Whitequartile' />
                    <div className="Whitequartile" />
                </div>
            )
        case (3):
            return (
                <div className="Percentage">
                    <div className='Greenquartile' />
                    <div className='Greenquartile' />
                    <div className='Greenquartile' />
                    <div className='Whitequartile' />
                    <div className="Whitequartile" />
                </div>
            )
        case (4):
            return (
                <div className="Percentage">
                    <div className='Greenquartile' />
                    <div className='Greenquartile' />
                    <div className='Greenquartile' />
                    <div className='Greenquartile' />
                    <div className="Whitequartile" />
                </div>
            )
        case (5):
            return (
                <div className="Percentage">
                    <div className='Greenquartile' />
                    <div className='Greenquartile' />
                    <div className='Greenquartile' />
                    <div className='Greenquartile' />
                    <div className="Greenquartile" />
                </div>
            )
        default:
            return (
                <div className="Percentage">
                    <div className='Whitequartile' />
                    <div className='Whitequartile' />
                    <div className='Whitequartile' />
                    <div className='Whitequartile' />
                    <div className="Whitequartile" />
                </div>
            )
    }
}

export default SkillLevel;