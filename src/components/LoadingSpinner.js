import { motion } from 'framer-motion';
import LogoImage from '../assets/images/logo'

function LoadingSpinner() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, loop: Infinity, ease: "linear" }}
    >
      {LogoImage}
    </motion.div>
  );
}
export default LoadingSpinner