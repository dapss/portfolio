"use client";

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BlurTextProps {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
  animationFrom?: any;
  animationTo?: any;
  easing?: any;
  onAnimationComplete?: () => void;
}

const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = 'easeOut',
  onAnimationComplete,
}: BlurTextProps) => {
  const words = text.split(' ');
  
  const defaultFrom =
    direction === 'top'
      ? { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,-50px,0)' }
      : { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,50px,0)' };

  const defaultTo = [
    {
      filter: 'blur(5px)',
      opacity: 0.5,
      transform: direction === 'top' ? 'translate3d(0,5px,0)' : 'translate3d(0,-5px,0)',
    },
    { filter: 'blur(0px)', opacity: 1, transform: 'translate3d(0,0,0)' },
  ];

  return (
    <p className={cn("flex flex-wrap", className)}>
      {words.map((word, wordIndex) => {
        const previousCharsCount = words
            .slice(0, wordIndex)
            .reduce((acc, w) => acc + w.length, 0);
        
        return (
            <span key={wordIndex} className="inline-block whitespace-nowrap mr-2 lg:mr-4 last:mr-0">
                {animateBy === 'words' ? (
                    <motion.span
                        initial={animationFrom || defaultFrom}
                        whileInView={animationTo || defaultTo}
                        viewport={{ once: true, margin: rootMargin }}
                        transition={{
                            duration: 0.8,
                            ease: easing,
                            delay: wordIndex * (delay / 1000),
                        }}
                        className="inline-block"
                        onAnimationComplete={
                            wordIndex === words.length - 1 ? onAnimationComplete : undefined
                        }
                    >
                        {word}
                    </motion.span>
                ) : (
                    word.split('').map((char, charIndex) => (
                        <motion.span
                            key={charIndex}
                            initial={animationFrom || defaultFrom}
                            whileInView={animationTo || defaultTo}
                            viewport={{ once: true, margin: rootMargin }}
                            transition={{
                                duration: 0.8,
                                ease: easing,
                                delay: (previousCharsCount + charIndex) * (delay / 1000),
                            }}
                            className="inline-block"
                            onAnimationComplete={
                                wordIndex === words.length - 1 && charIndex === word.length - 1 
                                ? onAnimationComplete 
                                : undefined
                            }
                        >
                            {char}
                        </motion.span>
                    ))
                )}
            </span>
        );
      })}
    </p>
  );
};

export default BlurText;