import React from 'react';
import {features} from '../constants';
import styles, {layout} from '../style';
import Button from './Button';

const FeatureCard = (icon, title, content, index) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1}`}>
    <div>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
  </div>
)



function Business() {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          You do the business, <br className="sm:block hidden"/> 
          we'll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, iusto. Sit enim ipsum quibusdam eos alias iste quo mollitia voluptatibus nobis, ea, quos veritatis possimus tenetur, aut porro? Voluptates non quod libero impedit maiores!</p>
      <Button styles="mt-10"/>
     
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature,index) => (

           <FeatureCard key={feature.id} 
            {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Business