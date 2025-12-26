import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link'; // Import Link

const FeatureList = [
  {
    title: 'ROS 2 – The Robotic Nervous System',
    ImgSrc: 'https://images.stockcake.com/public/0/4/9/04959016-a286-46ed-bc62-e3d7d8b80b3e_large/neon-robot-sentinel-stockcake.jpg',
    description: (
      <>
        Dive into the foundational software framework for robotics, mastering communication and control.
      </>
    ),
    to: '/docs/module1/nodes-topics-services',
  },
  {
    title: 'Digital Twin – Simulation Mastery',
    ImgSrc: 'https://images.stockcake.com/public/e/e/f/eef39c5a-c808-4543-a807-cc574dcdb567_large/luminous-robot-guardian-stockcake.jpg',
    description: (
      <>
        Explore realistic simulation environments like Gazebo and Unity for virtual robot development.
      </>
    ),
    to: '/docs/module2/gazebo-physics',
  },
  {
    title: 'NVIDIA Isaac – The AI Brain',
    ImgSrc: 'https://images.stockcake.com/public/3/a/3/3a362f81-1819-4b1c-871d-075371af162d_large/future-moves-forward-stockcake.jpg',
    description: (
      <>
        Leverage NVIDIA Isaac Sim and ROS for accelerated perception and AI in robotics.
      </>
    ),
    to: '/docs/module3/isaac-sim',
  },
  {
    title: 'Vision-Language-Action – Autonomous Humanoid',
    ImgSrc: 'https://images.stockcake.com/public/4/8/b/48b2ed1c-7205-4017-be57-1913fb098451_large/neon-cyber-face-stockcake.jpg',
    description: (
      <>
        Integrate voice commands and LLM planning for intelligent humanoid autonomy.
      </>
    ),
    to: '/docs/module4/whisper',
  },
];

function Feature({ImgSrc, title, description, to}) { // Changed Svg to ImgSrc
  return (
    <div className={clsx('col col--3')}>
      <Link to={to} className={styles.featureCard}> {/* Wrap with Link and add custom class */}
        <div className="text--center">
          <img src={ImgSrc} className={styles.featureImg} alt={title} /> {/* Use img tag */}
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
