import React from 'react'
import './Header.scss';
import {motion} from 'framer-motion';
import {images} from '../../constants';

const scaleVariants={
  whileInView:{
    scale:[0,1],
    opacity:[0,1],
    transition:{
      duration:1,
      ease:"easeInOut"

    }
  }
}
const Header = () => {
  
  return (
    // <div>Header</div>
    <div  id='home' className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span> 👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">hello , Iam Wasiq</p>
              <h1 className="head-text">Wasiq</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text"> ForntEnd Developer In Topica</p>
            {/* <p className="p-text"></p> */}
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, ease:'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className= "overlay__circle"
        >
        </motion.img>
      </motion.div>
      <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className='app__header-circles'
      >

{
  [images.flutter, images.redux, images.sass].map((circle,index)=>(

  
    <div className="circle-cmp app__flex" key={`circle-${index}`}>
<img src={circle} alt="circle" />
    </div>
  ))
}
      </motion.div>
    </div>
  );
}

export default Header