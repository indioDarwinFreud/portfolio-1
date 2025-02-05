"use client"

import { fadeIn } from '@/utils/motion-transitions'
import { motion } from 'framer-motion'


interface MotionTransitionProsp {
    children: React.ReactNode
    position: 'right' | 'bottom'
    className?: string
}

const MotionTransition = (props: MotionTransitionProsp) => {
    const { children, position, className } = props
    return (
        <motion.div
            variants={fadeIn(position)}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={className}
        >
            {children}
        </motion.div>

    );
}

export default MotionTransition