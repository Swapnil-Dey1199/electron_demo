import Lottie from 'react-lottie';
import animationData from '../assets/animations/support';

function SupportAnimation(props){
    const defaultOptions = {
        loop: true,
        autoplay: false,
        hover: true,
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
          isStopped={!props.hover}
        />
      </div>
    );
}
export default SupportAnimation; 