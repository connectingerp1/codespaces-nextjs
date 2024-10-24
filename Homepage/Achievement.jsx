import Image from 'next/image';
import './Achievements.css';

const Achievements = () => {
  return (
    <div className="achievements">
      <h1>OUR STUDENT'S ACHIEVEMENTS</h1>
      <div className="achievements-grid">
        <div className="achievement-item">
          <Image
            src="/Acheivements/ach1.avif"
            alt="Achievement 1"
            width={500} 
            height={500} 
            priority
          />
        </div>
        <div className="achievement-item2">
          <Image
            src="/Acheivements/ach2.avif"
            alt="Achievement 2"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="achievement-item">
          <Image
            src="/Acheivements/ach3.avif"
            alt="Achievement 3"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="achievement-item">
          <Image
            src="/Acheivements/ach4.avif"
            alt="Achievement 4"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="achievement-item5">
          <Image
            src="/Acheivements/ach5.avif"
            alt="Achievement 5"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="achievement-item">
          <Image
            src="/Acheivements/ach6.avif"
            alt="Achievement 6"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Achievements;
