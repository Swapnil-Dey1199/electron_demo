
import Lottie from 'react-lottie';
import animationData from '../assets/animations/support';

function SupportAnimation(){
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div>
        <Lottie 
          options={defaultOptions}
          height={130}
          width={130}
        />
      </div>
    );
}
export default SupportAnimation; 